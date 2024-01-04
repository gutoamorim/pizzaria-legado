import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <>
      <Header className="flex-shrink-0" />
      <main className="bg-orange-100 flex-1">
        <Outlet />
      </main>
    </>
  );
}
