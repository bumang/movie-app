import * as React from 'react';
import { ForwardedRef, Ref, useMemo } from 'react';
import ReactSelect, { GroupBase, SelectInstance } from 'react-select';

import { useMulti } from './hooks/useMulti';
import { SelectOption, SelectProps } from './select.types';
import { getComponents } from './styles/selectComponents';
import { getClassName } from './styles/styles';

export const Select = React.forwardRef(
  (
    {
      // size,
      errorText,
      helperText,
      isMulti = false,
      isPortal = true,
      label,
      options = [],
      value,
      hasRadioOption,
      placeholder,
      isRequired,
      onChange,
      addItemHandler,
      addItemLabel,
      testId,
      isVirtualized,
      isInvalid,
      ...rest
    }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    const {
      isOptionSelected,
      getOptions,
      getValue,
      onChange: multiOnChange,
      onScrollToButton,
      onInputChange,
    } = useMulti({
      value: value as [],
      isMulti,
      onChange,
      options,
      isVirtualized,
    });
    const components = useMemo(
      () => getComponents(hasRadioOption, addItemHandler, addItemLabel),
      [hasRadioOption, addItemHandler, addItemLabel]
    );
    const className = useMemo(() => getClassName(!!isInvalid), [isInvalid]);

    return (
      <div className="flex w-full flex-col gap-1">
        {label && (
          <span className="text-gray9 text-[13px]">{isRequired ? `${label} *` : label}</span>
        )}

        <ReactSelect<SelectOption, boolean, GroupBase<SelectOption>>
          data-testId={testId}
          menuPortalTarget={isPortal && typeof window !== 'undefined' ? document.body : null}
          inputId="test"
          menuShouldScrollIntoView={false}
          id="select"
          classNames={className}
          instanceId="select"
          isOptionSelected={isOptionSelected}
          placeholder={placeholder ?? '-- SELECT --'}
          options={getOptions()}
          value={getValue()}
          controlShouldRenderValue={!isMulti}
          closeMenuOnSelect={!isMulti}
          isMulti={isMulti}
          hideSelectedOptions={false}
          isOptionDisabled={(option: SelectOption) => !!option.disabled}
          isClearable={false}
          onChange={multiOnChange}
          onInputChange={onInputChange}
          components={components}
          onMenuScrollToBottom={onScrollToButton}
          // onMenuClose={onMenuClose}
          ref={
            ref as unknown as
              | Ref<SelectInstance<SelectOption, boolean, GroupBase<SelectOption>>>
              | undefined
          }
          {...rest}
        />
        <Message helperText={helperText} errorText={errorText} />
      </div>
    );
  }
);

export default Select;

Select.displayName = 'displayName';

interface MessageProps {
  errorText: string | undefined;
  helperText: string | undefined;
}

const Message = ({ errorText, helperText }: MessageProps) => {
  if (errorText) {
    return <div className="text-danger5 text-[13px]">{errorText}</div>;
  }
  if (helperText) {
    return <div className="text-gray9 text-[13px]">{helperText}</div>;
  }

  return null;
};
