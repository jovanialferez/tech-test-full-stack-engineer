import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
}

export interface TabLinkProps {
  active?: boolean;
}

export interface TabProps extends TabLinkProps {
  label: string;
}

export interface AvatarProps {
  initial: string;
}

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  label: string;
}