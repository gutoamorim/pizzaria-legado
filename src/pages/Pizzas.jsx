import Card from "../components/Card";
import pizzas from "../database.json";

console.log(pizzas);
export default function Pizzas() {
  return (
    <section className="container m-auto pt-4">
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
          />
        ))}
      </div>
    </section>
  );
}
