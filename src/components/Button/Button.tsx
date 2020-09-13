import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

export type Size = 'xs' | 'sm' | 'md' | 'lg';

type ContentProps = {
  /**
   * Button element
   */
  icon?: ReactElement | null;
  /**
   * Position of the icon
   */
  iconPosition?: string;
  children?: any;
};

export type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ContentProps & {
    /**
     * Button modifier type
     */
    buttonModifiers?: Array<string>;
    /**
     * Button size
     */
    size?: Size;
    className?: string;
    /**
     * WHether the button is full width or not
     */
    fullWidth?: boolean;
    /**
     * WHether the button is full width or not
     */
    fullHeight?: boolean;
  };

const ContentHolder = styled.span`
  margin-top: 2px;
`;

const TextIconWrapper = styled.div<{ center: boolean }>`
  padding: 0.2rem;
  ${({ center }) =>
    center &&
    css`
      display: grid;
      grid-auto-flow: column;
      place-items: center;
    `}
`;

const Content = ({ icon = null, iconPosition = 'left', children }: ContentProps) => {
  if (iconPosition === 'right') {
    return (
      <TextIconWrapper center={icon && children}>
        {children && <ContentHolder>{children}</ContentHolder>}
        {icon}
      </TextIconWrapper>
    );
  }

  return (
    <TextIconWrapper center={icon && children}>
      {icon}
      {children && <ContentHolder>{children}</ContentHolder>}
    </TextIconWrapper>
  );
};

const Button = ({
  size = 'md',
  buttonModifiers,
  className = '',
  icon,
  iconPosition,
  children,
  fullWidth,
  fullHeight,
  ...rest
}: Props) => (
  <ButtonWrapper
    className={className}
    size={size}
    modifiers={buttonModifiers}
    fullWidth={fullWidth}
    fullHeight={fullHeight}
    {...rest}
  >
    <Content icon={icon} iconPosition={iconPosition}>
      {children}
    </Content>
  </ButtonWrapper>
);

export default Button;
