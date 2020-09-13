import React, { SelectHTMLAttributes, ChangeEvent } from 'react';
import DropdownContainer from './DropdownContainer';

type Option = {
  value: string;
  displayName: string;
};

type DefaultOption = {
  displayName: string;
  disabled?: boolean;
};

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  /**
   * Dropdown modifiers
   */
  modifiers?: Array<string>;
  /**
   * Dropdown value
   */
  value: string;
  /**
   * Function called when the dropdown value changes
   */
  onChange?: (value: string) => void;
  /**
   * Dropdown color
   */
  color?: string;
  /**
   * Array of `Option` objects
   */
  options: Array<Option>;
  /**
   * Whether the dropdown is disabled or not
   */
  disabled?: boolean;
  /**
   * Default dropdown option
   */
  defaultOption?: DefaultOption;
  className?: string;
};

const Dropdown: React.FC<Props> = ({
  options,
  onChange = () => null,
  defaultOption,
  className,
  ...rest
}) => {
  const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };
  return (
    <DropdownContainer onChange={onDropdownChange} className={className} {...rest}>
      {defaultOption && (
        <option value="" disabled={defaultOption.disabled}>
          {defaultOption.displayName}
        </option>
      )}
      {options.map(({ value, displayName }) => (
        <option value={value} key={value}>
          {displayName}
        </option>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
