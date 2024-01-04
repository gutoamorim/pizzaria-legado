export default function Card({ img, title, description, price }) {
  return (
    <div className="max-w-60 bg-orange-50 p-4 rounded-lg cursor-pointer">
      <img src={img} alt="" />
      <p className="text-center font-medium mt-2">{price}</p>
      <h1 className="text-lg font-medium text-center mt-1">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
