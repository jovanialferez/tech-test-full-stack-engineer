import React from 'react';
import styled from 'styled-components';
import { Tab, Header } from '../atoms';
import { Card } from '../organisms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const CardWrapper = styled.div`
  margin-top: 20px;
`;

export const LeadsPage = () => {
  return (
    <Wrapper>
      <Header>
        <Tab label='Invite' active />
        <Tab label='Accepted' />
      </Header>
      <CardWrapper>
        <Card
          type='accepted'
          heading='Juan'
          subHeading='January 4 @2:37pm'
          location='Carramar 6031'
          category='Carpentry'
          jobId={12346}
          price={12.50}
          description='Lorem ipsum'
          phoneNumber='400000000'
          email='one@test.com'
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          type='invited'
          heading='Juan'
          subHeading='January 4 @2:37pm'
          location='Carramar 6031'
          category='Carpentry'
          jobId={12346}
          price={12.50}
          description='Lorem ipsum'
          phoneNumber='400000000'
          email='one@test.com'
        />
      </CardWrapper>
    </Wrapper>
  )
}