'use client';

import { ChildrenProps } from "@/types";
import styled from "styled-components";

export interface CardProps {
  title: string;
} 

const CardDiv = styled.div`
  background-color: #fff;
  color: #e9e9e9;
`

const Title = styled.h1`
  color: rgba(0,0,0,.9);
  font-size: 16px;
  font-weight: 600;
  padding: 16px 12px 16px 16px;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CardContent = styled.div`
  display: flex;
  padding: 0px 12px 16px 16px;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .12);
`

const Card = ({ title, children } : CardProps & ChildrenProps) => {
  return (
    <CardDiv>
      <Title>{title}</Title>
      <CardContent>{children}</CardContent>
    </CardDiv>
  );
};

export default Card;