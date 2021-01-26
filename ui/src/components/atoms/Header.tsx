import React from 'react';
import styled from 'styled-components';
import { HeaderProps } from './props';
import { colors } from '../theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.white};
`;
export const Header: React.FC<HeaderProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);