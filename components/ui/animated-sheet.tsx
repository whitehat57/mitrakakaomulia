"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * AnimatedSheet (drawer from right)
 * - Built on Radix Dialog under the hood
 */
export function AnimatedSheet({
  triggerLabel = "Open Drawer",
  title = "Animated Drawer",
  children,
  className,
}: {
  triggerLabel?: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
        {triggerLabel}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/40",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed right-0 top-0 h-dvh w-[90vw] max-w-md border-l bg-background p-6 shadow-xl",
            // enter from right
            "data-[state=open]:animate-in data-[state=open]:slide-in-from-right-10 data-[state=open]:fade-in-0",
            // exit to right
            "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-10 data-[state=closed]:fade-out-0",
            "duration-200",
            className
          )}
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-base font-semibold">{title}</Dialog.Title>
            <Dialog.Close
              className="rounded-md p-1 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Close"
            >
              <X className="size-5" />
            </Dialog.Close>
          </div>
          <div className="mt-4">{children ?? <p className="text-sm">Drawer content</p>}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
