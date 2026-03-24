import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import PixelStickers from "../decorations/PixelStickers";

interface DashboardLayoutProps {
  children: ReactNode;
  breadcrumb: string[];
}

const DashboardLayout = ({ children, breadcrumb }: DashboardLayoutProps) => (
  <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden relative">
      <TopBar breadcrumb={breadcrumb} />
      <main className="flex-1 overflow-y-auto p-6 relative">
        {children}
        <PixelStickers />
      </main>
    </div>
  </div>
);

export default DashboardLayout;
