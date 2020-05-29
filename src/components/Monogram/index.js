import React from 'react';
import styled from 'styled-components/macro';
import { useId } from 'hooks';

function Monogram({ highlight, ...props }) {
  const id = useId();
  const linearId = `linear-${id}`;
  const clipId = `monogram-clip-${id}`;

  return (
    <MonogramWrapper width="45" height="45" viewBox="0 0 43 15" fill="currentColor"  {...props} >
      <defs>
        <linearGradient id={linearId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64bbe8"/>
          <stop offset="80%" stopColor="#c5aed3"/>
        </linearGradient>
        <clipPath id={clipId}>
          <path d="M1 1l20.5 12L42 1"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} fill={`url(#${linearId})`} width="100%" height="100%" />
      {highlight &&
        <g clipPath={`url(#${clipId})`}>
          <MonogramHighlight className="monogram__highlight" width="100%" height="100%" />
        </g>
      }
    </MonogramWrapper>
  );
}

const MonogramWrapper = styled.svg`
  fill: var(--colorTextTitle);
`;

const MonogramHighlight = styled.rect`
  fill: rgb(var(--rgbAccent));
  opacity: 0;
  transform: scale3d(1, 0, 1);
  transform-origin: top;
  transition:
    transform var(--durationM) var(--bezierFastoutSlowin),
    opacity 0.1s ease var(--durationM);

  a:focus &,
  a:hover &,
  ${/* sc-selector */MonogramWrapper}:hover & {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: bottom;
    transition:
      transform var(--durationM) var(--bezierFastoutSlowin),
      opacity 0.1s ease;
  }
`;

export default Monogram;
