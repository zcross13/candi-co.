import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

const products = [
  { title: "Classic Tote", price: "79.99" },
  { title: "Mini Crossbody", price: "49.99" },
  { title: "Elegant Satchel", price: "99.99" },
]
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {products.map((product, index) => (
          <ProductCard key={index} title={product.title} price={product.price}/>
        ))}
      </div>
    </div>
  );
}

export default App;