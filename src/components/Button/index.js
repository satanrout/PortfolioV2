import React, { Fragment } from 'react';
import styled, { css, useTheme } from 'styled-components/macro';
import { Link } from 'components/Link';
import Loader from 'components/Loader';
import Icon from 'components/Icon';
import { cornerClip } from 'utils/style';
import { pxToRem } from 'app/theme';

function ButtonContent({
  iconRight,
  icon,
  children,
  secondary,
  iconOnly,
  isLoading,
  loadingText,
  iconHoverShift,
}) {
  const theme = useTheme();

  return (
    <Fragment>
      {icon &&
        <ButtonIcon
          left
          isLoading={isLoading}
          secondary={secondary}
          iconHoverShift={iconHoverShift}
          icon={icon}
          iconOnly={iconOnly}
        />
      }
      {children &&
        <ButtonText
          isLoading={isLoading}
          secondary={secondary}
          iconOnly={iconOnly}
        >
          {children}
        </ButtonText>
      }
      {iconRight &&
        <ButtonIcon
          isLoading={isLoading}
          secondary={secondary}
          iconHoverShift={iconHoverShift}
          icon={iconRight}
          iconOnly={iconOnly}
        />
      }
      {!!isLoading &&
        <ButtonLoader
          size={32}
          text={loadingText}
          color={`rgb(${theme.rgbBackground})`}
        />
      }
    </Fragment>
  );
}

export const Button = props => {
  const { className, style, loading, ...rest } = props;

  return (
    <ButtonContainer className={className} style={style} {...rest}>
      <ButtonContent isLoading={loading ? 1 : 0} {...rest} />
    </ButtonContainer>
  );
};

export const LinkButton = props => {
  const { className, style, href, rel, target, ...rest } = props;

  return (
    <ButtonContainer
      as="a"
      className={className}
      style={style}
      href={href}
      rel={rel || target === '_blank' ? 'noopener noreferrer' : null}
      target={target}
      {...rest}
    >
      <ButtonContent {...props} />
    </ButtonContainer>
  );
};

export const RouterButton = props => {
  const { className, style, to, secondary, ...rest } = props;

  return (
    <ButtonContainer
      as={ButtonLink}
      className={className}
      style={style}
      to={to}
      secondary={secondary ? 1 : 0}
    >
      <ButtonContent secondary={secondary} {...rest} />
    </ButtonContainer>
  );
};

const ButtonLink = ({ secondary, ...rest }) => <Link {...rest} />;

