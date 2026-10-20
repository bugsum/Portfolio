"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";
import { profile } from "@/content/profile";
import { EASE_OUT_SOFT } from "@/lib/motion";
import { Icon } from "@/components/ui/icon";
import { SocialLinks } from "@/components/ui/social-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => () => setOpen(false), []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.dataset.navOpen = "true";
    else delete root.dataset.navOpen;
    return () => {
      delete root.dataset.navOpen;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-foreground-muted transition-colors hover:bg-surface-hover hover:text-foreground md:hidden"
      >
        <Icon name="list" weight="bold" className="size-[1.125rem]" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-canvas md:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <span className="font-display text-lg text-foreground">
                {site.shortName}
              </span>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-full border border-border bg-surface text-foreground-muted transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                <Icon name="x" weight="bold" className="size-[1.125rem]" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2 px-6 pt-8">
              {site.nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + index * 0.05,
                    duration: 0.35,
                    ease: EASE_OUT_SOFT,
                  }}
                >
                  <Link
                    href={item.href}
                    onNavigate={() => setOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-2 py-4 font-display text-display-xs text-foreground transition-colors hover:bg-surface-muted"
                  >
                    <Icon name={item.icon} className="size-6 text-brand" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-4 border-t border-border px-6 py-8">
              <p className="font-mono text-2xs uppercase text-foreground-muted">
                {profile.availability.label}
              </p>
              <SocialLinks />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
