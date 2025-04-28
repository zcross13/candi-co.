type ProductCardProps = {
    name: string;
    price: number;
    image: string;
}

const ProductCard = ({ price, name, image}: ProductCardProps) => {
    return (
        <div className="border rounded-lg p-4 shadow-md text-center bg-white">
            <div className="h-40 flex items-center justify-center bg-gray-100 text-gray-500 mb-4">
                {image}
            </div>
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-700 mb-4"> ${price.toFixed(2)}</p>
            <button className="bg-[#FF007F] text-white py-2 px-4 rounded hover:bg-[#8A2BE2] transition">
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard