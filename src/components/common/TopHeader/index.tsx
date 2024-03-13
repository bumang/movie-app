import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Avatar, DropDown, MenuList, SearchBar } from '@/components/ui';

import { useLogoutMutation } from './api';
import { asyncToast } from '../Toast';

export const TopHeader = () => {
  const router = useRouter();
  const logout = useLogoutMutation();

  const logoutClick = () => {
    asyncToast({
      id: 'logout',
      promise: logout.mutateAsync({}),
      msgs: {
        loading: 'Loggin out...',
        success: 'Logged out Successfully!',
      },
      // onError: (error) => {
      //   const errors = (error as any) ?? {};
      //   console.log('errors', errors);
      //   // Object.keys(errors).forEach((err) => {
      //   //   logout.setError(
      //   //     err,
      //   //     {
      //   //       message: errors[err],
      //   //     },
      //   //     {
      //   //       shouldFocus: true,
      //   //     }
      //   //   );
      //   // });
      // },
      onSuccess: () => {
        router.push('/auth/login');
      },
    });
  };

  const menuList: MenuList[] = [
    { listItems: { email: 'name@flowbite.com', name: 'Bonnie Green' }, key: 1, position: 'header' },
    {
      listItems: 'Dashboard',
      key: 2,
      position: 'list',
    },
    { listItems: 'Settings', key: 2, position: 'list' },
    { listItems: 'Earnings', key: 3, position: 'list' },
    { listItems: 'Sign out', key: 4, position: 'footer', onMenuClick: logoutClick },
  ];

  return (
    <div className="flex min-h-full w-full items-center justify-between bg-primary-black px-s40 sm:px-s16">
      <Link href="/">
        <div className="flex gap-s8 p-s12 sm:p-s4">
          <div className=" hover:cursor-pointer">
            <Image
              alt="logo"
              src={`${process.env.NEXT_PUBLIC_PATH_PREFIX || ''}/logo.svg`}
              height={30}
              width={30}
            />
          </div>
          <div className="relative cursor-pointer overflow-hidden pt-s2 text-justify text-s20  font-bold leading-normal text-secondary-lightBlue">
            Admin
          </div>
        </div>
      </Link>
      <div className=" hidden md:flex md:gap-s8">
        <SearchBar name="search-bar" variant="gray" />
        <DropDown list={menuList} isLoading={logout.isPending}>
          <Avatar size="lg" className="cursor-pointer" />
        </DropDown>
      </div>
    </div>
  );
};
