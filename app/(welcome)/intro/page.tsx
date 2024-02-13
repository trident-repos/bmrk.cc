import Link from 'next/link';

import { Logo } from 'components/icons';

const title = 'Bookmark it. | Intro';
const description = 'Bookmark manager for the modern web.';

export const metadata = {
  title,
  description,
};

export default async function Page() {
  return (
    <div className="h-full pb-24 flex flex-col justify-center items-center homepage-white">
      <header className="mt-10">
        <Logo className="w-40 h-40" />
      </header>
      <div className="flex mt-10 flex-col items-center text-center justify-center">
        <h1 className="sm:text-4xl text-2xl font-bold tracking-wide ">
          Welcome to Bookmark It.
        </h1>
        <p className="text-lg mt-4 text-muted-foreground">
          A bookmark manager for the modern web.
        </p>
      </div>
      <Link
        href="/import"
        className="items-center mt-10 h-[48px] tracking-wide disabled:cursor-not-allowed disabled:bg-accent disabled:border-border rounded-full text-primary border border-border focus:outline-0 active:bg-accent text-sm flex justify-center py-2 px-5 transition-colors bg-primary-foreground hover:bg-accent"
      >
        Get Started
      </Link>
    </div>
  );
}
