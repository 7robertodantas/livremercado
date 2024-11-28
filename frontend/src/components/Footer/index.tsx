'use client';

import styled from "styled-components";

export interface FooterProps {
  text: string;
}

const NavFooter = styled.footer`
  color: var(--c0);
  background-color: var(--c3);
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  overflow: hidden;
  border-top: 1px solid #e6e6e6;
  width: 100%;
  height: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Footer = () => {
  return (
    <NavFooter>
      Copyright © 1999-2024 livre mercado.
    </NavFooter>
  );
};

export default Footer;