import React from 'react';
import styled from 'styled-components';
import { Button as BaseButton } from '../atoms';
import { CardHeader, LabelWithIcon } from '../molecules';
import { CardProps } from './props';
import { colors } from '../theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const Header = styled(CardHeader)`
  border-bottom: 1px solid ${colors.grey};
  padding: 10px 15px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${colors.grey};
  padding: 10px 15px;
`;

const Label = styled.span`
  padding-left: 5px;
`;

const DescriptionWrapper = styled.div`
  border-bottom: 1px solid ${colors.grey};
  padding: 10px 15px;
`;

const Footer = styled.div`
  border-bottom: 1px solid ${colors.grey};
  padding: 10px 15px;
  display: flex;
  flex-direction:  row;
  align-items: center;
`;

const Button = styled(BaseButton)`
  margin-right: 10px;
`;

const PriceWrapper = styled.span`
  font-weight: 700;
`;

export const InvitedLeadCard: React.FC<CardProps> = ({ heading, subHeading, location, category, jobId, price, description, onAcceptClick, onDeclineClick }) => (
  <Wrapper>
    <Header heading={heading} subHeading={subHeading} />
    <DetailsWrapper>
      <LabelWithIcon type='location'>{location}</LabelWithIcon>
      <LabelWithIcon type='category'>{category}</LabelWithIcon>
      <Label>Job ID: {jobId}</Label>
    </DetailsWrapper>
    <DescriptionWrapper>
      <Label>{description}</Label>
    </DescriptionWrapper>
    <Footer>
      <Button label='Accept' primary onClick={onAcceptClick} />
      <Button label='Decline' onClick={onDeclineClick} />
      <p><PriceWrapper>${price.toFixed(2)}</PriceWrapper> Lead invitation</p>
    </Footer>
  </Wrapper>
);