import React, { useMemo, useEffect, useState, Fragment, memo } from 'react';
import styled, { css, keyframes, useTheme } from 'styled-components/macro';
import { TransitionGroup, Transition } from 'react-transition-group';
import { AnimFade, sectionPadding, media } from 'utils/style';
import DecoderText from 'components/DecoderText';
import Icon from 'components/Icon';
import { useInterval, usePrevious, useWindowSize } from 'hooks';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import { pxToRem, tokens, msToNum } from 'app/theme';
import { RepoCard } from 'components/GithubCard'
import 'components/GithubCard/medium.css';

const initDelay = tokens.base.durationS;

function Articles() {
  const [complete] = useState(false);
  const theme = useTheme();

  return (
    <Transition
    key={theme.themeId}
    appear={!prerender}
    in={!prerender}
    timeout={3000}
    onEnter={reflow}
  >
    {status => (
      <Fragment>
        <IntroText>
          <IntroName status={status}>
            <DecoderText text="GITHUB Repo" start={!prerender} offset={120} />
          </IntroName>
        </IntroText>
        <PostListWrapper>
      <PostListContent>
          <RepoCard username="bucharitesh" repo="PortfolioV2" />
          <RepoCard username="bucharitesh" repo="PortfolioV1" />
          <RepoCard username="bucharitesh" repo="EasyPharma" />
      </PostListContent>
      </PostListWrapper>
      </Fragment>
    )}
  </Transition>
      
  );
}

export default Articles;

const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostListContent = styled.div`
  max-width: var(--maxWidthL);
  grid-gap: 20px;
  position: relative;

`;

const PostTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const PostListTitle = styled.h1`
  font-size: 120px;
  margin: 0;
  position: relative;

`;

const ContactTitle = styled.h1`
  font-size: var(--fontSizeH2);
  font-weight: var(--fontWeightMedium);
  margin-bottom: var(--space2XL);
  line-height: var(--lineHeightTitle);
  margin-top: 0;
  color: var(--colorTextTitle);
  transition-property: transform, opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: calc(${props => props.delay}ms + ${initDelay});
  transform: translate3d(0, var(--space5XL), 0);
  opacity: 0;

  ${props => (props.status === 'entering' || props.status === 'entered') && !prerender && css`
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}

  ${props => props.status === 'exiting' && css`
    transition-duration: var(--durationM);
    transition-delay: 0s;
    transform: translate3d(0, calc(var(--space2XL) * -1), 0);
    opacity: 0;
  `}
`;

const IntroText = styled.header`
  max-width: 780px;
  width: 100%;
  position: relative;
  text-align: center;
  align-content: center;

  @media (min-width: ${media.desktop}px) {
    max-width: 920px;
  }

  @media (max-width: ${media.mobile}px) {
    top: calc(var(--space3XL) * -1);
  }

  @media (max-width: 400px) {
    top: calc(var(--spaceXL) * -1);
  }

  @media ${media.mobileLS} {
    top: calc(var(--spaceM) * -1);
  }
`;

const IntroName = styled.h1`
  text-transform: uppercase;
  font-size: ${pxToRem(24)};
  letter-spacing: 0.3em;
  color: var(--colorTextBody);
  margin-bottom: var(--space2XL);
  margin-top: 0;
  font-weight: var(--fontWeightMedium);
  line-height: 1;
  opacity: 0;

  ${props => props.status === 'entering' && css`
    animation: ${css`${AnimFade} var(--durationL) ease 0.2s forwards`};
  `}

  ${props => props.status === 'entered' && css`
    opacity: 1;
  `}

  @media (min-width: ${media.desktop}px) {
    font-size: ${pxToRem(28)};
    margin-bottom: var(--spaceL);
  }

  @media (max-width: ${media.tablet}px) {
    margin-bottom: var(--spaceL);
  }

  @media (max-width: ${media.mobile}px) {
    margin-bottom: 20px;
    letter-spacing: 0.2em;
    white-space: nowrap;
    overflow: hidden;
  }

  @media ${media.mobileLS} {
    margin-bottom: 20px;
    margin-top: 30px;
  }
`;