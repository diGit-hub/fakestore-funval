import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            }
            catch (err) {
                setError("Couldn't load products");
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])
    return {products, loading, error}
}
