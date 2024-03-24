import { OrgSidebar } from "@/components/layout/sidebar";
import { Navbar } from "./dashboard/_components/navbar";
import { Sidebar } from "./dashboard/_components/sidebar";

interface DashbaordLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashbaordLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-y-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
