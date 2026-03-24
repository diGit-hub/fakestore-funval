import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";

export default function Home() {
    const { products, loading, error} = useFetchProducts();
    return (
        <>
            <Header></Header>
            <main>
                <section className="flex justify-center items-center h-120 shadow">
                    <p>Hero Section</p>
                </section>
                <section>
                    <div className="grid">
                        <p>Products</p>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
