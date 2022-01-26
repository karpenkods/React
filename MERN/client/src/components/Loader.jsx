import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Loader = () => (
  <div>
    <Loading />
  </div>
)

const loading = keyframes`
  0% {
    transform: rotate(0);
  } 100% {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  color: transparent;
  min-height: 3rem;
  pointer-events: none;
  position: relative;

  &::after {
    content: '';
    animation: ${loading} 0.5s infinite linear;
    border: 0.1rem solid var(--color-red);
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    display: block;
    z-index: 1;
    left: 50%;
    position: absolute;
    top: 50%;
    height: 3rem;
    width: 3rem;
    margin-left: -0.8rem;
    margin-top: -0.8rem;
  }
`
