import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Header() {
  const { cart } = useContext(GlobalContext);
  const quantity = cart.length;

  return (
    <header className="h-20 p-2 bg-red-500">
      <div className="container m-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logomarca" className="max-h-16" />
        </Link>
        <nav className="flex items-center gap-4 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/pizzas">Pizzas</Link>
          {quantity > 0 && (
            <Link to="/pizzas" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <div className="bg-orange-300 rounded-full text-center px-2 absolute -mt-10 -right-5">
                {quantity}
              </div>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
