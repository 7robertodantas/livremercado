"use client";

import React, { useState, useEffect } from "react";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { Product } from "@/types/Product";
import { Seller } from "@/types/Seller";
import { getProductById, updateProductFavorite } from "@/services/products";
import { getSellerById } from "@/services/sellers";
import { isProductInCart } from "@/services/checkout";

import { useParams, useRouter } from "next/navigation";

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
  ProductActionCategory,
  ProductActionContainer,
  ProductActionMethodCard,
  ProductActionPriceCard,
  ProductActionPriceRow,
  ProductActionPrimaryButton,
  ProductActionRowTitle,
  ProductActionSecondaryButton,
  ProductContainerHeader,
  Row,
  SellerInfoLocationCard,
  SellerInfoReputationCard,
  SellerInfoReputationRow,
  SellerInfoReputationThermometer,
  SellerInfoTitle,
  StyledSellerInfo,
  Wrapper,
} from "./styles";
import { useCartContext } from "@/context/CartContext";
import MainLayout from "@/layouts/MainLayout";

interface ProductState {
  product: Product | null;
  seller: Seller | null;
  isInCart: boolean;
  loading: boolean;
}

export default function ProductPage() {
  const cart = useCartContext();
  const params = useParams();
  const router = useRouter();

  const productId = Array.isArray(params.id) ? params.id[0] : params.id || "";
  const [state, setState] = useState<ProductState>({ product : null, seller: null, isInCart: false, loading: true });

  const loadProduct = async () => {
    const product: Product = await getProductById({ id: productId });
    setState((prevState) => ({ ...prevState, product }));
  };

  const loadSeller = async () => {
    if (!state.product || !state.product.sellerId) return;
    const seller: Seller = await getSellerById({ id: state.product.sellerId });
    setState((prevState) => ({ ...prevState, seller }));
  }

  const loadIsInCart = async () => {
    const isInCart = await isProductInCart(productId);
    setState((prevState) => ({ ...prevState, isInCart }));
  }
  
  const fetchData = async (): Promise<void> => {
    try {
      setState((prevState) => ({ ...prevState, loading: true }));
      await loadProduct();
      await loadSeller();
      await loadIsInCart();
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, [params, cart.items]);


  const toggleFavorite = async () => {
    if (!state.product) return;

    const updatedFavorite = !state.product.isFavorite;

    try {
      await updateProductFavorite(state.product.id, updatedFavorite);
      console.log(
        `Produto "${state.product.title}" ${
          updatedFavorite ? "adicionado aos" : "removido dos"
        } favoritos.`
      );
      await loadProduct();
    } catch (error) {
      console.error(
        `Erro ao atualizar favorito para o produto "${state.product.title}":`,
        error
      );
    }
  };

  const handleAddToCart = async () => {
    if (!state.product) return;

    try {
      cart.addProduct(state.product.id);
      console.log(`Produto "${state.product.title}" adicionado ao carrinho.`);
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho:", error);
    }
  };

  const handleRemoveFromCart = async () => {
    if (!state.product) return;

    try {
      cart.removeProduct(state.product.id);
      console.log(`Produto "${state.product.title}" removido do carrinho.`);
    } catch (error) {
      console.error("Erro ao remover produto do carrinho:", error);
    }
  };

  const goToCheckout = async () => {
    router.push("/checkout");
  };

  const handleBuyNow = async () => {
    if (!state.product) return;

    try {
      cart.addProduct(state.product.id);
      router.push("/checkout");
      console.log(`Produto "${state.product.title}" adicionado ao carrinho e enviado a tela.`);
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho:", error);
    }
  };

  if (state.loading) {
    return <div>Carregando detalhes do produto...</div>;
  }

  if (!state.product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <MainLayout>
      <ContainerProductDetails>
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
                          <img alt={state.product.title} src={state.product.imageUrl} />
                        </Gallery>
                        <ProductContainerHeader>
                          <ProductActionCategory>{state.product.category}</ProductActionCategory>
                          <ProductActionRowTitle>
                            <h1>{state.product.title}</h1>
                            {state.product.isFavorite ? (
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
                              <span className="fraction">{state.product.price.toFixed(2)}</span>
                            </ProductActionPriceRow>
                          </ProductActionPriceCard>
                        </ProductContainerHeader>
                      </ColumnProductChild>
                    </ColumnProduct>
                    <Info description={state.product.description} />
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
                        {state.isInCart ? (
                          <>
                            <ProductActionPrimaryButton onClick={goToCheckout}>
                              Ir para o Carrinho
                            </ProductActionPrimaryButton>
                            <ProductActionSecondaryButton onClick={handleRemoveFromCart}>
                              Remover do carrinho
                            </ProductActionSecondaryButton>
                          </>
                        ) : (
                          <>
                            <ProductActionPrimaryButton onClick={handleBuyNow}>
                              Comprar agora
                            </ProductActionPrimaryButton>
                            <ProductActionSecondaryButton onClick={handleAddToCart}>
                              Adicionar ao carrinho
                            </ProductActionSecondaryButton>
                          </>
                        )}
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
                    {state.seller && <SellerInfo seller={state.seller} />}
                  </Column>
                </Panel>
              </Container>
            </div>
          </Wrapper>
        </ContainerWrapper>
      </ContainerProductDetails>
    </MainLayout>
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
