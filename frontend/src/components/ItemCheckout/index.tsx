'use client'

import { useState, useEffect, useCallback } from "react";
import { Product } from "@/types/Product";
import styled from "styled-components";

const ItemCheckoutDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 2px dotted #ddd;
    font-family: 'Arial';
    gap: 48px;
`;

const DetailsDiv = styled.div`
    color: black
`;

const Description = styled.div`
    font-size: 16px;
    font-weight: regular;
    color: black;
    margin: 0 0 5px;
    text-align: center;
`;

const Price = styled.h6`
    font-size: 32px;
    $color: black;
    font-weight: bold;
    text-align: center
`;

const CountNumber = styled.div`
    min-width: 40px;
    height: 40px;
    color: black;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    width: 32px;
    padding: 0 10px;
    border: solid 2px #007BFF;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 10px;
`;

const Image = styled.img`
    object-fit: cover;
    border-radius: 5px;
    max-width: 100px;
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
`;

const Button = styled.button<{variant: "add" | "remove"}>`
    width: 30px;
    height: 30px;
    border: none;
    background-color: ${({variant}) => (variant === 'add' ? '#007bff' : '#d2d2d2')};
    color: white;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
        background-color: ${({variant}) => (variant === 'add' ? '#0056b3' : '#b0b0b0') };
    }
`;

export interface ItemCheckoutProps {
    product: Product,
    image: string,
    quantity: number,
    onRemove: () => Promise<void>,
    onUpdateQuantity: (newQuantity: number) => Promise<void>,
}

const ItemCheckout = ({image, product, quantity, onRemove, onUpdateQuantity} : ItemCheckoutProps) => {
    const [productCount, setProductCount] = useState(quantity);

    const handleMinus = async () => {
        const newCount = productCount - 1;
        setProductCount(newCount);
    }

    const handlePlus = async () => {
        const newCount = productCount + 1;
        setProductCount(newCount);
    }

    useEffect(() => {
        if (productCount <= 0) onRemove();
        else onUpdateQuantity(productCount);
    }, [productCount]);

    return(
        <ItemCheckoutDiv>
            <Image src={image} alt="Product image"/>
            <DetailsDiv>
                <Description>{product.description}</Description>
                <Price>R$ {product.price}</Price>
            </DetailsDiv>
            <CountNumber>{productCount}</CountNumber>
            <ButtonDiv>
                <Button variant="remove" onClick={handleMinus}>
                    -
                </Button>
                <Button variant="add" onClick={handlePlus}>
                    +
                </Button>
            </ButtonDiv>
        </ItemCheckoutDiv>
    );
}

export default ItemCheckout;