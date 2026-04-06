import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import Error from '../components/Error'

export default function ProductPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProduct = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(response.data)
        } catch (err) {
            setError('Product not found')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [id])

    if (loading) return <><Header /><Loading /></>
    if (error) return <><Header /><Error message={error} onRetry={fetchProduct} /></>
    if (!product) return null

    return (
        <>
            <Header />
            <main className="bg-background min-h-screen py-8 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8">
                    <button onClick={() => navigate(-1)} className="text-primary hover:underline mb-6 inline-block">
                        ← Go Back
                    </button>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
                            <img className="w-full h-64 md:h-80 object-contain" src={product.image} alt={product.title}/>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-primary uppercase">{product.category}</span>
                            <h1 className="text-2xl font-bold text-gray-800 mt-2">{product.title}</h1>
                            <p className="text-3xl font-black text-gray-900 mt-4">${product.price}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500">★ {product.rating.rate}</span>
                                <span className="text-gray-400 text-sm ml-1">({product.rating.count} reviews)</span>
                            </div>
                            <p className="text-gray-600 mt-4">{product.description}</p>
                            <button className="mt-6 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}