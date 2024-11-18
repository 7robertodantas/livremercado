'use client';

import styled from "styled-components";

export interface FooterProps {
  text: string;
}

const NavFooter = styled.footer`
  color: #999;
  background-color: #fff;
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  overflow: hidden;
  border-top: 1px solid #e6e6e6;
  width: 100%;
  height: 20px;
  text-align: center;
`

const Footer = ({ text } : FooterProps) => {
  return (
    <NavFooter>
      {text}
    </NavFooter>
  );
};

export default Footer;