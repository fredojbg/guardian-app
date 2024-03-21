import { OrgSidebar } from "@/components/layout/sidebar";
import { Navbar } from "./_components/navbar";
// import { OrgSidebar } from "./_components/org-sidebar";
import { Sidebar } from "./_components/sidebar";

interface DashbaordLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashbaordLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-y-3 h-full">
          {/* <OrgSidebar /> */}
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
