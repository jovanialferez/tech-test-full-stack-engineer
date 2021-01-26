import React from 'react';

export interface CardProps {
  type: string;
  heading: string;
  subHeading: string;
  description: string;
  location: string;
  category: string;
  jobId: number;
  price: number;
  phoneNumber: string;
  email: string;
  onAcceptClick?: React.MouseEventHandler;
  onDeclineClick?: React.MouseEventHandler;
}