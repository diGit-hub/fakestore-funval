export default function ProductCard({ product }) {
    if (!product) return null;
    
    const { id, title, price, image, category } = product;
    return (
        <div key={id}>
            <img src={image} alt={title} />
            <p>{category}</p>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}
