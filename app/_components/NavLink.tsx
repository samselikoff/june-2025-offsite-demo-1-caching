'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        active && 'bg-gray-200',
        !active && 'hover:bg-gray-200',
        'flex items-center -mx-2 rounded px-2 py-1.5 font-medium text-sm gap-1.5'
      )}
    >
      {children}
    </Link>
  );
}
