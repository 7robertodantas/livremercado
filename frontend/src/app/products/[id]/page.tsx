"use client";

import React, { useState, useEffect } from "react";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/types/Product";
import { Seller } from "@/types/Seller";
import { getProductById, updateProductFavorite } from "@/services/products";
import { getSellerById } from "@/services/sellers";
import { useParams } from "next/navigation";

import {
  Column,
  ColumnProduct,
  ColumnProductChild,
  Container,
  ContainerProductDetails,
  ContainerWrapper,
  Gallery,
  InfoContainer,
  InfoDescription,
  InfoTitle,
  Panel,
  ProductActionActions,
  ProductActionBenefits,
  ProductActionButton,
  ProductActionCategory,
  ProductActionContainer,
  ProductActionMethodCard,
  ProductActionPriceCard,
  ProductActionPriceRow,
  ProductActionRowTitle,
  ProductContainerHeader,
  Row,
  SellerInfoLocationCard,
  SellerInfoMore,
  SellerInfoReputationCard,
  SellerInfoReputationRow,
  SellerInfoReputationThermometer,
  SellerInfoTitle,
  StyledSellerInfo,
  Wrapper,
} from "./styles";

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [seller, setSeller] = useState<Seller | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        if (params?.id) {
          const productData = await getProductById({ id: Array.isArray(params.id) ? params.id[0] : params.id });
          setProduct(productData);
          setIsFavorited(productData.isFavorite);
          console.log(productData);

          if (productData.sellerId) {
            const sellerData = await getSellerById({ id: String(productData.sellerId) });
            setSeller(sellerData);
            console.log("sellerData: " + sellerData);
          } else {
            console.warn("Produto não possui um sellerId:", productData);
          }
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params]);

  const toggleFavorite = async () => {
    if (!product) return;
  
    const updatedFavorite = !isFavorited;
  
    try {
      setIsFavorited(updatedFavorite);
  
      await updateProductFavorite(product.id, updatedFavorite);
  
      console.log(
        `Produto "${product.title}" ${
          updatedFavorite ? "adicionado aos" : "removido dos"
        } favoritos.`
      );
    } catch (error) {
      setIsFavorited(!updatedFavorite);
  
      console.error(
        `Erro ao atualizar favorito para o produto "${product.title}":`,
        error
      );
    }
  };

  if (loading) {
    return <div>Carregando detalhes do produto...</div>;
  }

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <>
    <ContainerProductDetails>
      <Header />
      <ContainerWrapper>
        <Wrapper>
          <div>
            <Container>
              <Row>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Compartilhar
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Vender um igual
                </a>
              </Row>

              <Panel>
                <Column>
                  <ColumnProduct>
                    <ColumnProductChild>
                      <Gallery>
                        <img alt={product.title} src={product.imageUrl} />
                      </Gallery>
                      <ProductContainerHeader>
                        <ProductActionCategory>{product.category}</ProductActionCategory>
                        <ProductActionRowTitle>
                          <h1>{product.title}</h1>
                          {isFavorited ? (
                            <HiHeart
                              color="#ff5252"
                              size={28}
                              onClick={toggleFavorite}
                              aria-label="Remover dos favoritos"
                              role="button"
                            />
                          ) : (
                            <HiOutlineHeart
                              color="var(--color-blue)"
                              size={28}
                              onClick={toggleFavorite}
                              aria-label="Adicionar aos favoritos"
                              role="button"
                            />
                          )}
                        </ProductActionRowTitle>

                        <ProductActionPriceCard>
                          <ProductActionPriceRow>
                            <span className="symbol">R$</span>
                            <span className="fraction">{product.price.toFixed(2)}</span>
                          </ProductActionPriceRow>
                        </ProductActionPriceCard>
                      </ProductContainerHeader>
                    </ColumnProductChild>
                  </ColumnProduct>
                  <Info description={product.description} />
                </Column>

                <Column>
                  <ProductActionContainer>
                    <ProductActionMethodCard>
                      <HiOutlineCheck size={24} color="var(--color-green)" />
                      <div>
                        <span className="title">Frete grátis</span>
                        <span className="details">Benefício Lorem Ipsum</span>
                      </div>
                    </ProductActionMethodCard>

                    <ProductActionActions>
                      <ProductActionButton solid>
                        Comprar agora
                      </ProductActionButton>
                      <ProductActionButton>Adicionar ao carrinho</ProductActionButton>
                    </ProductActionActions>

                    <ProductActionBenefits>
                      <li>
                        <HiOutlineShieldCheck color="var(--color-gray)" size={30} />
                        <p>
                          Compra Garantida, receba o produto que está esperando ou devolvemos
                          seu dinheiro.
                        </p>
                      </li>
                    </ProductActionBenefits>
                  </ProductActionContainer>
                  {seller && <SellerInfo seller={seller} />}
                </Column>
              </Panel>
            </Container>
          </div>
        </Wrapper>
      </ContainerWrapper>
      <Footer />
    </ContainerProductDetails>
    
    </>
  );
}

interface InfoProps {
  description: string;
}

const Info: React.FC<InfoProps> = ({ description }) => (
  <InfoContainer>
    <InfoTitle>Descrição</InfoTitle>
    <InfoDescription>{description}</InfoDescription>
  </InfoContainer>
);

interface SellerInfoProps {
  seller: Seller;
}

const SellerInfo: React.FC<SellerInfoProps> = ({ seller }) => (
  <StyledSellerInfo>
    <SellerInfoTitle>Informações sobre o vendedor</SellerInfoTitle>
    <SellerInfoLocationCard>
      <HiOutlineLocationMarker />
      <div>
        <p>Localização</p>
        <strong>{seller.location}</strong>
      </div>
    </SellerInfoLocationCard>
    <SellerInfoReputationCard>
      <SellerInfoReputationThermometer>
        {[...Array(5)].map((_, index) => (
          <li key={index} className={index < seller.reputation ? "active" : ""}></li>
        ))}
      </SellerInfoReputationThermometer>
      <SellerInfoReputationRow>
        <div>
          <strong>{seller.salesLastMonths}</strong>
          <span>vendas nos últimos 4 meses</span>
        </div>
        <div>
          <strong>{seller.goodSupport ? "👍" : "👎"}</strong>
          <span>Presta um bom atendimento</span>
        </div>
        <div>
          <strong>{seller.onTimeDelivery ? "⏰" : "❌"}</strong>
          <span>Entrega os produtos dentro do prazo</span>
        </div>
      </SellerInfoReputationRow>
    </SellerInfoReputationCard>
  </StyledSellerInfo>
);
