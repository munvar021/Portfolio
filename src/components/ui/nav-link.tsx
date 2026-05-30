"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import type { ComponentPropsWithRef } from "react";
import { getHashId, scrollToId, storePendingHomeSection } from "@/lib/scroll";

interface NavLinkProps extends Omit<ComponentPropsWithRef<"a">, "href"> {
  to: string;
  end?: boolean;
  $isActive?: boolean;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, end = false, className, onClick, $isActive, ...props }, ref) => {
    const isHash = to.startsWith("#");
    const pathname = usePathname();
    const router = useRouter();

    const pathActive =
      !isHash &&
      (end
        ? pathname === to
        : pathname === to || (to !== "/" && pathname.startsWith(to)));

    const isActive = $isActive !== undefined ? $isActive : pathActive;
    const classes = [className, isActive ? "active" : ""]
      .filter(Boolean)
      .join(" ");

    const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToId(getHashId(to));
      onClick?.(e);
    };

    if (isHash) {
      if (pathname !== "/") {
        const handleCrossPageHashClick = (
          e: React.MouseEvent<HTMLAnchorElement>,
        ) => {
          onClick?.(e);

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
            className={classes}
            onClick={handleCrossPageHashClick}
            {...props}
          />
        );
      }

      return (
        <a
          ref={ref}
          href={to}
          className={classes}
          onClick={handleHashClick}
          {...props}
        />
      );
    }

    return (
      <Link
        ref={ref}
        href={to}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";
export default NavLink;
