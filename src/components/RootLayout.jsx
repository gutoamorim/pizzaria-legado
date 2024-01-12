import { Outlet } from "react-router-dom";
import Header from "./Header";
import { GlobalContextProvider } from "../contexts/GlobalContext";

export default function RootLayout() {
  return (
    <>
      <GlobalContextProvider>
        <Header className="flex-shrink-0" />
        <main className="bg-orange-100 flex-1">
          <Outlet />
        </main>
      </GlobalContextProvider>
    </>
  );
}
