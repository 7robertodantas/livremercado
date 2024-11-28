'use client';

import styled from "styled-components";

const NavHeader = styled.header`
  background-color: var(--c4);
  color: rgba(0, 0, 0, .8980392157);
  height: 140px;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0px 40px;
`

const NavBounds = styled.div`
  display: grid;
  grid-template-areas:
    "a b b c"
    "a b b c";
  width: 100%;
  padding: 8px 10px 12px 10px;
`

const LogoDiv = styled.div`
  grid-area: a;
  color: var(--c7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
`

const MiddleDiv = styled.div`
  grid-area: b;
  color: var(--c7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
`

const Title = styled.h1`
  font-size:36px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const NavLinks = styled.div`
  grid-area: c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
  font-weight: 600;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #726810; /* Change this to your desired hover color */
    }
  }
`

const SearchForm = styled.form`
  grid-area: b;
  width: 100%;
  height: 50%;
  position: relative;
`

const SearchInput = styled.input`
  position: relative;
  background: var(--c1);
  color: var(--c0);
  font-size: 18px;
  padding: 0px 16px;
  padding-right: 40px; /* Add padding to the right to make space for the icon */
  border: 1px solid var(--c1);
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 100%;
  height: 100%;

  &::placeholder {
    color: var(--c31);
  }

  &:focus {
    outline: none;
  }
`

const SearchBtn = styled.button`
    font-family: 'Material Icons';
    position: absolute;
    padding: 0;
    background: none;
    border: none;
    font-size: 22px;
    color: var(--c31);
    line-height: 1em;
    border-radius: 0 2px 2px 0;
    width: 40px;
    right: 16px;
    top: 8px;
    background-image: none;
    height: 40px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;

  span {
    color: var(--c31);
    position: absolute;
    transform: translateY(-50%);
    font-family: 'Material Icons';
    font-size: 24px;
    color: var(--c31);
  }
`

export interface HeaderLink {
  title: string;
  href: string;
}

export interface HeaderProps {
  title: string;
  subtitle: string;
  links: Array<HeaderLink>
}

const header: HeaderProps = {
  title: 'Livre Mercado',
  subtitle: 'O lugar onde tudo se encontra!',
  links: [{
    title: 'Home',
    href: '/'
  },
  {
    title: 'Carrinho',
    href: '/checkout'
  }]
};


const Header = () => {
  const linksList = header.links?.map( (link) => <a key={link.title} href={link.href}>{link.title}</a>)

  return (
    <NavHeader>
      <NavBounds>
        <LogoDiv>
          <Title>{header.title}</Title>
          <Subtitle>{header.subtitle}</Subtitle>
        </LogoDiv>  
        <MiddleDiv>
          <SearchForm>
            <SearchInput placeholder="Buscar produtos, marcas e muito mais..." />
            <SearchBtn>
              <span className="material-symbols-outlined">search</span>
            </SearchBtn>
          </SearchForm>
        </MiddleDiv>
        <NavLinks>
          {linksList}
        </NavLinks>
      </NavBounds>
    </NavHeader>
  );
};

export default Header;