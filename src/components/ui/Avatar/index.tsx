import * as RadixAvatar from '@radix-ui/react-avatar';
import { cva, VariantProps } from 'class-variance-authority';

import Person from '@/components/ui/Icons/16/icons/person.svg';
import { cn } from '@/utils/cn';

const avatar = cva(
  'flex-shrink-0 inline-flex justify-center items-center object-cover rounded-full  bg-transparent text-h4-bold text-primary-blue',
  {
    variants: {
      size: {
        xl: ['h-16', 'w-16', 'text-xl'],
        lg: ['h-12', 'w-12', 'text-lg'],
        md: ['h-8', 'w-8'],
        sm: ['h-6', 'w-6', 'text-sm'],
        xs: ['h-4', 'w-4', 'text-xs'],
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded',
      },
    },
    defaultVariants: {
      shape: 'circle',
      size: 'md',
    },
  }
);

type AvatarPrimitiveProps = React.ComponentProps<typeof RadixAvatar.Root>;

export interface AvatarProps extends AvatarPrimitiveProps, VariantProps<typeof avatar> {
  /**
   * Size of  the component
   */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Alternative text for the image . usually description.
   */
  alt?: string;
  /**
   * Image url source
   */
  src?: string;

  /**
   * Id required for easier testing using cyprees and jest
   * ALso used for the fallback rendering of first and last name if the image doesnt load
   */
  name?: string;
}

export const Avatar = ({ size, alt, shape, src, name, className, ...props }: AvatarProps) => {
  // Convert Name to two letter Initials
  const [firstWord, secondWord] = name?.split(' ') || [];
  const initials = secondWord
    ? `${firstWord?.charAt(0)}${secondWord.charAt(0)}`
    : `${firstWord?.charAt(0)}`;

  return (
    <div data-testId={name} className="relative h-fit w-fit">
      <RadixAvatar.Root
        {...props}
        className={cn(
          avatar({
            className,
            size,
            shape,
          })
        )}
      >
        {src || firstWord ? (
          <>
            <RadixAvatar.Image
              src={src}
              alt={alt}
              className="h-full w-full rounded-[inherit] object-cover"
            />
            <RadixAvatar.Fallback>{initials?.toUpperCase()}</RadixAvatar.Fallback>
          </>
        ) : (
          <Person />
        )}
      </RadixAvatar.Root>
    </div>
  );
};
export default Avatar;
