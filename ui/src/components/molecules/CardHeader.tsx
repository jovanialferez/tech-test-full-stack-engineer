import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../atoms';
import { CardHeaderProps } from './props';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;


const Heading = styled.span`
  font-weight: 700;
`;

const SubHeading = styled.span`
`;

export const CardHeader: React.FC<CardHeaderProps> = ({ heading, subHeading, ...props }) => (
  <Wrapper {...props}>
    <Avatar initial={heading.substr(0, 1)} />
    <HeadingWrapper>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
    </HeadingWrapper>
  </Wrapper>
);