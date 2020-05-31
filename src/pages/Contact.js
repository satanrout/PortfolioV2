import React, { useState, useCallback, memo } from 'react';
import styled, { css } from 'styled-components/macro';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Helmet } from 'react-helmet-async';
import Input from 'components/Input';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import { Button, RouterButton } from 'components/Button';
import { AnimFade, sectionPadding, media } from 'utils/style';
import { useScrollRestore, useFormInput, useRouteTransition } from 'hooks';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import { tokens, msToNum } from 'app/theme';
import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/firebase"
const config = {
    apiKey: "AIzaSyDtpksAts3-OUc3sTUZjMgcMM2AegJqEnY",
    authDomain: "portfoliov2-2963d.firebaseapp.com",
    databaseURL: "https://portfoliov2-2963d.firebaseio.com",
    projectId: "portfoliov2-2963d",
    storageBucket: "portfoliov2-2963d.appspot.com",
    messagingSenderId: "793465687390",
    appId: "1:793465687390:web:6f1eaf31a4df44612193cf",
    measurementId: "G-72D6BM77PC"
};
firebase.initializeApp(config);
const initDelay = tokens.base.durationS;



function Contact() {
  const { status } = useRouteTransition();
  const name = useFormInput('');
  const email = useFormInput('');
  const message = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  useScrollRestore();
  
  const onSubmit = e => {
    e.preventDefault();
    setSending(true);
    const db = firebase.firestore();
    let nm = name.value;
    let mail = email.value;
    let msg = message.value;
    if(name && email && message){
    const userRef = db.collection("contacts").add({
      name: nm,
      email: mail,
      message: msg
    }).then(()=>{
      setComplete(true);
      setSending(false);
      
    }).catch((error)=>{
      console.log(e);
      setSending(false);
      alert(error.message);
    });
  }
  };

  return (
    <ContactWrapper status={status}>
      <Helmet
        title="Contact"
        meta={[{
          name: 'description',
          content: 'Send me a message if you’re interested in discussing a project or if you just want to say hi',
        }]}
      />
      <TransitionGroup component={null}>
        {!complete &&
          <Transition
            appear
            mountOnEnter
            unmountOnExit
            timeout={1600}
            onEnter={reflow}
          >
            {status => (
              <ContactForm onSubmit={onSubmit} role="form">
                <ContactTitle status={status} delay={msToNum(tokens.base.durationXS) / 3}>
                  <DecoderText
                    text="Say hello"
                    start={status !== 'exited' && !prerender}
                    offset={140}
                    delay={msToNum(tokens.base.durationS)}
                  />
                </ContactTitle>
                <ContactDivider status={status} delay={msToNum(tokens.base.durationXS) / 2} />
                <ContactFields>
                <ContactInput
                    {...name}
                    status={status}
                    delay={tokens.base.durationXS}
                    label="Your Name"
                    type="name"
                    maxLength={100}
                    required
                  />
                  <ContactInput
                    {...email}
                    status={status}
                    delay={tokens.base.durationXS}
                    autoComplete="email"
                    label="Your Email"
                    type="email"
                    maxLength={320}
                    required
                  />
                  <ContactInput
                    {...message}
                    status={status}
                    delay={tokens.base.durationS}
                    autoComplete="off"
                    label="Message"
                    maxLength={5000}
                    required
                    multiline
                  />
                  <ContactButton
                    disabled={sending}
                    sending={sending}
                    loading={sending}
                    loadingText="Sending..."
                    status={status}
                    delay={tokens.base.durationM}
                    icon="send"
                    type="submit"
                  >
                    Send Message
                  </ContactButton>
                </ContactFields>
              </ContactForm>
            )}
          </Transition>
        }
        {complete &&
          <Transition
            appear
            timeout = {1600}
            mountOnEnter
            unmountOnExit
            onEnter={reflow}
          >
            {status => (
              <ContactComplete aria-live="polite">
                <ContactCompleteTitle status={status}>
                  Message Sent
                </ContactCompleteTitle>
                <ContactCompleteText status={status} delay={tokens.base.durationXS}>
                  I’ll get back to you within a couple days
                </ContactCompleteText>
                <ContactCompleteButton
                  secondary
                  to="/"
                  status={status}
                  delay={tokens.base.durationM}
                  icon="chevronRight"
                >
                  Back to homepage
                </ContactCompleteButton>
              </ContactComplete>
            )}
          </Transition>
        }
      </TransitionGroup>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  ${sectionPadding}

  ${props => (props.status === 'entered' || props.status === 'exiting') && css`
    position: relative;
  `}
`;

const ContactForm = styled.form`
  max-width: var(--maxWidthS);
  width: 100%;
  padding: var(--space2XL) 0;

  @media (max-width: ${media.mobile}px) {
    padding: var(--space5XL) 0 var(--space2XL);
    align-self: flex-start;
  }
`;

const ContactFields = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: var(--spaceXL);
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

const ContactDivider = styled(Divider)`
  margin-bottom: var(--space3XL);
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

const ContactInput = styled(Input)`
  transition-property: transform, opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: calc(${props => props.delay} + ${initDelay});
  transform: translate3d(0, var(--space3XL), 0);
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

const ContactButton = styled(Button)`
  margin-top: var(--spaceXL);
  transition-property: transform, opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-delay: ${props => props.status === 'entered' ? '0ms' : `calc(${props.delay} + ${initDelay})`};
  transition-duration: ${props => props.status === 'entered' ? 'var(--durationM)' : 'var(--durationXL)'};
  transform: translate3d(0, var(--space3XL), 0);
  opacity: 0;
  justify-self: flex-start;

  ${props => props.sending && css`
    svg {
      transition: transform ${props.bezierFastoutSlowin} var(--durationXL),
        opacity var(--durationS) ease var(--durationS);
      transform: translate3d(var(--space5XL), 0, 0);
      opacity: 0;
    }

    div {
      animation: ${AnimFade} var(--durationM) ease var(--durationL) forwards;
      opacity: 0;

      @media (prefers-reduced-motion: reduce) {
        opacity: 1;
      }
    }
  `}

  ${props => props.status === 'entering' && css`
    &:hover {
      transform: translate3d(0, 0, 0);
    }
  `}

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

const ContactComplete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spaceXL) 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ContactCompleteTitle = styled.h1`
  font-weight: var(--fontWeightMedium);
  font-size: var(--fontSizeH2);
  color: var(--colorTextTitle);
  text-align: center;
  margin: 0;
  transition-property: transform, opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: ${props => props.delay};
  transform: translate3d(0, var(--space3XL), 0);
  opacity: 0;

  ${props => props.status === 'entered' && css`
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}
`;

const ContactCompleteText = styled.p`
  font-size: var(--fontSizeBodyM);
  text-align: center;
  transition-property: transform, opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: ${props => props.delay};
  transform: translate3d(0, var(--space3XL), 0);
  opacity: 0;

  ${props => props.status === 'entered' && css`
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}
`;

const ContactCompleteButton = styled(RouterButton)`
  transition-property: transform, opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: ${props => props.delay};
  transform: translate3d(0, var(--space3XL), 0);
  opacity: 0;
  padding-left: 3px;

  ${props => props.status === 'entered' && css`
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}
`;

export default memo(Contact);
