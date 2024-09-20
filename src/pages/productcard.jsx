import { FaShoppingCart } from "react-icons/fa"; // react-icons kutubxonasidan savat ikonkasi

const ProductCard = ({ title, image, price, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-sm">{description}</p>{" "}
        {/* Kichikroq yozuvlar */}
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-gray-900 font-bold text-lg">${price}</span>
        <button className="flex items-center text-sm text-blue-500 hover:text-blue-700">
          <FaShoppingCart className="mr-1" /> Savatga qo'shish
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
