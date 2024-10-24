import React, { useState } from 'react';

import ImageSlider from './ImageSlider';
import OptionSelector from './OptionSelector';
import AddToCartButton from './AddToCartButton';

const ProductPage = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const product = {
        name: 'Apple iPhone 16',
        description: 'Діагональ дисплея\n' +
            '6,1\'\'\n' +
            'Тип екрану\n' +
            'OLED\n' +
            'Модель процесора\n' +
            'Apple A18 Bionic\n' +
            'Основна камера\n' +
            '48+12 Мп\n' +
            'Ємність акумулятора\n' +
            'Ні',
        images: [
            '/images/i1.png',
            '/images/i2.png',
            '/images/i3.jpg',
        ],
        sizes: ['128gb', '256gb', '512gb'],
        colors: ['Red', 'Blue', 'Green'],
    };

    const handleAddToCart = () => {
        if (selectedSize && selectedColor) {
            alert(`Added ${product.name} (${selectedSize}, ${selectedColor}) to cart.`);
        } else {
            alert('Please select both size and color.');
        }
    };

    return (
        <div className="container">
            <div className="product-page">
                <ImageSlider images={product.images} />
                <div className="product-details">
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-description">{product.description}</p>
                    <OptionSelector
                        label="Size"
                        options={product.sizes}
                        value={selectedSize}
                        onChange={setSelectedSize}
                    />
                    <OptionSelector
                        label="Color"
                        options={product.colors}
                        value={selectedColor}
                        onChange={setSelectedColor}
                    />
                    <AddToCartButton onClick={handleAddToCart} />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
