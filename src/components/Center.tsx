import React, { HTMLAttributes } from 'react';
import styled from "styled-components";

type CenterProps = HTMLAttributes<HTMLDivElement>

export function Center(props: CenterProps) {
  return (
    <CenterStyled {...props}/>
  )
}

const CenterStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
