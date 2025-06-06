import {
  ChevronDownIcon,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarIcon,
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
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  await checkUser();

  return (
    <header className="bg-white/40 backdrop-blur-md py-3 text-gray-900 px-4 sm:px-6 border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-8xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-gray-900 font-bold  md:text-2xl flex items-center gap-1"
        >
          <div className="relative">
            Creator IQ AI
            <div className="absolute right-[-25px] top-[-16px] animate-ai-glow">
              <Image
                width={30}
                height={30}
                src="/ai.svg"
                alt="AI"
                className="animate-ai-float"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Nav: Text + Icons, visible lg and up */}
        <nav className="hidden lg:flex items-center gap-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="flex gap-2 items-center border px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-md text-sm"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Industry Insights</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 items-center border px-3 py-2 bg-black hover:bg-gray-900 cursor-pointer text-white rounded-md text-sm">
                <StarIcon className="md:h-4 md:w-4 h-1 w-1" />
                <span>AI Growth Tools</span>
                <ChevronDownIcon className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-md">
                <DropdownMenuItem>
                  <Link
                    href="/resume"
                    className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600"
                  >
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/ai-cover-letter"
                    className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600"
                  >
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/interview"
                    className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600"
                  >
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

        {/* Mobile Nav: Only icons, visible below lg */}
        <nav className="flex lg:hidden items-center gap-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="flex items-center border px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-md"
              aria-label="Industry Insights"
            >
              <LayoutDashboard className="h-6 w-6" />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center border px-3 py-2 bg-black hover:bg-gray-900 cursor-pointer text-white rounded-md"
                aria-label="AI Growth Tools"
              >
                <StarIcon className="h-6 w-6" />
                <ChevronDownIcon className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-md">
                <DropdownMenuItem>
                  <Link
                    href="/resume"
                    className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600"
                  >
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/ai-cover-letter"
                    className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600"
                  >
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/interview"
                    className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600"
                  >
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
      </div>
    </header>
  );
};

export default Header;
