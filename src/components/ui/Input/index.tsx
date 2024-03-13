import { ChangeEvent, InputHTMLAttributes } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';

import { cn } from '@/utils/cn';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  switchTitle?: string;
  isInvalid?: boolean;
  errors?: FieldErrors<FieldValues>;
}
export const Input = ({
  label,
  onChange,
  disabled,
  isInvalid,
  className,
  errors,
  ...props
}: IInput) => {
  return (
    <fieldset className="flex w-full flex-col  gap-2">
      <div className="group relative z-0 mb-5 w-full">
        <input
          disabled={disabled}
          {...props}
          onChange={onChange}
          type={props?.type}
          name={props?.name}
          autoComplete={props?.autoComplete}
          id={props?.id ?? props?.name}
          className={cn(
            [
              'focus:border-blue-600 dark:focus:border-blue-500 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white',
              className,
            ],
            {
              'border-primary-dark-blue': props.value,
              'border-secondary-red dark:border-secondary-red ': isInvalid,
            }
          )}
          placeholder=" "
        />
        <label
          htmlFor={props?.id ?? props?.name}
          className={cn(
            'peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400',
            {
              'text-secondary-red dark:border-secondary-red ': isInvalid,
            }
          )}
        >
          {label}
        </label>
        {errors && (
          <span className="text-s-regular  text-secondary-red">
            {' '}
            {errors[props?.name ?? '']?.message as string}
          </span>
        )}
      </div>
    </fieldset>
  );
};
