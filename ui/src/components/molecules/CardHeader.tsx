import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../atoms';
import { CardHeaderProps } from './props';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardHeader: React.FC<CardHeaderProps> = ({ title }) => (
  <Wrapper>
    <Avatar initial={title.substr(0, 1)} />
  </Wrapper>
);