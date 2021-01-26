import React from 'react';
import styled from 'styled-components';
import { BaseButtonProps, ButtonProps } from './props';
import { colors } from '../theme';

const Wrapper = styled.button<BaseButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 1.1em;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  ${({ primary }) => `
    background-color: ${primary ? colors.primary : colors.lightGrey};
    color: ${primary ? 'white' : 'black'};
    border-bottom-color: ${primary ? colors.darkTangerine : colors.grey};
  `};
  &:hover {
    ${({ primary }) => `
    background-color: ${primary ? colors.darkTangerine : colors.grey};
  `};
  }
`;

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => (
  <Wrapper {...props}>{label}</Wrapper>
);