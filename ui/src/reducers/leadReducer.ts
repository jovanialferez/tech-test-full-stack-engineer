import { Reducer } from 'react';
import { Lead } from '../types';

export const initialState = {
  acceptedLeads: [],
  invitedLeads: [],
  onAcceptLead: (lead: Lead) => {},
  onDeclineLead: (lead: Lead) => {},
  fetchLeads: (type: string) => {},
}

export interface LeadState {
  invitedLeads: Lead[],
  acceptedLeads: Lead[],
  onAcceptLead: (lead: Lead) => void,
  onDeclineLead: (lead: Lead) => void,
  fetchLeads: (type: string) => void,
}

export interface LeadContextType {
  invitedLeads: Lead[],
  acceptedLeads: Lead[],
  onAcceptLead: (lead: Lead) => void,
  onDeclineLead: (lead: Lead) => void,
  fetchLeads: (type: string) => void,
}

export enum ActionTypes {
  LeadsAcceptedLoaded = 'leads/accepted/loaded',
  LeadsInvitedLoaded = 'leads/invited/loaded',
  LeadUpdated = 'lead/updated',
}

export type LeadActions = {
  type: ActionTypes.LeadsAcceptedLoaded;
  payload: Lead[];
} | {
  type: ActionTypes.LeadsInvitedLoaded;
  payload: Lead[];
} | {
  type: ActionTypes.LeadUpdated;
}

export const leadReducer: Reducer<LeadState, LeadActions> = (state, action) => {
  switch (action.type) {
    case ActionTypes.LeadsAcceptedLoaded:
      return {
        ...state,
        acceptedLeads: action.payload,
      };
    case ActionTypes.LeadsInvitedLoaded:
      return {
        ...state,
        invitedLeads: action.payload,
      };
    case ActionTypes.LeadUpdated:
      return state;
    default:
      return state;
  }
}