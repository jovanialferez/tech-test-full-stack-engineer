import React from 'react';
import styled from 'styled-components';
import { TabProps, TabItemProps } from './props';
import { colors } from '../theme';

const Item = styled.li<TabItemProps>`
  flex: 1;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  text-decoration: none;
  font-weight: 700;
  color: ${colors.black};
  border-bottom-width: 4px;
  border-bottom-style: solid;
  ${({ active }) => `
    border-bottom-color: ${active ? colors.primary : colors.white};
  `};
  &:hover {
    border-bottom-color: ${colors.primary};
  }
`;

export const Tab: React.FC<TabProps> = ({ label, ...props }) => (
  <Item {...props}>{label}</Item>
);