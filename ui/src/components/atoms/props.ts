import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
}

export interface TabItemProps extends React.HtmlHTMLAttributes<HTMLElement> {
  active?: boolean;
}

export interface TabProps extends TabItemProps {
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