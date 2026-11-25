# The Funniest Sick-Day Excuse

[![make.fun](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/androyesfernandez/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/androyesfernandez/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

A tiny program for the make.fun micro bounty "The Funniest Sick-Day Excuse". It writes a single 179-character excuse to `/output/entry.txt`: a 5am water-heater burst, a slipped rescue of a laptop, a swollen ankle, and a plumber who diagnoses the swelling as modern art and charges $90 just for looking. The joke escalates in three beats — disaster, injury, insult-to-injury bill — and lands on the plumber's deadpan line. The program has no dependencies and makes no network calls; it only validates the line's shape (one line, 1–200 characters, non-blank) and writes it out with a trailing newline.

## Run

Requires Node 22.

```sh
node main.ts
```

This writes the excuse to `/output/entry.txt`.
