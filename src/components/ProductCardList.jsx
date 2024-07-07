import React from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCardList = () => {
    const styles = {
        container: {
            padding: '20px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            padding: '20px',
            margin: '20px 0',
        },
        h1: {
            fontSize: "25px",
            fontWeight: "500",
            marginLeft: "15px",
            marginTop: "10px",
          },
    };

    const kitchenUtensils = [
        {
            id: 1,
            title: '6 set of pot',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/121493/1.jpg?9001',
            description: 'Tower Trim Pot Set - 4 Piece 16,18,20,22cm',
            price: 2499.99,
        },
        {
            id: 2,
            title: '12 set of golden spoon',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/3063292/1.jpg?9596',
            description: '12pcs Gold Plated Spoons And Fork Set',
            price: 1399.99,
        },
        {
            id: 3,
            title: 'Tosiba Cooking Pot',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/840299/1.jpg?6106',
            description: 'Tosiba Cooking Pot-Set Of 6',
            price: 1799.99,
        },
        {
            id: 4,
            title: 'Non Sticky pot',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/6756662/1.jpg?9605',
            description: 'Non-Stick Micro-Pressure Pot- Fast Cooking',
            price: 1599.99,
        },
        {
            id: 5,
            title: 'NonStick Stock Pot',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/044597/1.jpg?1789',
            description: 'SQ Professional 5 Set Diecast NonStick Stock Pot',
            price: 1499.99,
        },
        {
            id: 6,
            title: 'Non-Stick Micro-Pressure Pot',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/1318752/1.jpg?0226',
            description: 'Non-Stick Micro-Pressure Pot- Fast Cooking',
            price: 1499.99,
        },
        {
            id: 7,
            title: 'Handle Grater',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/639118/1.jpg?4989',
            description: 'Hand Held Big Size Wooden Handle Grater',
            price: 599.99,
        },
        {
            id: 8,
            title: 'Nine 5L Extra',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/1219972/1.jpg?7983',
            description: 'Nine 5L Extra Large Capacity Digital Air Fryer',
            price: 1499.99,
        },
        {
            id: 9,
            title: 'Quart Black Dutch Oven Cooking Pot',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/519617/1.jpg?2650',
            description: 'Cooksclub 5.7 Quart Black Dutch Oven Cooking Pot',
            price: 4499.99,
        },
        {
            id: 10,
            title: 'Table Top Drum Grater',
            imgUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/2349111/1.jpg?5010',
            description: 'Table Top Drum Grater Vegetable Slicer',
            price: 6099.99,
        },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Product List</h1>
            <div style={styles.grid}>
                {kitchenUtensils.map((utensil) => (
                    <ProductCard 
                        key={utensil.id}
                        title={utensil.title}
                        imgUrl={utensil.imgUrl}
                        description={utensil.description}
                        price={utensil.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductCardList;
