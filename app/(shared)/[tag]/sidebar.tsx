'use client';

import { useState } from 'react';

import { urls } from 'config/urls';

import {
  AddIcon,
  FavIcon,
  HomeIcon,
  Logo,
  SearchIcon,
  TagsIcon,
} from 'components/icons';
import AccountModal from 'components/modal/signup';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <nav className="flex transition-opacity duration-150 ease-out fixed sm:top-0 max-sm:bottom-0 max-sm:dark:bg-black/60 max-sm:bg-background/50 max-sm:h-[86px] z-10 justify-center sm:justify-between max-sm:px-4 sm:flex-col sm:min-h-dvh bottom-t sm:border-r sm:w-[70px] w-full border-border">
      <div className="flex sm:flex-col items-center max-sm:pb-[calc(env(safe-area-inset-bottom)/3)] max-sm:gap-6 gap-3 text-primary">
        <a
          href={urls.account}
          className="active:opacity-85 mt-2 mb-2 hidden sm:block group"
        >
          <Logo className="w-[38px] h-[38px] group-active:scale-95 duration-150 transition-transform" />
          <span className="sr-only">Home page</span>
        </a>
        <a
          className="p-2.5 inline-block max-md:p-3 rounded-xl group transition-colors text-center text-primary/50 hover:bg-accent"
          href={urls.account}
          title="Home"
        >
          <HomeIcon className="w-6 h-6 text-pimary-foreground group-hover:scale-95 duration-150 transition-transform" />
        </a>
        <a
          className="p-2.5 inline-block max-md:p-3 rounded-xl group transition-colors text-center text-primary/50 hover:bg-accent"
          href={urls.account}
          title="Home"
        >
          <SearchIcon className="w-6 h-6 text-pimary-foreground group-hover:scale-95 duration-150 transition-transform" />
        </a>
        <a
          href={urls.account}
          className="p-2.5 inline-block max-md:p-3 rounded-xl group transition-colors text-center text-primary/50 hover:bg-accent max-sm:order-4"
          title="Favorites"
        >
          <FavIcon className="w-6 h-6 text-pimary-foreground group-hover:scale-95 duration-150 transition-transform" />
        </a>
        <a
          href={urls.account}
          className="p-2.5 inline-block max-md:p-3 rounded-xl group transition-colors text-center text-primary/50 hover:bg-accent max-sm:order-4"
          title="Tags"
        >
          <TagsIcon className="w-6 h-6 text-pimary-foreground group-hover:scale-95 duration-150 transition-transform" />
        </a>
        <a
          href={urls.account}
          className={
            'rounded-full flex justify-center p-2 max-sm:p-3 text-white bg-blue-600 hover:bg-blue-500 max-sm:order-3 sm:mt-2'
          }
        >
          <AddIcon className="text-white w-6 h-6" />
        </a>
        {open ? <AccountModal open={open} onHide={setOpen} /> : null}
      </div>
    </nav>
  );
}
