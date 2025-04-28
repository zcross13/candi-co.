import ProductCard from "./ProductCard";

const products = [
    {
        id: 1, 
        name: "Elegant Purse", 
        price: 59.99, 
        image: "https://via.placeholder.com/300x300", 
    },
    {
        id: 2, 
        name: "Luxury Handbag", 
        price: 89.99, 
        image: "https://via.placeholder.com/300x300",
    },
    {
        id: 3, 
        name: "Stylish Clutch", 
        price: 39.99, 
        image: "https://via.placeholder.com/300x300",
    },
    {
        id: 4, 
        name: "Everyday Tote", 
        price: 49.99, 
        image: "https://via.placeholder.com/300x300",
    }
]

const ProductGrid = () => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#874c62]">Shop Our Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductGrid  