import React from 'react';
import { ReactComponent as IconDribbble } from 'assets/icons/dribbble.svg';
import { ReactComponent as IconCode } from 'assets/icons/code.svg';
import { ReactComponent as IconArrowDown } from 'assets/icons/arrow-down.svg';
import { ReactComponent as IconGithub } from 'assets/icons/github.svg';
import { ReactComponent as IconEmail } from 'assets/icons/email.svg';
import { ReactComponent as IconMenu } from 'assets/icons/menu.svg';
import { ReactComponent as IconArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as IconChevronRight } from 'assets/icons/chevron-right.svg';
import { ReactComponent as IconClose } from 'assets/icons/close.svg';
import { ReactComponent as IconSend } from 'assets/icons/send.svg';
import { ReactComponent as IconSlideLeft } from 'assets/icons/slide-left.svg';
import { ReactComponent as IconSlideRight } from 'assets/icons/slide-right.svg';
import { ReactComponent as IconPlay } from 'assets/icons/play.svg';
import { ReactComponent as IconPause } from 'assets/icons/pause.svg';
import { ReactComponent as Iconinstagram } from 'assets/icons/instagram.svg';
import { ReactComponent as IconLinkedin } from 'assets/icons/linkedin.svg';
import { ReactComponent as IconResume } from 'assets/icons/portfolio.svg';
import { ReactComponent as IconWhatsapp } from 'assets/icons/whatsapp.svg';
import { ReactComponent as IconFacebook } from 'assets/icons/facebook.svg';
import { ReactComponent as IconGmail } from 'assets/icons/gmail.svg';

const icons = {
  facebook: IconFacebook,
  whatsapp: IconWhatsapp,
  gmail: IconGmail,
  instagram: Iconinstagram,
  linkedin: IconLinkedin,
  dribbble: IconDribbble,
  github: IconGithub,
  email: IconEmail,
  resume: IconResume,
  menu: IconMenu,
  code: IconCode,
  arrowDown: IconArrowDown,
  arrowRight: IconArrowRight,
  chevronRight: IconChevronRight,
  close: IconClose,
  send: IconSend,
  slideRight: IconSlideRight,
  slideLeft: IconSlideLeft,
  play: IconPlay,
  pause: IconPause,
};

const Icon = ({ icon, style, className }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden style={style} className={className} />
  );
};

export default Icon;
