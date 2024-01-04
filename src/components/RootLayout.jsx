import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="bg-orange-100">
        <Outlet />
      </main>
      <footer>Feito com React Router Dom</footer>
    </>
  );
}
