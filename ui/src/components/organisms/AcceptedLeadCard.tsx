import React from 'react';
import styled from 'styled-components';
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

const BoldText = styled.span`
  font-weight: 700;
  color: ${colors.primary};
`;

const Footer = styled.div`
  border-bottom: 1px solid ${colors.grey};
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DescriptionWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;


export const AcceptedLeadCard: React.FC<CardProps> = ({ heading, subHeading, location, category, jobId, price, description, phoneNumber, email, onAcceptClick, onDeclineClick }) => (
  <Wrapper>
    <Header heading={heading} subHeading={subHeading} />
    <DetailsWrapper>
      <LabelWithIcon type='location'>{location}</LabelWithIcon>
      <LabelWithIcon type='category'>{category}</LabelWithIcon>
      <Label>Job ID: {jobId}</Label>
      <Label>${price.toFixed(2)} Lead Invitation</Label>
    </DetailsWrapper>
    <Footer>
      <ContactsWrapper>
        <LabelWithIcon type='phone'><BoldText>{phoneNumber}</BoldText></LabelWithIcon>
        <LabelWithIcon type='mail'><BoldText>{email}</BoldText></LabelWithIcon>
      </ContactsWrapper>
      <DescriptionWrapper>
        <Label>{description}</Label>
      </DescriptionWrapper>
    </Footer>
  </Wrapper>
);