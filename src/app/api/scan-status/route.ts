import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const globalStore = globalThis as unknown as {
  sseClients?: WritableStreamDefaultWriter<string>[];
};

if (!globalStore.sseClients) {
  globalStore.sseClients = [];
}

export async function GET(req: NextRequest) {
  const stream = new TransformStream<string>();
  const writer = stream.writable.getWriter();
  globalStore.sseClients!.push(writer);

  // send a comment to establish the stream immediately
  writer.write(":connected\n\n").catch(() => {});

  // remove and close the writer when the client disconnects
  req.signal.addEventListener("abort", () => {
    globalStore.sseClients = globalStore.sseClients?.filter(
      (w) => w !== writer
    );
    writer.close().catch(() => {});
  });

  return new Response(stream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store",
      Connection: "keep-alive",
    },
  });
}

export function broadcast(data: unknown) {
  const message = `data: ${JSON.stringify(data)}\n\n`;
  globalStore.sseClients = globalStore.sseClients?.filter((w) => {
    w.write(message).catch(() => w.close());
    return true;
  });
}
