import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ContainerProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function Container({ title, description, children }: ContainerProps) {
  return (
    <div className="w-full border-1 p-5 rounded-md bg-gray-800 text-white shadow-2xl">
      <div className="mb-4">
        <h1 className="text-center text-2xl font-bold">{title}</h1>
      </div>
      <div className="mb-6">
        <p className="text-center text-lg">{description}</p>
      </div>
      {children}
    </div>
  );
}

export default Container;
