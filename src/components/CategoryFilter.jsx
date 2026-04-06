import { Link } from 'react-router-dom'

const categories = [
    { id: 'electronics', label: 'Electronics' },
    { id: 'jewelery', label: 'Jewelry' },
    { id: "men's clothing", label: "Men's" },
    { id: "women's clothing", label: "Women's" }
]

export default function CategoryFilter({ activeCategory }) {
    return (
        <>
            {categories.map(cat => (
                <li key={cat.id}>
                    <Link to={`/products/category/${cat.id}`}>
                        {cat.label}
                    </Link>
                </li>
            ))}
        </>
    )
}
