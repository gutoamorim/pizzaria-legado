import img from "../assets/frango-catupiry.png";

export default function PizzaModal({ pizzamodal }) {
  if (!pizzamodal) return null;

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-black/50 flex items-center justify-center">
      <div className="flex gap-10 bg-orange-100 p-5 rounded max-w-3xl justify-center">
        <img src={img} alt="" className="max-w-80" />
        <div>
          <h1 className="text-2xl font-medium">Frango com Catupiry</h1>
          <p className="mb-4">
            Molho, muçarela, frango desfiado, catupiry e orégano.
          </p>
          <span className="text-orange-400">TAMANHO</span>
          <div className="flex mb-4">
            <div className="bg-orange-200 p-2 rounded-tl-xl rounded-bl-xl cursor-pointer hover:bg-orange-300">
              PEQUENA
            </div>
            <div className="bg-orange-200 p-2 cursor-pointer hover:bg-orange-300">
              MÉDIO
            </div>
            <div className="bg-orange-300 p-2 rounded-tr-xl rounded-br-xl cursor-pointer hover:bg-orange-300">
              GRANDE
            </div>
          </div>
          <span className="text-orange-400">PREÇO</span>
          <div className="flex items-center gap-5 mb-10">
            <span className="text-3xl">R$ 32,99</span>
            <div className="flex">
              <div className="bg-orange-200 p-2 rounded-tl-xl rounded-bl-xl cursor-pointer hover:bg-orange-300">
                -
              </div>
              <div className="bg-orange-200 p-2">1</div>
              <div className="bg-orange-200 p-2 rounded-tr-xl rounded-br-xl cursor-pointer hover:bg-orange-300">
                +
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-orange-300 px-5 py-2 rounded-xl cursor-pointer hover:bg-orange-400">
              Adicionar ao carrinho
            </div>
            <div className="cursor-pointer px-2 py-2">Cancelar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
