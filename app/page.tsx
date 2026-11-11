import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <main className="store">
      <h1>My Product Store</h1>

      <Greeting name="User" />

      <div className="cards">
        <ProductCard title="Mechanical Keyboard" price={49} inStock={true} />
        <ProductCard title="Wireless Mouse" price={25} inStock={false} />
      </div>
    </main>
  );
}