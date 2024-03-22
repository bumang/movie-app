import { InputHTMLAttributes, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import Close from '@/components/ui/Icons/16/icons/close_16.svg';
import SearchIcon from '@/components/ui/Icons/16/icons/search_16.svg';
import Search24 from '@/components/ui/Icons/24/icons/search_24.svg';
import { cn } from '@/utils/cn';

const searchFIeldVariants = cva(['h-12'], {
  variants: {
    variant: {
      gray: 'border appearance-none h-12 border-primary-gray py-3 px-4 bg-transparent w-[352px] text-sm leading-5 placeholder-gray-400 text-gray-500   rounded-full p-4 block pl-9 pr-9 hover:border-primary-darkGray focus:border-primary-darkGray focus:outline-none focus:shadow-none focus:border-primary-darkGray focus:ring-offset-0',
      light:
        'border appearance-none h-12 border-primary-light-gray py-3 px-4 bg-white w-[264px] text-sm leading-5 placeholder-gray-400 text-gray-500   rounded-full p-4 block pl-11 pr-9 hover:border-primary-darkGray focus:outline-none focus:shadow-none focus:border-primary-darkGray focus:ring-offset-0 ',
    },
  },
});
interface ISearchField
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof searchFIeldVariants> {
  name: string;
  onClear?: () => void;
}

export const SearchBar = ({
  name,
  className,
  onClear,
  variant = 'gray',
  ...props
}: ISearchField) => {
  const [value, setValue] = useState(props.defaultValue || '');
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <label
      className="relative flex w-full gap-3  text-gray-400 focus-within:text-gray-600 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        if (!focus && !value) setHover(false);
      }}
    >
      {variant === 'gray' ? (
        <div className=" absolute  left-4 top-[40%] h-5">
          <SearchIcon className="pointer-events-none" />
        </div>
      ) : (
        <div className=" absolute  left-4 top-[28%] h-5">
          <Search24
            className={cn('stroke-primary-light-gray pointer-events-none ', {
              'stroke-primary-darkGray': hover,
            })}
          />
        </div>
      )}

      <input
        name={name}
        value={value}
        {...props}
        type="text"
        placeholder="Search"
        onFocus={() => setFocus(true)}
        onBlur={() => {
          if (!value) {
            setFocus(false);
            setHover(false);
          }
        }}
        onChange={(e) => {
          props.onChange && props?.onChange(e);
          setValue(e.target.value);
        }}
        className={cn(searchFIeldVariants({ className, variant }), {
          'border-dark-gray': hover && variant === 'light',
        })}
      />
      {value && (
        <Close
          className="absolute right-4 top-[33%] cursor-pointer   hover:bg-transparent"
          onClick={() => {
            setValue('');
            onClear && onClear();
          }}
        />
      )}
    </label>
  );
};
