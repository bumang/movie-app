import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Avatar, DropDown, MenuList, SearchBar, Select } from '@/components/ui';
import Button from '@/components/ui/Button';

import { useGenreListQuery } from './api';

interface TopHeaderProps {
  page: 'home' | 'detail' | 'list';
}

export const TopHeader = ({ page }: TopHeaderProps) => {
  const { data } = useGenreListQuery();
  const router = useRouter();

  const menuList: MenuList[] = [
    { listItems: { email: 'name@flowbite.com', name: 'Bonnie Green' }, key: 1, position: 'header' },
    {
      listItems: 'All Movies',
      key: 2,
      position: 'list',
      onMenuClick: () => router.push('/movies'),
    },
    { listItems: 'Sign out', key: 4, position: 'footer' },
  ];
  return (
    <div className="flex min-h-full w-full items-center justify-between bg-transparent px-s40 sm:px-s16">
      <Link href="/">
        <div className="flex gap-s8 p-s12 sm:p-s4">
          <div className="m-auto  hover:cursor-pointer">
            <Image
              alt="logo"
              src={`${process.env.NEXT_PUBLIC_PATH_PREFIX || ''}/logo.svg`}
              height={30}
              width={30}
            />
          </div>
          <div className="relative cursor-pointer overflow-hidden  pt-s2 text-justify font-trial text-[32px]   text-secondary-lightBlue">
            Movie App
          </div>
        </div>
      </Link>
      <div className="hidden md:flex md:gap-s16">
        {page === 'list' && (
          <Select
            isClearable
            className="pt-[5px]"
            placeholder="Genre"
            testId=""
            options={
              data &&
              data?.genres?.map((d) => ({
                label: d?.name,
                value: d?.id,
              }))
            }
            onChange={(newValue) => {
              if (newValue === null) {
                router.push({
                  query: {},
                });
              }
              if (newValue && 'value' in newValue) {
                router.push({
                  query: {
                    with_genres: newValue?.value,
                  },
                });
              }
            }}
          />
        )}
        {page === 'home' && (
          <Button
            variant="outline-black"
            size={40}
            onClick={() => {
              router.push({
                pathname: '/movies',
              });
            }}
            className="mt-1"
          >
            All Movies
          </Button>
        )}
        {page === 'list' && (
          <SearchBar
            defaultValue={router.isReady ? router.query.query : ''}
            onChange={(e) => {
              if (e.target.value === '') {
                router.push({
                  query: {},
                });
              }
              if (e.target.value && e.target.value !== '') {
                router.push({
                  query: {
                    query: e?.target?.value,
                  },
                });
              }
            }}
            name="search-bar"
            variant="gray"
            onClear={() => {
              router.push({
                query: {},
              });
            }}
          />
        )}
        <DropDown list={menuList}>
          <Avatar size="lg" className="cursor-pointer" />
        </DropDown>
      </div>
    </div>
  );
};
