'use client';

import styled from 'styled-components';

export const ContainerProductDetails = styled.div`
    width: 100%;
    height: 100vh;
    background: #F5F5F5;

    flex-direction: column;


justify-content: space-between;

display: flex;
    

    color: #333333;
`;

export const ContainerWrapper = styled.div`
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 16px;
    border-radius: 80px;
    display: flex;
    flex-direction: column;


    justify-content: space-between;

    display: flex;
    flex: 1;
`;

export const Wrapper = styled.main`
    max-width: 1220px;
    margin: 0 auto;
`;


export const Container = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 0;

    > a {
        font-size: 14px;
        text-decoration: none;
        color: #3483fa;
        padding: 2.5px 0;
    }

    > a + a {
        padding-left: 10px;
        margin-left: 10px;
        border-left: 1px solid #ddd;
    }
`;

export const Panel = styled.div`
    background: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    padding: 40px;
    border-radius: 10px;

    > div:first-child {
        flex: 0 0 70%;
    }

    > div:last-child {
        flex: 1;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        font-size: 14px;
        padding: 25px 16px;
        width: 100%;
    }
`;

export const Column = styled.div``;

export const ColumnProduct = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ColumnProductChild = styled.div`
    display: flex;

    > div {
        flex: 1;
    }
`;

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 530px;

    > img {
        max-width: 450px;
    }
`;

export const ProductContainerHeader = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

export const ProductActionCategory = styled.div`
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
`;

export const ProductActionRowTitle = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    h1 {
        width: 100%;
        font-size: 26px;
        font-weight: 600;
    }

    svg {
        cursor: pointer;
    }
`;

export const ProductActionPriceCard = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: column;
`;

export const ProductActionPriceRow = styled.div`
    display: flex;
    align-items: flex-start;
    font-size: 44px;
    font-weight: 300;

    .fraction {
        margin-left: 8.8px;
    }

    .cents {
        font-size: 20px;
        padding-top: 3px;
        margin-left: 1px;
    }
`;

export const ProductActionContainer = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

export const ProductActionMethodCard = styled.div`
    margin-top: 18px;
    display: flex;
    cursor: pointer;

    > div {
        margin-left: 8px;
        display: flex;
        flex-direction: column;
    }

    .title {
        color: #00a650;
        font-size: 16px;
    }

    .details {
        margin-top: 5px;
        color: #666;
        font-size: 14px;
    }

    .more {
        margin-top: 5px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        color: #3483fa;
    }
`;

export const ProductActionActions = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
`;


export const ProductActionButton = styled.button.attrs<React.ButtonHTMLAttributes<HTMLButtonElement> & { solid?: boolean }>((props) => ({
  solid: undefined,
}))<{ solid?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border-radius: 4px;
    padding: 12px 10px;
    margin-top: 10px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s, border 0.3s;

    background: ${({ solid }) => (solid ? '#3483fa' : 'transparent')};
    color: ${({ solid }) => (solid ? '#FFF' : '#3483fa')};
    border: ${({ solid }) => (solid ? 'none' : '1px solid #3483fa')};
`;

export const ProductActionPrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s;

  background-color: #3483fa;
  color: #fff;
  border: none;

  &:hover {
    background: #2968c8;
  }
`;

export const ProductActionSecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s;

  background: transparent;
  color: #3483fa;
  border: 1px solid #3483fa;

  &:hover {
    background: #e3f2fd;
    color: #2968c8;
  }
`;



export const ProductActionBenefits = styled.ul`
    margin-top: 16px;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;

    li {
        display: flex;
        align-items: center;

        p {
            margin-left: 10px;
            color: #666;
            font-size: 14px;
        }
    }
`;

export const SellerInfoContainer = styled.div`
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ddd;
`;

export const SellerInfoTitle = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 600;
`;

export const SellerInfoLocationCard = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 0;

    > div {
        margin-left: 8px;

        p {
            font-size: 16px;
        }

        strong {
            font-size: 14px;
            font-weight: normal;
            color: #666;
        }
    }
`;

export const SellerInfoReputationCard = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SellerInfoReputationThermometer = styled.ol`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 7px;
    padding: 0 4px;

    li {
        width: 100%;
        height: 8px;

        &:nth-child(1) {
            background: #FFE7E6;
        }

        &:nth-child(2) {
            background: #FFF4E7;
        }

        &:nth-child(3) {
            background: #FFFDE5;
        }

        &:nth-child(4) {
            background: #F3FEE0;
        }

        &:nth-child(5) {
            background: #00A650;
            height: 12px;
        }

        &.active {
            opacity: 1;
        }
    }
`;

export const SellerInfoReputationRow = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    width: 100%;

    > div {
        width: 33%;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;

        strong {
            font-size: 24px;
            font-weight: normal;
            height: 30px;
        }

        span {
            font-size: 12px;
        }

        & + div::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 36px;
            border-left: 1px solid #ddd;
        }
    }
`;

export const SellerInfoMore = styled.a`
    margin-top: 24px;
    color: #3483fa;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`;


export const InfoContainer = styled.div`
    border-top: 1px solid #ddd;
    padding: 44px 32px;
`;

export const InfoTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 32px;
`;

export const InfoDescription = styled.p`
    font-size: 20px;
    color: #666;
    line-height: 27px;
`;


export const StyledSellerInfo = styled.div`
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ddd;
`;

export const SellerInfoInner = styled.div``;