const ButtonLoader = styled(Loader)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonContainer = styled.button`
  --buttonSize: ${pxToRem(56)};
  --buttonFontSize: ${pxToRem(18)};

  background: none;
  height: var(--buttonSize);
  padding: ${props => (props.iconOnly ? 0 : '0 var(--spaceL)')};
  border: 0;
  margin: 0;
  cursor: pointer;
  transition-property: transform, opacity, color, background;
  transition-duration: var(--durationS);
  transition-timing-function: var(--bezierFastoutSlowin);
  display: flex;
  display: inline-flex;
  align-items: center;
  color: rgb(var(--rgbBackground));
  text-decoration: none;
  font-family: inherit;
  position: relative;
  z-index: 1;

  &::-moz-focus-inner {
    border: 0;
  }

  ${props => !props.secondary && css`
    &::before {
      content: '';
      transition-property: box-shadow, transform, opacity, background;
      transition-duration: var(--durationM);
      transition-timing-function: var(--bezierFastoutSlowin);
      background: rgb(var(--rgbPrimary) / 0.4);
      position: absolute;
      top: -5px;
      right: -5px;
      bottom: -5px;
      left: -5px;
      z-index: -1;
      opacity: 0;
      ${cornerClip(10)}
    }

    &::after {
      content: '';
      transition-property: box-shadow, transform, opacity, background;
      transition-duration: var(--durationM);
      transition-timing-function: var(--bezierFastoutSlowin);
      background: rgb(var(--rgbPrimary));
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      ${cornerClip(8)}
    }
  `}

  ${props => !props.disabled && !props.secondary && css`
    &:hover,
    &:focus {
      outline: none;
      transform: ${props.iconOnly ? 'none' : 'scale(1.05)'};
    }

    &:focus:before {
      opacity: 1;
    }
  `}

  &:active {
    transform: scale(1);
    transition-duration: 0.1s;
  }

  ${props => props.secondary && css`
    background: none;
    color: rgb(var(--rgbPrimary));
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    left: -10px;

    &::after {
      content: '';
      height: 30px;
      position: absolute;
      top: 50%;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgb(var(--rgbPrimary) / 0.2);
      transform: scale3d(0, 1, 1) translateY(-50%);
      transform-origin: right;
      transition: transform var(--durationM) var(--bezierFastoutSlowin);
    }

    &:hover,
    &:focus,
    &:active {
      outline: none;
      transform: none;
      background: transparent;
    }

    &:hover::after,
    &:focus::after,
    &:active::after {
      transform: scale3d(1, 1, 1) translateY(-50%);
      transform-origin: left;
    }

    &::before {
      content: '';
      transition: box-shadow var(--durationM) var(--bezierFastoutSlowin);
      transform: translateY(-50%);
      height: 30px;
      position: absolute;
      top: 50%;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &:focus::before {
      box-shadow: 0 0 0 4px rgb(var(--rgbPrimary) / 0.4);
    }
  `}

  ${props => props.icon && !props.secondary && !props.iconOnly && css`
    padding-right: 32px;
  `}

  ${props => props.iconOnly && css`
    width: var(--buttonSize);
    align-items: center;
    justify-content: center;
    padding: 0;

    &::after {
      background: rgb(var(--rgbText) / 0);
    }

    &:hover::after,
    &:focus::after {
      background: rgb(var(--rgbText) / 0.1);
    }

    &::before {
      background: rgb(var(--rgbText) / 0.4);
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
      clip-path: polygon(
        0% 0%,
        0% 100%,
        4px 100%,
        4px 4px,
        calc(100% - 4px) 4px,
        calc(100% - 4px) calc(100% - 13px),
        calc(100% - 13px) calc(100% - 4px),
        4px calc(100% - 4px),
        4px 100%,
        calc(100% - 11px) 100%,
        100% calc(100% - 11px),
        100% 0%
      );
    }
  `}
`;

const ButtonText = styled.div`
  font-size: var(--buttonFontSize);
  font-weight: var(--fontWeightMedium);
  position: relative;
  line-height: 1;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.isLoading && css`
    visibility: hidden;
  `}

  ${props => props.secondary
    ? `color: rgb(var(--rgbPrimary));`
    : `color: rgb(var(--rgbBackground));
  `}

  ${props => props.iconOnly && `
    color: var(--colorTextBody);
  `}
`;

const ButtonIcon = styled(Icon)`
  margin-left: ${props => (props.left ? '0' : 'var(--spaceS)')};
  margin-right: ${props => (props.left ? 'var(--spaceS)' : '0')};
  transition-property: transform, opacity, fill;
  transition-duration: var(--durationS);
  transition-timing-function: var(--bezierFastoutSlowin);
  fill: rgb(var(--rgbBackground));

  ${props => props.secondary && css`
    fill: rgb(var(--rgbPrimary));
  `}

  ${props => props.iconOnly && css`
    fill: var(--colorTextBody);
    margin: 0;
  `}

  ${/* sc-selector */ ButtonContainer}:hover &,
  ${/* sc-selector */ ButtonContainer}:focus & {
    ${props => props.iconHoverShift && css`
      transform: translate3d(var(--spaceXS), 0, 0);
    `}
  }

  ${props => props.isLoading && css`
    opacity: 0;
  `}
`;
