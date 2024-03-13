'use client';

import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const switchStyles = cva(
  [
    'flex items-center',
    'data-[state=checked]:bg-[#037096] checked:text-success1 ',
    'data-[state=unchecked]:bg-[#A1A3A7] unchecked:border-2 unchecked:border-gray9',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-7 rounded-full ',
        md: 'h-5 w-9 rounded-full ',
        lg: 'h-7 w-12 rounded-full ',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const switchThumbStyles = cva(
  ['data-[state=unchecked]:translate-x-0  transition-transform duration-200 ease-in pl-[2px]'],
  {
    variants: {
      size: {
        sm: 'data-[state=checked]:translate-x-3',
        md: 'data-[state=checked]:translate-x-4',
        lg: 'data-[state=checked]:translate-x-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

type SwitchPrimitiveProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

export interface SwitchProps extends SwitchPrimitiveProps, VariantProps<typeof switchStyles> {
  /**
   * Size of the switch
   */
  size: 'sm' | 'md' | 'lg';

  /**
   * Label text to display next to the switch
   */
  label?: string;

  /**
   * Unique id for label
   */
  id?: string;

  /**
   * Whether the switch is currently on
   */
  checked?: boolean;

  /**
   * Whether the switch is disabled
   */
  disabled?: boolean;
}

const iconSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export const Switch = ({
  size = iconSize.md,
  label,
  className,
  disabled,
  id,
  ...props
}: SwitchProps) => (
  <div className="flex items-center gap-1">
    <SwitchPrimitive.Root
      id={id}
      disabled={disabled}
      className={cn(switchStyles({ className, size }))}
      {...props}
    >
      <SwitchPrimitive.Thumb className={cn(switchThumbStyles({ className, size }))}>
        {/* <Icon
          testid="id"
          icon="Circle"
          size={iconSize[size]}
          className="fill-gray0  !stroke-none"
        /> */}
        <div className="h-3 w-3 rounded-full bg-white" />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
    {label ? (
      <label
        className={cn('cursor-pointer text-sm font-normal', {
          'text-gray8 cursor-not-allowed font-medium': disabled,
        })}
        htmlFor={id}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default Switch;
