import ShopCard from "../../components/Cards/ShopCard";
import { products } from "../../assets/productData";

function Shop() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Shop</h1>
        <p className="text-lg text-gray-700">Explore our unique collection of furniture designed to bring comfort and style to your home.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {products.map((product, index) => (
          <ShopCard key={index} image={product.image} name={product.name} price={product.price} />
        ))}
      </div>
      <div className="text-center mt-12 flex flex-col gap-8 p-[40px] bg-[#f0e7e0]">
        <h2 className="text-2xl font-semibold mb-4">Innovative Thoughts</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our furniture is crafted with the finest materials and designed to meet the highest standards of quality and durability. We believe in creating pieces that are not only aesthetically pleasing but also functional and long-lasting.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for choosing our furniture shop. We look forward to helping you create a home that you love.
        </p>
      </div>
    </div>
  );
}

export default Shop;
