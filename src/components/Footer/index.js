import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Anchor from 'components/Anchor';
import { sectionPadding } from 'utils/style';

const Footer = () => (
  <FooterContainer role="contentinfo">
    <FooterDate>{`Developed with`} &hearts; {`by `} </FooterDate>
    <Anchor secondary={1} as={Link} to="/#about">Ritesh Bucha</Anchor>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  width: 100vw;
  padding: var(--space3XL) var(--spaceL);
  z-index: 16;
  position: relative;
  font-size: var(--fontSizeBodyS);
  color: var(--colorTextLight);
  ${sectionPadding}

  ${Anchor} {
    display: inline-flex;
  }
`;

const FooterDate = styled.span`
  padding-right: var(--spaceXS);
  display: inline-flex;
`;

export default Footer;
