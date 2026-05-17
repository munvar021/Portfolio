"use client";

import Link from "next/link";
import React from "react";
import type { ComponentPropsWithRef } from "react";
import { getHashId, scrollToId } from "@/lib/scroll";

interface AppLinkProps extends Omit<ComponentPropsWithRef<"a">, "href"> {
  to: string;
}

const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ to, onClick, ...props }, ref) => {
    const isHash = to.startsWith("#");

    if (isHash) {
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
