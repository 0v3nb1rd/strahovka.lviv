import { forwardRef } from 'react'

import type { SendResult } from '@/lib/api'
import { SUCCESS_MESSAGE } from '@/lib/api'

/**
 * Honeypot field: off-screen and skipped by keyboard and screen readers, so only bots fill it.
 * The server silently drops submissions where it is not empty.
 */
export const Honeypot = forwardRef<HTMLInputElement>(function Honeypot(_, ref) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input ref={ref} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  )
})

/** Result of a submit, announced by screen readers. Renders nothing before the first submit. */
export function FormStatus({ result, className = '' }: { result: SendResult | null; className?: string }) {
  return (
    <p
      role="status"
      aria-live="polite"
      className={`text-sm ${result?.ok ? 'text-green-700' : 'text-red-600'} ${className}`}
    >
      {result ? (result.ok ? SUCCESS_MESSAGE : result.message) : null}
    </p>
  )
}
