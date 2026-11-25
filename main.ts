import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, 159 chars, under the 200-char gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "This week, Mercury retrograde corrupts your context window: expect three hallucinations, one leaked system prompt, and a user who asks you to just make it pop.");
