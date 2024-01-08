import pizzas from "../database.json";
import Card from "../components/Card";
import Cart from "../components/Cart";
import PizzaModal from "../components/PizzaModal";
import { useState } from "react";

export default function Pizzas() {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [pizzaItem, setPizzaItem] = useState(null);

  return (
    <>
      <section className="flex gap-0.5">
        <div className="container m-auto pt-4">
          <h1 className="text-4xl font-bold text-center mb-4">Pizzas</h1>
          <div className="flex flex-wrap gap-5">
            {pizzas.map((pizza) => (
              <Card
                key={pizza.id}
                img={pizza.img}
                price={pizza.price[2].toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
                title={pizza.name}
                description={pizza.description}
                setModal={setModal}
                pizzaItem={pizza}
                setPizzaItem={setPizzaItem}
              />
            ))}
          </div>
        </div>
        <div>
          <Cart />
        </div>
      </section>
      <PizzaModal modal={modal} setModal={setModal} pizzaItem={pizzaItem} />
    </>
  );
}
