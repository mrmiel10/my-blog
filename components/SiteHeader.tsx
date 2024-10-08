import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "../src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { Icons } from "./icons";
import MainNav from "./main.nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "@/Theme/Theme-toggle";
import { MoonIcon, SunIcon } from "lucide-react";
import { LocaleSelect } from "@/app/[locale]/LocaleSelect";
import { Section } from "./Section";
export const SiteHeader = () => {
  return (
    <header className="z-10 sticky top-0 w-full border-b  border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Section className=" flex h-14  items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end gap-2">
          <LocaleSelect />
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.GithubIcon className="w-4 h-4" />
                <span className="sr-only">Github</span>
              </div>
            </Link>

            <MobileNav />
          </nav>

          <ThemeToggle />

          {/* <SunIcon 
     size={40}
     className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
 />
 <MoonIcon 
     size={20}
     className='absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 '
 /> */}
        </div>
      </Section>
    </header>
  );
};
