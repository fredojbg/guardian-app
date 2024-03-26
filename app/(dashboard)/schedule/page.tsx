"use client";

import React from "react";
import {
  Calendar,
  Col,
  FloatButton,
  Radio,
  Row,
  Select,
  Typography,
} from "antd"; // Importando o componente do calendário
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import type { Dayjs } from "dayjs";
import dayLocaleData from "dayjs/plugin/localeData";
import type { BadgeProps, CalendarProps } from "antd";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "antd";
import { Button } from "@/components/ui/button";
import { CalendarDateRangePicker } from "@/components/date-picker";
import {
  Plus,
  CalendarOff,
  CalendarCheck2,
  CalendarHeart,
  CalendarDays,
  CalendarCheck,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

dayjs.extend(dayLocaleData);
const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  // const { organization } = useOrganization();

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 h-[calc(100vh-80px)] pl-6 pr-6">
        <div className="flex items-center justify-between space-y-2 pb-3">
          <h2 className="text-3xl font-bold tracking-tight">Agendamentos 🗓️</h2>
          <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Buscar</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hoje</CardTitle>
              <CalendarDays />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">agendamentos</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cancelados</CardTitle>
              <CalendarOff />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">agendamentos</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Concluidos</CardTitle>
              <CalendarCheck2 />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50</div>
              <p className="text-xs text-muted-foreground">agendamentos</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total</CardTitle>
              <CalendarHeart />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground">agendamentos</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Calendar
            headerRender={({ value, type, onChange, onTypeChange }) => {
              const start = 0;
              const end = 12;
              const monthOptions = [];

              let current = value.clone();
              const localeData = value.localeData();
              const months = [];
              for (let i = 0; i < 12; i++) {
                current = current.month(i);
                months.push(localeData.monthsShort(current));
              }

              for (let i = start; i < end; i++) {
                monthOptions.push(
                  <Select.Option key={i} value={i} className="month-item">
                    {months[i]}
                  </Select.Option>
                );
              }

              const year = value.year();
              const month = value.month();
              const options = [];
              for (let i = year - 10; i < year + 10; i += 1) {
                options.push(
                  <Select.Option key={i} value={i} className="year-item">
                    {i}
                  </Select.Option>
                );
              }
              return (
                <div className="flex justify-end pt-3 pb-3">
                  <Row gutter={8}>
                    <Col>
                      <Button variant="default">
                        <Plus className="mr-2 h-4 w-4" />
                        Novo agendamento
                      </Button>
                    </Col>
                    {/* <Col>
                    <Radio.Group
                      size="small"
                      onChange={(e) => onTypeChange(e.target.value)}
                      value={type}
                    >
                      <Radio.Button value="month">Month</Radio.Button>
                      <Radio.Button value="year">Year</Radio.Button>
                    </Radio.Group>
                  </Col> */}
                    {/* <Col>
                    <Select
                      size="small"
                      dropdownMatchSelectWidth={false}
                      className="my-year-select"
                      value={year}
                      onChange={(newYear) => {
                        const now = value.clone().year(newYear);
                        onChange(now);
                      }}
                    >
                      {options}
                    </Select>
                  </Col> */}
                    {/* <Col>
                    <Select
                      size="small"
                      dropdownMatchSelectWidth={false}
                      value={month}
                      onChange={(newMonth) => {
                        const now = value.clone().month(newMonth);
                        onChange(now);
                      }}
                    >
                      {monthOptions}
                    </Select>
                  </Col> */}
                  </Row>
                </div>
              );
            }}
            onPanelChange={onPanelChange}
          />
        </div>
      </div>
    </ScrollArea>
  );
};

export default DashboardPage;
