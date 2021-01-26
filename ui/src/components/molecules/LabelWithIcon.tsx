import React from 'react';
import styled from 'styled-components';
import { CategoryIcon, LocationIcon, MailIcon, PhoneIcon } from '../atoms';
import { LabelWithIconProps } from './props';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

const Label = styled.span`
  padding-left: 5px;
`;

const renderIcon = (type: string) => {
  switch(type) {
    case 'category':
      return <CategoryIcon />;
    case 'location':
      return <LocationIcon />;
    case 'mail':
      return <MailIcon />;
    case 'phone':
      return <PhoneIcon />;
    default:
      return <React.Fragment></React.Fragment>
  }
};

export const LabelWithIcon: React.FC<LabelWithIconProps> = ({ type, children }) => (
  <Wrapper>
    <IconWrapper>{renderIcon(type)}</IconWrapper>
    <Label>{children}</Label>
  </Wrapper>
);