import type { ProductDisplayProps } from "../../types";

export function ProductDisplay({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <img src={product.imageUrl} alt={product.name} className="w-full h-100  object-contain mb-4 rounded" />
      <h2 className="text-2xl font-extrabold !text-gray-900 mb-2">{product.name}</h2>
      <p className="text-gray-900 mb-2">${product.price}</p>

      {showDescription && (
        <p className="text-gray-600 mb-2">{product.description}</p>
      )}

      {showStockStatus && (
        <p className="mb-2">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      )}

      {children && (
        <div className="text-sm text-gray-500 mt-2">
          {children}
        </div>
      )}
    </div>
  );
}