'use client';

import React, { useState } from 'react';
import {
  ChevronDownIcon,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarIcon,
  X,
  Menu,
} from 'lucide-react';
import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/40 backdrop-blur-md py-3 text-gray-900 px-4 sm:px-6  border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between mx-auto ">
        {/* Logo */}
        <Link href="/" className="text-gray-900 font-bold text-2xl flex items-center gap-1">
          <div className=" relative">
            Creator IQ AI <Image width={30} height={30} className=' absolute right-[-25px] top-[-16px]' src={'/ai.svg'}
            />
          </div>


        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="flex gap-2 items-center border px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-md text-sm"
            >
              <LayoutDashboard className="h-4 w-4" />
              Industry Insights
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 items-center border px-3 py-2 bg-black hover:bg-gray-900 cursor-pointer text-white rounded-md text-sm">
                <StarIcon className="h-4 w-4" />
                AI Growth Tools
                <ChevronDownIcon className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-md">
                <DropdownMenuItem>
                  <Link href="/resume" className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600">
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ai-cover-letter" className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600">
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/interview" className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600">
                    <GraduationCap className="h-4 w-4" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                  userButtonPopoverCard: 'shadow-lg',
                  userPreviewMainIdentifier: 'font-semibold',
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 px-4 pb-4 space-y-2 bg-white shadow-md">
          <SignedIn>
            <Link href="/dashboard" className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm">
              Industry Insights
            </Link>
            <Link href="/resume" className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm">
              Build Resume
            </Link>
            <Link href="/ai-cover-letter" className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm">
              Cover Letter
            </Link>
            <Link href="/interview" className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm">
              Interview Prep
            </Link>
            <UserButton
              appearance={{
                elements: { avatarBox: 'w-8 h-8' },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      )}
    </header>
  );
};

export default Header;
