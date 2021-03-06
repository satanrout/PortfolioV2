import styled from 'styled-components/macro';

const Divider = styled.div`
  width: ${props => props.lineWidth};
  height: ${props => props.lineHeight};
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgb(var(--rgbPrimary));
    opacity: ${props => (props.collapsed ? 0 : 1)};
    transition-property: transform, opacity;
    transition-duration: var(--durationL);
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-delay: ${props => props.collapseDelay}ms;
    transform: scaleX(${props => (props.collapsed ? 0 : 1)});
    transform-origin: left center;
  }

  &::after {
    content: '';
    width: ${props => props.notchWidth};
    height: ${props => props.notchHeight};
    background: rgb(var(--rgbPrimary));
    position: absolute;
    top: ${props => props.lineHeight};
    transition-property: clip-path, opacity;
    transition-duration: var(--durationL);
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-delay: ${props => props.collapseDelay + 160}ms;
    opacity: ${props => props.collapsed ? 0 : 1};
    clip-path: ${props => props.collapsed
      ? 'polygon(0 0, 0 0, 10px 100%, 10px 100%)'
      : 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 10px 100%)'
    };
  }
`;

Divider.defaultProps = {
  lineWidth: '100%',
  lineHeight: '2px',
  notchWidth: '90px',
  notchHeight: '10px',
  collapsed: false,
  collapseDelay: 0,
};

export default Divider;
