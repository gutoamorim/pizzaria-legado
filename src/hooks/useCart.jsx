import pizzas from "../database.json";

export const handleSize = (e) => {
  const sizes = document.querySelectorAll("#sizes div");
  console.log(sizes);
  sizes.forEach((size) => {
    size.classList.remove("bg-orange-300", "bg-orange-200");
    size.classList.add("bg-orange-200");
  });
};
