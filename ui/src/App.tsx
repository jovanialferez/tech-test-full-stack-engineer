import React from 'react';
import { LeadProvider } from './contexts';
import { LeadsPage } from './components/pages';

export default function App() {
  return (
    <LeadProvider>
      <LeadsPage />
    </LeadProvider>
  );
};
