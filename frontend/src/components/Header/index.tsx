'use client';

import styled from "styled-components";

export interface HeaderLink {
  title: string;
  href: string;
}

export interface HeaderProps {
  title: string;
  subtitle: string;
  links: Array<HeaderLink>
}

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

const SearchBar = styled.input`
  grid-area: b;
  background: var(--c1);
  color: var(--c0);
  font-size: 18px;
  padding: 0px 16px;
  border: 1px solid var(--c1);
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  align-self: start; 
  height: 50%;
  width: 100%;

  &::placeholder {
    color: var(--c31);
  }

  &::after {
    content: '|';
    animation: blink 1s step-start infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  &:focus {
    outline: none;
  }
`;


const Header = ({ title, subtitle, links } : HeaderProps) => {
  const linksList = links?.map( (link) => <a key={link.title} href={link.href}>{link.title}</a>)

  return (
    <NavHeader>
      <NavBounds>
        <LogoDiv>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </LogoDiv>  
        <MiddleDiv>
          <SearchBar placeholder="Buscar produtos, marcas e muito mais..." />
        </MiddleDiv>
        <NavLinks>
          {linksList}
        </NavLinks>
      </NavBounds>
    </NavHeader>
  );
};

export default Header;