import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import HandbagIcon from "../assets/handbag.svg";
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
                <section className="flex flex-col justify-center h-80 md:h-100 shadow px-4 md:px-48 bg-slate-50">
                    <p className="text-sm text-gray-500 uppercase tracking-widest">New Collection</p>
                    <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mt-2">LUXE</h1>
                    <p className="text-base md:text-xl text-gray-600 mt-4 max-w-xl">Discover the latest trends in fashion and accessories for the modern lifestyle.</p>
                </section>
                <section>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-700 px-4 md:px-48 py-4">
                        {category ? category : 'All Products'}
                    </h2>
                    {filteredProducts.length === 0 && (
                        <p className="text-center text-gray-500 py-8">No products found</p>
                    )}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-48 pb-12">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
