import React from "react";
import { Route as RouteIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <div className="p-2 sm:p-3 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl shadow-lg">
          <RouteIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="h-0.5 sm:h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full shadow-sm"></div>
    </div>
  );
}
