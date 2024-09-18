const ProductCard = ({ title, image, price, description }) => {
  return (
    <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-36 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-900 font-bold text-lg">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
