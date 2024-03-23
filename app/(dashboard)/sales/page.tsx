"use client";
import React from "react";
import { SalesTable } from "@/components/tables/sale-tables/sales";
import { CardOverView } from "@/components/card-overview";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const SalesPage = ({ searchParams }: DashboardPageProps) => {
  return (
    <div className="flex-1 h-[calc(100vh-80px)] p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Fazer filter */}
        <CardOverView />
        <CardOverView />
        <CardOverView />
        <CardOverView />
      </div>
      <SalesTable />
    </div>
  );
};

export default SalesPage;
