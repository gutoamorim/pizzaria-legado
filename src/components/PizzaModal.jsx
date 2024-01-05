import { useRef, useState } from "react";

export default function PizzaModal({ modal, setModal, pizzaItem }) {
  if (!modal) return null;

  const { id, img, name, description, price } = pizzaItem;
  const [quantity, setQuantity] = useState(1);

  const p = useRef();
  const m = useRef();
  const g = useRef();

  function handleSize(e) {
    const sizes = document.querySelectorAll("#sizes div");
    sizes.forEach((size) => {
      size.classList.remove("bg-orange-200", "bg-orange-300");
      if (size === e.target) {
        size.classList.add("bg-orange-300");
        console.log(size.innerHTML);
      } else {
        size.classList.add("bg-orange-200");
      }
    });
  }

  function handleQuantity(e) {
    console.log(e.target.id);
  }

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-black/50 flex items-center justify-center">
      <div className="flex gap-10 bg-orange-100 p-5 rounded max-w-3xl justify-center">
        <img src={img} alt="" className="max-w-80" />

        <div>
          <h1 className="text-2xl font-medium">{name}</h1>

          <p className="mb-4">{description}</p>

          <span className="text-orange-400">TAMANHO</span>
          <div className="flex mb-4" id="sizes">
            <div
              className="bg-orange-200 p-2 rounded-tl-xl rounded-bl-xl cursor-pointer hover:bg-orange-300"
              ref={p}
              onClick={handleSize}
            >
              <p>Pequena</p> ({pizzaItem.sizes[0]})
            </div>
            <div
              className="bg-orange-200 p-2 cursor-pointer hover:bg-orange-300"
              ref={m}
              onClick={handleSize}
            >
              MÉDIO
            </div>
            <div
              className="bg-orange-300 p-2 rounded-tr-xl rounded-br-xl cursor-pointer hover:bg-orange-300"
              ref={g}
              onClick={handleSize}
            >
              GRANDE
            </div>
          </div>

          <span className="text-orange-400">PREÇO</span>
          <div className="flex items-center gap-5 mb-10">
            <span className="text-3xl">
              {price[2].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <div className="flex">
              <div className="bg-orange-200 p-2 rounded-tl-xl rounded-bl-xl cursor-pointer hover:bg-orange-300">
                -
              </div>
              <div className="bg-orange-200 p-2">{quantity}</div>
              <div
                id="add"
                className="bg-orange-200 p-2 rounded-tr-xl rounded-br-xl cursor-pointer hover:bg-orange-300"
                onClick={handleQuantity}
              >
                +
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-orange-300 px-5 py-2 rounded-xl cursor-pointer hover:bg-orange-400">
              Adicionar ao carrinho
            </div>
            <div
              className="cursor-pointer px-2 py-2"
              onClick={() => setModal((state) => !state)}
            >
              Cancelar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
