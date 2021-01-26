import React from 'react';
import styled from 'styled-components';
import { Avatar, Button as BaseButton } from '../atoms';
import { LabelWithIcon } from '../molecules';
import { CardProps } from './props';
import { colors } from '../theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  border-bottom: 1px solid ${colors.grey};
  display: flex;
  flex-direction:  row;
  align-items: center;
  padding: 10px 15px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;


const Heading = styled.span`
  font-weight: 700;
`;

const SubHeading = styled.span`
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
  color: ${colors.amber};
`;

const DescriptionWrapper = styled.div`
  border-bottom: 1px solid ${colors.grey};
  padding: 10px 15px;
`;

const ContactsWrapper = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
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

export const Card: React.FC<CardProps> = ({ type, heading, subHeading, location, category, jobId, price, description, phoneNumber, email }) => (
  <Wrapper>
    <Header>
      <Avatar initial={heading.substr(0, 1)} />
      <HeadingWrapper>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
      </HeadingWrapper>
    </Header>
    <DetailsWrapper>
      <LabelWithIcon type='location'>{location}</LabelWithIcon>
      <LabelWithIcon type='category'>{category}</LabelWithIcon>
      <Label>Job ID: {jobId}</Label>
      {type === 'accepted' &&
        <Label>${price.toFixed(2)} Lead Invitation</Label>
      }
    </DetailsWrapper>
    {type === 'invited' &&
      <DescriptionWrapper>
        <Label>{description}</Label>
      </DescriptionWrapper>
    }
    {type === 'accepted' &&
      <ContactsWrapper>
        <LabelWithIcon type='phone'><BoldText>{phoneNumber}</BoldText></LabelWithIcon>
        <LabelWithIcon type='mail'><BoldText>{email}</BoldText></LabelWithIcon>
      </ContactsWrapper>
    }
    {type === 'invited' &&
      <Footer>
        <Button label='Accept' primary />
        <Button label='Decline' />
        <p><PriceWrapper>${price.toFixed(2)}</PriceWrapper> Lead invitation</p>
      </Footer>
    }
  </Wrapper>
);