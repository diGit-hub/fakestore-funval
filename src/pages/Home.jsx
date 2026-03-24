import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";

export default function Home() {
    const { products, loading, error } = useFetchProducts();
    return (
        <>
            <Header></Header>
            <main className="bg-background">
                <section className="flex justify-center items-center h-120 shadow">
                    <p>Hero Section</p>
                </section>
                <section>
                    <p>Products</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-48">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
