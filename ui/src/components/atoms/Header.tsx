import React from 'react';
import styled from 'styled-components';
import { HeaderProps } from './props';
import { colors } from '../theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.white};
`;
const List = styled.ul`
  flex: 1;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <Wrapper><List>{children}</List></Wrapper>
);