"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import type { ComponentPropsWithRef } from "react";
import { getHashId, scrollToId, storePendingHomeSection } from "@/lib/scroll";

interface AppLinkProps extends Omit<ComponentPropsWithRef<"a">, "href"> {
  to: string;
}

const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ to, onClick, ...props }, ref) => {
    const isHash = to.startsWith("#");
    const pathname = usePathname();
    const router = useRouter();

    if (isHash) {
      if (pathname !== "/") {
        const handleCrossPageHashClick = (
          e: React.MouseEvent<HTMLAnchorElement>,
        ) => {
          onClick?.(e as React.MouseEvent<HTMLAnchorElement>);

          if (
            e.defaultPrevented ||
            e.button !== 0 ||
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.altKey ||
            (props.target && props.target !== "_self")
          ) {
            return;
          }

          e.preventDefault();
          storePendingHomeSection(getHashId(to));
          router.push("/", { scroll: false });
        };

        return (
          <a
            ref={ref}
            href={`/${to}`}
            onClick={handleCrossPageHashClick}
            {...props}
          />
        );
      }

      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        scrollToId(getHashId(to));
        onClick?.(e as React.MouseEvent<HTMLAnchorElement>);
      };
      return <a ref={ref} href={to} onClick={handleClick} {...props} />;
    }

    return (
      <Link
        ref={ref}
        href={to}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...props}
      />
    );
  },
);

AppLink.displayName = "AppLink";
export default AppLink;
