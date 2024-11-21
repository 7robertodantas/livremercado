'use client'

//import { ChildrenProps } from "@/types";
import { Product } from "@/types/Product";
import styled from "styled-components";

export interface ItemCheckoutProps {
    product: Product,
    image: string,
    quantity: number
}

const ItemCheckoutDiv = styled.div`

`;

const Details = styled.div`

`;

const CountNumber = styled.h6`

`;

const Image = styled.img`

`;

const ButtonDiv = styled.div`

`;

const Button = styled.button`

`;

const ItemCheckout = ({image, product, quantity} : ItemCheckoutProps) => {
    return(
        <ItemCheckoutDiv>
            <Image src={image} alt="Product image"/>
            <Details>{product.description}</Details>
            <CountNumber>{quantity}</CountNumber>
            <ButtonDiv>
                <Button>
                    +
                </Button>
                <Button>
                    -
                </Button>
            </ButtonDiv>
        </ItemCheckoutDiv>
    );
}

export default ItemCheckout;