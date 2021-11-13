import React from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 32px 12px 32px;
  align-self: flex-end;
  margin-top: 1.5rem;
  background-color: ${props => props.theme.greenTwo};
  border: none;
  font-size: 1rem;
  font-weight: light;
  color: ${props => props.theme.whiteOne};
  transition: .2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    cursor: pointer;
    background-color: #1f5d38;
  }

  @media only screen and (max-width: 992px) {
    align-self: center;
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: 993px) {
    margin-left: auto;
  }
`

export const Button = ({ children, onSubmit, ...props }) => (
    <StyledButton>{children}</StyledButton>
)
