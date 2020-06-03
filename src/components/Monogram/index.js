import React from 'react';
import styled from 'styled-components/macro';
import { useId } from 'hooks';

function Monogram({ highlight, ...props }) {
  const id = useId();
  const linearId = `linear-${id}`;
  const clipId = `monogram-clip-${id}`;

  return (
    <MonogramWrapper viewBox="0 0 513.83 552.34" height="56" width="56" fill="currentColor"  {...props} >
      <defs>
        <linearGradient id={linearId} x1="0%" y1="0%" x2="100%" y2="0%">
        gradientTransform="translate(-11.31 4.69) rotate(0.46)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#cce0f4" />
            <stop offset="0" stop-color="#c3dcf3" />
            <stop offset="0" stop-color="#a9d2ef" />
            <stop offset="0" stop-color="#80c2e9" />
            <stop offset="0" stop-color="#6dbae6" />
            <stop offset="0" stop-color="#0075be" stop-opacity="0.7" />
            <stop offset="0.66" stop-color="#b1a8d1" />
            <stop offset="1" stop-color="#c5aed3" />
        </linearGradient>
        <clipPath id={clipId}>
            <path d="M283.38,349.89c-8.85-12.11-17-21.44-47-54-33.37-36.21-36.8-39.34-36-45,4.16-29.55,107.86-16.53,121.15-53.7,12.25-34.26-56.06-109.85-108.47-100.75-66,11.45-83.44,153.11-86.68,179.45-7.73,62.83,1.67,115.19,10.18,148h37.68q-13.77-67.32-13.77-103.34c0-13.17,3.84-38.71,13.77-40.74,9.51-1.94,20.68,18.79,35.14,44.08,14,24.41,34.6,59.41,62,102,10.47,0,32.09-1.18,39-14C318.18,397.42,302.14,375.58,283.38,349.89ZM192.22,183.66c-1.17-4-11.35-39.21,5.71-51.38,20.36-14.54,75,6.89,76.5,29.22,1.55,23.47-55.64,49.08-74.21,37.27C195.87,196,194.58,191.81,192.22,183.66ZM327.38,298.89c-6.7,6.94-8.3,15.4-9,20-2.45,16.08-13.25,87.69,18,100.52,21.31,8.75,55.41-12.56,55-27.52-.41-13.73-29.76-16.73-31-33-1.3-17,30-24,29-42-.73-13.42-19.1-26.18-36-27C349.6,289.71,336.44,289.51,327.38,298.89Zm-327-22c-.6-7.8-3.68-56.76,26-98,33.64-46.74,77-38.57,104-86,23.19-40.74,2.18-66.1,23-83,36.17-29.36,146.7,9,190,84,21.78,37.75,14.6,64.08,44,86,35,26.08,66.4,4.68,96,27,41,31,30.11,109.51,26,139-2.73,19.63-23,165.37-116,199-112.17,40.59-286-98-286-98h0S7.47,369.45.38,276.89Z" />
            <path d="M340.22,335.55c-10.71,10.42-11.19,50.15.52,59.54,7.07,5.67,19.06.67,20.4-6.84,1.08-6.08-4.51-15.56-10.55-17.48-4.47-1.43-6.76,2.05-8.44,0-4.38-5.37,8.3-32.68,4.39-37.25C345.12,331.86,342,333.82,340.22,335.55Z" />
            <path d="M338.61,389.22c-11.15-9.84-12.8-48.57-1.21-58.09,7-5.75,19.3-1.23,20.87,6.05,1.27,5.9-4.12,15.31-10.18,17.37-4.49,1.53-6.91-1.8-8.55.26-4.29,5.37,9.36,31.62,5.54,36.19C343.68,392.67,340.45,390.85,338.61,389.22Z" />
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
