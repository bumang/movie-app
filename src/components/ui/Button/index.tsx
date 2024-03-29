import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

import { Loader } from '../Loader';

// const commonStyles = ['flex items-center justify-center'];

const buttonVariants = cva(['inline-flex justify-center items-center rounded-[100px]'], {
  variants: {
    // button colors
    variant: {
      primary:
        'bg-primary-blue hover:bg-secondary-blue-hover text-white active:bg-primary-dark-blue disabled:bg-secondary-light-gray min-w-[145px]',
      'outline-white':
        'px-[32px]  min-w-[113px] border-2 border-solid border-white hover:bg-white hover:bg-opacity-20 text-white active:bg-white active:border-2 active:border-solid active:border-primary-dark-blue active:text-primary-dark-blue',
      'outline-black':
        'px-[32px] min-w-[113px] border-2 border-solid border-primary-dark-blue text-primary-dark-blue hover:bg-secondary-light-gray hover:bg-opacity-30 active:bg-gradients-grey disabled:bg-white disabled:border-secondary-light-gray disabled:text-secondary-light-gray',
      'outline-grey':
        'px-[32px] min-w-[113px] border-2 border-solid border-secondary-light-gray text-primary-dark-gray hover:bg-secondary-light-gray hover:bg-opacity-30 active:bg-secondary-light-gray disabled:bg-white disabled:border-secondary-light-gray disabled:text-secondary-light-gray',
      'outline-blue':
        'px-[32px] fill-primary-blue stroke-primary-blue gap-[8px] min-w-[113px] border-2 border-solid border-primary-blue text-primary-blue hover:bg-secondary-light-blue hover:border-secondary-blue-hover hover:text-secondary-blue-hover hover:stroke-secondary-blue-hover active:bg-secondary-blue active:text-primary-blue active:stroke-primary-blue disabled:bg-white disabled:border-secondary-light-gray disabled:text-secondary-light-gray disabled:stroke-secondary-light-gray',
      'filled-grey':
        'px-[32px] min-w-[113px] gap-[12px] stroke-primary-dark-blue bg-primary-dark-blue bg-opacity-7 text-primary-dark-blue hover:bg-secondary-light-gray active:bg-primary-dark-blue active:text-white active:stroke-white active:fill-white disabled:bg-primary-dark-blue disabled:bg-opacity-7 disabled:text-primary-light-gray disabled:stroke-primary-light-gray disabled:fill-primary-light-gray',
      'filled-white':
        'px-[32px] min-w-[113px] bg-white text-primary-dark-blue hover:bg-secondary-light-gray hover:bg-opacity-30 active:bg-secondary-light-gray',
      'filled-white-shadow':
        'px-[24px] min-w-[113px] bg-white shadow-7 text-primary-blue hover:shadow-2 hover:text-secondary-blue-hover active:border active:border-solid active:secondary-light-gray',
      'filled-blue':
        'px-[24px] min-w-[91px] bg-white text-primary-blue hover:bg-secondary-light-blue active:bg-secondary-blue disabled:text-primary-light-gray disabled:bg-white',
      'additional-blue':
        'gap-[8px] text-primary-blue min-w-[42px] hover:text-secondary-blue-hover active:text-primary-dark-blue disabled:text-primary-light-gray',
    },
    size: {
      16: 'h-[16px] text-[14px] leading-normal',
      32: 'h-[32px] text-[14px] font-semibold leading-normal',
      40: 'h-[40px] text-[16px] leading-[19.2px]',
      48: 'h-[48px] text-[16px] leading-[19.2px]',
      56: 'h-[56px] text-[18px] leading-[20.16px]',
    },
  },
});

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isDisabled?: boolean;
  leadingIcon?: ReactNode;
  trailIcon?: ReactNode;
  type?: 'reset' | 'button' | 'submit' | undefined;
  isloading?: boolean;
  showLoadingText?: boolean;
}
const Button = ({
  className,
  size = 56,
  variant = 'primary',
  isDisabled,
  children,
  leadingIcon,
  trailIcon,
  onClick,
  isloading,
  type = 'button',
  showLoadingText,
}: IButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={isDisabled}
    className={cn(buttonVariants({ className, size, variant }))}
  >
    {leadingIcon}
    {isloading ? <Loader showLoadingText={showLoadingText} /> : children}
    {trailIcon}
  </button>
);

export default Button;
