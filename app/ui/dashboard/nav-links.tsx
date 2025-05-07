"use client";

import CogIcon from '@heroicons/react/20/solid/CogIcon';
import CreditCardIcon from '@heroicons/react/20/solid/CreditCardIcon';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
  { name: 'Billing', href: '/dashboard/billing', icon: CreditCardIcon },
];

export default function NavLinks() {
  const path = usePathname();

  console.log('Pathname:', path);

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx (
              'flex h-[48px] w-full items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-gray-100 text-gray-900': path === link.href,
                'text-gray-500 hover:bg-gray-50 hover:text-gray-900':
                  path !== link.href,
              },
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
