import { useMemo, useRef, useState } from 'react';
import { ActionMeta, MultiValue, SingleValue } from 'react-select';

import { SelectOption } from '../select.types';

interface IUseMultiProps {
  isVirtualized?: boolean;
  isMulti: boolean;
  value: MultiValue<SelectOption> | undefined;
  options: SelectOption[];
  onChange?: (
    newValue: MultiValue<SelectOption> | SingleValue<SelectOption>,
    actionMeta: ActionMeta<SingleValue<SelectOption> | MultiValue<SelectOption>>
  ) => void;
}

const selectAllOption = {
  value: '<SELECT_ALL>',
  label: 'All',
};

export const useMulti = ({
  isMulti,
  value,
  options,
  onChange: propOnChange,
  isVirtualized,
}: IUseMultiProps) => {
  const valueRef = useRef(value);
  const [maxOptionToShow, setMaxOptionToShow] = useState(10);
  const [searchString, setSearchString] = useState('');
  const getVirtualizedOption = useMemo(
    () =>
      searchString
        ? options.filter((e) =>
            e?.value?.toLocaleString().startsWith(searchString.toLocaleString())
          )
        : options?.slice(0, maxOptionToShow),
    [maxOptionToShow, options, searchString]
  );

  const onInputChange = (e: string) => {
    if (isVirtualized) {
      setSearchString(e);
    }
  };
  const onScrollToButton = () => {
    if (isVirtualized) {
      if (maxOptionToShow >= options.length) {
        setMaxOptionToShow(options?.length);
      } else {
        setMaxOptionToShow((pre) => pre + 20);
      }
    }
  };

  valueRef.current = value;

  if (!isMulti || !propOnChange) {
    return {
      isOptionSelected: undefined,
      getOptions: () => (isVirtualized ? getVirtualizedOption : options),
      getValue: () => value,
      onChange: propOnChange,
      onScrollToButton,
      onInputChange,
    };
  }

  const valueRefCurrent = valueRef?.current;

  const isSelectAllSelected = () => valueRefCurrent?.length === options?.length;

  const isOptionSelected = (option: SelectOption) =>
    valueRef?.current?.some(({ value: newValue }: SelectOption) => newValue === option.value) ||
    isSelectAllSelected();

  const getOptions = () =>
    isVirtualized ? [selectAllOption, ...getVirtualizedOption] : [selectAllOption, ...options];

  const getValue = () => (isSelectAllSelected() ? [selectAllOption] : value);

  const onChange = (
    newValue: MultiValue<SelectOption> | SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => {
    const { action, option, removedValue } = actionMeta;

    if (action === 'select-option' && option?.value === selectAllOption.value) {
      propOnChange(options, actionMeta);
    } else if (
      (action === 'deselect-option' && option?.value === selectAllOption.value) ||
      (action === 'remove-value' && removedValue.value === selectAllOption.value)
    ) {
      propOnChange([], actionMeta);
    } else if (actionMeta.action === 'deselect-option' && isSelectAllSelected()) {
      propOnChange(
        options.filter(({ value: optionValue }) => optionValue !== option?.value),
        actionMeta
      );
    } else {
      propOnChange(newValue || [], actionMeta);
    }
  };

  return {
    isOptionSelected,
    getOptions,
    getValue,
    onChange,
    onScrollToButton,
    onInputChange,
  };
};
