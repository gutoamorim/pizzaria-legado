import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="h-20 p-2 bg-red-500">
      <div className="container m-auto flex items-center justify-between">
        <img src={logo} alt="Logomarca" className="max-h-16" />
        <nav className="flex items-center gap-4 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/pizzas">Pizzas</Link>
        </nav>
      </div>
    </header>
  );
}
