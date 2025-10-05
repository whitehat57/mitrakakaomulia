"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * AnimatedDialog
 * - Uses Radix data-state to trigger enter/exit transitions
 * - Requires tw-animate-css imported in globals.css
 */
export function AnimatedDialog({
  triggerLabel = "Open Dialog",
  title = "Animated Dialog",
  description = "This dialog uses Tailwind v4 + tw-animate-css + Radix data-state.",
  children,
  className,
}: {
  triggerLabel?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={cn(
          "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium",
          "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        {triggerLabel}
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/40",
            // enter
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            // exit
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
          )}
        />

        {/* Content (centered) */}
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-background p-6 shadow-lg",
            // enter: slight zoom + fade
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            // exit: reverse
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "duration-200",
            className
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <Dialog.Title className="text-base font-semibold">{title}</Dialog.Title>
            <Dialog.Close
              className="rounded-md p-1 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Close"
            >
              <X className="size-5" />
            </Dialog.Close>
          </div>

          <Dialog.Description className="mt-2 text-sm text-muted-foreground">
            {description}
          </Dialog.Description>

          <div className="mt-4">{children ?? <p className="text-sm">Put any content here.</p>}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
