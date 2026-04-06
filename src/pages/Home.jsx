import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useSearchParams, useParams } from "react-router-dom";

export default function Home() {
    const { products, loading, error, refetch } = useFetchProducts();
    const { category } = useParams()
    const [searchParams] = useSearchParams()
    const searchTerm = searchParams.get('search') || ''
    const filteredProducts = products.filter(p =>
        (category ? p.category === category : true) &&
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (loading) return <><Header /><Loading /></>
    if (error) return <><Header /><Error message={error} onRetry={refetch} /></>
    return (
        <>
            <Header></Header>
            <main className="bg-background">
                <section className="flex justify-center items-center h-120 shadow">
                    <p>Hero Section</p>
                </section>
                <section>
                    <p>Products</p>
                    {filteredProducts.length === 0 && (
                        <p className="text-center text-gray-500 py-8">No products found</p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-48">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
