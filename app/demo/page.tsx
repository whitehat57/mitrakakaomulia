import { AnimatedDialog } from "@/components/ui/animated-dialog";
import { AnimatedSheet } from "@/components/ui/animated-sheet";

export default function DemoPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">UI Animation Demo</h1>
      <div className="flex flex-wrap gap-3">
        <AnimatedDialog />
        <AnimatedSheet />
      </div>
    </main>
  );
}
