import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Tab, Header } from '../atoms';
import { AcceptedLeadCard, InvitedLeadCard } from '../organisms';
import { Lead } from '../../types';
import { useLead } from '../../contexts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const CardWrapper = styled.div`
  margin-top: 20px;
`;

export const LeadsPage = () => {
  const [currentType, setCurrentType] = useState('invited');
  const { invitedLeads, acceptedLeads, onAcceptLead, onDeclineLead, fetchLeads } = useLead();
  
  const handleOnAcceptLead = useCallback(
    async (lead: Lead) => {
      // let's "await", so that next request to fetch gets the updated list (not-guaranteed though)
      await onAcceptLead(lead);
      fetchLeads(currentType);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onAcceptLead],
  );

  const handleOnDeclineLead = useCallback(
    async (lead: Lead) => {
      // let's "await", so that next request to fetch gets the updated list (not-guaranteed though)
      await onDeclineLead(lead);
      fetchLeads(currentType);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onDeclineLead],
  );
  
  useEffect(() => {
    fetchLeads(currentType);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentType]);

  return (
    <Wrapper>
      <Header>
        <Tab label='Invited' active={currentType === 'invited'} onClick={() => setCurrentType('invited')} />
        <Tab label='Accepted' active={currentType === 'accepted'} onClick={() => setCurrentType('accepted')} />
      </Header>
      {currentType === 'invited' && 
        invitedLeads.map((lead: Lead) => (
          <CardWrapper key={lead.id}>
            <InvitedLeadCard
              type={lead.status}
              heading={lead.contactName.split(' ')[0]}
              subHeading={dayjs.unix(lead.creationTimestamp).format('MMM D @h:mma')}
              location={lead.location}
              category={lead.category}
              jobId={lead.id}
              price={lead.price}
              description={lead.description}
              phoneNumber={lead.contactNumber}
              email={lead.contactEmail}
              onAcceptClick={() => handleOnAcceptLead(lead)}
              onDeclineClick={() => handleOnDeclineLead(lead)}
            />
          </CardWrapper>
        ))
      }
      {currentType === 'accepted' &&
        acceptedLeads.map((lead: Lead) => (
          <CardWrapper key={lead.id}>
            <AcceptedLeadCard
              type={lead.status}
              heading={lead.contactName}
              subHeading={dayjs.unix(lead.creationTimestamp).format('MMM D @h:mma')}
              location={lead.location}
              category={lead.category}
              jobId={lead.id}
              price={lead.price}
              description={lead.description}
              phoneNumber={lead.contactNumber}
              email={lead.contactEmail}
            />
          </CardWrapper>
        ))
      }
    </Wrapper>
  )
}