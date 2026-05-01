import type { Product } from '../../types';
import { ProductDisplay } from './ProductDisplay';

// ChatGPT created product test file based on product interface
const product1: Product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://m.media-amazon.com/images/I/71+gY7nhquL._AC_UY436_FMwebp_QL65_.jpg',
    inStock: true
};

const product2: Product = {
    id: '2',
    name: 'Smart Watch',
    price: 149.99,
    description: 'Feature-rich smartwatch with fitness tracking and notifications.',
    imageUrl: 'https://m.media-amazon.com/images/I/71HqlGY1rgL.jpg',
    inStock: true
};

const product3: Product = {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 89.99,
    description: 'Portable Bluetooth speaker with deep bass and long battery life.',
    imageUrl: 'https://m.media-amazon.com/images/I/71jjggEx2XL._AC_UY436_FMwebp_QL65_.jpg',
    inStock: false
};

const product4 = {
    id: '4',
    name: 'Gaming Mouse',
    price: 59.99,
    description: 'Ergonomic gaming mouse with customizable DPI and RGB lighting.',
    imageUrl: 'https://m.media-amazon.com/images/I/61b6z5Hc+qL._AC_UY436_FMwebp_QL65_.jpg',
    inStock: true
};

// Call to component that renders profile cards with the configured props
export const ProductDisplayTest: React.FC = () => {
    return (
        <div className="space-y-4">
            <ProductDisplay product={product1} showDescription={true} showStockStatus={true} onAddToCart={(productId: string) => alert(`Added product ${productId} to cart`)} />
            <ProductDisplay product={product2} showDescription={true} showStockStatus={false} />
            <ProductDisplay product={product3} showDescription={false} showStockStatus={true} onAddToCart={(productId: string) => alert(`Item ${productId} is out of stock.  We will move to wishlist until we restock.`)} />
            <ProductDisplay product={product4} showDescription={false} showStockStatus={false} onAddToCart={(productId: string) => alert(`Item ${productId} may or may not be available.  We will move to wishlist until we can confirm availability.`)} />
        </div>
    );
}
