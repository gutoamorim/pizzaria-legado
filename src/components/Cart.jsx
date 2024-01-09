export default function Cart({ cart, setCart }) {
  // const totalCart = cart.map((item) => item.total).reduce((a, b) => a + b, 0);
  // console.log(totalCart);

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
            <div className="flex">
              <div
                id="subtract"
                className="bg-orange-200 px-2 rounded-tl-xl rounded-bl-xl cursor-pointer hover:bg-orange-300"
              >
                -
              </div>
              <div className="bg-orange-200 px-2">{item.quantity}</div>
              <div
                id="add"
                className="bg-orange-200 px-2 rounded-tr-xl rounded-br-xl cursor-pointer hover:bg-orange-300"
              >
                +
              </div>
            </div>
          </div>
        ))}

      <div className="flex items-center justify-between border-t border-orange-200 mt-4">
        <p>Pizzas</p>
        <span>R$ 39,99</span>
      </div>
      <div className="flex items-center justify-between border-t border-orange-200 mt-1">
        <p>Taxa de entrega</p>
        <span>R$ 4,99</span>
      </div>
      <div className="flex items-center justify-between border-t border-orange-200 mt-1">
        <p>Subtotal</p>
        <span>R$ 44,98</span>
      </div>
      <div className="flex items-center justify-between border-t border-orange-200 mt-1">
        <p>Desconto</p>
        <span>R$ 4,49</span>
      </div>
      <div className="flex items-center justify-between border-t border-orange-200 mt-1 py-4 text-2xl font-medium">
        <p>Total</p>
        <span>R$ 40,48</span>
      </div>
      <button className="bg-orange-200 text-orange-500 font-medium py-2 px-4 rounded-xl w-full hover:bg-orange-300 hover:text-orange-600 transition">
        Finalizar compra
      </button>
    </div>
  );
}
