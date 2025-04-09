"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Moon, Sun } from "lucide-react"

export function DarkModeToggle({ className }) {
  const [isDark, setIsDark] = React.useState(
    typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  )

  const toggleTheme = () => {
    const root = document.documentElement
    root.classList.toggle("dark")
    setIsDark(!isDark)
  }

  return (
    <SwitchPrimitive.Root
      checked={isDark}
      onCheckedChange={toggleTheme}
    >
      <SwitchPrimitive.Thumb>
        {isDark ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-600" />
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}
