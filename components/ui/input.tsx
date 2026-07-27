import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
     className={cn(
  "flex h-12 w-full rounded-xl border border-zinc-200 bg-background px-4 text-[15px] text-foreground placeholder:text-muted-foreground transition-all duration-200 outline-none",
  "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20",
  "disabled:cursor-not-allowed disabled:opacity-50",
  className
)}
      {...props}
    />
  )
}

export { Input }
