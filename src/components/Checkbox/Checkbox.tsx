import React, { ChangeEvent, RefObject } from 'react';
import Label from '../Label';
import CheckboxWrapper from './CheckboxWrapper';

type Props = {
  /**
   * Checkbox label
   */
  label: string;
  /**
   * ID
   */
  id: string;
  /**
   * Checkbox name attribute
   */
  name?: string;
  /**
   * Whether the checkbox is checked or not
   */
  checked: boolean;
  /**
   * Function called when the checkbox changes its state
   */
  onChange: (checked: boolean) => any;
  /**
   * Checkbox container ref
   */
  containerRef?: RefObject<HTMLDivElement> | null;
  /**
   * Whether the checkbox is disabled or not
   */
  disabled?: boolean;
};

const Checkbox: React.FC<Props> = ({
  label,
  id,
  onChange,
  containerRef = null,
  disabled = false,
  ...rest
}) => {
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>): any => onChange(e.target.checked);

  return (
    <CheckboxWrapper ref={containerRef}>
      <input disabled={disabled} type="checkbox" id={id} onChange={onCheckboxChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
