import React, { createContext, useContext, useReducer } from 'react';
import { Lead, createFromResponse } from '../types';
import { initialState, ActionTypes, LeadContextType, leadReducer } from '../reducers/leadReducer';
import { leads } from '../api';

export const LeadContext = createContext<LeadContextType>(initialState);

export const useLead = () => useContext(LeadContext);

export const LeadProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(leadReducer, initialState);
  const { acceptedLeads, invitedLeads } = state;

  const onAcceptLead = async (lead: Lead) => {
    await leads.accept(lead.id);
    dispatch({
      type: ActionTypes.LeadUpdated,
    });
  }

  const onDeclineLead = async (lead: Lead) => {
    await leads.decline(lead.id);
    dispatch({
      type: ActionTypes.LeadUpdated,
    });
  }

  const fetchLeads = async (type: string) => {
    const data: any[] = await leads.fetchList(type);
    dispatch({
      type: type === 'accepted' ? ActionTypes.LeadsAcceptedLoaded : ActionTypes.LeadsInvitedLoaded,
      payload: data.map((item: any) => createFromResponse(item)),
    });
  }

  return (
    <LeadContext.Provider value={{ acceptedLeads, invitedLeads, onAcceptLead, onDeclineLead, fetchLeads }}>{children}</LeadContext.Provider>
  );
}