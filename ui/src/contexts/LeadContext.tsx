import React, { createContext, useContext, useReducer } from 'react';
import { Lead } from '../types';
import { initialState, ActionTypes, LeadContextType, leadReducer } from '../reducers/leadReducer';

export const LeadContext = createContext<LeadContextType>(initialState);

export const useLead = () => useContext(LeadContext);

export const LeadProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(leadReducer, initialState);
  const { acceptedLeads, invitedLeads } = state;

  const onAcceptLead = (lead: Lead) => {
    // ... api stuff
    console.log('onAcceptLead');
    dispatch({
      type: ActionTypes.LeadUpdated,
    });
  }

  const onDeclineLead = (lead: Lead) => {
    // ... api stuff
    console.log('onDeclineLead');
    dispatch({
      type: ActionTypes.LeadUpdated,
    });
  }

  const fetchLeads = (type: string) => {
    console.log('fetchLeads');
    dispatch({
      type: type === 'accepted' ? ActionTypes.LeadsAcceptedLoaded : ActionTypes.LeadsInvitedLoaded,
      payload: [
        {
          id: 1,
          status: type,
          category: 'plumbing',
          location: 'Sydney 200',
          price: 20,
          contactName: 'Han Solo',
          contactNumber: '0498765432',
          contactEmail: 'han@mailnator.com',
          creationTimestamp: 1611723588,
        },
        {
          id: 2,
          status: type,
          category: 'plumbing',
          location: 'Sydney 200',
          price: 30,
          contactName: 'Han Double',
          contactNumber: '0498765432',
          contactEmail: 'han2@mailnator.com',
          creationTimestamp: 1609518300,
        },
        {
          id: 3,
          status: type,
          category: 'plumbing',
          location: 'Sydney 200',
          price: 30,
          contactName: 'Han Double',
          contactNumber: '0498765432',
          contactEmail: 'han2@mailnator.com',
          creationTimestamp: 1610287800,
        }
      ],
    });
  }

  return (
    <LeadContext.Provider value={{ acceptedLeads, invitedLeads, onAcceptLead, onDeclineLead, fetchLeads }}>{children}</LeadContext.Provider>
  );
}