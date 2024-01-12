export default function UpdateQuantity({ handleQuantity, quantity }) {
  return (
    <div className="flex items-center">
      <div
        id="subtract"
        className="bg-orange-200 px-2 rounded-tl-xl rounded-bl-xl cursor-pointer hover:bg-orange-300"
        onClick={handleQuantity}
      >
        -
      </div>
      <div className="bg-orange-200 px-2">{quantity}</div>
      <div
        id="add"
        className="bg-orange-200 px-2 rounded-tr-xl rounded-br-xl cursor-pointer hover:bg-orange-300"
        onClick={handleQuantity}
      >
        +
      </div>
    </div>
  );
}
