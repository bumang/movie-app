import { ClassNamesConfig, GroupBase } from 'react-select';

import { cn } from '@/utils/cn';

import { Option } from './selectComponents';

export const getClassName: (
  error: boolean
) => ClassNamesConfig<Option, boolean, GroupBase<Option>> = (error) => ({
  control: (state: any) =>
    cn(
      'h-7 rounded-md border border-gray8  bg-transparent px-2   text-gray10 outline-0',
      'focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary focus-within:ring-offset-1 hover:focus-within:border-brand-primary',
      'hover:cursor-pointer hover:border-gray9 ',
      {
        'border-danger5 focus-within:border-danger5 focus-within:ring-danger5': error,
        'bg-danger5': state.isFocused,
      }
    ),

  placeholder: () => 'text-text-primary pl-1 py-0.5 !text-sm',
  container: () => 'static ',
  // menuPortal: () => "!z-50",
  singleValue: () => '!text-sm capitalize !text-text-primary',
  multiValue: () => '!text-sm capitalize !text-text-primary',
  input: () => '!text-sm',
  indicatorsContainer: () => 'gap-1',
  clearIndicator: () => 'text-gray10 rounded-md  hover:text-gray11 hover:text-medium',
  // indicatorSeparator: () => "bg-gray-300",
  dropdownIndicator: (props: any) =>
    cn(' text-gray-500 hover:text-black rounded-md !px-0', {
      'text-brand-primary': props?.selectProps?.menuIsOpen,
    }),
  menuList: () =>
    'mt-1 no-scrollbar bg-gray-800 !shadow-base bg-danger5 rounded bg-gray0 max-h-[200px] overflow-y-auto ',
  noOptionsMessage: () => 'text-sm text-gray11 h-9 py-2 font-medium',

  option: ({
    isSelected,
    isDisabled,
    isFocused,
    // ...rest
  }: {
    isSelected: boolean;
    isDisabled: boolean;
    isFocused: boolean;
  }) =>
    cn(
      '!flex !h-9  justify-between p-3 !text-sm  font-normal  capitalize text-gray11  ',
      'hover:cursor-pointer  hover:bg-layer-hover hover:text-text-primary ',
      {
        '!font-medium !bg-layer-active !text-brand-primary !text-sm ': isSelected,
        '!cursor-not-allowed bg-gray2 text-gray8 hover:text-gray8': isDisabled,
        '!bg-layer-hover': isFocused,
      }
    ),
});
