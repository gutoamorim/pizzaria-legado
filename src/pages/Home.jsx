import { Link } from "react-router-dom";
import pizza from "../assets/pizza-desenho.png";

export default function Home() {
  return (
    <section className="container m-auto flex items-center">
      <div>
        <h1 className="text-6xl font-bold mb-2">Pizzas 10% OFF</h1>
        <h2 className="text-4xl font-light mb-2">Confira no cardápio</h2>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          vitae beatae sint magnam, libero harum quae nobis veritatis iure hic
          provident illo porro.
        </p>
        <Link
          className="bg-orange-400 py-2 px-6 rounded-lg text-xl text-white font-medium"
          to="/pizzas"
        >
          Fazer pedido
        </Link>
      </div>
      <div>
        <img src={pizza} alt="" className="w-5/6" />
      </div>
    </section>
  );
}
