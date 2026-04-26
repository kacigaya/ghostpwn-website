"use client";

import { useState } from "react";

export function CopyButton({
  value,
  label,
}: {
  value: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="group flex items-center gap-2 border border-[var(--border)] bg-black px-2 py-1 text-[10px] tracking-[0.2em] text-[var(--accent)] uppercase transition-colors hover:bg-[var(--accent)] hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
      aria-label={copied ? "Copied" : `Copy ${label ?? "command"}`}
    >
      <span aria-hidden>{copied ? "✓" : "▭"}</span>
      <span>{copied ? "copied" : (label ?? "copy")}</span>
    </button>
  );
}
