import React, { useState, Fragment} from 'react';
import styled, { css } from 'styled-components/macro';
import { TransitionGroup, Transition } from 'react-transition-group';
import { AnimFade, sectionPadding, media } from 'utils/style';
import DecoderText from 'components/DecoderText';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import { pxToRem } from 'app/theme';
import { RepoCard } from 'components/GithubCard'
import 'components/GithubCard/medium.css';

function GitProjects(visible) {
  const [complete] = useState(false);
  return (
    <TransitionGroup prerender={!prerender}>
      {!complete &&
    <Transition
    in={visible}
    start={!prerender} offset={300}
    onEnter={reflow}
  >
    {status => (
      <Fragment>
        <ProfileSection>
        <IntroText>
          <IntroName status={status}>
            <DecoderText text="GITHUB Repo's" start={!prerender} offset={300} />
          </IntroName>
        </IntroText>
        <PostListWrapper>
      <PostListContent>
          <Card username="bucharitesh" repo="PortfolioV2" />
          <Card username="bucharitesh" repo="PortfolioV1" />
      </PostListContent>
      <Text><br /><br />These repos are auto uploded via github API !! More on the Way :)</Text>
      </PostListWrapper>
      </ProfileSection>
      </Fragment>
    )}
  </Transition>
}
  </TransitionGroup>
  );
}

export default GitProjects;

const Card = styled(RepoCard)`

`;

const ProfileSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  ${sectionPadding}
  `;

const Text = styled.div`
      font-size: 10px;
`;

const PostListWrapper = styled.div`
  bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostListContent = styled.div`
  max-width: var(--maxWidthXL);
  grid-gap: 0px;
  position: relative;

  @media (min-width: ${media.desktop}px) {
    max-width: var(--maxWidthXL);
  }

  @media (max-width: ${media.tablet}px) {
  max-width: var(--maxWidthL);
  }

  @media (max-width: ${media.mobile}px) {
    display: flex;
    flex-direction: column;
  align-items: flex-start;
  }

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
  font-size: ${pxToRem(40)};
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
    font-size: ${pxToRem(24)};
    margin-bottom: var(--spaceL);
  }

  @media (max-width: ${media.mobile}px) {
    font-size: ${pxToRem(22)};
    letter-spacing: 0.2em;
    white-space: nowrap;
    overflow: hidden;
  }

  @media ${media.mobileLS} {
    margin-bottom: 20px;
    margin-top: 30px;
  }
`;