import React from 'react';

interface IconProps {
  className?: string;
}

export const CatSittingLeft: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 85C90 85 95 75 90 65C85 55 75 80 70 85" stroke="#E07A5F" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 90C65 90 75 80 70 50C65 20 35 20 30 50C25 80 35 90 50 90Z" fill="#F2CC8F"/>
    <path d="M35 30L30 10L50 25" fill="#F2CC8F"/>
    <path d="M65 30L70 10L50 25" fill="#F2CC8F"/>
    <circle cx="42" cy="40" r="2" fill="#5D5D5D"/>
    <circle cx="58" cy="40" r="2" fill="#5D5D5D"/>
    <path d="M48 45Q50 48 52 45" stroke="#5D5D5D" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="50" cy="65" rx="10" ry="15" fill="#FFFBEB"/>
  </svg>
);

export const CatSittingRight: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 85C10 85 5 75 10 65C15 55 25 80 30 85" stroke="#81B29A" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 90C35 90 25 80 30 50C35 20 65 20 70 50C75 80 65 90 50 90Z" fill="#E5E7EB"/>
    <path d="M35 30L30 10L50 25" fill="#E5E7EB"/>
    <path d="M65 30L70 10L50 25" fill="#E5E7EB"/>
    <circle cx="42" cy="40" r="2" fill="#5D5D5D"/>
    <circle cx="58" cy="40" r="2" fill="#5D5D5D"/>
    <path d="M48 45Q50 48 52 45" stroke="#5D5D5D" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 42H40M30 46H40" stroke="#9CA3AF" strokeWidth="1"/>
    <path d="M60 42H70M60 46H70" stroke="#9CA3AF" strokeWidth="1"/>
  </svg>
);

export const CatPeeking: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="50" r="8" fill="#FFF" stroke="#E07A5F" strokeWidth="2"/>
    <circle cx="70" cy="50" r="8" fill="#FFF" stroke="#E07A5F" strokeWidth="2"/>
    <path d="M50 50C70 50 75 20 50 20C25 20 30 50 50 50Z" fill="#E07A5F"/>
    <path d="M30 25L25 5L45 20" fill="#E07A5F"/>
    <path d="M70 25L75 5L55 20" fill="#E07A5F"/>
    <circle cx="42" cy="35" r="2" fill="#FFF"/>
    <circle cx="58" cy="35" r="2" fill="#FFF"/>
    <path d="M48 40Q50 42 52 40" stroke="#FFF" strokeWidth="2"/>
  </svg>
);

export const PawPrint: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="65" r="20" />
    <circle cx="25" cy="40" r="10" />
    <circle cx="50" cy="30" r="10" />
    <circle cx="75" cy="40" r="10" />
  </svg>
);

export const HangerIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 55L50 25L80 55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 25V15C50 10 55 5 60 5C63 5 65 7 65 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);