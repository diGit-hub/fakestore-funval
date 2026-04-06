import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
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

    useEffect(() => {
        fetchData();
    }, [])
    return {products, loading, error, refetch: fetchData}
}
