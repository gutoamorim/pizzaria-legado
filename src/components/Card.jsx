export default function Card({
  img,
  title,
  description,
  price,
  setModal,
  pizzaItem,
  setPizzaItem,
}) {
  function handleModal() {
    setPizzaItem(pizzaItem);
    setModal((state) => !state);
  }

  return (
    <div
      className="max-w-60 bg-orange-50 p-4 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-orange-600/50"
      onClick={handleModal}
    >
      <img src={img} alt="" />
      <p className="text-center font-medium mt-2">{price}</p>
      <h1 className="text-lg font-medium text-center mt-1">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
