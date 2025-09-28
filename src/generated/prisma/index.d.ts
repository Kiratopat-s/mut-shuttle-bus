
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model BusStop
 * 
 */
export type BusStop = $Result.DefaultSelection<Prisma.$BusStopPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model VehicleType
 * 
 */
export type VehicleType = $Result.DefaultSelection<Prisma.$VehicleTypePayload>
/**
 * Model RouteBusStop
 * 
 */
export type RouteBusStop = $Result.DefaultSelection<Prisma.$RouteBusStopPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model VehicleRouteSchedule
 * 
 */
export type VehicleRouteSchedule = $Result.DefaultSelection<Prisma.$VehicleRouteSchedulePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VehicleStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  MAINTENANCE: 'MAINTENANCE'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const BookingStatus: {
  BOOKED: 'BOOKED',
  CANCELLED: 'CANCELLED',
  MISSED: 'MISSED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const RouteStatus: {
  UPCOMING: 'UPCOMING',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type RouteStatus = (typeof RouteStatus)[keyof typeof RouteStatus]

}

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type RouteStatus = $Enums.RouteStatus

export const RouteStatus: typeof $Enums.RouteStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.busStop`: Exposes CRUD operations for the **BusStop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusStops
    * const busStops = await prisma.busStop.findMany()
    * ```
    */
  get busStop(): Prisma.BusStopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleType`: Exposes CRUD operations for the **VehicleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleTypes
    * const vehicleTypes = await prisma.vehicleType.findMany()
    * ```
    */
  get vehicleType(): Prisma.VehicleTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeBusStop`: Exposes CRUD operations for the **RouteBusStop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteBusStops
    * const routeBusStops = await prisma.routeBusStop.findMany()
    * ```
    */
  get routeBusStop(): Prisma.RouteBusStopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleRouteSchedule`: Exposes CRUD operations for the **VehicleRouteSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleRouteSchedules
    * const vehicleRouteSchedules = await prisma.vehicleRouteSchedule.findMany()
    * ```
    */
  get vehicleRouteSchedule(): Prisma.VehicleRouteScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    Permission: 'Permission',
    RolePermission: 'RolePermission',
    Department: 'Department',
    Employee: 'Employee',
    BusStop: 'BusStop',
    Route: 'Route',
    VehicleType: 'VehicleType',
    RouteBusStop: 'RouteBusStop',
    Vehicle: 'Vehicle',
    VehicleRouteSchedule: 'VehicleRouteSchedule',
    User: 'User',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "permission" | "rolePermission" | "department" | "employee" | "busStop" | "route" | "vehicleType" | "routeBusStop" | "vehicle" | "vehicleRouteSchedule" | "user" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      BusStop: {
        payload: Prisma.$BusStopPayload<ExtArgs>
        fields: Prisma.BusStopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusStopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusStopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload>
          }
          findFirst: {
            args: Prisma.BusStopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusStopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload>
          }
          findMany: {
            args: Prisma.BusStopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload>[]
          }
          create: {
            args: Prisma.BusStopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload>
          }
          createMany: {
            args: Prisma.BusStopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusStopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload>[]
          }
          delete: {
            args: Prisma.BusStopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload>
          }
          update: {
            args: Prisma.BusStopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload>
          }
          deleteMany: {
            args: Prisma.BusStopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusStopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusStopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload>[]
          }
          upsert: {
            args: Prisma.BusStopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusStopPayload>
          }
          aggregate: {
            args: Prisma.BusStopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusStop>
          }
          groupBy: {
            args: Prisma.BusStopGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusStopGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusStopCountArgs<ExtArgs>
            result: $Utils.Optional<BusStopCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      VehicleType: {
        payload: Prisma.$VehicleTypePayload<ExtArgs>
        fields: Prisma.VehicleTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findFirst: {
            args: Prisma.VehicleTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findMany: {
            args: Prisma.VehicleTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          create: {
            args: Prisma.VehicleTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          createMany: {
            args: Prisma.VehicleTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          delete: {
            args: Prisma.VehicleTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          update: {
            args: Prisma.VehicleTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          deleteMany: {
            args: Prisma.VehicleTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          upsert: {
            args: Prisma.VehicleTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          aggregate: {
            args: Prisma.VehicleTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleType>
          }
          groupBy: {
            args: Prisma.VehicleTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleTypeCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleTypeCountAggregateOutputType> | number
          }
        }
      }
      RouteBusStop: {
        payload: Prisma.$RouteBusStopPayload<ExtArgs>
        fields: Prisma.RouteBusStopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteBusStopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteBusStopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload>
          }
          findFirst: {
            args: Prisma.RouteBusStopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteBusStopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload>
          }
          findMany: {
            args: Prisma.RouteBusStopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload>[]
          }
          create: {
            args: Prisma.RouteBusStopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload>
          }
          createMany: {
            args: Prisma.RouteBusStopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteBusStopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload>[]
          }
          delete: {
            args: Prisma.RouteBusStopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload>
          }
          update: {
            args: Prisma.RouteBusStopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload>
          }
          deleteMany: {
            args: Prisma.RouteBusStopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteBusStopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteBusStopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload>[]
          }
          upsert: {
            args: Prisma.RouteBusStopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteBusStopPayload>
          }
          aggregate: {
            args: Prisma.RouteBusStopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteBusStop>
          }
          groupBy: {
            args: Prisma.RouteBusStopGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteBusStopGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteBusStopCountArgs<ExtArgs>
            result: $Utils.Optional<RouteBusStopCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      VehicleRouteSchedule: {
        payload: Prisma.$VehicleRouteSchedulePayload<ExtArgs>
        fields: Prisma.VehicleRouteScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleRouteScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleRouteScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload>
          }
          findFirst: {
            args: Prisma.VehicleRouteScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleRouteScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload>
          }
          findMany: {
            args: Prisma.VehicleRouteScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload>[]
          }
          create: {
            args: Prisma.VehicleRouteScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload>
          }
          createMany: {
            args: Prisma.VehicleRouteScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleRouteScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload>[]
          }
          delete: {
            args: Prisma.VehicleRouteScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload>
          }
          update: {
            args: Prisma.VehicleRouteScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload>
          }
          deleteMany: {
            args: Prisma.VehicleRouteScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleRouteScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleRouteScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload>[]
          }
          upsert: {
            args: Prisma.VehicleRouteScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRouteSchedulePayload>
          }
          aggregate: {
            args: Prisma.VehicleRouteScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleRouteSchedule>
          }
          groupBy: {
            args: Prisma.VehicleRouteScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleRouteScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleRouteScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleRouteScheduleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    permission?: PermissionOmit
    rolePermission?: RolePermissionOmit
    department?: DepartmentOmit
    employee?: EmployeeOmit
    busStop?: BusStopOmit
    route?: RouteOmit
    vehicleType?: VehicleTypeOmit
    routeBusStop?: RouteBusStopOmit
    vehicle?: VehicleOmit
    vehicleRouteSchedule?: VehicleRouteScheduleOmit
    user?: UserOmit
    booking?: BookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    RolePermission: number
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | RoleCountOutputTypeCountRolePermissionArgs
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    RolePermission: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | PermissionCountOutputTypeCountRolePermissionArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    employees: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | DepartmentCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    User: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | EmployeeCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type BusStopCountOutputType
   */

  export type BusStopCountOutputType = {
    BookingDestination: number
    BookingOrigin: number
    RouteBusStop: number
    vehicles: number
  }

  export type BusStopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BookingDestination?: boolean | BusStopCountOutputTypeCountBookingDestinationArgs
    BookingOrigin?: boolean | BusStopCountOutputTypeCountBookingOriginArgs
    RouteBusStop?: boolean | BusStopCountOutputTypeCountRouteBusStopArgs
    vehicles?: boolean | BusStopCountOutputTypeCountVehiclesArgs
  }

  // Custom InputTypes
  /**
   * BusStopCountOutputType without action
   */
  export type BusStopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStopCountOutputType
     */
    select?: BusStopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusStopCountOutputType without action
   */
  export type BusStopCountOutputTypeCountBookingDestinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * BusStopCountOutputType without action
   */
  export type BusStopCountOutputTypeCountBookingOriginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * BusStopCountOutputType without action
   */
  export type BusStopCountOutputTypeCountRouteBusStopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteBusStopWhereInput
  }

  /**
   * BusStopCountOutputType without action
   */
  export type BusStopCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    NextStop: number
    RouteBusStop: number
    VehicleRouteSchedule: number
    Vehicle: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NextStop?: boolean | RouteCountOutputTypeCountNextStopArgs
    RouteBusStop?: boolean | RouteCountOutputTypeCountRouteBusStopArgs
    VehicleRouteSchedule?: boolean | RouteCountOutputTypeCountVehicleRouteScheduleArgs
    Vehicle?: boolean | RouteCountOutputTypeCountVehicleArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountNextStopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteBusStopWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountRouteBusStopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteBusStopWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountVehicleRouteScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleRouteScheduleWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type VehicleTypeCountOutputType
   */

  export type VehicleTypeCountOutputType = {
    Vehicle: number
  }

  export type VehicleTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle?: boolean | VehicleTypeCountOutputTypeCountVehicleArgs
  }

  // Custom InputTypes
  /**
   * VehicleTypeCountOutputType without action
   */
  export type VehicleTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleTypeCountOutputType
     */
    select?: VehicleTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleTypeCountOutputType without action
   */
  export type VehicleTypeCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    VehicleRouteSchedule: number
    Route: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VehicleRouteSchedule?: boolean | VehicleCountOutputTypeCountVehicleRouteScheduleArgs
    Route?: boolean | VehicleCountOutputTypeCountRouteArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountVehicleRouteScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleRouteScheduleWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountRouteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }


  /**
   * Count Type VehicleRouteScheduleCountOutputType
   */

  export type VehicleRouteScheduleCountOutputType = {
    Booking: number
  }

  export type VehicleRouteScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Booking?: boolean | VehicleRouteScheduleCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * VehicleRouteScheduleCountOutputType without action
   */
  export type VehicleRouteScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteScheduleCountOutputType
     */
    select?: VehicleRouteScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleRouteScheduleCountOutputType without action
   */
  export type VehicleRouteScheduleCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Booking: number
    VehicleRouteSchedule: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Booking?: boolean | UserCountOutputTypeCountBookingArgs
    VehicleRouteSchedule?: boolean | UserCountOutputTypeCountVehicleRouteScheduleArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehicleRouteScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleRouteScheduleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    roleId: number | null
  }

  export type RoleSumAggregateOutputType = {
    roleId: number | null
  }

  export type RoleMinAggregateOutputType = {
    roleId: number | null
    roleName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    roleId: number | null
    roleName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    roleId: number
    roleName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    roleId?: true
  }

  export type RoleSumAggregateInputType = {
    roleId?: true
  }

  export type RoleMinAggregateInputType = {
    roleId?: true
    roleName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    roleId?: true
    roleName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    roleId?: true
    roleName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    roleId: number
    roleName: string
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RolePermission?: boolean | Role$RolePermissionArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    roleId?: boolean
    roleName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "roleName" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | Role$RolePermissionArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      RolePermission: Prisma.$RolePermissionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      roleName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { roleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RolePermission<T extends Role$RolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Role$RolePermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly roleId: FieldRef<"Role", 'Int'>
    readonly roleName: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.RolePermission
   */
  export type Role$RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    permissionId: number | null
  }

  export type PermissionSumAggregateOutputType = {
    permissionId: number | null
  }

  export type PermissionMinAggregateOutputType = {
    permissionId: number | null
    permissionName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    permissionId: number | null
    permissionName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    permissionId: number
    permissionName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    permissionId?: true
  }

  export type PermissionSumAggregateInputType = {
    permissionId?: true
  }

  export type PermissionMinAggregateInputType = {
    permissionId?: true
    permissionName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    permissionId?: true
    permissionName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    permissionId?: true
    permissionName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    permissionId: number
    permissionName: string
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionId?: boolean
    permissionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RolePermission?: boolean | Permission$RolePermissionArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionId?: boolean
    permissionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionId?: boolean
    permissionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    permissionId?: boolean
    permissionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"permissionId" | "permissionName" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | Permission$RolePermissionArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      RolePermission: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      permissionId: number
      permissionName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `permissionId`
     * const permissionWithPermissionIdOnly = await prisma.permission.findMany({ select: { permissionId: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `permissionId`
     * const permissionWithPermissionIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { permissionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `permissionId`
     * const permissionWithPermissionIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { permissionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RolePermission<T extends Permission$RolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Permission$RolePermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly permissionId: FieldRef<"Permission", 'Int'>
    readonly permissionName: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.RolePermission
   */
  export type Permission$RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionAvgAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionSumAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionMinAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolePermissionCountAggregateOutputType = {
    roleId: number
    permissionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolePermissionAvgAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionSumAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionMinAggregateInputType = {
    roleId?: true
    permissionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    roleId?: true
    permissionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolePermissionCountAggregateInputType = {
    roleId?: true
    permissionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _avg?: RolePermissionAvgAggregateInputType
    _sum?: RolePermissionSumAggregateInputType
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    roleId: number
    permissionId: number
    createdAt: Date
    updatedAt: Date
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectScalar = {
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "permissionId" | "createdAt" | "updatedAt", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      permission: Prisma.$PermissionPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      permissionId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissions and only return the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions and returns the data updated in the database.
     * @param {RolePermissionUpdateManyAndReturnArgs} args - Arguments to update many RolePermissions.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolePermissions and only return the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.updateManyAndReturn({
     *   select: { roleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, RolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly roleId: FieldRef<"RolePermission", 'Int'>
    readonly permissionId: FieldRef<"RolePermission", 'Int'>
    readonly createdAt: FieldRef<"RolePermission", 'DateTime'>
    readonly updatedAt: FieldRef<"RolePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission createManyAndReturn
   */
  export type RolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission updateManyAndReturn
   */
  export type RolePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    departmentId: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    departmentId: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    departmentId: number | null
    departmentName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    departmentId: number | null
    departmentName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    departmentId: number
    departmentName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    departmentId?: true
  }

  export type DepartmentSumAggregateInputType = {
    departmentId?: true
  }

  export type DepartmentMinAggregateInputType = {
    departmentId?: true
    departmentName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    departmentId?: true
    departmentName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    departmentId?: true
    departmentName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    departmentId: number
    departmentName: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    departmentName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    departmentName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    departmentName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    departmentId?: boolean
    departmentName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"departmentId" | "departmentName" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      departmentId: number
      departmentName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.findMany({ select: { departmentId: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.createManyAndReturn({
     *   select: { departmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { departmentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Department$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Department$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly departmentId: FieldRef<"Department", 'Int'>
    readonly departmentName: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.employees
   */
  export type Department$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    employeeId: number | null
    departmentId: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    employeeId: number | null
    departmentId: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    employeeId: number | null
    departmentId: number | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    employeeId: number | null
    departmentId: number | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    employeeId: number
    departmentId: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    employeeId?: true
    departmentId?: true
  }

  export type EmployeeSumAggregateInputType = {
    employeeId?: true
    departmentId?: true
  }

  export type EmployeeMinAggregateInputType = {
    employeeId?: true
    departmentId?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    employeeId?: true
    departmentId?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    employeeId?: true
    departmentId?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    employeeId: number
    departmentId: number | null
    position: string
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    departmentId?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Employee$departmentArgs<ExtArgs>
    User?: boolean | Employee$UserArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    departmentId?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    departmentId?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    employeeId?: boolean
    departmentId?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employeeId" | "departmentId" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Employee$departmentArgs<ExtArgs>
    User?: boolean | Employee$UserArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      employeeId: number
      departmentId: number | null
      position: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.findMany({ select: { employeeId: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { employeeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { employeeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends Employee$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Employee$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends Employee$UserArgs<ExtArgs> = {}>(args?: Subset<T, Employee$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly employeeId: FieldRef<"Employee", 'Int'>
    readonly departmentId: FieldRef<"Employee", 'Int'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.department
   */
  export type Employee$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Employee.User
   */
  export type Employee$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model BusStop
   */

  export type AggregateBusStop = {
    _count: BusStopCountAggregateOutputType | null
    _avg: BusStopAvgAggregateOutputType | null
    _sum: BusStopSumAggregateOutputType | null
    _min: BusStopMinAggregateOutputType | null
    _max: BusStopMaxAggregateOutputType | null
  }

  export type BusStopAvgAggregateOutputType = {
    busStopId: number | null
    lat: number | null
    lng: number | null
  }

  export type BusStopSumAggregateOutputType = {
    busStopId: number | null
    lat: number | null
    lng: number | null
  }

  export type BusStopMinAggregateOutputType = {
    busStopId: number | null
    stopName: string | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusStopMaxAggregateOutputType = {
    busStopId: number | null
    stopName: string | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusStopCountAggregateOutputType = {
    busStopId: number
    stopName: number
    lat: number
    lng: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusStopAvgAggregateInputType = {
    busStopId?: true
    lat?: true
    lng?: true
  }

  export type BusStopSumAggregateInputType = {
    busStopId?: true
    lat?: true
    lng?: true
  }

  export type BusStopMinAggregateInputType = {
    busStopId?: true
    stopName?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusStopMaxAggregateInputType = {
    busStopId?: true
    stopName?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusStopCountAggregateInputType = {
    busStopId?: true
    stopName?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusStopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusStop to aggregate.
     */
    where?: BusStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusStops to fetch.
     */
    orderBy?: BusStopOrderByWithRelationInput | BusStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusStops
    **/
    _count?: true | BusStopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusStopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusStopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusStopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusStopMaxAggregateInputType
  }

  export type GetBusStopAggregateType<T extends BusStopAggregateArgs> = {
        [P in keyof T & keyof AggregateBusStop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusStop[P]>
      : GetScalarType<T[P], AggregateBusStop[P]>
  }




  export type BusStopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusStopWhereInput
    orderBy?: BusStopOrderByWithAggregationInput | BusStopOrderByWithAggregationInput[]
    by: BusStopScalarFieldEnum[] | BusStopScalarFieldEnum
    having?: BusStopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusStopCountAggregateInputType | true
    _avg?: BusStopAvgAggregateInputType
    _sum?: BusStopSumAggregateInputType
    _min?: BusStopMinAggregateInputType
    _max?: BusStopMaxAggregateInputType
  }

  export type BusStopGroupByOutputType = {
    busStopId: number
    stopName: string
    lat: number
    lng: number
    createdAt: Date
    updatedAt: Date
    _count: BusStopCountAggregateOutputType | null
    _avg: BusStopAvgAggregateOutputType | null
    _sum: BusStopSumAggregateOutputType | null
    _min: BusStopMinAggregateOutputType | null
    _max: BusStopMaxAggregateOutputType | null
  }

  type GetBusStopGroupByPayload<T extends BusStopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusStopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusStopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusStopGroupByOutputType[P]>
            : GetScalarType<T[P], BusStopGroupByOutputType[P]>
        }
      >
    >


  export type BusStopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    busStopId?: boolean
    stopName?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    BookingDestination?: boolean | BusStop$BookingDestinationArgs<ExtArgs>
    BookingOrigin?: boolean | BusStop$BookingOriginArgs<ExtArgs>
    RouteBusStop?: boolean | BusStop$RouteBusStopArgs<ExtArgs>
    vehicles?: boolean | BusStop$vehiclesArgs<ExtArgs>
    _count?: boolean | BusStopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busStop"]>

  export type BusStopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    busStopId?: boolean
    stopName?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["busStop"]>

  export type BusStopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    busStopId?: boolean
    stopName?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["busStop"]>

  export type BusStopSelectScalar = {
    busStopId?: boolean
    stopName?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusStopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"busStopId" | "stopName" | "lat" | "lng" | "createdAt" | "updatedAt", ExtArgs["result"]["busStop"]>
  export type BusStopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BookingDestination?: boolean | BusStop$BookingDestinationArgs<ExtArgs>
    BookingOrigin?: boolean | BusStop$BookingOriginArgs<ExtArgs>
    RouteBusStop?: boolean | BusStop$RouteBusStopArgs<ExtArgs>
    vehicles?: boolean | BusStop$vehiclesArgs<ExtArgs>
    _count?: boolean | BusStopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusStopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusStopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusStopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusStop"
    objects: {
      BookingDestination: Prisma.$BookingPayload<ExtArgs>[]
      BookingOrigin: Prisma.$BookingPayload<ExtArgs>[]
      RouteBusStop: Prisma.$RouteBusStopPayload<ExtArgs>[]
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      busStopId: number
      stopName: string
      lat: number
      lng: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["busStop"]>
    composites: {}
  }

  type BusStopGetPayload<S extends boolean | null | undefined | BusStopDefaultArgs> = $Result.GetResult<Prisma.$BusStopPayload, S>

  type BusStopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusStopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusStopCountAggregateInputType | true
    }

  export interface BusStopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusStop'], meta: { name: 'BusStop' } }
    /**
     * Find zero or one BusStop that matches the filter.
     * @param {BusStopFindUniqueArgs} args - Arguments to find a BusStop
     * @example
     * // Get one BusStop
     * const busStop = await prisma.busStop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusStopFindUniqueArgs>(args: SelectSubset<T, BusStopFindUniqueArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusStop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusStopFindUniqueOrThrowArgs} args - Arguments to find a BusStop
     * @example
     * // Get one BusStop
     * const busStop = await prisma.busStop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusStopFindUniqueOrThrowArgs>(args: SelectSubset<T, BusStopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusStop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusStopFindFirstArgs} args - Arguments to find a BusStop
     * @example
     * // Get one BusStop
     * const busStop = await prisma.busStop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusStopFindFirstArgs>(args?: SelectSubset<T, BusStopFindFirstArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusStop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusStopFindFirstOrThrowArgs} args - Arguments to find a BusStop
     * @example
     * // Get one BusStop
     * const busStop = await prisma.busStop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusStopFindFirstOrThrowArgs>(args?: SelectSubset<T, BusStopFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusStops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusStopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusStops
     * const busStops = await prisma.busStop.findMany()
     * 
     * // Get first 10 BusStops
     * const busStops = await prisma.busStop.findMany({ take: 10 })
     * 
     * // Only select the `busStopId`
     * const busStopWithBusStopIdOnly = await prisma.busStop.findMany({ select: { busStopId: true } })
     * 
     */
    findMany<T extends BusStopFindManyArgs>(args?: SelectSubset<T, BusStopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusStop.
     * @param {BusStopCreateArgs} args - Arguments to create a BusStop.
     * @example
     * // Create one BusStop
     * const BusStop = await prisma.busStop.create({
     *   data: {
     *     // ... data to create a BusStop
     *   }
     * })
     * 
     */
    create<T extends BusStopCreateArgs>(args: SelectSubset<T, BusStopCreateArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusStops.
     * @param {BusStopCreateManyArgs} args - Arguments to create many BusStops.
     * @example
     * // Create many BusStops
     * const busStop = await prisma.busStop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusStopCreateManyArgs>(args?: SelectSubset<T, BusStopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusStops and returns the data saved in the database.
     * @param {BusStopCreateManyAndReturnArgs} args - Arguments to create many BusStops.
     * @example
     * // Create many BusStops
     * const busStop = await prisma.busStop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusStops and only return the `busStopId`
     * const busStopWithBusStopIdOnly = await prisma.busStop.createManyAndReturn({
     *   select: { busStopId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusStopCreateManyAndReturnArgs>(args?: SelectSubset<T, BusStopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusStop.
     * @param {BusStopDeleteArgs} args - Arguments to delete one BusStop.
     * @example
     * // Delete one BusStop
     * const BusStop = await prisma.busStop.delete({
     *   where: {
     *     // ... filter to delete one BusStop
     *   }
     * })
     * 
     */
    delete<T extends BusStopDeleteArgs>(args: SelectSubset<T, BusStopDeleteArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusStop.
     * @param {BusStopUpdateArgs} args - Arguments to update one BusStop.
     * @example
     * // Update one BusStop
     * const busStop = await prisma.busStop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusStopUpdateArgs>(args: SelectSubset<T, BusStopUpdateArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusStops.
     * @param {BusStopDeleteManyArgs} args - Arguments to filter BusStops to delete.
     * @example
     * // Delete a few BusStops
     * const { count } = await prisma.busStop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusStopDeleteManyArgs>(args?: SelectSubset<T, BusStopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusStopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusStops
     * const busStop = await prisma.busStop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusStopUpdateManyArgs>(args: SelectSubset<T, BusStopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusStops and returns the data updated in the database.
     * @param {BusStopUpdateManyAndReturnArgs} args - Arguments to update many BusStops.
     * @example
     * // Update many BusStops
     * const busStop = await prisma.busStop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusStops and only return the `busStopId`
     * const busStopWithBusStopIdOnly = await prisma.busStop.updateManyAndReturn({
     *   select: { busStopId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusStopUpdateManyAndReturnArgs>(args: SelectSubset<T, BusStopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusStop.
     * @param {BusStopUpsertArgs} args - Arguments to update or create a BusStop.
     * @example
     * // Update or create a BusStop
     * const busStop = await prisma.busStop.upsert({
     *   create: {
     *     // ... data to create a BusStop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusStop we want to update
     *   }
     * })
     */
    upsert<T extends BusStopUpsertArgs>(args: SelectSubset<T, BusStopUpsertArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusStopCountArgs} args - Arguments to filter BusStops to count.
     * @example
     * // Count the number of BusStops
     * const count = await prisma.busStop.count({
     *   where: {
     *     // ... the filter for the BusStops we want to count
     *   }
     * })
    **/
    count<T extends BusStopCountArgs>(
      args?: Subset<T, BusStopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusStopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusStopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusStopAggregateArgs>(args: Subset<T, BusStopAggregateArgs>): Prisma.PrismaPromise<GetBusStopAggregateType<T>>

    /**
     * Group by BusStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusStopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusStopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusStopGroupByArgs['orderBy'] }
        : { orderBy?: BusStopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusStopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusStop model
   */
  readonly fields: BusStopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusStop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusStopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BookingDestination<T extends BusStop$BookingDestinationArgs<ExtArgs> = {}>(args?: Subset<T, BusStop$BookingDestinationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BookingOrigin<T extends BusStop$BookingOriginArgs<ExtArgs> = {}>(args?: Subset<T, BusStop$BookingOriginArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RouteBusStop<T extends BusStop$RouteBusStopArgs<ExtArgs> = {}>(args?: Subset<T, BusStop$RouteBusStopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicles<T extends BusStop$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, BusStop$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusStop model
   */
  interface BusStopFieldRefs {
    readonly busStopId: FieldRef<"BusStop", 'Int'>
    readonly stopName: FieldRef<"BusStop", 'String'>
    readonly lat: FieldRef<"BusStop", 'Float'>
    readonly lng: FieldRef<"BusStop", 'Float'>
    readonly createdAt: FieldRef<"BusStop", 'DateTime'>
    readonly updatedAt: FieldRef<"BusStop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusStop findUnique
   */
  export type BusStopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    /**
     * Filter, which BusStop to fetch.
     */
    where: BusStopWhereUniqueInput
  }

  /**
   * BusStop findUniqueOrThrow
   */
  export type BusStopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    /**
     * Filter, which BusStop to fetch.
     */
    where: BusStopWhereUniqueInput
  }

  /**
   * BusStop findFirst
   */
  export type BusStopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    /**
     * Filter, which BusStop to fetch.
     */
    where?: BusStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusStops to fetch.
     */
    orderBy?: BusStopOrderByWithRelationInput | BusStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusStops.
     */
    cursor?: BusStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusStops.
     */
    distinct?: BusStopScalarFieldEnum | BusStopScalarFieldEnum[]
  }

  /**
   * BusStop findFirstOrThrow
   */
  export type BusStopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    /**
     * Filter, which BusStop to fetch.
     */
    where?: BusStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusStops to fetch.
     */
    orderBy?: BusStopOrderByWithRelationInput | BusStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusStops.
     */
    cursor?: BusStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusStops.
     */
    distinct?: BusStopScalarFieldEnum | BusStopScalarFieldEnum[]
  }

  /**
   * BusStop findMany
   */
  export type BusStopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    /**
     * Filter, which BusStops to fetch.
     */
    where?: BusStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusStops to fetch.
     */
    orderBy?: BusStopOrderByWithRelationInput | BusStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusStops.
     */
    cursor?: BusStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusStops.
     */
    skip?: number
    distinct?: BusStopScalarFieldEnum | BusStopScalarFieldEnum[]
  }

  /**
   * BusStop create
   */
  export type BusStopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    /**
     * The data needed to create a BusStop.
     */
    data: XOR<BusStopCreateInput, BusStopUncheckedCreateInput>
  }

  /**
   * BusStop createMany
   */
  export type BusStopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusStops.
     */
    data: BusStopCreateManyInput | BusStopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusStop createManyAndReturn
   */
  export type BusStopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * The data used to create many BusStops.
     */
    data: BusStopCreateManyInput | BusStopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusStop update
   */
  export type BusStopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    /**
     * The data needed to update a BusStop.
     */
    data: XOR<BusStopUpdateInput, BusStopUncheckedUpdateInput>
    /**
     * Choose, which BusStop to update.
     */
    where: BusStopWhereUniqueInput
  }

  /**
   * BusStop updateMany
   */
  export type BusStopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusStops.
     */
    data: XOR<BusStopUpdateManyMutationInput, BusStopUncheckedUpdateManyInput>
    /**
     * Filter which BusStops to update
     */
    where?: BusStopWhereInput
    /**
     * Limit how many BusStops to update.
     */
    limit?: number
  }

  /**
   * BusStop updateManyAndReturn
   */
  export type BusStopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * The data used to update BusStops.
     */
    data: XOR<BusStopUpdateManyMutationInput, BusStopUncheckedUpdateManyInput>
    /**
     * Filter which BusStops to update
     */
    where?: BusStopWhereInput
    /**
     * Limit how many BusStops to update.
     */
    limit?: number
  }

  /**
   * BusStop upsert
   */
  export type BusStopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    /**
     * The filter to search for the BusStop to update in case it exists.
     */
    where: BusStopWhereUniqueInput
    /**
     * In case the BusStop found by the `where` argument doesn't exist, create a new BusStop with this data.
     */
    create: XOR<BusStopCreateInput, BusStopUncheckedCreateInput>
    /**
     * In case the BusStop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusStopUpdateInput, BusStopUncheckedUpdateInput>
  }

  /**
   * BusStop delete
   */
  export type BusStopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    /**
     * Filter which BusStop to delete.
     */
    where: BusStopWhereUniqueInput
  }

  /**
   * BusStop deleteMany
   */
  export type BusStopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusStops to delete
     */
    where?: BusStopWhereInput
    /**
     * Limit how many BusStops to delete.
     */
    limit?: number
  }

  /**
   * BusStop.BookingDestination
   */
  export type BusStop$BookingDestinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * BusStop.BookingOrigin
   */
  export type BusStop$BookingOriginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * BusStop.RouteBusStop
   */
  export type BusStop$RouteBusStopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    where?: RouteBusStopWhereInput
    orderBy?: RouteBusStopOrderByWithRelationInput | RouteBusStopOrderByWithRelationInput[]
    cursor?: RouteBusStopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteBusStopScalarFieldEnum | RouteBusStopScalarFieldEnum[]
  }

  /**
   * BusStop.vehicles
   */
  export type BusStop$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * BusStop without action
   */
  export type BusStopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    routeId: number | null
    overallTravelTime: number | null
  }

  export type RouteSumAggregateOutputType = {
    routeId: number | null
    overallTravelTime: number | null
  }

  export type RouteMinAggregateOutputType = {
    routeId: number | null
    routeName: string | null
    overallTravelTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    routeId: number | null
    routeName: string | null
    overallTravelTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    routeId: number
    routeName: number
    overallTravelTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    routeId?: true
    overallTravelTime?: true
  }

  export type RouteSumAggregateInputType = {
    routeId?: true
    overallTravelTime?: true
  }

  export type RouteMinAggregateInputType = {
    routeId?: true
    routeName?: true
    overallTravelTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteMaxAggregateInputType = {
    routeId?: true
    routeName?: true
    overallTravelTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteCountAggregateInputType = {
    routeId?: true
    routeName?: true
    overallTravelTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    routeId: number
    routeName: string
    overallTravelTime: number
    createdAt: Date
    updatedAt: Date
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    routeId?: boolean
    routeName?: boolean
    overallTravelTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    NextStop?: boolean | Route$NextStopArgs<ExtArgs>
    RouteBusStop?: boolean | Route$RouteBusStopArgs<ExtArgs>
    VehicleRouteSchedule?: boolean | Route$VehicleRouteScheduleArgs<ExtArgs>
    Vehicle?: boolean | Route$VehicleArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    routeId?: boolean
    routeName?: boolean
    overallTravelTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    routeId?: boolean
    routeName?: boolean
    overallTravelTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    routeId?: boolean
    routeName?: boolean
    overallTravelTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"routeId" | "routeName" | "overallTravelTime" | "createdAt" | "updatedAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NextStop?: boolean | Route$NextStopArgs<ExtArgs>
    RouteBusStop?: boolean | Route$RouteBusStopArgs<ExtArgs>
    VehicleRouteSchedule?: boolean | Route$VehicleRouteScheduleArgs<ExtArgs>
    Vehicle?: boolean | Route$VehicleArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      NextStop: Prisma.$RouteBusStopPayload<ExtArgs>[]
      RouteBusStop: Prisma.$RouteBusStopPayload<ExtArgs>[]
      VehicleRouteSchedule: Prisma.$VehicleRouteSchedulePayload<ExtArgs>[]
      Vehicle: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      routeId: number
      routeName: string
      overallTravelTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `routeId`
     * const routeWithRouteIdOnly = await prisma.route.findMany({ select: { routeId: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `routeId`
     * const routeWithRouteIdOnly = await prisma.route.createManyAndReturn({
     *   select: { routeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `routeId`
     * const routeWithRouteIdOnly = await prisma.route.updateManyAndReturn({
     *   select: { routeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NextStop<T extends Route$NextStopArgs<ExtArgs> = {}>(args?: Subset<T, Route$NextStopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RouteBusStop<T extends Route$RouteBusStopArgs<ExtArgs> = {}>(args?: Subset<T, Route$RouteBusStopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    VehicleRouteSchedule<T extends Route$VehicleRouteScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Route$VehicleRouteScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Vehicle<T extends Route$VehicleArgs<ExtArgs> = {}>(args?: Subset<T, Route$VehicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly routeId: FieldRef<"Route", 'Int'>
    readonly routeName: FieldRef<"Route", 'String'>
    readonly overallTravelTime: FieldRef<"Route", 'Int'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
    readonly updatedAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.NextStop
   */
  export type Route$NextStopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    where?: RouteBusStopWhereInput
    orderBy?: RouteBusStopOrderByWithRelationInput | RouteBusStopOrderByWithRelationInput[]
    cursor?: RouteBusStopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteBusStopScalarFieldEnum | RouteBusStopScalarFieldEnum[]
  }

  /**
   * Route.RouteBusStop
   */
  export type Route$RouteBusStopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    where?: RouteBusStopWhereInput
    orderBy?: RouteBusStopOrderByWithRelationInput | RouteBusStopOrderByWithRelationInput[]
    cursor?: RouteBusStopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteBusStopScalarFieldEnum | RouteBusStopScalarFieldEnum[]
  }

  /**
   * Route.VehicleRouteSchedule
   */
  export type Route$VehicleRouteScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    where?: VehicleRouteScheduleWhereInput
    orderBy?: VehicleRouteScheduleOrderByWithRelationInput | VehicleRouteScheduleOrderByWithRelationInput[]
    cursor?: VehicleRouteScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleRouteScheduleScalarFieldEnum | VehicleRouteScheduleScalarFieldEnum[]
  }

  /**
   * Route.Vehicle
   */
  export type Route$VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model VehicleType
   */

  export type AggregateVehicleType = {
    _count: VehicleTypeCountAggregateOutputType | null
    _avg: VehicleTypeAvgAggregateOutputType | null
    _sum: VehicleTypeSumAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  export type VehicleTypeAvgAggregateOutputType = {
    VehicleTypeId: number | null
    defaultCapacity: number | null
  }

  export type VehicleTypeSumAggregateOutputType = {
    VehicleTypeId: number | null
    defaultCapacity: number | null
  }

  export type VehicleTypeMinAggregateOutputType = {
    VehicleTypeId: number | null
    VehicleTypeName: string | null
    defaultCapacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleTypeMaxAggregateOutputType = {
    VehicleTypeId: number | null
    VehicleTypeName: string | null
    defaultCapacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleTypeCountAggregateOutputType = {
    VehicleTypeId: number
    VehicleTypeName: number
    defaultCapacity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleTypeAvgAggregateInputType = {
    VehicleTypeId?: true
    defaultCapacity?: true
  }

  export type VehicleTypeSumAggregateInputType = {
    VehicleTypeId?: true
    defaultCapacity?: true
  }

  export type VehicleTypeMinAggregateInputType = {
    VehicleTypeId?: true
    VehicleTypeName?: true
    defaultCapacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleTypeMaxAggregateInputType = {
    VehicleTypeId?: true
    VehicleTypeName?: true
    defaultCapacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleTypeCountAggregateInputType = {
    VehicleTypeId?: true
    VehicleTypeName?: true
    defaultCapacity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleType to aggregate.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleTypes
    **/
    _count?: true | VehicleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type GetVehicleTypeAggregateType<T extends VehicleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleType[P]>
      : GetScalarType<T[P], AggregateVehicleType[P]>
  }




  export type VehicleTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleTypeWhereInput
    orderBy?: VehicleTypeOrderByWithAggregationInput | VehicleTypeOrderByWithAggregationInput[]
    by: VehicleTypeScalarFieldEnum[] | VehicleTypeScalarFieldEnum
    having?: VehicleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleTypeCountAggregateInputType | true
    _avg?: VehicleTypeAvgAggregateInputType
    _sum?: VehicleTypeSumAggregateInputType
    _min?: VehicleTypeMinAggregateInputType
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type VehicleTypeGroupByOutputType = {
    VehicleTypeId: number
    VehicleTypeName: string
    defaultCapacity: number
    createdAt: Date
    updatedAt: Date
    _count: VehicleTypeCountAggregateOutputType | null
    _avg: VehicleTypeAvgAggregateOutputType | null
    _sum: VehicleTypeSumAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  type GetVehicleTypeGroupByPayload<T extends VehicleTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
        }
      >
    >


  export type VehicleTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VehicleTypeId?: boolean
    VehicleTypeName?: boolean
    defaultCapacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Vehicle?: boolean | VehicleType$VehicleArgs<ExtArgs>
    _count?: boolean | VehicleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VehicleTypeId?: boolean
    VehicleTypeName?: boolean
    defaultCapacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VehicleTypeId?: boolean
    VehicleTypeName?: boolean
    defaultCapacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectScalar = {
    VehicleTypeId?: boolean
    VehicleTypeName?: boolean
    defaultCapacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"VehicleTypeId" | "VehicleTypeName" | "defaultCapacity" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicleType"]>
  export type VehicleTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle?: boolean | VehicleType$VehicleArgs<ExtArgs>
    _count?: boolean | VehicleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehicleTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleType"
    objects: {
      Vehicle: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      VehicleTypeId: number
      VehicleTypeName: string
      defaultCapacity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicleType"]>
    composites: {}
  }

  type VehicleTypeGetPayload<S extends boolean | null | undefined | VehicleTypeDefaultArgs> = $Result.GetResult<Prisma.$VehicleTypePayload, S>

  type VehicleTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleTypeCountAggregateInputType | true
    }

  export interface VehicleTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleType'], meta: { name: 'VehicleType' } }
    /**
     * Find zero or one VehicleType that matches the filter.
     * @param {VehicleTypeFindUniqueArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleTypeFindUniqueArgs>(args: SelectSubset<T, VehicleTypeFindUniqueArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleTypeFindUniqueOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleTypeFindFirstArgs>(args?: SelectSubset<T, VehicleTypeFindFirstArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany()
     * 
     * // Get first 10 VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany({ take: 10 })
     * 
     * // Only select the `VehicleTypeId`
     * const vehicleTypeWithVehicleTypeIdOnly = await prisma.vehicleType.findMany({ select: { VehicleTypeId: true } })
     * 
     */
    findMany<T extends VehicleTypeFindManyArgs>(args?: SelectSubset<T, VehicleTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleType.
     * @param {VehicleTypeCreateArgs} args - Arguments to create a VehicleType.
     * @example
     * // Create one VehicleType
     * const VehicleType = await prisma.vehicleType.create({
     *   data: {
     *     // ... data to create a VehicleType
     *   }
     * })
     * 
     */
    create<T extends VehicleTypeCreateArgs>(args: SelectSubset<T, VehicleTypeCreateArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleTypes.
     * @param {VehicleTypeCreateManyArgs} args - Arguments to create many VehicleTypes.
     * @example
     * // Create many VehicleTypes
     * const vehicleType = await prisma.vehicleType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleTypeCreateManyArgs>(args?: SelectSubset<T, VehicleTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleTypes and returns the data saved in the database.
     * @param {VehicleTypeCreateManyAndReturnArgs} args - Arguments to create many VehicleTypes.
     * @example
     * // Create many VehicleTypes
     * const vehicleType = await prisma.vehicleType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleTypes and only return the `VehicleTypeId`
     * const vehicleTypeWithVehicleTypeIdOnly = await prisma.vehicleType.createManyAndReturn({
     *   select: { VehicleTypeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleType.
     * @param {VehicleTypeDeleteArgs} args - Arguments to delete one VehicleType.
     * @example
     * // Delete one VehicleType
     * const VehicleType = await prisma.vehicleType.delete({
     *   where: {
     *     // ... filter to delete one VehicleType
     *   }
     * })
     * 
     */
    delete<T extends VehicleTypeDeleteArgs>(args: SelectSubset<T, VehicleTypeDeleteArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleType.
     * @param {VehicleTypeUpdateArgs} args - Arguments to update one VehicleType.
     * @example
     * // Update one VehicleType
     * const vehicleType = await prisma.vehicleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleTypeUpdateArgs>(args: SelectSubset<T, VehicleTypeUpdateArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleTypes.
     * @param {VehicleTypeDeleteManyArgs} args - Arguments to filter VehicleTypes to delete.
     * @example
     * // Delete a few VehicleTypes
     * const { count } = await prisma.vehicleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleTypeDeleteManyArgs>(args?: SelectSubset<T, VehicleTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleTypes
     * const vehicleType = await prisma.vehicleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleTypeUpdateManyArgs>(args: SelectSubset<T, VehicleTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleTypes and returns the data updated in the database.
     * @param {VehicleTypeUpdateManyAndReturnArgs} args - Arguments to update many VehicleTypes.
     * @example
     * // Update many VehicleTypes
     * const vehicleType = await prisma.vehicleType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleTypes and only return the `VehicleTypeId`
     * const vehicleTypeWithVehicleTypeIdOnly = await prisma.vehicleType.updateManyAndReturn({
     *   select: { VehicleTypeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleType.
     * @param {VehicleTypeUpsertArgs} args - Arguments to update or create a VehicleType.
     * @example
     * // Update or create a VehicleType
     * const vehicleType = await prisma.vehicleType.upsert({
     *   create: {
     *     // ... data to create a VehicleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleType we want to update
     *   }
     * })
     */
    upsert<T extends VehicleTypeUpsertArgs>(args: SelectSubset<T, VehicleTypeUpsertArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeCountArgs} args - Arguments to filter VehicleTypes to count.
     * @example
     * // Count the number of VehicleTypes
     * const count = await prisma.vehicleType.count({
     *   where: {
     *     // ... the filter for the VehicleTypes we want to count
     *   }
     * })
    **/
    count<T extends VehicleTypeCountArgs>(
      args?: Subset<T, VehicleTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleTypeAggregateArgs>(args: Subset<T, VehicleTypeAggregateArgs>): Prisma.PrismaPromise<GetVehicleTypeAggregateType<T>>

    /**
     * Group by VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleTypeGroupByArgs['orderBy'] }
        : { orderBy?: VehicleTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleType model
   */
  readonly fields: VehicleTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Vehicle<T extends VehicleType$VehicleArgs<ExtArgs> = {}>(args?: Subset<T, VehicleType$VehicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleType model
   */
  interface VehicleTypeFieldRefs {
    readonly VehicleTypeId: FieldRef<"VehicleType", 'Int'>
    readonly VehicleTypeName: FieldRef<"VehicleType", 'String'>
    readonly defaultCapacity: FieldRef<"VehicleType", 'Int'>
    readonly createdAt: FieldRef<"VehicleType", 'DateTime'>
    readonly updatedAt: FieldRef<"VehicleType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleType findUnique
   */
  export type VehicleTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType findUniqueOrThrow
   */
  export type VehicleTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType findFirst
   */
  export type VehicleTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType findFirstOrThrow
   */
  export type VehicleTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType findMany
   */
  export type VehicleTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleTypes to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType create
   */
  export type VehicleTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleType.
     */
    data: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
  }

  /**
   * VehicleType createMany
   */
  export type VehicleTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleTypes.
     */
    data: VehicleTypeCreateManyInput | VehicleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleType createManyAndReturn
   */
  export type VehicleTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleTypes.
     */
    data: VehicleTypeCreateManyInput | VehicleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleType update
   */
  export type VehicleTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleType.
     */
    data: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
    /**
     * Choose, which VehicleType to update.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType updateMany
   */
  export type VehicleTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleTypes.
     */
    data: XOR<VehicleTypeUpdateManyMutationInput, VehicleTypeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleTypes to update
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to update.
     */
    limit?: number
  }

  /**
   * VehicleType updateManyAndReturn
   */
  export type VehicleTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * The data used to update VehicleTypes.
     */
    data: XOR<VehicleTypeUpdateManyMutationInput, VehicleTypeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleTypes to update
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to update.
     */
    limit?: number
  }

  /**
   * VehicleType upsert
   */
  export type VehicleTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleType to update in case it exists.
     */
    where: VehicleTypeWhereUniqueInput
    /**
     * In case the VehicleType found by the `where` argument doesn't exist, create a new VehicleType with this data.
     */
    create: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
    /**
     * In case the VehicleType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
  }

  /**
   * VehicleType delete
   */
  export type VehicleTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter which VehicleType to delete.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType deleteMany
   */
  export type VehicleTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleTypes to delete
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to delete.
     */
    limit?: number
  }

  /**
   * VehicleType.Vehicle
   */
  export type VehicleType$VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * VehicleType without action
   */
  export type VehicleTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
  }


  /**
   * Model RouteBusStop
   */

  export type AggregateRouteBusStop = {
    _count: RouteBusStopCountAggregateOutputType | null
    _avg: RouteBusStopAvgAggregateOutputType | null
    _sum: RouteBusStopSumAggregateOutputType | null
    _min: RouteBusStopMinAggregateOutputType | null
    _max: RouteBusStopMaxAggregateOutputType | null
  }

  export type RouteBusStopAvgAggregateOutputType = {
    routeId: number | null
    busStopId: number | null
    nextStopId: number | null
    stopOrder: number | null
    travelTime: number | null
  }

  export type RouteBusStopSumAggregateOutputType = {
    routeId: number | null
    busStopId: number | null
    nextStopId: number | null
    stopOrder: number | null
    travelTime: number | null
  }

  export type RouteBusStopMinAggregateOutputType = {
    routeId: number | null
    busStopId: number | null
    nextStopId: number | null
    stopOrder: number | null
    travelTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteBusStopMaxAggregateOutputType = {
    routeId: number | null
    busStopId: number | null
    nextStopId: number | null
    stopOrder: number | null
    travelTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteBusStopCountAggregateOutputType = {
    routeId: number
    busStopId: number
    nextStopId: number
    stopOrder: number
    travelTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RouteBusStopAvgAggregateInputType = {
    routeId?: true
    busStopId?: true
    nextStopId?: true
    stopOrder?: true
    travelTime?: true
  }

  export type RouteBusStopSumAggregateInputType = {
    routeId?: true
    busStopId?: true
    nextStopId?: true
    stopOrder?: true
    travelTime?: true
  }

  export type RouteBusStopMinAggregateInputType = {
    routeId?: true
    busStopId?: true
    nextStopId?: true
    stopOrder?: true
    travelTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteBusStopMaxAggregateInputType = {
    routeId?: true
    busStopId?: true
    nextStopId?: true
    stopOrder?: true
    travelTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteBusStopCountAggregateInputType = {
    routeId?: true
    busStopId?: true
    nextStopId?: true
    stopOrder?: true
    travelTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RouteBusStopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteBusStop to aggregate.
     */
    where?: RouteBusStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteBusStops to fetch.
     */
    orderBy?: RouteBusStopOrderByWithRelationInput | RouteBusStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteBusStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteBusStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteBusStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteBusStops
    **/
    _count?: true | RouteBusStopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteBusStopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteBusStopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteBusStopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteBusStopMaxAggregateInputType
  }

  export type GetRouteBusStopAggregateType<T extends RouteBusStopAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteBusStop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteBusStop[P]>
      : GetScalarType<T[P], AggregateRouteBusStop[P]>
  }




  export type RouteBusStopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteBusStopWhereInput
    orderBy?: RouteBusStopOrderByWithAggregationInput | RouteBusStopOrderByWithAggregationInput[]
    by: RouteBusStopScalarFieldEnum[] | RouteBusStopScalarFieldEnum
    having?: RouteBusStopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteBusStopCountAggregateInputType | true
    _avg?: RouteBusStopAvgAggregateInputType
    _sum?: RouteBusStopSumAggregateInputType
    _min?: RouteBusStopMinAggregateInputType
    _max?: RouteBusStopMaxAggregateInputType
  }

  export type RouteBusStopGroupByOutputType = {
    routeId: number
    busStopId: number
    nextStopId: number
    stopOrder: number
    travelTime: number
    createdAt: Date
    updatedAt: Date
    _count: RouteBusStopCountAggregateOutputType | null
    _avg: RouteBusStopAvgAggregateOutputType | null
    _sum: RouteBusStopSumAggregateOutputType | null
    _min: RouteBusStopMinAggregateOutputType | null
    _max: RouteBusStopMaxAggregateOutputType | null
  }

  type GetRouteBusStopGroupByPayload<T extends RouteBusStopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteBusStopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteBusStopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteBusStopGroupByOutputType[P]>
            : GetScalarType<T[P], RouteBusStopGroupByOutputType[P]>
        }
      >
    >


  export type RouteBusStopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    routeId?: boolean
    busStopId?: boolean
    nextStopId?: boolean
    stopOrder?: boolean
    travelTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    busStop?: boolean | BusStopDefaultArgs<ExtArgs>
    nextStop?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeBusStop"]>

  export type RouteBusStopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    routeId?: boolean
    busStopId?: boolean
    nextStopId?: boolean
    stopOrder?: boolean
    travelTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    busStop?: boolean | BusStopDefaultArgs<ExtArgs>
    nextStop?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeBusStop"]>

  export type RouteBusStopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    routeId?: boolean
    busStopId?: boolean
    nextStopId?: boolean
    stopOrder?: boolean
    travelTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    busStop?: boolean | BusStopDefaultArgs<ExtArgs>
    nextStop?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeBusStop"]>

  export type RouteBusStopSelectScalar = {
    routeId?: boolean
    busStopId?: boolean
    nextStopId?: boolean
    stopOrder?: boolean
    travelTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RouteBusStopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"routeId" | "busStopId" | "nextStopId" | "stopOrder" | "travelTime" | "createdAt" | "updatedAt", ExtArgs["result"]["routeBusStop"]>
  export type RouteBusStopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    busStop?: boolean | BusStopDefaultArgs<ExtArgs>
    nextStop?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type RouteBusStopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    busStop?: boolean | BusStopDefaultArgs<ExtArgs>
    nextStop?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type RouteBusStopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    busStop?: boolean | BusStopDefaultArgs<ExtArgs>
    nextStop?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $RouteBusStopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteBusStop"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      busStop: Prisma.$BusStopPayload<ExtArgs>
      nextStop: Prisma.$RoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      routeId: number
      busStopId: number
      nextStopId: number
      stopOrder: number
      travelTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routeBusStop"]>
    composites: {}
  }

  type RouteBusStopGetPayload<S extends boolean | null | undefined | RouteBusStopDefaultArgs> = $Result.GetResult<Prisma.$RouteBusStopPayload, S>

  type RouteBusStopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteBusStopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteBusStopCountAggregateInputType | true
    }

  export interface RouteBusStopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteBusStop'], meta: { name: 'RouteBusStop' } }
    /**
     * Find zero or one RouteBusStop that matches the filter.
     * @param {RouteBusStopFindUniqueArgs} args - Arguments to find a RouteBusStop
     * @example
     * // Get one RouteBusStop
     * const routeBusStop = await prisma.routeBusStop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteBusStopFindUniqueArgs>(args: SelectSubset<T, RouteBusStopFindUniqueArgs<ExtArgs>>): Prisma__RouteBusStopClient<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteBusStop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteBusStopFindUniqueOrThrowArgs} args - Arguments to find a RouteBusStop
     * @example
     * // Get one RouteBusStop
     * const routeBusStop = await prisma.routeBusStop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteBusStopFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteBusStopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteBusStopClient<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteBusStop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteBusStopFindFirstArgs} args - Arguments to find a RouteBusStop
     * @example
     * // Get one RouteBusStop
     * const routeBusStop = await prisma.routeBusStop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteBusStopFindFirstArgs>(args?: SelectSubset<T, RouteBusStopFindFirstArgs<ExtArgs>>): Prisma__RouteBusStopClient<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteBusStop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteBusStopFindFirstOrThrowArgs} args - Arguments to find a RouteBusStop
     * @example
     * // Get one RouteBusStop
     * const routeBusStop = await prisma.routeBusStop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteBusStopFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteBusStopFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteBusStopClient<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteBusStops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteBusStopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteBusStops
     * const routeBusStops = await prisma.routeBusStop.findMany()
     * 
     * // Get first 10 RouteBusStops
     * const routeBusStops = await prisma.routeBusStop.findMany({ take: 10 })
     * 
     * // Only select the `routeId`
     * const routeBusStopWithRouteIdOnly = await prisma.routeBusStop.findMany({ select: { routeId: true } })
     * 
     */
    findMany<T extends RouteBusStopFindManyArgs>(args?: SelectSubset<T, RouteBusStopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteBusStop.
     * @param {RouteBusStopCreateArgs} args - Arguments to create a RouteBusStop.
     * @example
     * // Create one RouteBusStop
     * const RouteBusStop = await prisma.routeBusStop.create({
     *   data: {
     *     // ... data to create a RouteBusStop
     *   }
     * })
     * 
     */
    create<T extends RouteBusStopCreateArgs>(args: SelectSubset<T, RouteBusStopCreateArgs<ExtArgs>>): Prisma__RouteBusStopClient<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteBusStops.
     * @param {RouteBusStopCreateManyArgs} args - Arguments to create many RouteBusStops.
     * @example
     * // Create many RouteBusStops
     * const routeBusStop = await prisma.routeBusStop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteBusStopCreateManyArgs>(args?: SelectSubset<T, RouteBusStopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteBusStops and returns the data saved in the database.
     * @param {RouteBusStopCreateManyAndReturnArgs} args - Arguments to create many RouteBusStops.
     * @example
     * // Create many RouteBusStops
     * const routeBusStop = await prisma.routeBusStop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteBusStops and only return the `routeId`
     * const routeBusStopWithRouteIdOnly = await prisma.routeBusStop.createManyAndReturn({
     *   select: { routeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteBusStopCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteBusStopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RouteBusStop.
     * @param {RouteBusStopDeleteArgs} args - Arguments to delete one RouteBusStop.
     * @example
     * // Delete one RouteBusStop
     * const RouteBusStop = await prisma.routeBusStop.delete({
     *   where: {
     *     // ... filter to delete one RouteBusStop
     *   }
     * })
     * 
     */
    delete<T extends RouteBusStopDeleteArgs>(args: SelectSubset<T, RouteBusStopDeleteArgs<ExtArgs>>): Prisma__RouteBusStopClient<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteBusStop.
     * @param {RouteBusStopUpdateArgs} args - Arguments to update one RouteBusStop.
     * @example
     * // Update one RouteBusStop
     * const routeBusStop = await prisma.routeBusStop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteBusStopUpdateArgs>(args: SelectSubset<T, RouteBusStopUpdateArgs<ExtArgs>>): Prisma__RouteBusStopClient<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteBusStops.
     * @param {RouteBusStopDeleteManyArgs} args - Arguments to filter RouteBusStops to delete.
     * @example
     * // Delete a few RouteBusStops
     * const { count } = await prisma.routeBusStop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteBusStopDeleteManyArgs>(args?: SelectSubset<T, RouteBusStopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteBusStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteBusStopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteBusStops
     * const routeBusStop = await prisma.routeBusStop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteBusStopUpdateManyArgs>(args: SelectSubset<T, RouteBusStopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteBusStops and returns the data updated in the database.
     * @param {RouteBusStopUpdateManyAndReturnArgs} args - Arguments to update many RouteBusStops.
     * @example
     * // Update many RouteBusStops
     * const routeBusStop = await prisma.routeBusStop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RouteBusStops and only return the `routeId`
     * const routeBusStopWithRouteIdOnly = await prisma.routeBusStop.updateManyAndReturn({
     *   select: { routeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteBusStopUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteBusStopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RouteBusStop.
     * @param {RouteBusStopUpsertArgs} args - Arguments to update or create a RouteBusStop.
     * @example
     * // Update or create a RouteBusStop
     * const routeBusStop = await prisma.routeBusStop.upsert({
     *   create: {
     *     // ... data to create a RouteBusStop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteBusStop we want to update
     *   }
     * })
     */
    upsert<T extends RouteBusStopUpsertArgs>(args: SelectSubset<T, RouteBusStopUpsertArgs<ExtArgs>>): Prisma__RouteBusStopClient<$Result.GetResult<Prisma.$RouteBusStopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteBusStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteBusStopCountArgs} args - Arguments to filter RouteBusStops to count.
     * @example
     * // Count the number of RouteBusStops
     * const count = await prisma.routeBusStop.count({
     *   where: {
     *     // ... the filter for the RouteBusStops we want to count
     *   }
     * })
    **/
    count<T extends RouteBusStopCountArgs>(
      args?: Subset<T, RouteBusStopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteBusStopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteBusStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteBusStopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteBusStopAggregateArgs>(args: Subset<T, RouteBusStopAggregateArgs>): Prisma.PrismaPromise<GetRouteBusStopAggregateType<T>>

    /**
     * Group by RouteBusStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteBusStopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteBusStopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteBusStopGroupByArgs['orderBy'] }
        : { orderBy?: RouteBusStopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteBusStopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteBusStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteBusStop model
   */
  readonly fields: RouteBusStopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteBusStop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteBusStopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    busStop<T extends BusStopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusStopDefaultArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nextStop<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RouteBusStop model
   */
  interface RouteBusStopFieldRefs {
    readonly routeId: FieldRef<"RouteBusStop", 'Int'>
    readonly busStopId: FieldRef<"RouteBusStop", 'Int'>
    readonly nextStopId: FieldRef<"RouteBusStop", 'Int'>
    readonly stopOrder: FieldRef<"RouteBusStop", 'Int'>
    readonly travelTime: FieldRef<"RouteBusStop", 'Int'>
    readonly createdAt: FieldRef<"RouteBusStop", 'DateTime'>
    readonly updatedAt: FieldRef<"RouteBusStop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RouteBusStop findUnique
   */
  export type RouteBusStopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteBusStop to fetch.
     */
    where: RouteBusStopWhereUniqueInput
  }

  /**
   * RouteBusStop findUniqueOrThrow
   */
  export type RouteBusStopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteBusStop to fetch.
     */
    where: RouteBusStopWhereUniqueInput
  }

  /**
   * RouteBusStop findFirst
   */
  export type RouteBusStopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteBusStop to fetch.
     */
    where?: RouteBusStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteBusStops to fetch.
     */
    orderBy?: RouteBusStopOrderByWithRelationInput | RouteBusStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteBusStops.
     */
    cursor?: RouteBusStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteBusStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteBusStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteBusStops.
     */
    distinct?: RouteBusStopScalarFieldEnum | RouteBusStopScalarFieldEnum[]
  }

  /**
   * RouteBusStop findFirstOrThrow
   */
  export type RouteBusStopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteBusStop to fetch.
     */
    where?: RouteBusStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteBusStops to fetch.
     */
    orderBy?: RouteBusStopOrderByWithRelationInput | RouteBusStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteBusStops.
     */
    cursor?: RouteBusStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteBusStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteBusStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteBusStops.
     */
    distinct?: RouteBusStopScalarFieldEnum | RouteBusStopScalarFieldEnum[]
  }

  /**
   * RouteBusStop findMany
   */
  export type RouteBusStopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteBusStops to fetch.
     */
    where?: RouteBusStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteBusStops to fetch.
     */
    orderBy?: RouteBusStopOrderByWithRelationInput | RouteBusStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteBusStops.
     */
    cursor?: RouteBusStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteBusStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteBusStops.
     */
    skip?: number
    distinct?: RouteBusStopScalarFieldEnum | RouteBusStopScalarFieldEnum[]
  }

  /**
   * RouteBusStop create
   */
  export type RouteBusStopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteBusStop.
     */
    data: XOR<RouteBusStopCreateInput, RouteBusStopUncheckedCreateInput>
  }

  /**
   * RouteBusStop createMany
   */
  export type RouteBusStopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteBusStops.
     */
    data: RouteBusStopCreateManyInput | RouteBusStopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteBusStop createManyAndReturn
   */
  export type RouteBusStopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * The data used to create many RouteBusStops.
     */
    data: RouteBusStopCreateManyInput | RouteBusStopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteBusStop update
   */
  export type RouteBusStopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteBusStop.
     */
    data: XOR<RouteBusStopUpdateInput, RouteBusStopUncheckedUpdateInput>
    /**
     * Choose, which RouteBusStop to update.
     */
    where: RouteBusStopWhereUniqueInput
  }

  /**
   * RouteBusStop updateMany
   */
  export type RouteBusStopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteBusStops.
     */
    data: XOR<RouteBusStopUpdateManyMutationInput, RouteBusStopUncheckedUpdateManyInput>
    /**
     * Filter which RouteBusStops to update
     */
    where?: RouteBusStopWhereInput
    /**
     * Limit how many RouteBusStops to update.
     */
    limit?: number
  }

  /**
   * RouteBusStop updateManyAndReturn
   */
  export type RouteBusStopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * The data used to update RouteBusStops.
     */
    data: XOR<RouteBusStopUpdateManyMutationInput, RouteBusStopUncheckedUpdateManyInput>
    /**
     * Filter which RouteBusStops to update
     */
    where?: RouteBusStopWhereInput
    /**
     * Limit how many RouteBusStops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteBusStop upsert
   */
  export type RouteBusStopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteBusStop to update in case it exists.
     */
    where: RouteBusStopWhereUniqueInput
    /**
     * In case the RouteBusStop found by the `where` argument doesn't exist, create a new RouteBusStop with this data.
     */
    create: XOR<RouteBusStopCreateInput, RouteBusStopUncheckedCreateInput>
    /**
     * In case the RouteBusStop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteBusStopUpdateInput, RouteBusStopUncheckedUpdateInput>
  }

  /**
   * RouteBusStop delete
   */
  export type RouteBusStopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
    /**
     * Filter which RouteBusStop to delete.
     */
    where: RouteBusStopWhereUniqueInput
  }

  /**
   * RouteBusStop deleteMany
   */
  export type RouteBusStopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteBusStops to delete
     */
    where?: RouteBusStopWhereInput
    /**
     * Limit how many RouteBusStops to delete.
     */
    limit?: number
  }

  /**
   * RouteBusStop without action
   */
  export type RouteBusStopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteBusStop
     */
    select?: RouteBusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteBusStop
     */
    omit?: RouteBusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteBusStopInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    vehicleId: number | null
    vehicleTypeId: number | null
    currentStopId: number | null
    capacity: number | null
  }

  export type VehicleSumAggregateOutputType = {
    vehicleId: number | null
    vehicleTypeId: number | null
    currentStopId: number | null
    capacity: number | null
  }

  export type VehicleMinAggregateOutputType = {
    vehicleId: number | null
    vehicleTypeId: number | null
    currentStopId: number | null
    licensePlate: string | null
    capacity: number | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    vehicleId: number | null
    vehicleTypeId: number | null
    currentStopId: number | null
    licensePlate: string | null
    capacity: number | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    vehicleId: number
    vehicleTypeId: number
    currentStopId: number
    licensePlate: number
    capacity: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    vehicleId?: true
    vehicleTypeId?: true
    currentStopId?: true
    capacity?: true
  }

  export type VehicleSumAggregateInputType = {
    vehicleId?: true
    vehicleTypeId?: true
    currentStopId?: true
    capacity?: true
  }

  export type VehicleMinAggregateInputType = {
    vehicleId?: true
    vehicleTypeId?: true
    currentStopId?: true
    licensePlate?: true
    capacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    vehicleId?: true
    vehicleTypeId?: true
    currentStopId?: true
    licensePlate?: true
    capacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    vehicleId?: true
    vehicleTypeId?: true
    currentStopId?: true
    licensePlate?: true
    capacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    vehicleId: number
    vehicleTypeId: number
    currentStopId: number | null
    licensePlate: string
    capacity: number
    status: $Enums.VehicleStatus
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleId?: boolean
    vehicleTypeId?: boolean
    currentStopId?: boolean
    licensePlate?: boolean
    capacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    busStop?: boolean | Vehicle$busStopArgs<ExtArgs>
    vehicleType?: boolean | VehicleTypeDefaultArgs<ExtArgs>
    VehicleRouteSchedule?: boolean | Vehicle$VehicleRouteScheduleArgs<ExtArgs>
    Route?: boolean | Vehicle$RouteArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleId?: boolean
    vehicleTypeId?: boolean
    currentStopId?: boolean
    licensePlate?: boolean
    capacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    busStop?: boolean | Vehicle$busStopArgs<ExtArgs>
    vehicleType?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleId?: boolean
    vehicleTypeId?: boolean
    currentStopId?: boolean
    licensePlate?: boolean
    capacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    busStop?: boolean | Vehicle$busStopArgs<ExtArgs>
    vehicleType?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    vehicleId?: boolean
    vehicleTypeId?: boolean
    currentStopId?: boolean
    licensePlate?: boolean
    capacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vehicleId" | "vehicleTypeId" | "currentStopId" | "licensePlate" | "capacity" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busStop?: boolean | Vehicle$busStopArgs<ExtArgs>
    vehicleType?: boolean | VehicleTypeDefaultArgs<ExtArgs>
    VehicleRouteSchedule?: boolean | Vehicle$VehicleRouteScheduleArgs<ExtArgs>
    Route?: boolean | Vehicle$RouteArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busStop?: boolean | Vehicle$busStopArgs<ExtArgs>
    vehicleType?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busStop?: boolean | Vehicle$busStopArgs<ExtArgs>
    vehicleType?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      busStop: Prisma.$BusStopPayload<ExtArgs> | null
      vehicleType: Prisma.$VehicleTypePayload<ExtArgs>
      VehicleRouteSchedule: Prisma.$VehicleRouteSchedulePayload<ExtArgs>[]
      Route: Prisma.$RoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vehicleId: number
      vehicleTypeId: number
      currentStopId: number | null
      licensePlate: string
      capacity: number
      status: $Enums.VehicleStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `vehicleId`
     * const vehicleWithVehicleIdOnly = await prisma.vehicle.findMany({ select: { vehicleId: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `vehicleId`
     * const vehicleWithVehicleIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { vehicleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `vehicleId`
     * const vehicleWithVehicleIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { vehicleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    busStop<T extends Vehicle$busStopArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$busStopArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicleType<T extends VehicleTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleTypeDefaultArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    VehicleRouteSchedule<T extends Vehicle$VehicleRouteScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$VehicleRouteScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Route<T extends Vehicle$RouteArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$RouteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly vehicleId: FieldRef<"Vehicle", 'Int'>
    readonly vehicleTypeId: FieldRef<"Vehicle", 'Int'>
    readonly currentStopId: FieldRef<"Vehicle", 'Int'>
    readonly licensePlate: FieldRef<"Vehicle", 'String'>
    readonly capacity: FieldRef<"Vehicle", 'Int'>
    readonly status: FieldRef<"Vehicle", 'VehicleStatus'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.busStop
   */
  export type Vehicle$busStopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusStop
     */
    select?: BusStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusStop
     */
    omit?: BusStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusStopInclude<ExtArgs> | null
    where?: BusStopWhereInput
  }

  /**
   * Vehicle.VehicleRouteSchedule
   */
  export type Vehicle$VehicleRouteScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    where?: VehicleRouteScheduleWhereInput
    orderBy?: VehicleRouteScheduleOrderByWithRelationInput | VehicleRouteScheduleOrderByWithRelationInput[]
    cursor?: VehicleRouteScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleRouteScheduleScalarFieldEnum | VehicleRouteScheduleScalarFieldEnum[]
  }

  /**
   * Vehicle.Route
   */
  export type Vehicle$RouteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model VehicleRouteSchedule
   */

  export type AggregateVehicleRouteSchedule = {
    _count: VehicleRouteScheduleCountAggregateOutputType | null
    _avg: VehicleRouteScheduleAvgAggregateOutputType | null
    _sum: VehicleRouteScheduleSumAggregateOutputType | null
    _min: VehicleRouteScheduleMinAggregateOutputType | null
    _max: VehicleRouteScheduleMaxAggregateOutputType | null
  }

  export type VehicleRouteScheduleAvgAggregateOutputType = {
    vehicleRouteScheduleId: number | null
    vehicleId: number | null
    routeId: number | null
    driverId: number | null
  }

  export type VehicleRouteScheduleSumAggregateOutputType = {
    vehicleRouteScheduleId: number | null
    vehicleId: number | null
    routeId: number | null
    driverId: number | null
  }

  export type VehicleRouteScheduleMinAggregateOutputType = {
    vehicleRouteScheduleId: number | null
    vehicleId: number | null
    routeId: number | null
    driverId: number | null
    scheduleTime: Date | null
    status: $Enums.RouteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleRouteScheduleMaxAggregateOutputType = {
    vehicleRouteScheduleId: number | null
    vehicleId: number | null
    routeId: number | null
    driverId: number | null
    scheduleTime: Date | null
    status: $Enums.RouteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleRouteScheduleCountAggregateOutputType = {
    vehicleRouteScheduleId: number
    vehicleId: number
    routeId: number
    driverId: number
    scheduleTime: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleRouteScheduleAvgAggregateInputType = {
    vehicleRouteScheduleId?: true
    vehicleId?: true
    routeId?: true
    driverId?: true
  }

  export type VehicleRouteScheduleSumAggregateInputType = {
    vehicleRouteScheduleId?: true
    vehicleId?: true
    routeId?: true
    driverId?: true
  }

  export type VehicleRouteScheduleMinAggregateInputType = {
    vehicleRouteScheduleId?: true
    vehicleId?: true
    routeId?: true
    driverId?: true
    scheduleTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleRouteScheduleMaxAggregateInputType = {
    vehicleRouteScheduleId?: true
    vehicleId?: true
    routeId?: true
    driverId?: true
    scheduleTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleRouteScheduleCountAggregateInputType = {
    vehicleRouteScheduleId?: true
    vehicleId?: true
    routeId?: true
    driverId?: true
    scheduleTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleRouteScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleRouteSchedule to aggregate.
     */
    where?: VehicleRouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleRouteSchedules to fetch.
     */
    orderBy?: VehicleRouteScheduleOrderByWithRelationInput | VehicleRouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleRouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleRouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleRouteSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleRouteSchedules
    **/
    _count?: true | VehicleRouteScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleRouteScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleRouteScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleRouteScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleRouteScheduleMaxAggregateInputType
  }

  export type GetVehicleRouteScheduleAggregateType<T extends VehicleRouteScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleRouteSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleRouteSchedule[P]>
      : GetScalarType<T[P], AggregateVehicleRouteSchedule[P]>
  }




  export type VehicleRouteScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleRouteScheduleWhereInput
    orderBy?: VehicleRouteScheduleOrderByWithAggregationInput | VehicleRouteScheduleOrderByWithAggregationInput[]
    by: VehicleRouteScheduleScalarFieldEnum[] | VehicleRouteScheduleScalarFieldEnum
    having?: VehicleRouteScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleRouteScheduleCountAggregateInputType | true
    _avg?: VehicleRouteScheduleAvgAggregateInputType
    _sum?: VehicleRouteScheduleSumAggregateInputType
    _min?: VehicleRouteScheduleMinAggregateInputType
    _max?: VehicleRouteScheduleMaxAggregateInputType
  }

  export type VehicleRouteScheduleGroupByOutputType = {
    vehicleRouteScheduleId: number
    vehicleId: number
    routeId: number
    driverId: number
    scheduleTime: Date
    status: $Enums.RouteStatus
    createdAt: Date
    updatedAt: Date
    _count: VehicleRouteScheduleCountAggregateOutputType | null
    _avg: VehicleRouteScheduleAvgAggregateOutputType | null
    _sum: VehicleRouteScheduleSumAggregateOutputType | null
    _min: VehicleRouteScheduleMinAggregateOutputType | null
    _max: VehicleRouteScheduleMaxAggregateOutputType | null
  }

  type GetVehicleRouteScheduleGroupByPayload<T extends VehicleRouteScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleRouteScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleRouteScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleRouteScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleRouteScheduleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleRouteScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleRouteScheduleId?: boolean
    vehicleId?: boolean
    routeId?: boolean
    driverId?: boolean
    scheduleTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    Booking?: boolean | VehicleRouteSchedule$BookingArgs<ExtArgs>
    _count?: boolean | VehicleRouteScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleRouteSchedule"]>

  export type VehicleRouteScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleRouteScheduleId?: boolean
    vehicleId?: boolean
    routeId?: boolean
    driverId?: boolean
    scheduleTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleRouteSchedule"]>

  export type VehicleRouteScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleRouteScheduleId?: boolean
    vehicleId?: boolean
    routeId?: boolean
    driverId?: boolean
    scheduleTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleRouteSchedule"]>

  export type VehicleRouteScheduleSelectScalar = {
    vehicleRouteScheduleId?: boolean
    vehicleId?: boolean
    routeId?: boolean
    driverId?: boolean
    scheduleTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleRouteScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vehicleRouteScheduleId" | "vehicleId" | "routeId" | "driverId" | "scheduleTime" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicleRouteSchedule"]>
  export type VehicleRouteScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    Booking?: boolean | VehicleRouteSchedule$BookingArgs<ExtArgs>
    _count?: boolean | VehicleRouteScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleRouteScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type VehicleRouteScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $VehicleRouteSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleRouteSchedule"
    objects: {
      driver: Prisma.$UserPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      Booking: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vehicleRouteScheduleId: number
      vehicleId: number
      routeId: number
      driverId: number
      scheduleTime: Date
      status: $Enums.RouteStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicleRouteSchedule"]>
    composites: {}
  }

  type VehicleRouteScheduleGetPayload<S extends boolean | null | undefined | VehicleRouteScheduleDefaultArgs> = $Result.GetResult<Prisma.$VehicleRouteSchedulePayload, S>

  type VehicleRouteScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleRouteScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleRouteScheduleCountAggregateInputType | true
    }

  export interface VehicleRouteScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleRouteSchedule'], meta: { name: 'VehicleRouteSchedule' } }
    /**
     * Find zero or one VehicleRouteSchedule that matches the filter.
     * @param {VehicleRouteScheduleFindUniqueArgs} args - Arguments to find a VehicleRouteSchedule
     * @example
     * // Get one VehicleRouteSchedule
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleRouteScheduleFindUniqueArgs>(args: SelectSubset<T, VehicleRouteScheduleFindUniqueArgs<ExtArgs>>): Prisma__VehicleRouteScheduleClient<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleRouteSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleRouteScheduleFindUniqueOrThrowArgs} args - Arguments to find a VehicleRouteSchedule
     * @example
     * // Get one VehicleRouteSchedule
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleRouteScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleRouteScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleRouteScheduleClient<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleRouteSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRouteScheduleFindFirstArgs} args - Arguments to find a VehicleRouteSchedule
     * @example
     * // Get one VehicleRouteSchedule
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleRouteScheduleFindFirstArgs>(args?: SelectSubset<T, VehicleRouteScheduleFindFirstArgs<ExtArgs>>): Prisma__VehicleRouteScheduleClient<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleRouteSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRouteScheduleFindFirstOrThrowArgs} args - Arguments to find a VehicleRouteSchedule
     * @example
     * // Get one VehicleRouteSchedule
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleRouteScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleRouteScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleRouteScheduleClient<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleRouteSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRouteScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleRouteSchedules
     * const vehicleRouteSchedules = await prisma.vehicleRouteSchedule.findMany()
     * 
     * // Get first 10 VehicleRouteSchedules
     * const vehicleRouteSchedules = await prisma.vehicleRouteSchedule.findMany({ take: 10 })
     * 
     * // Only select the `vehicleRouteScheduleId`
     * const vehicleRouteScheduleWithVehicleRouteScheduleIdOnly = await prisma.vehicleRouteSchedule.findMany({ select: { vehicleRouteScheduleId: true } })
     * 
     */
    findMany<T extends VehicleRouteScheduleFindManyArgs>(args?: SelectSubset<T, VehicleRouteScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleRouteSchedule.
     * @param {VehicleRouteScheduleCreateArgs} args - Arguments to create a VehicleRouteSchedule.
     * @example
     * // Create one VehicleRouteSchedule
     * const VehicleRouteSchedule = await prisma.vehicleRouteSchedule.create({
     *   data: {
     *     // ... data to create a VehicleRouteSchedule
     *   }
     * })
     * 
     */
    create<T extends VehicleRouteScheduleCreateArgs>(args: SelectSubset<T, VehicleRouteScheduleCreateArgs<ExtArgs>>): Prisma__VehicleRouteScheduleClient<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleRouteSchedules.
     * @param {VehicleRouteScheduleCreateManyArgs} args - Arguments to create many VehicleRouteSchedules.
     * @example
     * // Create many VehicleRouteSchedules
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleRouteScheduleCreateManyArgs>(args?: SelectSubset<T, VehicleRouteScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleRouteSchedules and returns the data saved in the database.
     * @param {VehicleRouteScheduleCreateManyAndReturnArgs} args - Arguments to create many VehicleRouteSchedules.
     * @example
     * // Create many VehicleRouteSchedules
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleRouteSchedules and only return the `vehicleRouteScheduleId`
     * const vehicleRouteScheduleWithVehicleRouteScheduleIdOnly = await prisma.vehicleRouteSchedule.createManyAndReturn({
     *   select: { vehicleRouteScheduleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleRouteScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleRouteScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleRouteSchedule.
     * @param {VehicleRouteScheduleDeleteArgs} args - Arguments to delete one VehicleRouteSchedule.
     * @example
     * // Delete one VehicleRouteSchedule
     * const VehicleRouteSchedule = await prisma.vehicleRouteSchedule.delete({
     *   where: {
     *     // ... filter to delete one VehicleRouteSchedule
     *   }
     * })
     * 
     */
    delete<T extends VehicleRouteScheduleDeleteArgs>(args: SelectSubset<T, VehicleRouteScheduleDeleteArgs<ExtArgs>>): Prisma__VehicleRouteScheduleClient<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleRouteSchedule.
     * @param {VehicleRouteScheduleUpdateArgs} args - Arguments to update one VehicleRouteSchedule.
     * @example
     * // Update one VehicleRouteSchedule
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleRouteScheduleUpdateArgs>(args: SelectSubset<T, VehicleRouteScheduleUpdateArgs<ExtArgs>>): Prisma__VehicleRouteScheduleClient<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleRouteSchedules.
     * @param {VehicleRouteScheduleDeleteManyArgs} args - Arguments to filter VehicleRouteSchedules to delete.
     * @example
     * // Delete a few VehicleRouteSchedules
     * const { count } = await prisma.vehicleRouteSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleRouteScheduleDeleteManyArgs>(args?: SelectSubset<T, VehicleRouteScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleRouteSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRouteScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleRouteSchedules
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleRouteScheduleUpdateManyArgs>(args: SelectSubset<T, VehicleRouteScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleRouteSchedules and returns the data updated in the database.
     * @param {VehicleRouteScheduleUpdateManyAndReturnArgs} args - Arguments to update many VehicleRouteSchedules.
     * @example
     * // Update many VehicleRouteSchedules
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleRouteSchedules and only return the `vehicleRouteScheduleId`
     * const vehicleRouteScheduleWithVehicleRouteScheduleIdOnly = await prisma.vehicleRouteSchedule.updateManyAndReturn({
     *   select: { vehicleRouteScheduleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleRouteScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleRouteScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleRouteSchedule.
     * @param {VehicleRouteScheduleUpsertArgs} args - Arguments to update or create a VehicleRouteSchedule.
     * @example
     * // Update or create a VehicleRouteSchedule
     * const vehicleRouteSchedule = await prisma.vehicleRouteSchedule.upsert({
     *   create: {
     *     // ... data to create a VehicleRouteSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleRouteSchedule we want to update
     *   }
     * })
     */
    upsert<T extends VehicleRouteScheduleUpsertArgs>(args: SelectSubset<T, VehicleRouteScheduleUpsertArgs<ExtArgs>>): Prisma__VehicleRouteScheduleClient<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleRouteSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRouteScheduleCountArgs} args - Arguments to filter VehicleRouteSchedules to count.
     * @example
     * // Count the number of VehicleRouteSchedules
     * const count = await prisma.vehicleRouteSchedule.count({
     *   where: {
     *     // ... the filter for the VehicleRouteSchedules we want to count
     *   }
     * })
    **/
    count<T extends VehicleRouteScheduleCountArgs>(
      args?: Subset<T, VehicleRouteScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleRouteScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleRouteSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRouteScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleRouteScheduleAggregateArgs>(args: Subset<T, VehicleRouteScheduleAggregateArgs>): Prisma.PrismaPromise<GetVehicleRouteScheduleAggregateType<T>>

    /**
     * Group by VehicleRouteSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRouteScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleRouteScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleRouteScheduleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleRouteScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleRouteScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleRouteScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleRouteSchedule model
   */
  readonly fields: VehicleRouteScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleRouteSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleRouteScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Booking<T extends VehicleRouteSchedule$BookingArgs<ExtArgs> = {}>(args?: Subset<T, VehicleRouteSchedule$BookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleRouteSchedule model
   */
  interface VehicleRouteScheduleFieldRefs {
    readonly vehicleRouteScheduleId: FieldRef<"VehicleRouteSchedule", 'Int'>
    readonly vehicleId: FieldRef<"VehicleRouteSchedule", 'Int'>
    readonly routeId: FieldRef<"VehicleRouteSchedule", 'Int'>
    readonly driverId: FieldRef<"VehicleRouteSchedule", 'Int'>
    readonly scheduleTime: FieldRef<"VehicleRouteSchedule", 'DateTime'>
    readonly status: FieldRef<"VehicleRouteSchedule", 'RouteStatus'>
    readonly createdAt: FieldRef<"VehicleRouteSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"VehicleRouteSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleRouteSchedule findUnique
   */
  export type VehicleRouteScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRouteSchedule to fetch.
     */
    where: VehicleRouteScheduleWhereUniqueInput
  }

  /**
   * VehicleRouteSchedule findUniqueOrThrow
   */
  export type VehicleRouteScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRouteSchedule to fetch.
     */
    where: VehicleRouteScheduleWhereUniqueInput
  }

  /**
   * VehicleRouteSchedule findFirst
   */
  export type VehicleRouteScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRouteSchedule to fetch.
     */
    where?: VehicleRouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleRouteSchedules to fetch.
     */
    orderBy?: VehicleRouteScheduleOrderByWithRelationInput | VehicleRouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleRouteSchedules.
     */
    cursor?: VehicleRouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleRouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleRouteSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleRouteSchedules.
     */
    distinct?: VehicleRouteScheduleScalarFieldEnum | VehicleRouteScheduleScalarFieldEnum[]
  }

  /**
   * VehicleRouteSchedule findFirstOrThrow
   */
  export type VehicleRouteScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRouteSchedule to fetch.
     */
    where?: VehicleRouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleRouteSchedules to fetch.
     */
    orderBy?: VehicleRouteScheduleOrderByWithRelationInput | VehicleRouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleRouteSchedules.
     */
    cursor?: VehicleRouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleRouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleRouteSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleRouteSchedules.
     */
    distinct?: VehicleRouteScheduleScalarFieldEnum | VehicleRouteScheduleScalarFieldEnum[]
  }

  /**
   * VehicleRouteSchedule findMany
   */
  export type VehicleRouteScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRouteSchedules to fetch.
     */
    where?: VehicleRouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleRouteSchedules to fetch.
     */
    orderBy?: VehicleRouteScheduleOrderByWithRelationInput | VehicleRouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleRouteSchedules.
     */
    cursor?: VehicleRouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleRouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleRouteSchedules.
     */
    skip?: number
    distinct?: VehicleRouteScheduleScalarFieldEnum | VehicleRouteScheduleScalarFieldEnum[]
  }

  /**
   * VehicleRouteSchedule create
   */
  export type VehicleRouteScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleRouteSchedule.
     */
    data: XOR<VehicleRouteScheduleCreateInput, VehicleRouteScheduleUncheckedCreateInput>
  }

  /**
   * VehicleRouteSchedule createMany
   */
  export type VehicleRouteScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleRouteSchedules.
     */
    data: VehicleRouteScheduleCreateManyInput | VehicleRouteScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleRouteSchedule createManyAndReturn
   */
  export type VehicleRouteScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleRouteSchedules.
     */
    data: VehicleRouteScheduleCreateManyInput | VehicleRouteScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleRouteSchedule update
   */
  export type VehicleRouteScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleRouteSchedule.
     */
    data: XOR<VehicleRouteScheduleUpdateInput, VehicleRouteScheduleUncheckedUpdateInput>
    /**
     * Choose, which VehicleRouteSchedule to update.
     */
    where: VehicleRouteScheduleWhereUniqueInput
  }

  /**
   * VehicleRouteSchedule updateMany
   */
  export type VehicleRouteScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleRouteSchedules.
     */
    data: XOR<VehicleRouteScheduleUpdateManyMutationInput, VehicleRouteScheduleUncheckedUpdateManyInput>
    /**
     * Filter which VehicleRouteSchedules to update
     */
    where?: VehicleRouteScheduleWhereInput
    /**
     * Limit how many VehicleRouteSchedules to update.
     */
    limit?: number
  }

  /**
   * VehicleRouteSchedule updateManyAndReturn
   */
  export type VehicleRouteScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * The data used to update VehicleRouteSchedules.
     */
    data: XOR<VehicleRouteScheduleUpdateManyMutationInput, VehicleRouteScheduleUncheckedUpdateManyInput>
    /**
     * Filter which VehicleRouteSchedules to update
     */
    where?: VehicleRouteScheduleWhereInput
    /**
     * Limit how many VehicleRouteSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleRouteSchedule upsert
   */
  export type VehicleRouteScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleRouteSchedule to update in case it exists.
     */
    where: VehicleRouteScheduleWhereUniqueInput
    /**
     * In case the VehicleRouteSchedule found by the `where` argument doesn't exist, create a new VehicleRouteSchedule with this data.
     */
    create: XOR<VehicleRouteScheduleCreateInput, VehicleRouteScheduleUncheckedCreateInput>
    /**
     * In case the VehicleRouteSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleRouteScheduleUpdateInput, VehicleRouteScheduleUncheckedUpdateInput>
  }

  /**
   * VehicleRouteSchedule delete
   */
  export type VehicleRouteScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    /**
     * Filter which VehicleRouteSchedule to delete.
     */
    where: VehicleRouteScheduleWhereUniqueInput
  }

  /**
   * VehicleRouteSchedule deleteMany
   */
  export type VehicleRouteScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleRouteSchedules to delete
     */
    where?: VehicleRouteScheduleWhereInput
    /**
     * Limit how many VehicleRouteSchedules to delete.
     */
    limit?: number
  }

  /**
   * VehicleRouteSchedule.Booking
   */
  export type VehicleRouteSchedule$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * VehicleRouteSchedule without action
   */
  export type VehicleRouteScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
    roleId: number | null
    employeeId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
    roleId: number | null
    employeeId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    roleId: number | null
    employeeId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    roleId: number | null
    employeeId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    roleId: number
    employeeId: number
    firstName: number
    lastName: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
    roleId?: true
    employeeId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
    roleId?: true
    employeeId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    roleId?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    roleId?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    roleId?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    roleId: number
    employeeId: number | null
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    Booking?: boolean | User$BookingArgs<ExtArgs>
    VehicleRouteSchedule?: boolean | User$VehicleRouteScheduleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    roleId?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId" | "employeeId" | "firstName" | "lastName" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    Booking?: boolean | User$BookingArgs<ExtArgs>
    VehicleRouteSchedule?: boolean | User$VehicleRouteScheduleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      role: Prisma.$RolePayload<ExtArgs>
      Booking: Prisma.$BookingPayload<ExtArgs>[]
      VehicleRouteSchedule: Prisma.$VehicleRouteSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      roleId: number
      employeeId: number | null
      firstName: string
      lastName: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Booking<T extends User$BookingArgs<ExtArgs> = {}>(args?: Subset<T, User$BookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    VehicleRouteSchedule<T extends User$VehicleRouteScheduleArgs<ExtArgs> = {}>(args?: Subset<T, User$VehicleRouteScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'Int'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly employeeId: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User.Booking
   */
  export type User$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.VehicleRouteSchedule
   */
  export type User$VehicleRouteScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRouteSchedule
     */
    select?: VehicleRouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRouteSchedule
     */
    omit?: VehicleRouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRouteScheduleInclude<ExtArgs> | null
    where?: VehicleRouteScheduleWhereInput
    orderBy?: VehicleRouteScheduleOrderByWithRelationInput | VehicleRouteScheduleOrderByWithRelationInput[]
    cursor?: VehicleRouteScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleRouteScheduleScalarFieldEnum | VehicleRouteScheduleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    bookingId: number | null
    originStopId: number | null
    destinationStopId: number | null
    userId: number | null
    vehicleRouteScheduleId: number | null
  }

  export type BookingSumAggregateOutputType = {
    bookingId: number | null
    originStopId: number | null
    destinationStopId: number | null
    userId: number | null
    vehicleRouteScheduleId: number | null
  }

  export type BookingMinAggregateOutputType = {
    bookingId: number | null
    originStopId: number | null
    destinationStopId: number | null
    userId: number | null
    vehicleRouteScheduleId: number | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    bookingId: number | null
    originStopId: number | null
    destinationStopId: number | null
    userId: number | null
    vehicleRouteScheduleId: number | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    bookingId: number
    originStopId: number
    destinationStopId: number
    userId: number
    vehicleRouteScheduleId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    bookingId?: true
    originStopId?: true
    destinationStopId?: true
    userId?: true
    vehicleRouteScheduleId?: true
  }

  export type BookingSumAggregateInputType = {
    bookingId?: true
    originStopId?: true
    destinationStopId?: true
    userId?: true
    vehicleRouteScheduleId?: true
  }

  export type BookingMinAggregateInputType = {
    bookingId?: true
    originStopId?: true
    destinationStopId?: true
    userId?: true
    vehicleRouteScheduleId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    bookingId?: true
    originStopId?: true
    destinationStopId?: true
    userId?: true
    vehicleRouteScheduleId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    bookingId?: true
    originStopId?: true
    destinationStopId?: true
    userId?: true
    vehicleRouteScheduleId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    bookingId: number
    originStopId: number
    destinationStopId: number
    userId: number
    vehicleRouteScheduleId: number
    status: $Enums.BookingStatus
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookingId?: boolean
    originStopId?: boolean
    destinationStopId?: boolean
    userId?: boolean
    vehicleRouteScheduleId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destinationStop?: boolean | BusStopDefaultArgs<ExtArgs>
    originStop?: boolean | BusStopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicleRouteSchedule?: boolean | VehicleRouteScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookingId?: boolean
    originStopId?: boolean
    destinationStopId?: boolean
    userId?: boolean
    vehicleRouteScheduleId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destinationStop?: boolean | BusStopDefaultArgs<ExtArgs>
    originStop?: boolean | BusStopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicleRouteSchedule?: boolean | VehicleRouteScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookingId?: boolean
    originStopId?: boolean
    destinationStopId?: boolean
    userId?: boolean
    vehicleRouteScheduleId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destinationStop?: boolean | BusStopDefaultArgs<ExtArgs>
    originStop?: boolean | BusStopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicleRouteSchedule?: boolean | VehicleRouteScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    bookingId?: boolean
    originStopId?: boolean
    destinationStopId?: boolean
    userId?: boolean
    vehicleRouteScheduleId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookingId" | "originStopId" | "destinationStopId" | "userId" | "vehicleRouteScheduleId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationStop?: boolean | BusStopDefaultArgs<ExtArgs>
    originStop?: boolean | BusStopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicleRouteSchedule?: boolean | VehicleRouteScheduleDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationStop?: boolean | BusStopDefaultArgs<ExtArgs>
    originStop?: boolean | BusStopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicleRouteSchedule?: boolean | VehicleRouteScheduleDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationStop?: boolean | BusStopDefaultArgs<ExtArgs>
    originStop?: boolean | BusStopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicleRouteSchedule?: boolean | VehicleRouteScheduleDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      destinationStop: Prisma.$BusStopPayload<ExtArgs>
      originStop: Prisma.$BusStopPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      vehicleRouteSchedule: Prisma.$VehicleRouteSchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookingId: number
      originStopId: number
      destinationStopId: number
      userId: number
      vehicleRouteScheduleId: number
      status: $Enums.BookingStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `bookingId`
     * const bookingWithBookingIdOnly = await prisma.booking.findMany({ select: { bookingId: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `bookingId`
     * const bookingWithBookingIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { bookingId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `bookingId`
     * const bookingWithBookingIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { bookingId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinationStop<T extends BusStopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusStopDefaultArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    originStop<T extends BusStopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusStopDefaultArgs<ExtArgs>>): Prisma__BusStopClient<$Result.GetResult<Prisma.$BusStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicleRouteSchedule<T extends VehicleRouteScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleRouteScheduleDefaultArgs<ExtArgs>>): Prisma__VehicleRouteScheduleClient<$Result.GetResult<Prisma.$VehicleRouteSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly bookingId: FieldRef<"Booking", 'Int'>
    readonly originStopId: FieldRef<"Booking", 'Int'>
    readonly destinationStopId: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'Int'>
    readonly vehicleRouteScheduleId: FieldRef<"Booking", 'Int'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    roleId: 'roleId',
    roleName: 'roleName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    permissionId: 'permissionId',
    permissionName: 'permissionName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    roleId: 'roleId',
    permissionId: 'permissionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    departmentId: 'departmentId',
    departmentName: 'departmentName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    employeeId: 'employeeId',
    departmentId: 'departmentId',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const BusStopScalarFieldEnum: {
    busStopId: 'busStopId',
    stopName: 'stopName',
    lat: 'lat',
    lng: 'lng',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusStopScalarFieldEnum = (typeof BusStopScalarFieldEnum)[keyof typeof BusStopScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    routeId: 'routeId',
    routeName: 'routeName',
    overallTravelTime: 'overallTravelTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const VehicleTypeScalarFieldEnum: {
    VehicleTypeId: 'VehicleTypeId',
    VehicleTypeName: 'VehicleTypeName',
    defaultCapacity: 'defaultCapacity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleTypeScalarFieldEnum = (typeof VehicleTypeScalarFieldEnum)[keyof typeof VehicleTypeScalarFieldEnum]


  export const RouteBusStopScalarFieldEnum: {
    routeId: 'routeId',
    busStopId: 'busStopId',
    nextStopId: 'nextStopId',
    stopOrder: 'stopOrder',
    travelTime: 'travelTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RouteBusStopScalarFieldEnum = (typeof RouteBusStopScalarFieldEnum)[keyof typeof RouteBusStopScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    vehicleId: 'vehicleId',
    vehicleTypeId: 'vehicleTypeId',
    currentStopId: 'currentStopId',
    licensePlate: 'licensePlate',
    capacity: 'capacity',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const VehicleRouteScheduleScalarFieldEnum: {
    vehicleRouteScheduleId: 'vehicleRouteScheduleId',
    vehicleId: 'vehicleId',
    routeId: 'routeId',
    driverId: 'driverId',
    scheduleTime: 'scheduleTime',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleRouteScheduleScalarFieldEnum = (typeof VehicleRouteScheduleScalarFieldEnum)[keyof typeof VehicleRouteScheduleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId',
    employeeId: 'employeeId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    bookingId: 'bookingId',
    originStopId: 'originStopId',
    destinationStopId: 'destinationStopId',
    userId: 'userId',
    vehicleRouteScheduleId: 'vehicleRouteScheduleId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'VehicleStatus[]'
   */
  export type ListEnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus[]'>
    


  /**
   * Reference to a field of type 'RouteStatus'
   */
  export type EnumRouteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RouteStatus'>
    


  /**
   * Reference to a field of type 'RouteStatus[]'
   */
  export type ListEnumRouteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RouteStatus[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleId?: IntFilter<"Role"> | number
    roleName?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    RolePermission?: RolePermissionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    roleId?: number
    roleName?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
    users?: UserListRelationFilter
  }, "roleId" | "roleName">

  export type RoleOrderByWithAggregationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"Role"> | number
    roleName?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    permissionId?: IntFilter<"Permission"> | number
    permissionName?: StringFilter<"Permission"> | string
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    permissionId?: SortOrder
    permissionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    RolePermission?: RolePermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    permissionId?: number
    permissionName?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
  }, "permissionId" | "permissionName">

  export type PermissionOrderByWithAggregationInput = {
    permissionId?: SortOrder
    permissionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    permissionId?: IntWithAggregatesFilter<"Permission"> | number
    permissionName?: StringWithAggregatesFilter<"Permission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permission?: PermissionOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    roleId_permissionId?: RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "roleId_permissionId">

  export type RolePermissionOrderByWithAggregationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _avg?: RolePermissionAvgOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
    _sum?: RolePermissionSumOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"RolePermission"> | number
    permissionId?: IntWithAggregatesFilter<"RolePermission"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    departmentId?: IntFilter<"Department"> | number
    departmentName?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    employees?: EmployeeListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    departmentId?: number
    departmentName?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    employees?: EmployeeListRelationFilter
  }, "departmentId" | "departmentName">

  export type DepartmentOrderByWithAggregationInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    departmentId?: IntWithAggregatesFilter<"Department"> | number
    departmentName?: StringWithAggregatesFilter<"Department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employeeId?: IntFilter<"Employee"> | number
    departmentId?: IntNullableFilter<"Employee"> | number | null
    position?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    User?: UserListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    employeeId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    employeeId?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    departmentId?: IntNullableFilter<"Employee"> | number | null
    position?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    User?: UserListRelationFilter
  }, "employeeId">

  export type EmployeeOrderByWithAggregationInput = {
    employeeId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    employeeId?: IntWithAggregatesFilter<"Employee"> | number
    departmentId?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    position?: StringWithAggregatesFilter<"Employee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type BusStopWhereInput = {
    AND?: BusStopWhereInput | BusStopWhereInput[]
    OR?: BusStopWhereInput[]
    NOT?: BusStopWhereInput | BusStopWhereInput[]
    busStopId?: IntFilter<"BusStop"> | number
    stopName?: StringFilter<"BusStop"> | string
    lat?: FloatFilter<"BusStop"> | number
    lng?: FloatFilter<"BusStop"> | number
    createdAt?: DateTimeFilter<"BusStop"> | Date | string
    updatedAt?: DateTimeFilter<"BusStop"> | Date | string
    BookingDestination?: BookingListRelationFilter
    BookingOrigin?: BookingListRelationFilter
    RouteBusStop?: RouteBusStopListRelationFilter
    vehicles?: VehicleListRelationFilter
  }

  export type BusStopOrderByWithRelationInput = {
    busStopId?: SortOrder
    stopName?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BookingDestination?: BookingOrderByRelationAggregateInput
    BookingOrigin?: BookingOrderByRelationAggregateInput
    RouteBusStop?: RouteBusStopOrderByRelationAggregateInput
    vehicles?: VehicleOrderByRelationAggregateInput
  }

  export type BusStopWhereUniqueInput = Prisma.AtLeast<{
    busStopId?: number
    AND?: BusStopWhereInput | BusStopWhereInput[]
    OR?: BusStopWhereInput[]
    NOT?: BusStopWhereInput | BusStopWhereInput[]
    stopName?: StringFilter<"BusStop"> | string
    lat?: FloatFilter<"BusStop"> | number
    lng?: FloatFilter<"BusStop"> | number
    createdAt?: DateTimeFilter<"BusStop"> | Date | string
    updatedAt?: DateTimeFilter<"BusStop"> | Date | string
    BookingDestination?: BookingListRelationFilter
    BookingOrigin?: BookingListRelationFilter
    RouteBusStop?: RouteBusStopListRelationFilter
    vehicles?: VehicleListRelationFilter
  }, "busStopId">

  export type BusStopOrderByWithAggregationInput = {
    busStopId?: SortOrder
    stopName?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusStopCountOrderByAggregateInput
    _avg?: BusStopAvgOrderByAggregateInput
    _max?: BusStopMaxOrderByAggregateInput
    _min?: BusStopMinOrderByAggregateInput
    _sum?: BusStopSumOrderByAggregateInput
  }

  export type BusStopScalarWhereWithAggregatesInput = {
    AND?: BusStopScalarWhereWithAggregatesInput | BusStopScalarWhereWithAggregatesInput[]
    OR?: BusStopScalarWhereWithAggregatesInput[]
    NOT?: BusStopScalarWhereWithAggregatesInput | BusStopScalarWhereWithAggregatesInput[]
    busStopId?: IntWithAggregatesFilter<"BusStop"> | number
    stopName?: StringWithAggregatesFilter<"BusStop"> | string
    lat?: FloatWithAggregatesFilter<"BusStop"> | number
    lng?: FloatWithAggregatesFilter<"BusStop"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BusStop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusStop"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    routeId?: IntFilter<"Route"> | number
    routeName?: StringFilter<"Route"> | string
    overallTravelTime?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    NextStop?: RouteBusStopListRelationFilter
    RouteBusStop?: RouteBusStopListRelationFilter
    VehicleRouteSchedule?: VehicleRouteScheduleListRelationFilter
    Vehicle?: VehicleListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    routeId?: SortOrder
    routeName?: SortOrder
    overallTravelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    NextStop?: RouteBusStopOrderByRelationAggregateInput
    RouteBusStop?: RouteBusStopOrderByRelationAggregateInput
    VehicleRouteSchedule?: VehicleRouteScheduleOrderByRelationAggregateInput
    Vehicle?: VehicleOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    routeId?: number
    routeName?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    overallTravelTime?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    NextStop?: RouteBusStopListRelationFilter
    RouteBusStop?: RouteBusStopListRelationFilter
    VehicleRouteSchedule?: VehicleRouteScheduleListRelationFilter
    Vehicle?: VehicleListRelationFilter
  }, "routeId" | "routeName">

  export type RouteOrderByWithAggregationInput = {
    routeId?: SortOrder
    routeName?: SortOrder
    overallTravelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    routeId?: IntWithAggregatesFilter<"Route"> | number
    routeName?: StringWithAggregatesFilter<"Route"> | string
    overallTravelTime?: IntWithAggregatesFilter<"Route"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type VehicleTypeWhereInput = {
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    VehicleTypeId?: IntFilter<"VehicleType"> | number
    VehicleTypeName?: StringFilter<"VehicleType"> | string
    defaultCapacity?: IntFilter<"VehicleType"> | number
    createdAt?: DateTimeFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleType"> | Date | string
    Vehicle?: VehicleListRelationFilter
  }

  export type VehicleTypeOrderByWithRelationInput = {
    VehicleTypeId?: SortOrder
    VehicleTypeName?: SortOrder
    defaultCapacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Vehicle?: VehicleOrderByRelationAggregateInput
  }

  export type VehicleTypeWhereUniqueInput = Prisma.AtLeast<{
    VehicleTypeId?: number
    VehicleTypeName?: string
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    defaultCapacity?: IntFilter<"VehicleType"> | number
    createdAt?: DateTimeFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleType"> | Date | string
    Vehicle?: VehicleListRelationFilter
  }, "VehicleTypeId" | "VehicleTypeName">

  export type VehicleTypeOrderByWithAggregationInput = {
    VehicleTypeId?: SortOrder
    VehicleTypeName?: SortOrder
    defaultCapacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleTypeCountOrderByAggregateInput
    _avg?: VehicleTypeAvgOrderByAggregateInput
    _max?: VehicleTypeMaxOrderByAggregateInput
    _min?: VehicleTypeMinOrderByAggregateInput
    _sum?: VehicleTypeSumOrderByAggregateInput
  }

  export type VehicleTypeScalarWhereWithAggregatesInput = {
    AND?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    OR?: VehicleTypeScalarWhereWithAggregatesInput[]
    NOT?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    VehicleTypeId?: IntWithAggregatesFilter<"VehicleType"> | number
    VehicleTypeName?: StringWithAggregatesFilter<"VehicleType"> | string
    defaultCapacity?: IntWithAggregatesFilter<"VehicleType"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VehicleType"> | Date | string
  }

  export type RouteBusStopWhereInput = {
    AND?: RouteBusStopWhereInput | RouteBusStopWhereInput[]
    OR?: RouteBusStopWhereInput[]
    NOT?: RouteBusStopWhereInput | RouteBusStopWhereInput[]
    routeId?: IntFilter<"RouteBusStop"> | number
    busStopId?: IntFilter<"RouteBusStop"> | number
    nextStopId?: IntFilter<"RouteBusStop"> | number
    stopOrder?: IntFilter<"RouteBusStop"> | number
    travelTime?: IntFilter<"RouteBusStop"> | number
    createdAt?: DateTimeFilter<"RouteBusStop"> | Date | string
    updatedAt?: DateTimeFilter<"RouteBusStop"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    busStop?: XOR<BusStopScalarRelationFilter, BusStopWhereInput>
    nextStop?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }

  export type RouteBusStopOrderByWithRelationInput = {
    routeId?: SortOrder
    busStopId?: SortOrder
    nextStopId?: SortOrder
    stopOrder?: SortOrder
    travelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    route?: RouteOrderByWithRelationInput
    busStop?: BusStopOrderByWithRelationInput
    nextStop?: RouteOrderByWithRelationInput
  }

  export type RouteBusStopWhereUniqueInput = Prisma.AtLeast<{
    routeId_busStopId?: RouteBusStopRouteIdBusStopIdCompoundUniqueInput
    AND?: RouteBusStopWhereInput | RouteBusStopWhereInput[]
    OR?: RouteBusStopWhereInput[]
    NOT?: RouteBusStopWhereInput | RouteBusStopWhereInput[]
    routeId?: IntFilter<"RouteBusStop"> | number
    busStopId?: IntFilter<"RouteBusStop"> | number
    nextStopId?: IntFilter<"RouteBusStop"> | number
    stopOrder?: IntFilter<"RouteBusStop"> | number
    travelTime?: IntFilter<"RouteBusStop"> | number
    createdAt?: DateTimeFilter<"RouteBusStop"> | Date | string
    updatedAt?: DateTimeFilter<"RouteBusStop"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    busStop?: XOR<BusStopScalarRelationFilter, BusStopWhereInput>
    nextStop?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }, "routeId_busStopId">

  export type RouteBusStopOrderByWithAggregationInput = {
    routeId?: SortOrder
    busStopId?: SortOrder
    nextStopId?: SortOrder
    stopOrder?: SortOrder
    travelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RouteBusStopCountOrderByAggregateInput
    _avg?: RouteBusStopAvgOrderByAggregateInput
    _max?: RouteBusStopMaxOrderByAggregateInput
    _min?: RouteBusStopMinOrderByAggregateInput
    _sum?: RouteBusStopSumOrderByAggregateInput
  }

  export type RouteBusStopScalarWhereWithAggregatesInput = {
    AND?: RouteBusStopScalarWhereWithAggregatesInput | RouteBusStopScalarWhereWithAggregatesInput[]
    OR?: RouteBusStopScalarWhereWithAggregatesInput[]
    NOT?: RouteBusStopScalarWhereWithAggregatesInput | RouteBusStopScalarWhereWithAggregatesInput[]
    routeId?: IntWithAggregatesFilter<"RouteBusStop"> | number
    busStopId?: IntWithAggregatesFilter<"RouteBusStop"> | number
    nextStopId?: IntWithAggregatesFilter<"RouteBusStop"> | number
    stopOrder?: IntWithAggregatesFilter<"RouteBusStop"> | number
    travelTime?: IntWithAggregatesFilter<"RouteBusStop"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RouteBusStop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RouteBusStop"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicleId?: IntFilter<"Vehicle"> | number
    vehicleTypeId?: IntFilter<"Vehicle"> | number
    currentStopId?: IntNullableFilter<"Vehicle"> | number | null
    licensePlate?: StringFilter<"Vehicle"> | string
    capacity?: IntFilter<"Vehicle"> | number
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    busStop?: XOR<BusStopNullableScalarRelationFilter, BusStopWhereInput> | null
    vehicleType?: XOR<VehicleTypeScalarRelationFilter, VehicleTypeWhereInput>
    VehicleRouteSchedule?: VehicleRouteScheduleListRelationFilter
    Route?: RouteListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    vehicleId?: SortOrder
    vehicleTypeId?: SortOrder
    currentStopId?: SortOrderInput | SortOrder
    licensePlate?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    busStop?: BusStopOrderByWithRelationInput
    vehicleType?: VehicleTypeOrderByWithRelationInput
    VehicleRouteSchedule?: VehicleRouteScheduleOrderByRelationAggregateInput
    Route?: RouteOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    vehicleId?: number
    licensePlate?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicleTypeId?: IntFilter<"Vehicle"> | number
    currentStopId?: IntNullableFilter<"Vehicle"> | number | null
    capacity?: IntFilter<"Vehicle"> | number
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    busStop?: XOR<BusStopNullableScalarRelationFilter, BusStopWhereInput> | null
    vehicleType?: XOR<VehicleTypeScalarRelationFilter, VehicleTypeWhereInput>
    VehicleRouteSchedule?: VehicleRouteScheduleListRelationFilter
    Route?: RouteListRelationFilter
  }, "vehicleId" | "licensePlate">

  export type VehicleOrderByWithAggregationInput = {
    vehicleId?: SortOrder
    vehicleTypeId?: SortOrder
    currentStopId?: SortOrderInput | SortOrder
    licensePlate?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    vehicleId?: IntWithAggregatesFilter<"Vehicle"> | number
    vehicleTypeId?: IntWithAggregatesFilter<"Vehicle"> | number
    currentStopId?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    licensePlate?: StringWithAggregatesFilter<"Vehicle"> | string
    capacity?: IntWithAggregatesFilter<"Vehicle"> | number
    status?: EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type VehicleRouteScheduleWhereInput = {
    AND?: VehicleRouteScheduleWhereInput | VehicleRouteScheduleWhereInput[]
    OR?: VehicleRouteScheduleWhereInput[]
    NOT?: VehicleRouteScheduleWhereInput | VehicleRouteScheduleWhereInput[]
    vehicleRouteScheduleId?: IntFilter<"VehicleRouteSchedule"> | number
    vehicleId?: IntFilter<"VehicleRouteSchedule"> | number
    routeId?: IntFilter<"VehicleRouteSchedule"> | number
    driverId?: IntFilter<"VehicleRouteSchedule"> | number
    scheduleTime?: DateTimeFilter<"VehicleRouteSchedule"> | Date | string
    status?: EnumRouteStatusFilter<"VehicleRouteSchedule"> | $Enums.RouteStatus
    createdAt?: DateTimeFilter<"VehicleRouteSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleRouteSchedule"> | Date | string
    driver?: XOR<UserScalarRelationFilter, UserWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    Booking?: BookingListRelationFilter
  }

  export type VehicleRouteScheduleOrderByWithRelationInput = {
    vehicleRouteScheduleId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    scheduleTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: UserOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    Booking?: BookingOrderByRelationAggregateInput
  }

  export type VehicleRouteScheduleWhereUniqueInput = Prisma.AtLeast<{
    vehicleRouteScheduleId?: number
    AND?: VehicleRouteScheduleWhereInput | VehicleRouteScheduleWhereInput[]
    OR?: VehicleRouteScheduleWhereInput[]
    NOT?: VehicleRouteScheduleWhereInput | VehicleRouteScheduleWhereInput[]
    vehicleId?: IntFilter<"VehicleRouteSchedule"> | number
    routeId?: IntFilter<"VehicleRouteSchedule"> | number
    driverId?: IntFilter<"VehicleRouteSchedule"> | number
    scheduleTime?: DateTimeFilter<"VehicleRouteSchedule"> | Date | string
    status?: EnumRouteStatusFilter<"VehicleRouteSchedule"> | $Enums.RouteStatus
    createdAt?: DateTimeFilter<"VehicleRouteSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleRouteSchedule"> | Date | string
    driver?: XOR<UserScalarRelationFilter, UserWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    Booking?: BookingListRelationFilter
  }, "vehicleRouteScheduleId">

  export type VehicleRouteScheduleOrderByWithAggregationInput = {
    vehicleRouteScheduleId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    scheduleTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleRouteScheduleCountOrderByAggregateInput
    _avg?: VehicleRouteScheduleAvgOrderByAggregateInput
    _max?: VehicleRouteScheduleMaxOrderByAggregateInput
    _min?: VehicleRouteScheduleMinOrderByAggregateInput
    _sum?: VehicleRouteScheduleSumOrderByAggregateInput
  }

  export type VehicleRouteScheduleScalarWhereWithAggregatesInput = {
    AND?: VehicleRouteScheduleScalarWhereWithAggregatesInput | VehicleRouteScheduleScalarWhereWithAggregatesInput[]
    OR?: VehicleRouteScheduleScalarWhereWithAggregatesInput[]
    NOT?: VehicleRouteScheduleScalarWhereWithAggregatesInput | VehicleRouteScheduleScalarWhereWithAggregatesInput[]
    vehicleRouteScheduleId?: IntWithAggregatesFilter<"VehicleRouteSchedule"> | number
    vehicleId?: IntWithAggregatesFilter<"VehicleRouteSchedule"> | number
    routeId?: IntWithAggregatesFilter<"VehicleRouteSchedule"> | number
    driverId?: IntWithAggregatesFilter<"VehicleRouteSchedule"> | number
    scheduleTime?: DateTimeWithAggregatesFilter<"VehicleRouteSchedule"> | Date | string
    status?: EnumRouteStatusWithAggregatesFilter<"VehicleRouteSchedule"> | $Enums.RouteStatus
    createdAt?: DateTimeWithAggregatesFilter<"VehicleRouteSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VehicleRouteSchedule"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    roleId?: IntFilter<"User"> | number
    employeeId?: IntNullableFilter<"User"> | number | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    Booking?: BookingListRelationFilter
    VehicleRouteSchedule?: VehicleRouteScheduleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    Booking?: BookingOrderByRelationAggregateInput
    VehicleRouteSchedule?: VehicleRouteScheduleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    roleId?: IntFilter<"User"> | number
    employeeId?: IntNullableFilter<"User"> | number | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    Booking?: BookingListRelationFilter
    VehicleRouteSchedule?: VehicleRouteScheduleListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    roleId?: IntWithAggregatesFilter<"User"> | number
    employeeId?: IntNullableWithAggregatesFilter<"User"> | number | null
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    bookingId?: IntFilter<"Booking"> | number
    originStopId?: IntFilter<"Booking"> | number
    destinationStopId?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    vehicleRouteScheduleId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    destinationStop?: XOR<BusStopScalarRelationFilter, BusStopWhereInput>
    originStop?: XOR<BusStopScalarRelationFilter, BusStopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicleRouteSchedule?: XOR<VehicleRouteScheduleScalarRelationFilter, VehicleRouteScheduleWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    bookingId?: SortOrder
    originStopId?: SortOrder
    destinationStopId?: SortOrder
    userId?: SortOrder
    vehicleRouteScheduleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    destinationStop?: BusStopOrderByWithRelationInput
    originStop?: BusStopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    vehicleRouteSchedule?: VehicleRouteScheduleOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    bookingId?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    originStopId?: IntFilter<"Booking"> | number
    destinationStopId?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    vehicleRouteScheduleId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    destinationStop?: XOR<BusStopScalarRelationFilter, BusStopWhereInput>
    originStop?: XOR<BusStopScalarRelationFilter, BusStopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicleRouteSchedule?: XOR<VehicleRouteScheduleScalarRelationFilter, VehicleRouteScheduleWhereInput>
  }, "bookingId">

  export type BookingOrderByWithAggregationInput = {
    bookingId?: SortOrder
    originStopId?: SortOrder
    destinationStopId?: SortOrder
    userId?: SortOrder
    vehicleRouteScheduleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    bookingId?: IntWithAggregatesFilter<"Booking"> | number
    originStopId?: IntWithAggregatesFilter<"Booking"> | number
    destinationStopId?: IntWithAggregatesFilter<"Booking"> | number
    userId?: IntWithAggregatesFilter<"Booking"> | number
    vehicleRouteScheduleId?: IntWithAggregatesFilter<"Booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type RoleCreateInput = {
    roleName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutRoleInput
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    roleId?: number
    roleName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutRoleNestedInput
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    roleId?: number
    roleName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    permissionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    permissionId?: number
    permissionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    permissionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    permissionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    permissionId?: number
    permissionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    permissionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    permissionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: PermissionCreateNestedOneWithoutRolePermissionInput
    role: RoleCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateInput = {
    roleId: number
    permissionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionNestedInput
    role?: RoleUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyInput = {
    roleId: number
    permissionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    departmentName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    departmentId?: number
    departmentName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    departmentId?: number
    departmentName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    User?: UserCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    employeeId?: number
    departmentId?: number | null
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    User?: UserUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    employeeId?: number
    departmentId?: number | null
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusStopCreateInput = {
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingDestination?: BookingCreateNestedManyWithoutDestinationStopInput
    BookingOrigin?: BookingCreateNestedManyWithoutOriginStopInput
    RouteBusStop?: RouteBusStopCreateNestedManyWithoutBusStopInput
    vehicles?: VehicleCreateNestedManyWithoutBusStopInput
  }

  export type BusStopUncheckedCreateInput = {
    busStopId?: number
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingDestination?: BookingUncheckedCreateNestedManyWithoutDestinationStopInput
    BookingOrigin?: BookingUncheckedCreateNestedManyWithoutOriginStopInput
    RouteBusStop?: RouteBusStopUncheckedCreateNestedManyWithoutBusStopInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutBusStopInput
  }

  export type BusStopUpdateInput = {
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingDestination?: BookingUpdateManyWithoutDestinationStopNestedInput
    BookingOrigin?: BookingUpdateManyWithoutOriginStopNestedInput
    RouteBusStop?: RouteBusStopUpdateManyWithoutBusStopNestedInput
    vehicles?: VehicleUpdateManyWithoutBusStopNestedInput
  }

  export type BusStopUncheckedUpdateInput = {
    busStopId?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingDestination?: BookingUncheckedUpdateManyWithoutDestinationStopNestedInput
    BookingOrigin?: BookingUncheckedUpdateManyWithoutOriginStopNestedInput
    RouteBusStop?: RouteBusStopUncheckedUpdateManyWithoutBusStopNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutBusStopNestedInput
  }

  export type BusStopCreateManyInput = {
    busStopId?: number
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusStopUpdateManyMutationInput = {
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusStopUncheckedUpdateManyInput = {
    busStopId?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    NextStop?: RouteBusStopCreateNestedManyWithoutNextStopInput
    RouteBusStop?: RouteBusStopCreateNestedManyWithoutRouteInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutRouteInput
    Vehicle?: VehicleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    routeId?: number
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    NextStop?: RouteBusStopUncheckedCreateNestedManyWithoutNextStopInput
    RouteBusStop?: RouteBusStopUncheckedCreateNestedManyWithoutRouteInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutRouteInput
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NextStop?: RouteBusStopUpdateManyWithoutNextStopNestedInput
    RouteBusStop?: RouteBusStopUpdateManyWithoutRouteNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutRouteNestedInput
    Vehicle?: VehicleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NextStop?: RouteBusStopUncheckedUpdateManyWithoutNextStopNestedInput
    RouteBusStop?: RouteBusStopUncheckedUpdateManyWithoutRouteNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutRouteNestedInput
    Vehicle?: VehicleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    routeId?: number
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeCreateInput = {
    VehicleTypeName: string
    defaultCapacity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Vehicle?: VehicleCreateNestedManyWithoutVehicleTypeInput
  }

  export type VehicleTypeUncheckedCreateInput = {
    VehicleTypeId?: number
    VehicleTypeName: string
    defaultCapacity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutVehicleTypeInput
  }

  export type VehicleTypeUpdateInput = {
    VehicleTypeName?: StringFieldUpdateOperationsInput | string
    defaultCapacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vehicle?: VehicleUpdateManyWithoutVehicleTypeNestedInput
  }

  export type VehicleTypeUncheckedUpdateInput = {
    VehicleTypeId?: IntFieldUpdateOperationsInput | number
    VehicleTypeName?: StringFieldUpdateOperationsInput | string
    defaultCapacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vehicle?: VehicleUncheckedUpdateManyWithoutVehicleTypeNestedInput
  }

  export type VehicleTypeCreateManyInput = {
    VehicleTypeId?: number
    VehicleTypeName: string
    defaultCapacity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleTypeUpdateManyMutationInput = {
    VehicleTypeName?: StringFieldUpdateOperationsInput | string
    defaultCapacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeUncheckedUpdateManyInput = {
    VehicleTypeId?: IntFieldUpdateOperationsInput | number
    VehicleTypeName?: StringFieldUpdateOperationsInput | string
    defaultCapacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteBusStopCreateInput = {
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutRouteBusStopInput
    busStop: BusStopCreateNestedOneWithoutRouteBusStopInput
    nextStop: RouteCreateNestedOneWithoutNextStopInput
  }

  export type RouteBusStopUncheckedCreateInput = {
    routeId: number
    busStopId: number
    nextStopId: number
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteBusStopUpdateInput = {
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRouteBusStopNestedInput
    busStop?: BusStopUpdateOneRequiredWithoutRouteBusStopNestedInput
    nextStop?: RouteUpdateOneRequiredWithoutNextStopNestedInput
  }

  export type RouteBusStopUncheckedUpdateInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    busStopId?: IntFieldUpdateOperationsInput | number
    nextStopId?: IntFieldUpdateOperationsInput | number
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteBusStopCreateManyInput = {
    routeId: number
    busStopId: number
    nextStopId: number
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteBusStopUpdateManyMutationInput = {
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteBusStopUncheckedUpdateManyInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    busStopId?: IntFieldUpdateOperationsInput | number
    nextStopId?: IntFieldUpdateOperationsInput | number
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    busStop?: BusStopCreateNestedOneWithoutVehiclesInput
    vehicleType: VehicleTypeCreateNestedOneWithoutVehicleInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutVehicleInput
    Route?: RouteCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    vehicleId?: number
    vehicleTypeId: number
    currentStopId?: number | null
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutVehicleInput
    Route?: RouteUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busStop?: BusStopUpdateOneWithoutVehiclesNestedInput
    vehicleType?: VehicleTypeUpdateOneRequiredWithoutVehicleNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutVehicleNestedInput
    Route?: RouteUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    vehicleTypeId?: IntFieldUpdateOperationsInput | number
    currentStopId?: NullableIntFieldUpdateOperationsInput | number | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutVehicleNestedInput
    Route?: RouteUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    vehicleId?: number
    vehicleTypeId: number
    currentStopId?: number | null
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    vehicleTypeId?: IntFieldUpdateOperationsInput | number
    currentStopId?: NullableIntFieldUpdateOperationsInput | number | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleRouteScheduleCreateInput = {
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: UserCreateNestedOneWithoutVehicleRouteScheduleInput
    route: RouteCreateNestedOneWithoutVehicleRouteScheduleInput
    vehicle: VehicleCreateNestedOneWithoutVehicleRouteScheduleInput
    Booking?: BookingCreateNestedManyWithoutVehicleRouteScheduleInput
  }

  export type VehicleRouteScheduleUncheckedCreateInput = {
    vehicleRouteScheduleId?: number
    vehicleId: number
    routeId: number
    driverId: number
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Booking?: BookingUncheckedCreateNestedManyWithoutVehicleRouteScheduleInput
  }

  export type VehicleRouteScheduleUpdateInput = {
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    route?: RouteUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    Booking?: BookingUpdateManyWithoutVehicleRouteScheduleNestedInput
  }

  export type VehicleRouteScheduleUncheckedUpdateInput = {
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Booking?: BookingUncheckedUpdateManyWithoutVehicleRouteScheduleNestedInput
  }

  export type VehicleRouteScheduleCreateManyInput = {
    vehicleRouteScheduleId?: number
    vehicleId: number
    routeId: number
    driverId: number
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleRouteScheduleUpdateManyMutationInput = {
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleRouteScheduleUncheckedUpdateManyInput = {
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    Booking?: BookingCreateNestedManyWithoutUserInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutDriverInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    roleId: number
    employeeId?: number | null
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutDriverInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    Booking?: BookingUpdateManyWithoutUserNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutDriverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    roleId: number
    employeeId?: number | null
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    destinationStop: BusStopCreateNestedOneWithoutBookingDestinationInput
    originStop: BusStopCreateNestedOneWithoutBookingOriginInput
    user: UserCreateNestedOneWithoutBookingInput
    vehicleRouteSchedule: VehicleRouteScheduleCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    bookingId?: number
    originStopId: number
    destinationStopId: number
    userId: number
    vehicleRouteScheduleId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationStop?: BusStopUpdateOneRequiredWithoutBookingDestinationNestedInput
    originStop?: BusStopUpdateOneRequiredWithoutBookingOriginNestedInput
    user?: UserUpdateOneRequiredWithoutBookingNestedInput
    vehicleRouteSchedule?: VehicleRouteScheduleUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    originStopId?: IntFieldUpdateOperationsInput | number
    destinationStopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    bookingId?: number
    originStopId: number
    destinationStopId: number
    userId: number
    vehicleRouteScheduleId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    originStopId?: IntFieldUpdateOperationsInput | number
    destinationStopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PermissionCountOrderByAggregateInput = {
    permissionId?: SortOrder
    permissionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    permissionId?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    permissionId?: SortOrder
    permissionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    permissionId?: SortOrder
    permissionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    permissionId?: SortOrder
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionCountOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolePermissionAvgOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolePermissionSumOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    departmentId?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    departmentId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    employeeId?: SortOrder
    departmentId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    employeeId?: SortOrder
    departmentId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    employeeId?: SortOrder
    departmentId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    employeeId?: SortOrder
    departmentId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    employeeId?: SortOrder
    departmentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type RouteBusStopListRelationFilter = {
    every?: RouteBusStopWhereInput
    some?: RouteBusStopWhereInput
    none?: RouteBusStopWhereInput
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteBusStopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusStopCountOrderByAggregateInput = {
    busStopId?: SortOrder
    stopName?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusStopAvgOrderByAggregateInput = {
    busStopId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type BusStopMaxOrderByAggregateInput = {
    busStopId?: SortOrder
    stopName?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusStopMinOrderByAggregateInput = {
    busStopId?: SortOrder
    stopName?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusStopSumOrderByAggregateInput = {
    busStopId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type VehicleRouteScheduleListRelationFilter = {
    every?: VehicleRouteScheduleWhereInput
    some?: VehicleRouteScheduleWhereInput
    none?: VehicleRouteScheduleWhereInput
  }

  export type VehicleRouteScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteCountOrderByAggregateInput = {
    routeId?: SortOrder
    routeName?: SortOrder
    overallTravelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    routeId?: SortOrder
    overallTravelTime?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    routeId?: SortOrder
    routeName?: SortOrder
    overallTravelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    routeId?: SortOrder
    routeName?: SortOrder
    overallTravelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    routeId?: SortOrder
    overallTravelTime?: SortOrder
  }

  export type VehicleTypeCountOrderByAggregateInput = {
    VehicleTypeId?: SortOrder
    VehicleTypeName?: SortOrder
    defaultCapacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleTypeAvgOrderByAggregateInput = {
    VehicleTypeId?: SortOrder
    defaultCapacity?: SortOrder
  }

  export type VehicleTypeMaxOrderByAggregateInput = {
    VehicleTypeId?: SortOrder
    VehicleTypeName?: SortOrder
    defaultCapacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleTypeMinOrderByAggregateInput = {
    VehicleTypeId?: SortOrder
    VehicleTypeName?: SortOrder
    defaultCapacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleTypeSumOrderByAggregateInput = {
    VehicleTypeId?: SortOrder
    defaultCapacity?: SortOrder
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type BusStopScalarRelationFilter = {
    is?: BusStopWhereInput
    isNot?: BusStopWhereInput
  }

  export type RouteBusStopRouteIdBusStopIdCompoundUniqueInput = {
    routeId: number
    busStopId: number
  }

  export type RouteBusStopCountOrderByAggregateInput = {
    routeId?: SortOrder
    busStopId?: SortOrder
    nextStopId?: SortOrder
    stopOrder?: SortOrder
    travelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteBusStopAvgOrderByAggregateInput = {
    routeId?: SortOrder
    busStopId?: SortOrder
    nextStopId?: SortOrder
    stopOrder?: SortOrder
    travelTime?: SortOrder
  }

  export type RouteBusStopMaxOrderByAggregateInput = {
    routeId?: SortOrder
    busStopId?: SortOrder
    nextStopId?: SortOrder
    stopOrder?: SortOrder
    travelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteBusStopMinOrderByAggregateInput = {
    routeId?: SortOrder
    busStopId?: SortOrder
    nextStopId?: SortOrder
    stopOrder?: SortOrder
    travelTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteBusStopSumOrderByAggregateInput = {
    routeId?: SortOrder
    busStopId?: SortOrder
    nextStopId?: SortOrder
    stopOrder?: SortOrder
    travelTime?: SortOrder
  }

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type BusStopNullableScalarRelationFilter = {
    is?: BusStopWhereInput | null
    isNot?: BusStopWhereInput | null
  }

  export type VehicleTypeScalarRelationFilter = {
    is?: VehicleTypeWhereInput
    isNot?: VehicleTypeWhereInput
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    vehicleId?: SortOrder
    vehicleTypeId?: SortOrder
    currentStopId?: SortOrder
    licensePlate?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    vehicleId?: SortOrder
    vehicleTypeId?: SortOrder
    currentStopId?: SortOrder
    capacity?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    vehicleId?: SortOrder
    vehicleTypeId?: SortOrder
    currentStopId?: SortOrder
    licensePlate?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    vehicleId?: SortOrder
    vehicleTypeId?: SortOrder
    currentStopId?: SortOrder
    licensePlate?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    vehicleId?: SortOrder
    vehicleTypeId?: SortOrder
    currentStopId?: SortOrder
    capacity?: SortOrder
  }

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type EnumRouteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RouteStatus | EnumRouteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RouteStatus[] | ListEnumRouteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RouteStatus[] | ListEnumRouteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRouteStatusFilter<$PrismaModel> | $Enums.RouteStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type VehicleRouteScheduleCountOrderByAggregateInput = {
    vehicleRouteScheduleId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    scheduleTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleRouteScheduleAvgOrderByAggregateInput = {
    vehicleRouteScheduleId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
  }

  export type VehicleRouteScheduleMaxOrderByAggregateInput = {
    vehicleRouteScheduleId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    scheduleTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleRouteScheduleMinOrderByAggregateInput = {
    vehicleRouteScheduleId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    scheduleTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleRouteScheduleSumOrderByAggregateInput = {
    vehicleRouteScheduleId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
  }

  export type EnumRouteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RouteStatus | EnumRouteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RouteStatus[] | ListEnumRouteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RouteStatus[] | ListEnumRouteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRouteStatusWithAggregatesFilter<$PrismaModel> | $Enums.RouteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRouteStatusFilter<$PrismaModel>
    _max?: NestedEnumRouteStatusFilter<$PrismaModel>
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type VehicleRouteScheduleScalarRelationFilter = {
    is?: VehicleRouteScheduleWhereInput
    isNot?: VehicleRouteScheduleWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    bookingId?: SortOrder
    originStopId?: SortOrder
    destinationStopId?: SortOrder
    userId?: SortOrder
    vehicleRouteScheduleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    bookingId?: SortOrder
    originStopId?: SortOrder
    destinationStopId?: SortOrder
    userId?: SortOrder
    vehicleRouteScheduleId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    bookingId?: SortOrder
    originStopId?: SortOrder
    destinationStopId?: SortOrder
    userId?: SortOrder
    vehicleRouteScheduleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    bookingId?: SortOrder
    originStopId?: SortOrder
    destinationStopId?: SortOrder
    userId?: SortOrder
    vehicleRouteScheduleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    bookingId?: SortOrder
    originStopId?: SortOrder
    destinationStopId?: SortOrder
    userId?: SortOrder
    vehicleRouteScheduleId?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type PermissionCreateNestedOneWithoutRolePermissionInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutRolePermissionInput = {
    create?: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionUpdateOneRequiredWithoutRolePermissionNestedInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionInput
    upsert?: PermissionUpsertWithoutRolePermissionInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolePermissionInput, PermissionUpdateWithoutRolePermissionInput>, PermissionUncheckedUpdateWithoutRolePermissionInput>
  }

  export type RoleUpdateOneRequiredWithoutRolePermissionNestedInput = {
    create?: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionInput
    upsert?: RoleUpsertWithoutRolePermissionInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolePermissionInput, RoleUpdateWithoutRolePermissionInput>, RoleUncheckedUpdateWithoutRolePermissionInput>
  }

  export type EmployeeCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput> | UserCreateWithoutEmployeeInput[] | UserUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput | UserCreateOrConnectWithoutEmployeeInput[]
    createMany?: UserCreateManyEmployeeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput> | UserCreateWithoutEmployeeInput[] | UserUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput | UserCreateOrConnectWithoutEmployeeInput[]
    createMany?: UserCreateManyEmployeeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    upsert?: DepartmentUpsertWithoutEmployeesInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutEmployeesInput, DepartmentUpdateWithoutEmployeesInput>, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput> | UserCreateWithoutEmployeeInput[] | UserUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput | UserCreateOrConnectWithoutEmployeeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEmployeeInput | UserUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: UserCreateManyEmployeeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEmployeeInput | UserUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEmployeeInput | UserUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput> | UserCreateWithoutEmployeeInput[] | UserUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput | UserCreateOrConnectWithoutEmployeeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEmployeeInput | UserUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: UserCreateManyEmployeeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEmployeeInput | UserUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEmployeeInput | UserUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutDestinationStopInput = {
    create?: XOR<BookingCreateWithoutDestinationStopInput, BookingUncheckedCreateWithoutDestinationStopInput> | BookingCreateWithoutDestinationStopInput[] | BookingUncheckedCreateWithoutDestinationStopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDestinationStopInput | BookingCreateOrConnectWithoutDestinationStopInput[]
    createMany?: BookingCreateManyDestinationStopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutOriginStopInput = {
    create?: XOR<BookingCreateWithoutOriginStopInput, BookingUncheckedCreateWithoutOriginStopInput> | BookingCreateWithoutOriginStopInput[] | BookingUncheckedCreateWithoutOriginStopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOriginStopInput | BookingCreateOrConnectWithoutOriginStopInput[]
    createMany?: BookingCreateManyOriginStopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RouteBusStopCreateNestedManyWithoutBusStopInput = {
    create?: XOR<RouteBusStopCreateWithoutBusStopInput, RouteBusStopUncheckedCreateWithoutBusStopInput> | RouteBusStopCreateWithoutBusStopInput[] | RouteBusStopUncheckedCreateWithoutBusStopInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutBusStopInput | RouteBusStopCreateOrConnectWithoutBusStopInput[]
    createMany?: RouteBusStopCreateManyBusStopInputEnvelope
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
  }

  export type VehicleCreateNestedManyWithoutBusStopInput = {
    create?: XOR<VehicleCreateWithoutBusStopInput, VehicleUncheckedCreateWithoutBusStopInput> | VehicleCreateWithoutBusStopInput[] | VehicleUncheckedCreateWithoutBusStopInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutBusStopInput | VehicleCreateOrConnectWithoutBusStopInput[]
    createMany?: VehicleCreateManyBusStopInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutDestinationStopInput = {
    create?: XOR<BookingCreateWithoutDestinationStopInput, BookingUncheckedCreateWithoutDestinationStopInput> | BookingCreateWithoutDestinationStopInput[] | BookingUncheckedCreateWithoutDestinationStopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDestinationStopInput | BookingCreateOrConnectWithoutDestinationStopInput[]
    createMany?: BookingCreateManyDestinationStopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutOriginStopInput = {
    create?: XOR<BookingCreateWithoutOriginStopInput, BookingUncheckedCreateWithoutOriginStopInput> | BookingCreateWithoutOriginStopInput[] | BookingUncheckedCreateWithoutOriginStopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOriginStopInput | BookingCreateOrConnectWithoutOriginStopInput[]
    createMany?: BookingCreateManyOriginStopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RouteBusStopUncheckedCreateNestedManyWithoutBusStopInput = {
    create?: XOR<RouteBusStopCreateWithoutBusStopInput, RouteBusStopUncheckedCreateWithoutBusStopInput> | RouteBusStopCreateWithoutBusStopInput[] | RouteBusStopUncheckedCreateWithoutBusStopInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutBusStopInput | RouteBusStopCreateOrConnectWithoutBusStopInput[]
    createMany?: RouteBusStopCreateManyBusStopInputEnvelope
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutBusStopInput = {
    create?: XOR<VehicleCreateWithoutBusStopInput, VehicleUncheckedCreateWithoutBusStopInput> | VehicleCreateWithoutBusStopInput[] | VehicleUncheckedCreateWithoutBusStopInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutBusStopInput | VehicleCreateOrConnectWithoutBusStopInput[]
    createMany?: VehicleCreateManyBusStopInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUpdateManyWithoutDestinationStopNestedInput = {
    create?: XOR<BookingCreateWithoutDestinationStopInput, BookingUncheckedCreateWithoutDestinationStopInput> | BookingCreateWithoutDestinationStopInput[] | BookingUncheckedCreateWithoutDestinationStopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDestinationStopInput | BookingCreateOrConnectWithoutDestinationStopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDestinationStopInput | BookingUpsertWithWhereUniqueWithoutDestinationStopInput[]
    createMany?: BookingCreateManyDestinationStopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDestinationStopInput | BookingUpdateWithWhereUniqueWithoutDestinationStopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDestinationStopInput | BookingUpdateManyWithWhereWithoutDestinationStopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutOriginStopNestedInput = {
    create?: XOR<BookingCreateWithoutOriginStopInput, BookingUncheckedCreateWithoutOriginStopInput> | BookingCreateWithoutOriginStopInput[] | BookingUncheckedCreateWithoutOriginStopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOriginStopInput | BookingCreateOrConnectWithoutOriginStopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOriginStopInput | BookingUpsertWithWhereUniqueWithoutOriginStopInput[]
    createMany?: BookingCreateManyOriginStopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOriginStopInput | BookingUpdateWithWhereUniqueWithoutOriginStopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOriginStopInput | BookingUpdateManyWithWhereWithoutOriginStopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RouteBusStopUpdateManyWithoutBusStopNestedInput = {
    create?: XOR<RouteBusStopCreateWithoutBusStopInput, RouteBusStopUncheckedCreateWithoutBusStopInput> | RouteBusStopCreateWithoutBusStopInput[] | RouteBusStopUncheckedCreateWithoutBusStopInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutBusStopInput | RouteBusStopCreateOrConnectWithoutBusStopInput[]
    upsert?: RouteBusStopUpsertWithWhereUniqueWithoutBusStopInput | RouteBusStopUpsertWithWhereUniqueWithoutBusStopInput[]
    createMany?: RouteBusStopCreateManyBusStopInputEnvelope
    set?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    disconnect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    delete?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    update?: RouteBusStopUpdateWithWhereUniqueWithoutBusStopInput | RouteBusStopUpdateWithWhereUniqueWithoutBusStopInput[]
    updateMany?: RouteBusStopUpdateManyWithWhereWithoutBusStopInput | RouteBusStopUpdateManyWithWhereWithoutBusStopInput[]
    deleteMany?: RouteBusStopScalarWhereInput | RouteBusStopScalarWhereInput[]
  }

  export type VehicleUpdateManyWithoutBusStopNestedInput = {
    create?: XOR<VehicleCreateWithoutBusStopInput, VehicleUncheckedCreateWithoutBusStopInput> | VehicleCreateWithoutBusStopInput[] | VehicleUncheckedCreateWithoutBusStopInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutBusStopInput | VehicleCreateOrConnectWithoutBusStopInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutBusStopInput | VehicleUpsertWithWhereUniqueWithoutBusStopInput[]
    createMany?: VehicleCreateManyBusStopInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutBusStopInput | VehicleUpdateWithWhereUniqueWithoutBusStopInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutBusStopInput | VehicleUpdateManyWithWhereWithoutBusStopInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutDestinationStopNestedInput = {
    create?: XOR<BookingCreateWithoutDestinationStopInput, BookingUncheckedCreateWithoutDestinationStopInput> | BookingCreateWithoutDestinationStopInput[] | BookingUncheckedCreateWithoutDestinationStopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDestinationStopInput | BookingCreateOrConnectWithoutDestinationStopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDestinationStopInput | BookingUpsertWithWhereUniqueWithoutDestinationStopInput[]
    createMany?: BookingCreateManyDestinationStopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDestinationStopInput | BookingUpdateWithWhereUniqueWithoutDestinationStopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDestinationStopInput | BookingUpdateManyWithWhereWithoutDestinationStopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutOriginStopNestedInput = {
    create?: XOR<BookingCreateWithoutOriginStopInput, BookingUncheckedCreateWithoutOriginStopInput> | BookingCreateWithoutOriginStopInput[] | BookingUncheckedCreateWithoutOriginStopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOriginStopInput | BookingCreateOrConnectWithoutOriginStopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOriginStopInput | BookingUpsertWithWhereUniqueWithoutOriginStopInput[]
    createMany?: BookingCreateManyOriginStopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOriginStopInput | BookingUpdateWithWhereUniqueWithoutOriginStopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOriginStopInput | BookingUpdateManyWithWhereWithoutOriginStopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RouteBusStopUncheckedUpdateManyWithoutBusStopNestedInput = {
    create?: XOR<RouteBusStopCreateWithoutBusStopInput, RouteBusStopUncheckedCreateWithoutBusStopInput> | RouteBusStopCreateWithoutBusStopInput[] | RouteBusStopUncheckedCreateWithoutBusStopInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutBusStopInput | RouteBusStopCreateOrConnectWithoutBusStopInput[]
    upsert?: RouteBusStopUpsertWithWhereUniqueWithoutBusStopInput | RouteBusStopUpsertWithWhereUniqueWithoutBusStopInput[]
    createMany?: RouteBusStopCreateManyBusStopInputEnvelope
    set?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    disconnect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    delete?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    update?: RouteBusStopUpdateWithWhereUniqueWithoutBusStopInput | RouteBusStopUpdateWithWhereUniqueWithoutBusStopInput[]
    updateMany?: RouteBusStopUpdateManyWithWhereWithoutBusStopInput | RouteBusStopUpdateManyWithWhereWithoutBusStopInput[]
    deleteMany?: RouteBusStopScalarWhereInput | RouteBusStopScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutBusStopNestedInput = {
    create?: XOR<VehicleCreateWithoutBusStopInput, VehicleUncheckedCreateWithoutBusStopInput> | VehicleCreateWithoutBusStopInput[] | VehicleUncheckedCreateWithoutBusStopInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutBusStopInput | VehicleCreateOrConnectWithoutBusStopInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutBusStopInput | VehicleUpsertWithWhereUniqueWithoutBusStopInput[]
    createMany?: VehicleCreateManyBusStopInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutBusStopInput | VehicleUpdateWithWhereUniqueWithoutBusStopInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutBusStopInput | VehicleUpdateManyWithWhereWithoutBusStopInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type RouteBusStopCreateNestedManyWithoutNextStopInput = {
    create?: XOR<RouteBusStopCreateWithoutNextStopInput, RouteBusStopUncheckedCreateWithoutNextStopInput> | RouteBusStopCreateWithoutNextStopInput[] | RouteBusStopUncheckedCreateWithoutNextStopInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutNextStopInput | RouteBusStopCreateOrConnectWithoutNextStopInput[]
    createMany?: RouteBusStopCreateManyNextStopInputEnvelope
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
  }

  export type RouteBusStopCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteBusStopCreateWithoutRouteInput, RouteBusStopUncheckedCreateWithoutRouteInput> | RouteBusStopCreateWithoutRouteInput[] | RouteBusStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutRouteInput | RouteBusStopCreateOrConnectWithoutRouteInput[]
    createMany?: RouteBusStopCreateManyRouteInputEnvelope
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
  }

  export type VehicleRouteScheduleCreateNestedManyWithoutRouteInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutRouteInput, VehicleRouteScheduleUncheckedCreateWithoutRouteInput> | VehicleRouteScheduleCreateWithoutRouteInput[] | VehicleRouteScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutRouteInput | VehicleRouteScheduleCreateOrConnectWithoutRouteInput[]
    createMany?: VehicleRouteScheduleCreateManyRouteInputEnvelope
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
  }

  export type VehicleCreateNestedManyWithoutRouteInput = {
    create?: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput> | VehicleCreateWithoutRouteInput[] | VehicleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutRouteInput | VehicleCreateOrConnectWithoutRouteInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type RouteBusStopUncheckedCreateNestedManyWithoutNextStopInput = {
    create?: XOR<RouteBusStopCreateWithoutNextStopInput, RouteBusStopUncheckedCreateWithoutNextStopInput> | RouteBusStopCreateWithoutNextStopInput[] | RouteBusStopUncheckedCreateWithoutNextStopInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutNextStopInput | RouteBusStopCreateOrConnectWithoutNextStopInput[]
    createMany?: RouteBusStopCreateManyNextStopInputEnvelope
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
  }

  export type RouteBusStopUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteBusStopCreateWithoutRouteInput, RouteBusStopUncheckedCreateWithoutRouteInput> | RouteBusStopCreateWithoutRouteInput[] | RouteBusStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutRouteInput | RouteBusStopCreateOrConnectWithoutRouteInput[]
    createMany?: RouteBusStopCreateManyRouteInputEnvelope
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
  }

  export type VehicleRouteScheduleUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutRouteInput, VehicleRouteScheduleUncheckedCreateWithoutRouteInput> | VehicleRouteScheduleCreateWithoutRouteInput[] | VehicleRouteScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutRouteInput | VehicleRouteScheduleCreateOrConnectWithoutRouteInput[]
    createMany?: VehicleRouteScheduleCreateManyRouteInputEnvelope
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput> | VehicleCreateWithoutRouteInput[] | VehicleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutRouteInput | VehicleCreateOrConnectWithoutRouteInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type RouteBusStopUpdateManyWithoutNextStopNestedInput = {
    create?: XOR<RouteBusStopCreateWithoutNextStopInput, RouteBusStopUncheckedCreateWithoutNextStopInput> | RouteBusStopCreateWithoutNextStopInput[] | RouteBusStopUncheckedCreateWithoutNextStopInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutNextStopInput | RouteBusStopCreateOrConnectWithoutNextStopInput[]
    upsert?: RouteBusStopUpsertWithWhereUniqueWithoutNextStopInput | RouteBusStopUpsertWithWhereUniqueWithoutNextStopInput[]
    createMany?: RouteBusStopCreateManyNextStopInputEnvelope
    set?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    disconnect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    delete?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    update?: RouteBusStopUpdateWithWhereUniqueWithoutNextStopInput | RouteBusStopUpdateWithWhereUniqueWithoutNextStopInput[]
    updateMany?: RouteBusStopUpdateManyWithWhereWithoutNextStopInput | RouteBusStopUpdateManyWithWhereWithoutNextStopInput[]
    deleteMany?: RouteBusStopScalarWhereInput | RouteBusStopScalarWhereInput[]
  }

  export type RouteBusStopUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteBusStopCreateWithoutRouteInput, RouteBusStopUncheckedCreateWithoutRouteInput> | RouteBusStopCreateWithoutRouteInput[] | RouteBusStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutRouteInput | RouteBusStopCreateOrConnectWithoutRouteInput[]
    upsert?: RouteBusStopUpsertWithWhereUniqueWithoutRouteInput | RouteBusStopUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteBusStopCreateManyRouteInputEnvelope
    set?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    disconnect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    delete?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    update?: RouteBusStopUpdateWithWhereUniqueWithoutRouteInput | RouteBusStopUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteBusStopUpdateManyWithWhereWithoutRouteInput | RouteBusStopUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteBusStopScalarWhereInput | RouteBusStopScalarWhereInput[]
  }

  export type VehicleRouteScheduleUpdateManyWithoutRouteNestedInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutRouteInput, VehicleRouteScheduleUncheckedCreateWithoutRouteInput> | VehicleRouteScheduleCreateWithoutRouteInput[] | VehicleRouteScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutRouteInput | VehicleRouteScheduleCreateOrConnectWithoutRouteInput[]
    upsert?: VehicleRouteScheduleUpsertWithWhereUniqueWithoutRouteInput | VehicleRouteScheduleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: VehicleRouteScheduleCreateManyRouteInputEnvelope
    set?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    disconnect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    delete?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    update?: VehicleRouteScheduleUpdateWithWhereUniqueWithoutRouteInput | VehicleRouteScheduleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: VehicleRouteScheduleUpdateManyWithWhereWithoutRouteInput | VehicleRouteScheduleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: VehicleRouteScheduleScalarWhereInput | VehicleRouteScheduleScalarWhereInput[]
  }

  export type VehicleUpdateManyWithoutRouteNestedInput = {
    create?: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput> | VehicleCreateWithoutRouteInput[] | VehicleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutRouteInput | VehicleCreateOrConnectWithoutRouteInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutRouteInput | VehicleUpsertWithWhereUniqueWithoutRouteInput[]
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutRouteInput | VehicleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutRouteInput | VehicleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type RouteBusStopUncheckedUpdateManyWithoutNextStopNestedInput = {
    create?: XOR<RouteBusStopCreateWithoutNextStopInput, RouteBusStopUncheckedCreateWithoutNextStopInput> | RouteBusStopCreateWithoutNextStopInput[] | RouteBusStopUncheckedCreateWithoutNextStopInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutNextStopInput | RouteBusStopCreateOrConnectWithoutNextStopInput[]
    upsert?: RouteBusStopUpsertWithWhereUniqueWithoutNextStopInput | RouteBusStopUpsertWithWhereUniqueWithoutNextStopInput[]
    createMany?: RouteBusStopCreateManyNextStopInputEnvelope
    set?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    disconnect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    delete?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    update?: RouteBusStopUpdateWithWhereUniqueWithoutNextStopInput | RouteBusStopUpdateWithWhereUniqueWithoutNextStopInput[]
    updateMany?: RouteBusStopUpdateManyWithWhereWithoutNextStopInput | RouteBusStopUpdateManyWithWhereWithoutNextStopInput[]
    deleteMany?: RouteBusStopScalarWhereInput | RouteBusStopScalarWhereInput[]
  }

  export type RouteBusStopUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteBusStopCreateWithoutRouteInput, RouteBusStopUncheckedCreateWithoutRouteInput> | RouteBusStopCreateWithoutRouteInput[] | RouteBusStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteBusStopCreateOrConnectWithoutRouteInput | RouteBusStopCreateOrConnectWithoutRouteInput[]
    upsert?: RouteBusStopUpsertWithWhereUniqueWithoutRouteInput | RouteBusStopUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteBusStopCreateManyRouteInputEnvelope
    set?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    disconnect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    delete?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    connect?: RouteBusStopWhereUniqueInput | RouteBusStopWhereUniqueInput[]
    update?: RouteBusStopUpdateWithWhereUniqueWithoutRouteInput | RouteBusStopUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteBusStopUpdateManyWithWhereWithoutRouteInput | RouteBusStopUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteBusStopScalarWhereInput | RouteBusStopScalarWhereInput[]
  }

  export type VehicleRouteScheduleUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutRouteInput, VehicleRouteScheduleUncheckedCreateWithoutRouteInput> | VehicleRouteScheduleCreateWithoutRouteInput[] | VehicleRouteScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutRouteInput | VehicleRouteScheduleCreateOrConnectWithoutRouteInput[]
    upsert?: VehicleRouteScheduleUpsertWithWhereUniqueWithoutRouteInput | VehicleRouteScheduleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: VehicleRouteScheduleCreateManyRouteInputEnvelope
    set?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    disconnect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    delete?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    update?: VehicleRouteScheduleUpdateWithWhereUniqueWithoutRouteInput | VehicleRouteScheduleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: VehicleRouteScheduleUpdateManyWithWhereWithoutRouteInput | VehicleRouteScheduleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: VehicleRouteScheduleScalarWhereInput | VehicleRouteScheduleScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput> | VehicleCreateWithoutRouteInput[] | VehicleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutRouteInput | VehicleCreateOrConnectWithoutRouteInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutRouteInput | VehicleUpsertWithWhereUniqueWithoutRouteInput[]
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutRouteInput | VehicleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutRouteInput | VehicleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleCreateNestedManyWithoutVehicleTypeInput = {
    create?: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput> | VehicleCreateWithoutVehicleTypeInput[] | VehicleUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput | VehicleCreateOrConnectWithoutVehicleTypeInput[]
    createMany?: VehicleCreateManyVehicleTypeInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutVehicleTypeInput = {
    create?: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput> | VehicleCreateWithoutVehicleTypeInput[] | VehicleUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput | VehicleCreateOrConnectWithoutVehicleTypeInput[]
    createMany?: VehicleCreateManyVehicleTypeInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUpdateManyWithoutVehicleTypeNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput> | VehicleCreateWithoutVehicleTypeInput[] | VehicleUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput | VehicleCreateOrConnectWithoutVehicleTypeInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput | VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput[]
    createMany?: VehicleCreateManyVehicleTypeInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput | VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleTypeInput | VehicleUpdateManyWithWhereWithoutVehicleTypeInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleTypeNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput> | VehicleCreateWithoutVehicleTypeInput[] | VehicleUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput | VehicleCreateOrConnectWithoutVehicleTypeInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput | VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput[]
    createMany?: VehicleCreateManyVehicleTypeInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput | VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleTypeInput | VehicleUpdateManyWithWhereWithoutVehicleTypeInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutRouteBusStopInput = {
    create?: XOR<RouteCreateWithoutRouteBusStopInput, RouteUncheckedCreateWithoutRouteBusStopInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteBusStopInput
    connect?: RouteWhereUniqueInput
  }

  export type BusStopCreateNestedOneWithoutRouteBusStopInput = {
    create?: XOR<BusStopCreateWithoutRouteBusStopInput, BusStopUncheckedCreateWithoutRouteBusStopInput>
    connectOrCreate?: BusStopCreateOrConnectWithoutRouteBusStopInput
    connect?: BusStopWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutNextStopInput = {
    create?: XOR<RouteCreateWithoutNextStopInput, RouteUncheckedCreateWithoutNextStopInput>
    connectOrCreate?: RouteCreateOrConnectWithoutNextStopInput
    connect?: RouteWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutRouteBusStopNestedInput = {
    create?: XOR<RouteCreateWithoutRouteBusStopInput, RouteUncheckedCreateWithoutRouteBusStopInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteBusStopInput
    upsert?: RouteUpsertWithoutRouteBusStopInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutRouteBusStopInput, RouteUpdateWithoutRouteBusStopInput>, RouteUncheckedUpdateWithoutRouteBusStopInput>
  }

  export type BusStopUpdateOneRequiredWithoutRouteBusStopNestedInput = {
    create?: XOR<BusStopCreateWithoutRouteBusStopInput, BusStopUncheckedCreateWithoutRouteBusStopInput>
    connectOrCreate?: BusStopCreateOrConnectWithoutRouteBusStopInput
    upsert?: BusStopUpsertWithoutRouteBusStopInput
    connect?: BusStopWhereUniqueInput
    update?: XOR<XOR<BusStopUpdateToOneWithWhereWithoutRouteBusStopInput, BusStopUpdateWithoutRouteBusStopInput>, BusStopUncheckedUpdateWithoutRouteBusStopInput>
  }

  export type RouteUpdateOneRequiredWithoutNextStopNestedInput = {
    create?: XOR<RouteCreateWithoutNextStopInput, RouteUncheckedCreateWithoutNextStopInput>
    connectOrCreate?: RouteCreateOrConnectWithoutNextStopInput
    upsert?: RouteUpsertWithoutNextStopInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutNextStopInput, RouteUpdateWithoutNextStopInput>, RouteUncheckedUpdateWithoutNextStopInput>
  }

  export type BusStopCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<BusStopCreateWithoutVehiclesInput, BusStopUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: BusStopCreateOrConnectWithoutVehiclesInput
    connect?: BusStopWhereUniqueInput
  }

  export type VehicleTypeCreateNestedOneWithoutVehicleInput = {
    create?: XOR<VehicleTypeCreateWithoutVehicleInput, VehicleTypeUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutVehicleInput
    connect?: VehicleTypeWhereUniqueInput
  }

  export type VehicleRouteScheduleCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutVehicleInput, VehicleRouteScheduleUncheckedCreateWithoutVehicleInput> | VehicleRouteScheduleCreateWithoutVehicleInput[] | VehicleRouteScheduleUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutVehicleInput | VehicleRouteScheduleCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleRouteScheduleCreateManyVehicleInputEnvelope
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
  }

  export type RouteCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RouteCreateWithoutVehicleInput, RouteUncheckedCreateWithoutVehicleInput> | RouteCreateWithoutVehicleInput[] | RouteUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutVehicleInput | RouteCreateOrConnectWithoutVehicleInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type VehicleRouteScheduleUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutVehicleInput, VehicleRouteScheduleUncheckedCreateWithoutVehicleInput> | VehicleRouteScheduleCreateWithoutVehicleInput[] | VehicleRouteScheduleUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutVehicleInput | VehicleRouteScheduleCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleRouteScheduleCreateManyVehicleInputEnvelope
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RouteCreateWithoutVehicleInput, RouteUncheckedCreateWithoutVehicleInput> | RouteCreateWithoutVehicleInput[] | RouteUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutVehicleInput | RouteCreateOrConnectWithoutVehicleInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type BusStopUpdateOneWithoutVehiclesNestedInput = {
    create?: XOR<BusStopCreateWithoutVehiclesInput, BusStopUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: BusStopCreateOrConnectWithoutVehiclesInput
    upsert?: BusStopUpsertWithoutVehiclesInput
    disconnect?: BusStopWhereInput | boolean
    delete?: BusStopWhereInput | boolean
    connect?: BusStopWhereUniqueInput
    update?: XOR<XOR<BusStopUpdateToOneWithWhereWithoutVehiclesInput, BusStopUpdateWithoutVehiclesInput>, BusStopUncheckedUpdateWithoutVehiclesInput>
  }

  export type VehicleTypeUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<VehicleTypeCreateWithoutVehicleInput, VehicleTypeUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutVehicleInput
    upsert?: VehicleTypeUpsertWithoutVehicleInput
    connect?: VehicleTypeWhereUniqueInput
    update?: XOR<XOR<VehicleTypeUpdateToOneWithWhereWithoutVehicleInput, VehicleTypeUpdateWithoutVehicleInput>, VehicleTypeUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleRouteScheduleUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutVehicleInput, VehicleRouteScheduleUncheckedCreateWithoutVehicleInput> | VehicleRouteScheduleCreateWithoutVehicleInput[] | VehicleRouteScheduleUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutVehicleInput | VehicleRouteScheduleCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleRouteScheduleUpsertWithWhereUniqueWithoutVehicleInput | VehicleRouteScheduleUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleRouteScheduleCreateManyVehicleInputEnvelope
    set?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    disconnect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    delete?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    update?: VehicleRouteScheduleUpdateWithWhereUniqueWithoutVehicleInput | VehicleRouteScheduleUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleRouteScheduleUpdateManyWithWhereWithoutVehicleInput | VehicleRouteScheduleUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleRouteScheduleScalarWhereInput | VehicleRouteScheduleScalarWhereInput[]
  }

  export type RouteUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RouteCreateWithoutVehicleInput, RouteUncheckedCreateWithoutVehicleInput> | RouteCreateWithoutVehicleInput[] | RouteUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutVehicleInput | RouteCreateOrConnectWithoutVehicleInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutVehicleInput | RouteUpsertWithWhereUniqueWithoutVehicleInput[]
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutVehicleInput | RouteUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutVehicleInput | RouteUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type VehicleRouteScheduleUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutVehicleInput, VehicleRouteScheduleUncheckedCreateWithoutVehicleInput> | VehicleRouteScheduleCreateWithoutVehicleInput[] | VehicleRouteScheduleUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutVehicleInput | VehicleRouteScheduleCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleRouteScheduleUpsertWithWhereUniqueWithoutVehicleInput | VehicleRouteScheduleUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleRouteScheduleCreateManyVehicleInputEnvelope
    set?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    disconnect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    delete?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    update?: VehicleRouteScheduleUpdateWithWhereUniqueWithoutVehicleInput | VehicleRouteScheduleUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleRouteScheduleUpdateManyWithWhereWithoutVehicleInput | VehicleRouteScheduleUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleRouteScheduleScalarWhereInput | VehicleRouteScheduleScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RouteCreateWithoutVehicleInput, RouteUncheckedCreateWithoutVehicleInput> | RouteCreateWithoutVehicleInput[] | RouteUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutVehicleInput | RouteCreateOrConnectWithoutVehicleInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutVehicleInput | RouteUpsertWithWhereUniqueWithoutVehicleInput[]
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutVehicleInput | RouteUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutVehicleInput | RouteUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehicleRouteScheduleInput = {
    create?: XOR<UserCreateWithoutVehicleRouteScheduleInput, UserUncheckedCreateWithoutVehicleRouteScheduleInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehicleRouteScheduleInput
    connect?: UserWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutVehicleRouteScheduleInput = {
    create?: XOR<RouteCreateWithoutVehicleRouteScheduleInput, RouteUncheckedCreateWithoutVehicleRouteScheduleInput>
    connectOrCreate?: RouteCreateOrConnectWithoutVehicleRouteScheduleInput
    connect?: RouteWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutVehicleRouteScheduleInput = {
    create?: XOR<VehicleCreateWithoutVehicleRouteScheduleInput, VehicleUncheckedCreateWithoutVehicleRouteScheduleInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleRouteScheduleInput
    connect?: VehicleWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutVehicleRouteScheduleInput = {
    create?: XOR<BookingCreateWithoutVehicleRouteScheduleInput, BookingUncheckedCreateWithoutVehicleRouteScheduleInput> | BookingCreateWithoutVehicleRouteScheduleInput[] | BookingUncheckedCreateWithoutVehicleRouteScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVehicleRouteScheduleInput | BookingCreateOrConnectWithoutVehicleRouteScheduleInput[]
    createMany?: BookingCreateManyVehicleRouteScheduleInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutVehicleRouteScheduleInput = {
    create?: XOR<BookingCreateWithoutVehicleRouteScheduleInput, BookingUncheckedCreateWithoutVehicleRouteScheduleInput> | BookingCreateWithoutVehicleRouteScheduleInput[] | BookingUncheckedCreateWithoutVehicleRouteScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVehicleRouteScheduleInput | BookingCreateOrConnectWithoutVehicleRouteScheduleInput[]
    createMany?: BookingCreateManyVehicleRouteScheduleInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumRouteStatusFieldUpdateOperationsInput = {
    set?: $Enums.RouteStatus
  }

  export type UserUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput = {
    create?: XOR<UserCreateWithoutVehicleRouteScheduleInput, UserUncheckedCreateWithoutVehicleRouteScheduleInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehicleRouteScheduleInput
    upsert?: UserUpsertWithoutVehicleRouteScheduleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehicleRouteScheduleInput, UserUpdateWithoutVehicleRouteScheduleInput>, UserUncheckedUpdateWithoutVehicleRouteScheduleInput>
  }

  export type RouteUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput = {
    create?: XOR<RouteCreateWithoutVehicleRouteScheduleInput, RouteUncheckedCreateWithoutVehicleRouteScheduleInput>
    connectOrCreate?: RouteCreateOrConnectWithoutVehicleRouteScheduleInput
    upsert?: RouteUpsertWithoutVehicleRouteScheduleInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutVehicleRouteScheduleInput, RouteUpdateWithoutVehicleRouteScheduleInput>, RouteUncheckedUpdateWithoutVehicleRouteScheduleInput>
  }

  export type VehicleUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleRouteScheduleInput, VehicleUncheckedCreateWithoutVehicleRouteScheduleInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleRouteScheduleInput
    upsert?: VehicleUpsertWithoutVehicleRouteScheduleInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutVehicleRouteScheduleInput, VehicleUpdateWithoutVehicleRouteScheduleInput>, VehicleUncheckedUpdateWithoutVehicleRouteScheduleInput>
  }

  export type BookingUpdateManyWithoutVehicleRouteScheduleNestedInput = {
    create?: XOR<BookingCreateWithoutVehicleRouteScheduleInput, BookingUncheckedCreateWithoutVehicleRouteScheduleInput> | BookingCreateWithoutVehicleRouteScheduleInput[] | BookingUncheckedCreateWithoutVehicleRouteScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVehicleRouteScheduleInput | BookingCreateOrConnectWithoutVehicleRouteScheduleInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVehicleRouteScheduleInput | BookingUpsertWithWhereUniqueWithoutVehicleRouteScheduleInput[]
    createMany?: BookingCreateManyVehicleRouteScheduleInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVehicleRouteScheduleInput | BookingUpdateWithWhereUniqueWithoutVehicleRouteScheduleInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVehicleRouteScheduleInput | BookingUpdateManyWithWhereWithoutVehicleRouteScheduleInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutVehicleRouteScheduleNestedInput = {
    create?: XOR<BookingCreateWithoutVehicleRouteScheduleInput, BookingUncheckedCreateWithoutVehicleRouteScheduleInput> | BookingCreateWithoutVehicleRouteScheduleInput[] | BookingUncheckedCreateWithoutVehicleRouteScheduleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVehicleRouteScheduleInput | BookingCreateOrConnectWithoutVehicleRouteScheduleInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVehicleRouteScheduleInput | BookingUpsertWithWhereUniqueWithoutVehicleRouteScheduleInput[]
    createMany?: BookingCreateManyVehicleRouteScheduleInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVehicleRouteScheduleInput | BookingUpdateWithWhereUniqueWithoutVehicleRouteScheduleInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVehicleRouteScheduleInput | BookingUpdateManyWithWhereWithoutVehicleRouteScheduleInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type VehicleRouteScheduleCreateNestedManyWithoutDriverInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutDriverInput, VehicleRouteScheduleUncheckedCreateWithoutDriverInput> | VehicleRouteScheduleCreateWithoutDriverInput[] | VehicleRouteScheduleUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutDriverInput | VehicleRouteScheduleCreateOrConnectWithoutDriverInput[]
    createMany?: VehicleRouteScheduleCreateManyDriverInputEnvelope
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type VehicleRouteScheduleUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutDriverInput, VehicleRouteScheduleUncheckedCreateWithoutDriverInput> | VehicleRouteScheduleCreateWithoutDriverInput[] | VehicleRouteScheduleUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutDriverInput | VehicleRouteScheduleCreateOrConnectWithoutDriverInput[]
    createMany?: VehicleRouteScheduleCreateManyDriverInputEnvelope
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type VehicleRouteScheduleUpdateManyWithoutDriverNestedInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutDriverInput, VehicleRouteScheduleUncheckedCreateWithoutDriverInput> | VehicleRouteScheduleCreateWithoutDriverInput[] | VehicleRouteScheduleUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutDriverInput | VehicleRouteScheduleCreateOrConnectWithoutDriverInput[]
    upsert?: VehicleRouteScheduleUpsertWithWhereUniqueWithoutDriverInput | VehicleRouteScheduleUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: VehicleRouteScheduleCreateManyDriverInputEnvelope
    set?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    disconnect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    delete?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    update?: VehicleRouteScheduleUpdateWithWhereUniqueWithoutDriverInput | VehicleRouteScheduleUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: VehicleRouteScheduleUpdateManyWithWhereWithoutDriverInput | VehicleRouteScheduleUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: VehicleRouteScheduleScalarWhereInput | VehicleRouteScheduleScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type VehicleRouteScheduleUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutDriverInput, VehicleRouteScheduleUncheckedCreateWithoutDriverInput> | VehicleRouteScheduleCreateWithoutDriverInput[] | VehicleRouteScheduleUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutDriverInput | VehicleRouteScheduleCreateOrConnectWithoutDriverInput[]
    upsert?: VehicleRouteScheduleUpsertWithWhereUniqueWithoutDriverInput | VehicleRouteScheduleUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: VehicleRouteScheduleCreateManyDriverInputEnvelope
    set?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    disconnect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    delete?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    connect?: VehicleRouteScheduleWhereUniqueInput | VehicleRouteScheduleWhereUniqueInput[]
    update?: VehicleRouteScheduleUpdateWithWhereUniqueWithoutDriverInput | VehicleRouteScheduleUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: VehicleRouteScheduleUpdateManyWithWhereWithoutDriverInput | VehicleRouteScheduleUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: VehicleRouteScheduleScalarWhereInput | VehicleRouteScheduleScalarWhereInput[]
  }

  export type BusStopCreateNestedOneWithoutBookingDestinationInput = {
    create?: XOR<BusStopCreateWithoutBookingDestinationInput, BusStopUncheckedCreateWithoutBookingDestinationInput>
    connectOrCreate?: BusStopCreateOrConnectWithoutBookingDestinationInput
    connect?: BusStopWhereUniqueInput
  }

  export type BusStopCreateNestedOneWithoutBookingOriginInput = {
    create?: XOR<BusStopCreateWithoutBookingOriginInput, BusStopUncheckedCreateWithoutBookingOriginInput>
    connectOrCreate?: BusStopCreateOrConnectWithoutBookingOriginInput
    connect?: BusStopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleRouteScheduleCreateNestedOneWithoutBookingInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutBookingInput, VehicleRouteScheduleUncheckedCreateWithoutBookingInput>
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutBookingInput
    connect?: VehicleRouteScheduleWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type BusStopUpdateOneRequiredWithoutBookingDestinationNestedInput = {
    create?: XOR<BusStopCreateWithoutBookingDestinationInput, BusStopUncheckedCreateWithoutBookingDestinationInput>
    connectOrCreate?: BusStopCreateOrConnectWithoutBookingDestinationInput
    upsert?: BusStopUpsertWithoutBookingDestinationInput
    connect?: BusStopWhereUniqueInput
    update?: XOR<XOR<BusStopUpdateToOneWithWhereWithoutBookingDestinationInput, BusStopUpdateWithoutBookingDestinationInput>, BusStopUncheckedUpdateWithoutBookingDestinationInput>
  }

  export type BusStopUpdateOneRequiredWithoutBookingOriginNestedInput = {
    create?: XOR<BusStopCreateWithoutBookingOriginInput, BusStopUncheckedCreateWithoutBookingOriginInput>
    connectOrCreate?: BusStopCreateOrConnectWithoutBookingOriginInput
    upsert?: BusStopUpsertWithoutBookingOriginInput
    connect?: BusStopWhereUniqueInput
    update?: XOR<XOR<BusStopUpdateToOneWithWhereWithoutBookingOriginInput, BusStopUpdateWithoutBookingOriginInput>, BusStopUncheckedUpdateWithoutBookingOriginInput>
  }

  export type UserUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    upsert?: UserUpsertWithoutBookingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingInput, UserUpdateWithoutBookingInput>, UserUncheckedUpdateWithoutBookingInput>
  }

  export type VehicleRouteScheduleUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<VehicleRouteScheduleCreateWithoutBookingInput, VehicleRouteScheduleUncheckedCreateWithoutBookingInput>
    connectOrCreate?: VehicleRouteScheduleCreateOrConnectWithoutBookingInput
    upsert?: VehicleRouteScheduleUpsertWithoutBookingInput
    connect?: VehicleRouteScheduleWhereUniqueInput
    update?: XOR<XOR<VehicleRouteScheduleUpdateToOneWithWhereWithoutBookingInput, VehicleRouteScheduleUpdateWithoutBookingInput>, VehicleRouteScheduleUncheckedUpdateWithoutBookingInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type NestedEnumRouteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RouteStatus | EnumRouteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RouteStatus[] | ListEnumRouteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RouteStatus[] | ListEnumRouteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRouteStatusFilter<$PrismaModel> | $Enums.RouteStatus
  }

  export type NestedEnumRouteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RouteStatus | EnumRouteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RouteStatus[] | ListEnumRouteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RouteStatus[] | ListEnumRouteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRouteStatusWithAggregatesFilter<$PrismaModel> | $Enums.RouteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRouteStatusFilter<$PrismaModel>
    _max?: NestedEnumRouteStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type RolePermissionCreateWithoutRoleInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: PermissionCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    permissionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data: RolePermissionCreateManyRoleInput | RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRoleInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    Booking?: BookingCreateNestedManyWithoutUserInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutDriverInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    userId?: number
    employeeId?: number | null
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutDriverInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    userId?: IntFilter<"User"> | number
    roleId?: IntFilter<"User"> | number
    employeeId?: IntNullableFilter<"User"> | number | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RolePermissionCreateWithoutPermissionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data: RolePermissionCreateManyPermissionInput | RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionCreateWithoutRolePermissionInput = {
    permissionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutRolePermissionInput = {
    permissionId?: number
    permissionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutRolePermissionInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
  }

  export type RoleCreateWithoutRolePermissionInput = {
    roleName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePermissionInput = {
    roleId?: number
    roleName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolePermissionInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
  }

  export type PermissionUpsertWithoutRolePermissionInput = {
    update: XOR<PermissionUpdateWithoutRolePermissionInput, PermissionUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolePermissionInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolePermissionInput, PermissionUncheckedUpdateWithoutRolePermissionInput>
  }

  export type PermissionUpdateWithoutRolePermissionInput = {
    permissionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutRolePermissionInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    permissionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutRolePermissionInput = {
    update: XOR<RoleUpdateWithoutRolePermissionInput, RoleUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolePermissionInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolePermissionInput, RoleUncheckedUpdateWithoutRolePermissionInput>
  }

  export type RoleUpdateWithoutRolePermissionInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type EmployeeCreateWithoutDepartmentInput = {
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDepartmentInput = {
    employeeId?: number
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeCreateManyDepartmentInputEnvelope = {
    data: EmployeeCreateManyDepartmentInput | EmployeeCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    employeeId?: IntFilter<"Employee"> | number
    departmentId?: IntNullableFilter<"Employee"> | number | null
    position?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type DepartmentCreateWithoutEmployeesInput = {
    departmentName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUncheckedCreateWithoutEmployeesInput = {
    departmentId?: number
    departmentName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutEmployeesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
  }

  export type UserCreateWithoutEmployeeInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    Booking?: BookingCreateNestedManyWithoutUserInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutDriverInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    userId?: number
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutDriverInput
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type UserCreateManyEmployeeInputEnvelope = {
    data: UserCreateManyEmployeeInput | UserCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutEmployeesInput = {
    update: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentUpdateWithoutEmployeesInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateWithoutEmployeesInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateManyWithWhereWithoutEmployeeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type BookingCreateWithoutDestinationStopInput = {
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    originStop: BusStopCreateNestedOneWithoutBookingOriginInput
    user: UserCreateNestedOneWithoutBookingInput
    vehicleRouteSchedule: VehicleRouteScheduleCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutDestinationStopInput = {
    bookingId?: number
    originStopId: number
    userId: number
    vehicleRouteScheduleId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutDestinationStopInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutDestinationStopInput, BookingUncheckedCreateWithoutDestinationStopInput>
  }

  export type BookingCreateManyDestinationStopInputEnvelope = {
    data: BookingCreateManyDestinationStopInput | BookingCreateManyDestinationStopInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutOriginStopInput = {
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    destinationStop: BusStopCreateNestedOneWithoutBookingDestinationInput
    user: UserCreateNestedOneWithoutBookingInput
    vehicleRouteSchedule: VehicleRouteScheduleCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutOriginStopInput = {
    bookingId?: number
    destinationStopId: number
    userId: number
    vehicleRouteScheduleId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutOriginStopInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutOriginStopInput, BookingUncheckedCreateWithoutOriginStopInput>
  }

  export type BookingCreateManyOriginStopInputEnvelope = {
    data: BookingCreateManyOriginStopInput | BookingCreateManyOriginStopInput[]
    skipDuplicates?: boolean
  }

  export type RouteBusStopCreateWithoutBusStopInput = {
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutRouteBusStopInput
    nextStop: RouteCreateNestedOneWithoutNextStopInput
  }

  export type RouteBusStopUncheckedCreateWithoutBusStopInput = {
    routeId: number
    nextStopId: number
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteBusStopCreateOrConnectWithoutBusStopInput = {
    where: RouteBusStopWhereUniqueInput
    create: XOR<RouteBusStopCreateWithoutBusStopInput, RouteBusStopUncheckedCreateWithoutBusStopInput>
  }

  export type RouteBusStopCreateManyBusStopInputEnvelope = {
    data: RouteBusStopCreateManyBusStopInput | RouteBusStopCreateManyBusStopInput[]
    skipDuplicates?: boolean
  }

  export type VehicleCreateWithoutBusStopInput = {
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleType: VehicleTypeCreateNestedOneWithoutVehicleInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutVehicleInput
    Route?: RouteCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutBusStopInput = {
    vehicleId?: number
    vehicleTypeId: number
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutVehicleInput
    Route?: RouteUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutBusStopInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutBusStopInput, VehicleUncheckedCreateWithoutBusStopInput>
  }

  export type VehicleCreateManyBusStopInputEnvelope = {
    data: VehicleCreateManyBusStopInput | VehicleCreateManyBusStopInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutDestinationStopInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutDestinationStopInput, BookingUncheckedUpdateWithoutDestinationStopInput>
    create: XOR<BookingCreateWithoutDestinationStopInput, BookingUncheckedCreateWithoutDestinationStopInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutDestinationStopInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutDestinationStopInput, BookingUncheckedUpdateWithoutDestinationStopInput>
  }

  export type BookingUpdateManyWithWhereWithoutDestinationStopInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutDestinationStopInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    bookingId?: IntFilter<"Booking"> | number
    originStopId?: IntFilter<"Booking"> | number
    destinationStopId?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    vehicleRouteScheduleId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutOriginStopInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutOriginStopInput, BookingUncheckedUpdateWithoutOriginStopInput>
    create: XOR<BookingCreateWithoutOriginStopInput, BookingUncheckedCreateWithoutOriginStopInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutOriginStopInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutOriginStopInput, BookingUncheckedUpdateWithoutOriginStopInput>
  }

  export type BookingUpdateManyWithWhereWithoutOriginStopInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutOriginStopInput>
  }

  export type RouteBusStopUpsertWithWhereUniqueWithoutBusStopInput = {
    where: RouteBusStopWhereUniqueInput
    update: XOR<RouteBusStopUpdateWithoutBusStopInput, RouteBusStopUncheckedUpdateWithoutBusStopInput>
    create: XOR<RouteBusStopCreateWithoutBusStopInput, RouteBusStopUncheckedCreateWithoutBusStopInput>
  }

  export type RouteBusStopUpdateWithWhereUniqueWithoutBusStopInput = {
    where: RouteBusStopWhereUniqueInput
    data: XOR<RouteBusStopUpdateWithoutBusStopInput, RouteBusStopUncheckedUpdateWithoutBusStopInput>
  }

  export type RouteBusStopUpdateManyWithWhereWithoutBusStopInput = {
    where: RouteBusStopScalarWhereInput
    data: XOR<RouteBusStopUpdateManyMutationInput, RouteBusStopUncheckedUpdateManyWithoutBusStopInput>
  }

  export type RouteBusStopScalarWhereInput = {
    AND?: RouteBusStopScalarWhereInput | RouteBusStopScalarWhereInput[]
    OR?: RouteBusStopScalarWhereInput[]
    NOT?: RouteBusStopScalarWhereInput | RouteBusStopScalarWhereInput[]
    routeId?: IntFilter<"RouteBusStop"> | number
    busStopId?: IntFilter<"RouteBusStop"> | number
    nextStopId?: IntFilter<"RouteBusStop"> | number
    stopOrder?: IntFilter<"RouteBusStop"> | number
    travelTime?: IntFilter<"RouteBusStop"> | number
    createdAt?: DateTimeFilter<"RouteBusStop"> | Date | string
    updatedAt?: DateTimeFilter<"RouteBusStop"> | Date | string
  }

  export type VehicleUpsertWithWhereUniqueWithoutBusStopInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutBusStopInput, VehicleUncheckedUpdateWithoutBusStopInput>
    create: XOR<VehicleCreateWithoutBusStopInput, VehicleUncheckedCreateWithoutBusStopInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutBusStopInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutBusStopInput, VehicleUncheckedUpdateWithoutBusStopInput>
  }

  export type VehicleUpdateManyWithWhereWithoutBusStopInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutBusStopInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    vehicleId?: IntFilter<"Vehicle"> | number
    vehicleTypeId?: IntFilter<"Vehicle"> | number
    currentStopId?: IntNullableFilter<"Vehicle"> | number | null
    licensePlate?: StringFilter<"Vehicle"> | string
    capacity?: IntFilter<"Vehicle"> | number
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
  }

  export type RouteBusStopCreateWithoutNextStopInput = {
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutRouteBusStopInput
    busStop: BusStopCreateNestedOneWithoutRouteBusStopInput
  }

  export type RouteBusStopUncheckedCreateWithoutNextStopInput = {
    routeId: number
    busStopId: number
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteBusStopCreateOrConnectWithoutNextStopInput = {
    where: RouteBusStopWhereUniqueInput
    create: XOR<RouteBusStopCreateWithoutNextStopInput, RouteBusStopUncheckedCreateWithoutNextStopInput>
  }

  export type RouteBusStopCreateManyNextStopInputEnvelope = {
    data: RouteBusStopCreateManyNextStopInput | RouteBusStopCreateManyNextStopInput[]
    skipDuplicates?: boolean
  }

  export type RouteBusStopCreateWithoutRouteInput = {
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    busStop: BusStopCreateNestedOneWithoutRouteBusStopInput
    nextStop: RouteCreateNestedOneWithoutNextStopInput
  }

  export type RouteBusStopUncheckedCreateWithoutRouteInput = {
    busStopId: number
    nextStopId: number
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteBusStopCreateOrConnectWithoutRouteInput = {
    where: RouteBusStopWhereUniqueInput
    create: XOR<RouteBusStopCreateWithoutRouteInput, RouteBusStopUncheckedCreateWithoutRouteInput>
  }

  export type RouteBusStopCreateManyRouteInputEnvelope = {
    data: RouteBusStopCreateManyRouteInput | RouteBusStopCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type VehicleRouteScheduleCreateWithoutRouteInput = {
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: UserCreateNestedOneWithoutVehicleRouteScheduleInput
    vehicle: VehicleCreateNestedOneWithoutVehicleRouteScheduleInput
    Booking?: BookingCreateNestedManyWithoutVehicleRouteScheduleInput
  }

  export type VehicleRouteScheduleUncheckedCreateWithoutRouteInput = {
    vehicleRouteScheduleId?: number
    vehicleId: number
    driverId: number
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Booking?: BookingUncheckedCreateNestedManyWithoutVehicleRouteScheduleInput
  }

  export type VehicleRouteScheduleCreateOrConnectWithoutRouteInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    create: XOR<VehicleRouteScheduleCreateWithoutRouteInput, VehicleRouteScheduleUncheckedCreateWithoutRouteInput>
  }

  export type VehicleRouteScheduleCreateManyRouteInputEnvelope = {
    data: VehicleRouteScheduleCreateManyRouteInput | VehicleRouteScheduleCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type VehicleCreateWithoutRouteInput = {
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    busStop?: BusStopCreateNestedOneWithoutVehiclesInput
    vehicleType: VehicleTypeCreateNestedOneWithoutVehicleInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutRouteInput = {
    vehicleId?: number
    vehicleTypeId: number
    currentStopId?: number | null
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutRouteInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput>
  }

  export type RouteBusStopUpsertWithWhereUniqueWithoutNextStopInput = {
    where: RouteBusStopWhereUniqueInput
    update: XOR<RouteBusStopUpdateWithoutNextStopInput, RouteBusStopUncheckedUpdateWithoutNextStopInput>
    create: XOR<RouteBusStopCreateWithoutNextStopInput, RouteBusStopUncheckedCreateWithoutNextStopInput>
  }

  export type RouteBusStopUpdateWithWhereUniqueWithoutNextStopInput = {
    where: RouteBusStopWhereUniqueInput
    data: XOR<RouteBusStopUpdateWithoutNextStopInput, RouteBusStopUncheckedUpdateWithoutNextStopInput>
  }

  export type RouteBusStopUpdateManyWithWhereWithoutNextStopInput = {
    where: RouteBusStopScalarWhereInput
    data: XOR<RouteBusStopUpdateManyMutationInput, RouteBusStopUncheckedUpdateManyWithoutNextStopInput>
  }

  export type RouteBusStopUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteBusStopWhereUniqueInput
    update: XOR<RouteBusStopUpdateWithoutRouteInput, RouteBusStopUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteBusStopCreateWithoutRouteInput, RouteBusStopUncheckedCreateWithoutRouteInput>
  }

  export type RouteBusStopUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteBusStopWhereUniqueInput
    data: XOR<RouteBusStopUpdateWithoutRouteInput, RouteBusStopUncheckedUpdateWithoutRouteInput>
  }

  export type RouteBusStopUpdateManyWithWhereWithoutRouteInput = {
    where: RouteBusStopScalarWhereInput
    data: XOR<RouteBusStopUpdateManyMutationInput, RouteBusStopUncheckedUpdateManyWithoutRouteInput>
  }

  export type VehicleRouteScheduleUpsertWithWhereUniqueWithoutRouteInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    update: XOR<VehicleRouteScheduleUpdateWithoutRouteInput, VehicleRouteScheduleUncheckedUpdateWithoutRouteInput>
    create: XOR<VehicleRouteScheduleCreateWithoutRouteInput, VehicleRouteScheduleUncheckedCreateWithoutRouteInput>
  }

  export type VehicleRouteScheduleUpdateWithWhereUniqueWithoutRouteInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    data: XOR<VehicleRouteScheduleUpdateWithoutRouteInput, VehicleRouteScheduleUncheckedUpdateWithoutRouteInput>
  }

  export type VehicleRouteScheduleUpdateManyWithWhereWithoutRouteInput = {
    where: VehicleRouteScheduleScalarWhereInput
    data: XOR<VehicleRouteScheduleUpdateManyMutationInput, VehicleRouteScheduleUncheckedUpdateManyWithoutRouteInput>
  }

  export type VehicleRouteScheduleScalarWhereInput = {
    AND?: VehicleRouteScheduleScalarWhereInput | VehicleRouteScheduleScalarWhereInput[]
    OR?: VehicleRouteScheduleScalarWhereInput[]
    NOT?: VehicleRouteScheduleScalarWhereInput | VehicleRouteScheduleScalarWhereInput[]
    vehicleRouteScheduleId?: IntFilter<"VehicleRouteSchedule"> | number
    vehicleId?: IntFilter<"VehicleRouteSchedule"> | number
    routeId?: IntFilter<"VehicleRouteSchedule"> | number
    driverId?: IntFilter<"VehicleRouteSchedule"> | number
    scheduleTime?: DateTimeFilter<"VehicleRouteSchedule"> | Date | string
    status?: EnumRouteStatusFilter<"VehicleRouteSchedule"> | $Enums.RouteStatus
    createdAt?: DateTimeFilter<"VehicleRouteSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleRouteSchedule"> | Date | string
  }

  export type VehicleUpsertWithWhereUniqueWithoutRouteInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutRouteInput, VehicleUncheckedUpdateWithoutRouteInput>
    create: XOR<VehicleCreateWithoutRouteInput, VehicleUncheckedCreateWithoutRouteInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutRouteInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutRouteInput, VehicleUncheckedUpdateWithoutRouteInput>
  }

  export type VehicleUpdateManyWithWhereWithoutRouteInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutRouteInput>
  }

  export type VehicleCreateWithoutVehicleTypeInput = {
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    busStop?: BusStopCreateNestedOneWithoutVehiclesInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutVehicleInput
    Route?: RouteCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutVehicleTypeInput = {
    vehicleId?: number
    currentStopId?: number | null
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutVehicleInput
    Route?: RouteUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutVehicleTypeInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput>
  }

  export type VehicleCreateManyVehicleTypeInputEnvelope = {
    data: VehicleCreateManyVehicleTypeInput | VehicleCreateManyVehicleTypeInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutVehicleTypeInput, VehicleUncheckedUpdateWithoutVehicleTypeInput>
    create: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutVehicleTypeInput, VehicleUncheckedUpdateWithoutVehicleTypeInput>
  }

  export type VehicleUpdateManyWithWhereWithoutVehicleTypeInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutVehicleTypeInput>
  }

  export type RouteCreateWithoutRouteBusStopInput = {
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    NextStop?: RouteBusStopCreateNestedManyWithoutNextStopInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutRouteInput
    Vehicle?: VehicleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutRouteBusStopInput = {
    routeId?: number
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    NextStop?: RouteBusStopUncheckedCreateNestedManyWithoutNextStopInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutRouteInput
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutRouteBusStopInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutRouteBusStopInput, RouteUncheckedCreateWithoutRouteBusStopInput>
  }

  export type BusStopCreateWithoutRouteBusStopInput = {
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingDestination?: BookingCreateNestedManyWithoutDestinationStopInput
    BookingOrigin?: BookingCreateNestedManyWithoutOriginStopInput
    vehicles?: VehicleCreateNestedManyWithoutBusStopInput
  }

  export type BusStopUncheckedCreateWithoutRouteBusStopInput = {
    busStopId?: number
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingDestination?: BookingUncheckedCreateNestedManyWithoutDestinationStopInput
    BookingOrigin?: BookingUncheckedCreateNestedManyWithoutOriginStopInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutBusStopInput
  }

  export type BusStopCreateOrConnectWithoutRouteBusStopInput = {
    where: BusStopWhereUniqueInput
    create: XOR<BusStopCreateWithoutRouteBusStopInput, BusStopUncheckedCreateWithoutRouteBusStopInput>
  }

  export type RouteCreateWithoutNextStopInput = {
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    RouteBusStop?: RouteBusStopCreateNestedManyWithoutRouteInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutRouteInput
    Vehicle?: VehicleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutNextStopInput = {
    routeId?: number
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    RouteBusStop?: RouteBusStopUncheckedCreateNestedManyWithoutRouteInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutRouteInput
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutNextStopInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutNextStopInput, RouteUncheckedCreateWithoutNextStopInput>
  }

  export type RouteUpsertWithoutRouteBusStopInput = {
    update: XOR<RouteUpdateWithoutRouteBusStopInput, RouteUncheckedUpdateWithoutRouteBusStopInput>
    create: XOR<RouteCreateWithoutRouteBusStopInput, RouteUncheckedCreateWithoutRouteBusStopInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutRouteBusStopInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutRouteBusStopInput, RouteUncheckedUpdateWithoutRouteBusStopInput>
  }

  export type RouteUpdateWithoutRouteBusStopInput = {
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NextStop?: RouteBusStopUpdateManyWithoutNextStopNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutRouteNestedInput
    Vehicle?: VehicleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutRouteBusStopInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NextStop?: RouteBusStopUncheckedUpdateManyWithoutNextStopNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutRouteNestedInput
    Vehicle?: VehicleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type BusStopUpsertWithoutRouteBusStopInput = {
    update: XOR<BusStopUpdateWithoutRouteBusStopInput, BusStopUncheckedUpdateWithoutRouteBusStopInput>
    create: XOR<BusStopCreateWithoutRouteBusStopInput, BusStopUncheckedCreateWithoutRouteBusStopInput>
    where?: BusStopWhereInput
  }

  export type BusStopUpdateToOneWithWhereWithoutRouteBusStopInput = {
    where?: BusStopWhereInput
    data: XOR<BusStopUpdateWithoutRouteBusStopInput, BusStopUncheckedUpdateWithoutRouteBusStopInput>
  }

  export type BusStopUpdateWithoutRouteBusStopInput = {
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingDestination?: BookingUpdateManyWithoutDestinationStopNestedInput
    BookingOrigin?: BookingUpdateManyWithoutOriginStopNestedInput
    vehicles?: VehicleUpdateManyWithoutBusStopNestedInput
  }

  export type BusStopUncheckedUpdateWithoutRouteBusStopInput = {
    busStopId?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingDestination?: BookingUncheckedUpdateManyWithoutDestinationStopNestedInput
    BookingOrigin?: BookingUncheckedUpdateManyWithoutOriginStopNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutBusStopNestedInput
  }

  export type RouteUpsertWithoutNextStopInput = {
    update: XOR<RouteUpdateWithoutNextStopInput, RouteUncheckedUpdateWithoutNextStopInput>
    create: XOR<RouteCreateWithoutNextStopInput, RouteUncheckedCreateWithoutNextStopInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutNextStopInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutNextStopInput, RouteUncheckedUpdateWithoutNextStopInput>
  }

  export type RouteUpdateWithoutNextStopInput = {
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RouteBusStop?: RouteBusStopUpdateManyWithoutRouteNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutRouteNestedInput
    Vehicle?: VehicleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutNextStopInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RouteBusStop?: RouteBusStopUncheckedUpdateManyWithoutRouteNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutRouteNestedInput
    Vehicle?: VehicleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type BusStopCreateWithoutVehiclesInput = {
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingDestination?: BookingCreateNestedManyWithoutDestinationStopInput
    BookingOrigin?: BookingCreateNestedManyWithoutOriginStopInput
    RouteBusStop?: RouteBusStopCreateNestedManyWithoutBusStopInput
  }

  export type BusStopUncheckedCreateWithoutVehiclesInput = {
    busStopId?: number
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingDestination?: BookingUncheckedCreateNestedManyWithoutDestinationStopInput
    BookingOrigin?: BookingUncheckedCreateNestedManyWithoutOriginStopInput
    RouteBusStop?: RouteBusStopUncheckedCreateNestedManyWithoutBusStopInput
  }

  export type BusStopCreateOrConnectWithoutVehiclesInput = {
    where: BusStopWhereUniqueInput
    create: XOR<BusStopCreateWithoutVehiclesInput, BusStopUncheckedCreateWithoutVehiclesInput>
  }

  export type VehicleTypeCreateWithoutVehicleInput = {
    VehicleTypeName: string
    defaultCapacity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleTypeUncheckedCreateWithoutVehicleInput = {
    VehicleTypeId?: number
    VehicleTypeName: string
    defaultCapacity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleTypeCreateOrConnectWithoutVehicleInput = {
    where: VehicleTypeWhereUniqueInput
    create: XOR<VehicleTypeCreateWithoutVehicleInput, VehicleTypeUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleRouteScheduleCreateWithoutVehicleInput = {
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: UserCreateNestedOneWithoutVehicleRouteScheduleInput
    route: RouteCreateNestedOneWithoutVehicleRouteScheduleInput
    Booking?: BookingCreateNestedManyWithoutVehicleRouteScheduleInput
  }

  export type VehicleRouteScheduleUncheckedCreateWithoutVehicleInput = {
    vehicleRouteScheduleId?: number
    routeId: number
    driverId: number
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Booking?: BookingUncheckedCreateNestedManyWithoutVehicleRouteScheduleInput
  }

  export type VehicleRouteScheduleCreateOrConnectWithoutVehicleInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    create: XOR<VehicleRouteScheduleCreateWithoutVehicleInput, VehicleRouteScheduleUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleRouteScheduleCreateManyVehicleInputEnvelope = {
    data: VehicleRouteScheduleCreateManyVehicleInput | VehicleRouteScheduleCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type RouteCreateWithoutVehicleInput = {
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    NextStop?: RouteBusStopCreateNestedManyWithoutNextStopInput
    RouteBusStop?: RouteBusStopCreateNestedManyWithoutRouteInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutVehicleInput = {
    routeId?: number
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    NextStop?: RouteBusStopUncheckedCreateNestedManyWithoutNextStopInput
    RouteBusStop?: RouteBusStopUncheckedCreateNestedManyWithoutRouteInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutVehicleInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutVehicleInput, RouteUncheckedCreateWithoutVehicleInput>
  }

  export type BusStopUpsertWithoutVehiclesInput = {
    update: XOR<BusStopUpdateWithoutVehiclesInput, BusStopUncheckedUpdateWithoutVehiclesInput>
    create: XOR<BusStopCreateWithoutVehiclesInput, BusStopUncheckedCreateWithoutVehiclesInput>
    where?: BusStopWhereInput
  }

  export type BusStopUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: BusStopWhereInput
    data: XOR<BusStopUpdateWithoutVehiclesInput, BusStopUncheckedUpdateWithoutVehiclesInput>
  }

  export type BusStopUpdateWithoutVehiclesInput = {
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingDestination?: BookingUpdateManyWithoutDestinationStopNestedInput
    BookingOrigin?: BookingUpdateManyWithoutOriginStopNestedInput
    RouteBusStop?: RouteBusStopUpdateManyWithoutBusStopNestedInput
  }

  export type BusStopUncheckedUpdateWithoutVehiclesInput = {
    busStopId?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingDestination?: BookingUncheckedUpdateManyWithoutDestinationStopNestedInput
    BookingOrigin?: BookingUncheckedUpdateManyWithoutOriginStopNestedInput
    RouteBusStop?: RouteBusStopUncheckedUpdateManyWithoutBusStopNestedInput
  }

  export type VehicleTypeUpsertWithoutVehicleInput = {
    update: XOR<VehicleTypeUpdateWithoutVehicleInput, VehicleTypeUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleTypeCreateWithoutVehicleInput, VehicleTypeUncheckedCreateWithoutVehicleInput>
    where?: VehicleTypeWhereInput
  }

  export type VehicleTypeUpdateToOneWithWhereWithoutVehicleInput = {
    where?: VehicleTypeWhereInput
    data: XOR<VehicleTypeUpdateWithoutVehicleInput, VehicleTypeUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleTypeUpdateWithoutVehicleInput = {
    VehicleTypeName?: StringFieldUpdateOperationsInput | string
    defaultCapacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeUncheckedUpdateWithoutVehicleInput = {
    VehicleTypeId?: IntFieldUpdateOperationsInput | number
    VehicleTypeName?: StringFieldUpdateOperationsInput | string
    defaultCapacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleRouteScheduleUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    update: XOR<VehicleRouteScheduleUpdateWithoutVehicleInput, VehicleRouteScheduleUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleRouteScheduleCreateWithoutVehicleInput, VehicleRouteScheduleUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleRouteScheduleUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    data: XOR<VehicleRouteScheduleUpdateWithoutVehicleInput, VehicleRouteScheduleUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleRouteScheduleUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleRouteScheduleScalarWhereInput
    data: XOR<VehicleRouteScheduleUpdateManyMutationInput, VehicleRouteScheduleUncheckedUpdateManyWithoutVehicleInput>
  }

  export type RouteUpsertWithWhereUniqueWithoutVehicleInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutVehicleInput, RouteUncheckedUpdateWithoutVehicleInput>
    create: XOR<RouteCreateWithoutVehicleInput, RouteUncheckedCreateWithoutVehicleInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutVehicleInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutVehicleInput, RouteUncheckedUpdateWithoutVehicleInput>
  }

  export type RouteUpdateManyWithWhereWithoutVehicleInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutVehicleInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    routeId?: IntFilter<"Route"> | number
    routeName?: StringFilter<"Route"> | string
    overallTravelTime?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
  }

  export type UserCreateWithoutVehicleRouteScheduleInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    Booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVehicleRouteScheduleInput = {
    userId?: number
    roleId: number
    employeeId?: number | null
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVehicleRouteScheduleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehicleRouteScheduleInput, UserUncheckedCreateWithoutVehicleRouteScheduleInput>
  }

  export type RouteCreateWithoutVehicleRouteScheduleInput = {
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    NextStop?: RouteBusStopCreateNestedManyWithoutNextStopInput
    RouteBusStop?: RouteBusStopCreateNestedManyWithoutRouteInput
    Vehicle?: VehicleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutVehicleRouteScheduleInput = {
    routeId?: number
    routeName: string
    overallTravelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    NextStop?: RouteBusStopUncheckedCreateNestedManyWithoutNextStopInput
    RouteBusStop?: RouteBusStopUncheckedCreateNestedManyWithoutRouteInput
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutVehicleRouteScheduleInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutVehicleRouteScheduleInput, RouteUncheckedCreateWithoutVehicleRouteScheduleInput>
  }

  export type VehicleCreateWithoutVehicleRouteScheduleInput = {
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    busStop?: BusStopCreateNestedOneWithoutVehiclesInput
    vehicleType: VehicleTypeCreateNestedOneWithoutVehicleInput
    Route?: RouteCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutVehicleRouteScheduleInput = {
    vehicleId?: number
    vehicleTypeId: number
    currentStopId?: number | null
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Route?: RouteUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutVehicleRouteScheduleInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutVehicleRouteScheduleInput, VehicleUncheckedCreateWithoutVehicleRouteScheduleInput>
  }

  export type BookingCreateWithoutVehicleRouteScheduleInput = {
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    destinationStop: BusStopCreateNestedOneWithoutBookingDestinationInput
    originStop: BusStopCreateNestedOneWithoutBookingOriginInput
    user: UserCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutVehicleRouteScheduleInput = {
    bookingId?: number
    originStopId: number
    destinationStopId: number
    userId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutVehicleRouteScheduleInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutVehicleRouteScheduleInput, BookingUncheckedCreateWithoutVehicleRouteScheduleInput>
  }

  export type BookingCreateManyVehicleRouteScheduleInputEnvelope = {
    data: BookingCreateManyVehicleRouteScheduleInput | BookingCreateManyVehicleRouteScheduleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehicleRouteScheduleInput = {
    update: XOR<UserUpdateWithoutVehicleRouteScheduleInput, UserUncheckedUpdateWithoutVehicleRouteScheduleInput>
    create: XOR<UserCreateWithoutVehicleRouteScheduleInput, UserUncheckedCreateWithoutVehicleRouteScheduleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehicleRouteScheduleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehicleRouteScheduleInput, UserUncheckedUpdateWithoutVehicleRouteScheduleInput>
  }

  export type UserUpdateWithoutVehicleRouteScheduleInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    Booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVehicleRouteScheduleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RouteUpsertWithoutVehicleRouteScheduleInput = {
    update: XOR<RouteUpdateWithoutVehicleRouteScheduleInput, RouteUncheckedUpdateWithoutVehicleRouteScheduleInput>
    create: XOR<RouteCreateWithoutVehicleRouteScheduleInput, RouteUncheckedCreateWithoutVehicleRouteScheduleInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutVehicleRouteScheduleInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutVehicleRouteScheduleInput, RouteUncheckedUpdateWithoutVehicleRouteScheduleInput>
  }

  export type RouteUpdateWithoutVehicleRouteScheduleInput = {
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NextStop?: RouteBusStopUpdateManyWithoutNextStopNestedInput
    RouteBusStop?: RouteBusStopUpdateManyWithoutRouteNestedInput
    Vehicle?: VehicleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutVehicleRouteScheduleInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NextStop?: RouteBusStopUncheckedUpdateManyWithoutNextStopNestedInput
    RouteBusStop?: RouteBusStopUncheckedUpdateManyWithoutRouteNestedInput
    Vehicle?: VehicleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type VehicleUpsertWithoutVehicleRouteScheduleInput = {
    update: XOR<VehicleUpdateWithoutVehicleRouteScheduleInput, VehicleUncheckedUpdateWithoutVehicleRouteScheduleInput>
    create: XOR<VehicleCreateWithoutVehicleRouteScheduleInput, VehicleUncheckedCreateWithoutVehicleRouteScheduleInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutVehicleRouteScheduleInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutVehicleRouteScheduleInput, VehicleUncheckedUpdateWithoutVehicleRouteScheduleInput>
  }

  export type VehicleUpdateWithoutVehicleRouteScheduleInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busStop?: BusStopUpdateOneWithoutVehiclesNestedInput
    vehicleType?: VehicleTypeUpdateOneRequiredWithoutVehicleNestedInput
    Route?: RouteUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutVehicleRouteScheduleInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    vehicleTypeId?: IntFieldUpdateOperationsInput | number
    currentStopId?: NullableIntFieldUpdateOperationsInput | number | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Route?: RouteUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutVehicleRouteScheduleInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutVehicleRouteScheduleInput, BookingUncheckedUpdateWithoutVehicleRouteScheduleInput>
    create: XOR<BookingCreateWithoutVehicleRouteScheduleInput, BookingUncheckedCreateWithoutVehicleRouteScheduleInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutVehicleRouteScheduleInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutVehicleRouteScheduleInput, BookingUncheckedUpdateWithoutVehicleRouteScheduleInput>
  }

  export type BookingUpdateManyWithWhereWithoutVehicleRouteScheduleInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutVehicleRouteScheduleInput>
  }

  export type EmployeeCreateWithoutUserInput = {
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    employeeId?: number
    departmentId?: number | null
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type RoleCreateWithoutUsersInput = {
    roleName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    roleId?: number
    roleName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type BookingCreateWithoutUserInput = {
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    destinationStop: BusStopCreateNestedOneWithoutBookingDestinationInput
    originStop: BusStopCreateNestedOneWithoutBookingOriginInput
    vehicleRouteSchedule: VehicleRouteScheduleCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    bookingId?: number
    originStopId: number
    destinationStopId: number
    vehicleRouteScheduleId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VehicleRouteScheduleCreateWithoutDriverInput = {
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutVehicleRouteScheduleInput
    vehicle: VehicleCreateNestedOneWithoutVehicleRouteScheduleInput
    Booking?: BookingCreateNestedManyWithoutVehicleRouteScheduleInput
  }

  export type VehicleRouteScheduleUncheckedCreateWithoutDriverInput = {
    vehicleRouteScheduleId?: number
    vehicleId: number
    routeId: number
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Booking?: BookingUncheckedCreateNestedManyWithoutVehicleRouteScheduleInput
  }

  export type VehicleRouteScheduleCreateOrConnectWithoutDriverInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    create: XOR<VehicleRouteScheduleCreateWithoutDriverInput, VehicleRouteScheduleUncheckedCreateWithoutDriverInput>
  }

  export type VehicleRouteScheduleCreateManyDriverInputEnvelope = {
    data: VehicleRouteScheduleCreateManyDriverInput | VehicleRouteScheduleCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type VehicleRouteScheduleUpsertWithWhereUniqueWithoutDriverInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    update: XOR<VehicleRouteScheduleUpdateWithoutDriverInput, VehicleRouteScheduleUncheckedUpdateWithoutDriverInput>
    create: XOR<VehicleRouteScheduleCreateWithoutDriverInput, VehicleRouteScheduleUncheckedCreateWithoutDriverInput>
  }

  export type VehicleRouteScheduleUpdateWithWhereUniqueWithoutDriverInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    data: XOR<VehicleRouteScheduleUpdateWithoutDriverInput, VehicleRouteScheduleUncheckedUpdateWithoutDriverInput>
  }

  export type VehicleRouteScheduleUpdateManyWithWhereWithoutDriverInput = {
    where: VehicleRouteScheduleScalarWhereInput
    data: XOR<VehicleRouteScheduleUpdateManyMutationInput, VehicleRouteScheduleUncheckedUpdateManyWithoutDriverInput>
  }

  export type BusStopCreateWithoutBookingDestinationInput = {
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingOrigin?: BookingCreateNestedManyWithoutOriginStopInput
    RouteBusStop?: RouteBusStopCreateNestedManyWithoutBusStopInput
    vehicles?: VehicleCreateNestedManyWithoutBusStopInput
  }

  export type BusStopUncheckedCreateWithoutBookingDestinationInput = {
    busStopId?: number
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingOrigin?: BookingUncheckedCreateNestedManyWithoutOriginStopInput
    RouteBusStop?: RouteBusStopUncheckedCreateNestedManyWithoutBusStopInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutBusStopInput
  }

  export type BusStopCreateOrConnectWithoutBookingDestinationInput = {
    where: BusStopWhereUniqueInput
    create: XOR<BusStopCreateWithoutBookingDestinationInput, BusStopUncheckedCreateWithoutBookingDestinationInput>
  }

  export type BusStopCreateWithoutBookingOriginInput = {
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingDestination?: BookingCreateNestedManyWithoutDestinationStopInput
    RouteBusStop?: RouteBusStopCreateNestedManyWithoutBusStopInput
    vehicles?: VehicleCreateNestedManyWithoutBusStopInput
  }

  export type BusStopUncheckedCreateWithoutBookingOriginInput = {
    busStopId?: number
    stopName: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BookingDestination?: BookingUncheckedCreateNestedManyWithoutDestinationStopInput
    RouteBusStop?: RouteBusStopUncheckedCreateNestedManyWithoutBusStopInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutBusStopInput
  }

  export type BusStopCreateOrConnectWithoutBookingOriginInput = {
    where: BusStopWhereUniqueInput
    create: XOR<BusStopCreateWithoutBookingOriginInput, BusStopUncheckedCreateWithoutBookingOriginInput>
  }

  export type UserCreateWithoutBookingInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
    VehicleRouteSchedule?: VehicleRouteScheduleCreateNestedManyWithoutDriverInput
  }

  export type UserUncheckedCreateWithoutBookingInput = {
    userId?: number
    roleId: number
    employeeId?: number | null
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedCreateNestedManyWithoutDriverInput
  }

  export type UserCreateOrConnectWithoutBookingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
  }

  export type VehicleRouteScheduleCreateWithoutBookingInput = {
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: UserCreateNestedOneWithoutVehicleRouteScheduleInput
    route: RouteCreateNestedOneWithoutVehicleRouteScheduleInput
    vehicle: VehicleCreateNestedOneWithoutVehicleRouteScheduleInput
  }

  export type VehicleRouteScheduleUncheckedCreateWithoutBookingInput = {
    vehicleRouteScheduleId?: number
    vehicleId: number
    routeId: number
    driverId: number
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleRouteScheduleCreateOrConnectWithoutBookingInput = {
    where: VehicleRouteScheduleWhereUniqueInput
    create: XOR<VehicleRouteScheduleCreateWithoutBookingInput, VehicleRouteScheduleUncheckedCreateWithoutBookingInput>
  }

  export type BusStopUpsertWithoutBookingDestinationInput = {
    update: XOR<BusStopUpdateWithoutBookingDestinationInput, BusStopUncheckedUpdateWithoutBookingDestinationInput>
    create: XOR<BusStopCreateWithoutBookingDestinationInput, BusStopUncheckedCreateWithoutBookingDestinationInput>
    where?: BusStopWhereInput
  }

  export type BusStopUpdateToOneWithWhereWithoutBookingDestinationInput = {
    where?: BusStopWhereInput
    data: XOR<BusStopUpdateWithoutBookingDestinationInput, BusStopUncheckedUpdateWithoutBookingDestinationInput>
  }

  export type BusStopUpdateWithoutBookingDestinationInput = {
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingOrigin?: BookingUpdateManyWithoutOriginStopNestedInput
    RouteBusStop?: RouteBusStopUpdateManyWithoutBusStopNestedInput
    vehicles?: VehicleUpdateManyWithoutBusStopNestedInput
  }

  export type BusStopUncheckedUpdateWithoutBookingDestinationInput = {
    busStopId?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingOrigin?: BookingUncheckedUpdateManyWithoutOriginStopNestedInput
    RouteBusStop?: RouteBusStopUncheckedUpdateManyWithoutBusStopNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutBusStopNestedInput
  }

  export type BusStopUpsertWithoutBookingOriginInput = {
    update: XOR<BusStopUpdateWithoutBookingOriginInput, BusStopUncheckedUpdateWithoutBookingOriginInput>
    create: XOR<BusStopCreateWithoutBookingOriginInput, BusStopUncheckedCreateWithoutBookingOriginInput>
    where?: BusStopWhereInput
  }

  export type BusStopUpdateToOneWithWhereWithoutBookingOriginInput = {
    where?: BusStopWhereInput
    data: XOR<BusStopUpdateWithoutBookingOriginInput, BusStopUncheckedUpdateWithoutBookingOriginInput>
  }

  export type BusStopUpdateWithoutBookingOriginInput = {
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingDestination?: BookingUpdateManyWithoutDestinationStopNestedInput
    RouteBusStop?: RouteBusStopUpdateManyWithoutBusStopNestedInput
    vehicles?: VehicleUpdateManyWithoutBusStopNestedInput
  }

  export type BusStopUncheckedUpdateWithoutBookingOriginInput = {
    busStopId?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookingDestination?: BookingUncheckedUpdateManyWithoutDestinationStopNestedInput
    RouteBusStop?: RouteBusStopUncheckedUpdateManyWithoutBusStopNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutBusStopNestedInput
  }

  export type UserUpsertWithoutBookingInput = {
    update: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateWithoutBookingInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutDriverNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type VehicleRouteScheduleUpsertWithoutBookingInput = {
    update: XOR<VehicleRouteScheduleUpdateWithoutBookingInput, VehicleRouteScheduleUncheckedUpdateWithoutBookingInput>
    create: XOR<VehicleRouteScheduleCreateWithoutBookingInput, VehicleRouteScheduleUncheckedCreateWithoutBookingInput>
    where?: VehicleRouteScheduleWhereInput
  }

  export type VehicleRouteScheduleUpdateToOneWithWhereWithoutBookingInput = {
    where?: VehicleRouteScheduleWhereInput
    data: XOR<VehicleRouteScheduleUpdateWithoutBookingInput, VehicleRouteScheduleUncheckedUpdateWithoutBookingInput>
  }

  export type VehicleRouteScheduleUpdateWithoutBookingInput = {
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    route?: RouteUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
  }

  export type VehicleRouteScheduleUncheckedUpdateWithoutBookingInput = {
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyRoleInput = {
    permissionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyRoleInput = {
    userId?: number
    employeeId?: number | null
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    Booking?: BookingUpdateManyWithoutUserNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutDriverNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyPermissionInput = {
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateWithoutPermissionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyDepartmentInput = {
    employeeId?: number
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutDepartmentInput = {
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDepartmentInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyEmployeeInput = {
    userId?: number
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutEmployeeInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    Booking?: BookingUpdateManyWithoutUserNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutDriverNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutEmployeeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyDestinationStopInput = {
    bookingId?: number
    originStopId: number
    userId: number
    vehicleRouteScheduleId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyOriginStopInput = {
    bookingId?: number
    destinationStopId: number
    userId: number
    vehicleRouteScheduleId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteBusStopCreateManyBusStopInput = {
    routeId: number
    nextStopId: number
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleCreateManyBusStopInput = {
    vehicleId?: number
    vehicleTypeId: number
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutDestinationStopInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStop?: BusStopUpdateOneRequiredWithoutBookingOriginNestedInput
    user?: UserUpdateOneRequiredWithoutBookingNestedInput
    vehicleRouteSchedule?: VehicleRouteScheduleUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutDestinationStopInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    originStopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutDestinationStopInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    originStopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutOriginStopInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationStop?: BusStopUpdateOneRequiredWithoutBookingDestinationNestedInput
    user?: UserUpdateOneRequiredWithoutBookingNestedInput
    vehicleRouteSchedule?: VehicleRouteScheduleUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutOriginStopInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    destinationStopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutOriginStopInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    destinationStopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteBusStopUpdateWithoutBusStopInput = {
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRouteBusStopNestedInput
    nextStop?: RouteUpdateOneRequiredWithoutNextStopNestedInput
  }

  export type RouteBusStopUncheckedUpdateWithoutBusStopInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    nextStopId?: IntFieldUpdateOperationsInput | number
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteBusStopUncheckedUpdateManyWithoutBusStopInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    nextStopId?: IntFieldUpdateOperationsInput | number
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUpdateWithoutBusStopInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleType?: VehicleTypeUpdateOneRequiredWithoutVehicleNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutVehicleNestedInput
    Route?: RouteUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutBusStopInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    vehicleTypeId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutVehicleNestedInput
    Route?: RouteUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutBusStopInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    vehicleTypeId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteBusStopCreateManyNextStopInput = {
    routeId: number
    busStopId: number
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteBusStopCreateManyRouteInput = {
    busStopId: number
    nextStopId: number
    stopOrder: number
    travelTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleRouteScheduleCreateManyRouteInput = {
    vehicleRouteScheduleId?: number
    vehicleId: number
    driverId: number
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteBusStopUpdateWithoutNextStopInput = {
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRouteBusStopNestedInput
    busStop?: BusStopUpdateOneRequiredWithoutRouteBusStopNestedInput
  }

  export type RouteBusStopUncheckedUpdateWithoutNextStopInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    busStopId?: IntFieldUpdateOperationsInput | number
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteBusStopUncheckedUpdateManyWithoutNextStopInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    busStopId?: IntFieldUpdateOperationsInput | number
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteBusStopUpdateWithoutRouteInput = {
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busStop?: BusStopUpdateOneRequiredWithoutRouteBusStopNestedInput
    nextStop?: RouteUpdateOneRequiredWithoutNextStopNestedInput
  }

  export type RouteBusStopUncheckedUpdateWithoutRouteInput = {
    busStopId?: IntFieldUpdateOperationsInput | number
    nextStopId?: IntFieldUpdateOperationsInput | number
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteBusStopUncheckedUpdateManyWithoutRouteInput = {
    busStopId?: IntFieldUpdateOperationsInput | number
    nextStopId?: IntFieldUpdateOperationsInput | number
    stopOrder?: IntFieldUpdateOperationsInput | number
    travelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleRouteScheduleUpdateWithoutRouteInput = {
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    Booking?: BookingUpdateManyWithoutVehicleRouteScheduleNestedInput
  }

  export type VehicleRouteScheduleUncheckedUpdateWithoutRouteInput = {
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Booking?: BookingUncheckedUpdateManyWithoutVehicleRouteScheduleNestedInput
  }

  export type VehicleRouteScheduleUncheckedUpdateManyWithoutRouteInput = {
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUpdateWithoutRouteInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busStop?: BusStopUpdateOneWithoutVehiclesNestedInput
    vehicleType?: VehicleTypeUpdateOneRequiredWithoutVehicleNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutRouteInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    vehicleTypeId?: IntFieldUpdateOperationsInput | number
    currentStopId?: NullableIntFieldUpdateOperationsInput | number | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutRouteInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    vehicleTypeId?: IntFieldUpdateOperationsInput | number
    currentStopId?: NullableIntFieldUpdateOperationsInput | number | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateManyVehicleTypeInput = {
    vehicleId?: number
    currentStopId?: number | null
    licensePlate: string
    capacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateWithoutVehicleTypeInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busStop?: BusStopUpdateOneWithoutVehiclesNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutVehicleNestedInput
    Route?: RouteUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutVehicleTypeInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    currentStopId?: NullableIntFieldUpdateOperationsInput | number | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutVehicleNestedInput
    Route?: RouteUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleTypeInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    currentStopId?: NullableIntFieldUpdateOperationsInput | number | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleRouteScheduleCreateManyVehicleInput = {
    vehicleRouteScheduleId?: number
    routeId: number
    driverId: number
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleRouteScheduleUpdateWithoutVehicleInput = {
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    route?: RouteUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    Booking?: BookingUpdateManyWithoutVehicleRouteScheduleNestedInput
  }

  export type VehicleRouteScheduleUncheckedUpdateWithoutVehicleInput = {
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Booking?: BookingUncheckedUpdateManyWithoutVehicleRouteScheduleNestedInput
  }

  export type VehicleRouteScheduleUncheckedUpdateManyWithoutVehicleInput = {
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpdateWithoutVehicleInput = {
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NextStop?: RouteBusStopUpdateManyWithoutNextStopNestedInput
    RouteBusStop?: RouteBusStopUpdateManyWithoutRouteNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutVehicleInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NextStop?: RouteBusStopUncheckedUpdateManyWithoutNextStopNestedInput
    RouteBusStop?: RouteBusStopUncheckedUpdateManyWithoutRouteNestedInput
    VehicleRouteSchedule?: VehicleRouteScheduleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutVehicleInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    overallTravelTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyVehicleRouteScheduleInput = {
    bookingId?: number
    originStopId: number
    destinationStopId: number
    userId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutVehicleRouteScheduleInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationStop?: BusStopUpdateOneRequiredWithoutBookingDestinationNestedInput
    originStop?: BusStopUpdateOneRequiredWithoutBookingOriginNestedInput
    user?: UserUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutVehicleRouteScheduleInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    originStopId?: IntFieldUpdateOperationsInput | number
    destinationStopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutVehicleRouteScheduleInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    originStopId?: IntFieldUpdateOperationsInput | number
    destinationStopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyUserInput = {
    bookingId?: number
    originStopId: number
    destinationStopId: number
    vehicleRouteScheduleId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleRouteScheduleCreateManyDriverInput = {
    vehicleRouteScheduleId?: number
    vehicleId: number
    routeId: number
    scheduleTime: Date | string
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationStop?: BusStopUpdateOneRequiredWithoutBookingDestinationNestedInput
    originStop?: BusStopUpdateOneRequiredWithoutBookingOriginNestedInput
    vehicleRouteSchedule?: VehicleRouteScheduleUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    originStopId?: IntFieldUpdateOperationsInput | number
    destinationStopId?: IntFieldUpdateOperationsInput | number
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    originStopId?: IntFieldUpdateOperationsInput | number
    destinationStopId?: IntFieldUpdateOperationsInput | number
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleRouteScheduleUpdateWithoutDriverInput = {
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutVehicleRouteScheduleNestedInput
    Booking?: BookingUpdateManyWithoutVehicleRouteScheduleNestedInput
  }

  export type VehicleRouteScheduleUncheckedUpdateWithoutDriverInput = {
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Booking?: BookingUncheckedUpdateManyWithoutVehicleRouteScheduleNestedInput
  }

  export type VehicleRouteScheduleUncheckedUpdateManyWithoutDriverInput = {
    vehicleRouteScheduleId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}