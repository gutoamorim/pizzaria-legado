import pizzas from "../database.json";
import Card from "../components/Card";
import Cart from "../components/Cart";
import PizzaModal from "../components/PizzaModal";
import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Pizzas() {
  const [modal, setModal] = useState(false);
  const [pizzaItem, setPizzaItem] = useState(null);
  const { cart } = useContext(GlobalContext);

  return (
    <>
      <section className="gap-0.5">
        <h1 className="text-4xl font-bold text-center mb-4">Pizzas</h1>
        <div className="flex gap-2 container m-auto pt-4">
          <div className="flex flex-wrap gap-3">
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
          <div>{cart.length > 0 && <Cart />}</div>
        </div>
      </section>
      <PizzaModal modal={modal} setModal={setModal} pizzaItem={pizzaItem} />
    </>
  );
}
