'use client';

import styled from "styled-components";

export interface HeaderLink {
  title: string;
  href: string;
}

export interface HeaderProps {
  title: string;
  links: Array<HeaderLink>
}

const NavHeader = styled.header`
  background-color: #ffe600;
  color: rgba(0, 0, 0, .8980392157);
  height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
`

const NavBounds = styled.div`
  display: grid;
  grid-template-areas:
    "a b c"
    "d e f";
  width: 100%;
  padding: 8px 10px 12px 10px;
`

const LogoDiv = styled.div`
  grid-area: a;
`

const NavLinks = styled.div`
  grid-area: e;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: flex-end;
`

const Header = ({ title, links } : HeaderProps) => {
  const linksList = links?.map( (link) => <a key={link.title} href={link.href}>{link.title}</a>)

  return (
    <NavHeader>
      <NavBounds>
        <LogoDiv>{title}</LogoDiv>  
        <NavLinks>
          {linksList}
        </NavLinks>
      </NavBounds>
    </NavHeader>
  );
};

export default Header;