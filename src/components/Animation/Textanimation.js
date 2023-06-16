import React from 'react'
import styled, { keyframes } from "styled-components"

export default function Textanimation() {
    const item = "Upskill";
    return (
    <Wrapper>
    <span style={{color: "#5b2bff"}}>{item}</span>
    </Wrapper>
  )
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(-100px); }
`
const Wrapper = styled.span`
  display: inline-block;
  animation-name: ${animation};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

`
