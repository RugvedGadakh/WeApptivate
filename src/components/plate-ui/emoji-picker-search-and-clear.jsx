import React from "react"
import { cn } from "@udecode/cn"

import { Icons } from "@/components/icons"

export function EmojiPickerSearchAndClear({ i18n, searchValue, clearSearch }) {
  return (
    <>
      <span
        className={cn(
          "absolute left-2 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2"
        )}
      >
        <Icons.search />
      </span>
      {searchValue && (
        <button
          title={i18n.clear}
          aria-label="Clear"
          type="button"
          className={cn(
            "absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer border-none bg-transparent"
          )}
          onClick={clearSearch}
        >
          <Icons.clear className="h-full w-full" />
        </button>
      )}
    </>
  )
}
