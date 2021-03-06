import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { StyledLabel, Root, Input, Fill } from './RadioWrapper';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Radio label
   */
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: any) => any;
  disabled?: boolean;
};

const Radio = ({
  label,
  id,
  checked,
  onChange,
  onBlur = () => {},
  disabled = false,
  name = '',
  ...rest
}: RadioProps) => (
  <StyledLabel disabled={disabled}>
    <Root disabled={disabled} checked={checked}>
      <Input
        id={id}
        type="radio"
        onChange={onChange}
        name={name}
        checked={checked}
        value={label}
        onBlur={onBlur}
        disabled={disabled}
        aria-checked={checked}
        {...rest}
      />
      <Fill />
    </Root>
    <span>{label}</span>
  </StyledLabel>
);

export default Radio;
