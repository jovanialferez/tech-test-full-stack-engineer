import React from 'react';
import styled from 'styled-components';
import { AvatarProps } from './props';
import { colors } from '../theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.amber};
`;

const Text = styled.p`
  font-weight: 700;
  color: white;
`;

export const Avatar: React.FC<AvatarProps> = ({ initial }) => (
  <Wrapper><Text>{initial}</Text></Wrapper>
);