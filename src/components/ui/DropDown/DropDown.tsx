import { useEffect, useState } from 'react';
import Image from 'next/image';

import { DropDownButton } from './DropDownButton';
import { DropDownItem } from './DropDownItem';
import { DropDownList } from './DropDownList';

interface ListItemObject {
  email: string;
  name: string;
}

type ListItem = string | ListItemObject;

export interface MenuList {
  listItems: ListItem;
  key: number;
  position: 'header' | 'list' | 'footer';
  onMenuClick?: () => void;
}

interface DropDownProps {
  children: React.ReactNode;
  list?: MenuList[];
  isLoading?: boolean;
}

export const DropDown = ({ children, list, isLoading }: DropDownProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // Separate items by position
  const headerItems = list && list.filter((item) => item.position === 'header');
  const listItems = list && list.filter((item) => item.position === 'list');
  const footerItems = list && list.filter((item) => item.position === 'footer');

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [setIsDropdownVisible]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative">
      <DropDownButton onClick={toggleDropdown}>
        {children || (
          <Image
            width={20}
            height={20}
            className="h-8 w-8 rounded-full"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="user photo"
          />
        )}
      </DropDownButton>

      {isDropdownVisible && (
        <DropDownList isLoading={isLoading}>
          {/* Render header items */}
          {headerItems &&
            headerItems.map((item) => (
              <div key={item.key} className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{typeof item?.listItems === 'object' && item.listItems.name}</div>
                <div className="truncate font-medium">
                  {typeof item?.listItems === 'object' && item.listItems.email}
                </div>
              </div>
            ))}

          {/* Render list items within a single <ul> */}
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {listItems &&
              listItems.map((item) => (
                <DropDownItem onClick={item?.onMenuClick} key={item.key}>
                  {item.listItems as string}
                </DropDownItem>
              ))}
          </ul>

          {/* Render footer items */}
          {footerItems &&
            footerItems.map((item) => (
              <div key={item.key} className="py-2">
                <DropDownItem onClick={item?.onMenuClick}>{item.listItems as string}</DropDownItem>
              </div>
            ))}
        </DropDownList>
      )}

      {isDropdownVisible && (
        <div
          role="listbox"
          onKeyDown={() => {}}
          tabIndex={0}
          className="fixed bottom-0 left-0 right-0 top-0 z-20 bg-black/40"
          onClick={() => setIsDropdownVisible(false)}
        />
      )}
    </div>
  );
};
