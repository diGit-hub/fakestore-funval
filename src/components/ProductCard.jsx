export default function ProductCard({ product }) {
    if (!product) return null;

    const { id, title, price, image, category } = product;
    return (
        <div key={id} className="flex flex-col p-4 bg-white rounded-2xl shadow-sm h-full">
            <div className="w-full h-48 mb-4">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex flex-col flex-1">
                <p className="text-xs text-primary uppercase">{category}</p>
                <h3 className="font-semibold text-gray-800 mt-1 line-clamp-2" title={title}>
                    {title}
                </h3>
                <p className="text-gray-800 font-bold text-lg mt-auto pt-2">
                    ${price.toFixed(2)}
                </p>
            </div>
        </div>
    )
}
