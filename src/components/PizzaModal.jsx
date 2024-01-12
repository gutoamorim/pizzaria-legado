import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function PizzaModal({ modal, setModal, pizzaItem }) {
  if (!modal) return null;

  const defaultOrder = {
    id: `P${pizzaItem.id}G`,
    img: pizzaItem.img,
    name: `${pizzaItem.name} (G)`,
    description: pizzaItem.description,
    size: pizzaItem.sizes[2],
    price: pizzaItem.price[2],
    quantity: 1,
    total: pizzaItem.price[2],
  };

  const [order, setOrder] = useState(defaultOrder);
  const { setCart } = useContext(GlobalContext);

  function handleSize(e) {
    const sizes = document.querySelectorAll("#sizes div");
    sizes.forEach((size, index) => {
      size.classList.remove("bg-orange-200", "bg-orange-300");
      if (size === e.target) {
        size.classList.add("bg-orange-300");
        const sizeId =
          (index === 0 && "P") || (index === 1 && "M") || (index === 2 && "G");
        setOrder((state) => {
          const updatedOrder = {
            ...state,
            id: `P${pizzaItem.id}${sizeId}`,
            name: `${pizzaItem.name} (${sizeId})`,
            price: pizzaItem.price[index],
            total: pizzaItem.price[index] * order.quantity,
          };
          return updatedOrder;
        });
      } else {
        size.classList.add("bg-orange-200");
      }
    });
  }

  function handleQuantity(e) {
    let modalQuantity = order.quantity;
    let price = order.price;
    if (e.target.id === "add") {
      modalQuantity++;
    } else if (e.target.id === "subtract") {
      modalQuantity > 1 && modalQuantity--;
    }

    setOrder((state) => {
      const updatedOrder = {
        ...state,
        quantity: modalQuantity,
        total: modalQuantity * price,
      };
      return updatedOrder;
    });
  }

  function handleCart() {
    setCart((state) => {
      let updatedCart = state;
      const itemCart = state.findIndex((item) => item.id === order.id);
      if (itemCart !== -1) {
        Object.assign(updatedCart[itemCart], {
          quantity: order.quantity,
        });
      } else {
        updatedCart = [order, ...state];
      }
      return updatedCart;
    });
    setModal((state) => !state);
  }

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-black/50 flex items-center justify-center">
      <div className="flex gap-10 bg-orange-100 p-5 rounded max-w-3xl justify-center">
        <img src={order.img} alt="" className="max-w-80" />

        <div>
          <h1 className="text-2xl font-medium">{order.name}</h1>

          <p className="mb-4">{order.description}</p>

          <span className="text-orange-400">TAMANHO</span>
          <div className="flex mb-4" id="sizes">
            <div
              className="bg-orange-200 p-2 cursor-pointer rounded-tl-xl rounded-bl-xl hover:bg-orange-300"
              onClick={handleSize}
            >
              PEQUENA
            </div>
            <div
              className="bg-orange-200 p-2 cursor-pointer hover:bg-orange-300"
              onClick={handleSize}
            >
              MÉDIO
            </div>
            <div
              className="bg-orange-300 p-2 rounded-tr-xl rounded-br-xl cursor-pointer hover:bg-orange-300"
              onClick={handleSize}
            >
              GRANDE
            </div>
          </div>

          <span className="text-orange-400">PREÇO</span>
          <div className="flex items-center gap-5 mb-10">
            <span className="text-3xl">
              {order.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <div className="flex">
              <div
                id="subtract"
                className="bg-orange-200 p-2 rounded-tl-xl rounded-bl-xl cursor-pointer hover:bg-orange-300"
                onClick={handleQuantity}
              >
                -
              </div>
              <div className="bg-orange-200 p-2">{order.quantity}</div>
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
            <div
              className="bg-orange-300 px-5 py-2 rounded-xl cursor-pointer hover:bg-orange-400"
              onClick={handleCart}
            >
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
