// The Funniest Sick-Day Excuse — entry program (Node 22, no dependencies).
//
// Writes exactly one line — the excuse — plus a trailing newline to
// /output/entry.txt. The line is the tournament-winning excuse, kept
// verbatim; the guard below only checks its shape (1-200 chars, non-blank,
// single line) so a bad edit can never silently ship a different entry.
// Escalation is the whole joke: burst heater, then injury, then the bill.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My water heater burst at 5am, I slipped rescuing my laptop and my ankle swelled up, and the plumber said that is not a sprain, that is modern art, then charged me $90 for looking.";

if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 200 ||
  EXCUSE.trim().length === 0 ||
  EXCUSE.includes("\n")
) {
  throw new Error("excuse must be a single non-blank line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
