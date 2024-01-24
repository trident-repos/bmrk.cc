'use client';

import Link from 'next/link';

import { LogOut, Settings } from 'lucide-react';

import { cn } from 'lib/utils';

import { useAuth } from './context/auth';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function Profile({ className }: { className?: string }) {
  const { user, supabase } = useAuth();

  if (!user || !user?.user_metadata?.avatar_url) {
    return null;
  }

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Avatar className={cn(className)}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={user.user_metadata.avatar_url}
              alt={user.user_metadata.name}
            />
            <AvatarFallback className="font-medium text-orange-900 uppercase text-xl bg-orange-300">
              {user.user_metadata.name[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuItem className="hidden max-sm:block">
            <Link className="flex items-center" href="/settings">
              <Settings className="h-4 w-4 mr-2.5" /> Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center" onClick={signOut}>
            <LogOut className="h-4 w-4 mr-2.5" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Avatar>
  );
}
