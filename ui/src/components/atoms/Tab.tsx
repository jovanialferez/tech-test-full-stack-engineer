import React from 'react';
import styled from 'styled-components';
import { TabLinkProps, TabProps } from './props';
import { colors } from '../theme';

const Wrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const Link = styled.a<TabLinkProps>`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
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
  <Wrapper><Link {...props} href='#'>{label}</Link></Wrapper>
);