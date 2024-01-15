import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import UpdateQuantity from "./UpdateQuantity";

export default function Cart() {
  const { cart, setCart } = useContext(GlobalContext);

  const pizzas = cart
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
  const taxa = 4.99;
  const subTotal = pizzas + taxa;
  const desconto = subTotal * 0.1;
  const total = subTotal - desconto;

  function handleQuantity(e, itemQuantity, index) {
    setCart((state) => {
      const updatedCart = state;
      let quantityItems = itemQuantity;
      if (e.target.id === "add") {
        quantityItems++;
        Object.assign(updatedCart[index], { quantity: quantityItems });
      } else if (e.target.id === "subtract") {
        if (quantityItems > 1) {
          quantityItems--;
          Object.assign(updatedCart[index], { quantity: quantityItems });
        } else {
          updatedCart.splice(index, 1);
        }
      }
      return [...updatedCart];
    });
  }

  return (
    <div className="w-64 bg-orange-50 p-4 transition">
      <h1 className="text-xl font-medium">Carrinho</h1>
      {cart &&
        cart.map((item, index) => (
          <div
            className="flex justify-between items-center mt-2 gap-2"
            key={index}
          >
            <div className="w-10">
              <img src={item.img} alt="" />
            </div>
            <p className="flex-1">{item.name}</p>
            <UpdateQuantity
              quantity={item.quantity}
              handleQuantity={(e) => handleQuantity(e, item.quantity, index)}
            />
          </div>
        ))}

      <div className="flex items-center justify-between border-t border-orange-200 mt-4">
        <p>Pizzas</p>
        <span>
          {pizzas.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-orange-200 mt-1">
        <p>Taxa de entrega</p>
        <span>
          {taxa.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-orange-200 mt-1">
        <p>Subtotal</p>
        <span>
          {subTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-orange-200 mt-1">
        <p>Desconto</p>
        <span>
          {desconto.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-orange-200 mt-1 py-4 text-2xl font-medium">
        <p>Total</p>
        <span>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button className="bg-orange-200 text-orange-500 font-medium py-2 px-4 rounded-xl w-full hover:bg-orange-300 hover:text-orange-600 transition">
        Finalizar compra
      </button>
    </div>
  );
}
