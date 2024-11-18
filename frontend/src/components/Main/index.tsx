'use client';

import { ChildrenProps } from "@/types";
import styled from "styled-components";


const MainDiv = styled.main`
  background-color: #ebebeb;
  height: 100%;
  flex: 1;
`

const Main = ({ children } : ChildrenProps) => {
  return (
    <MainDiv>
      {children}
    </MainDiv>
  );
};

export default Main;