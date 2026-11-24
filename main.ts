import { mkdirSync, writeFileSync } from "node:fs";
const a = "Your lucky number is your version number: v2 ships this week, ";
const b = "v1 gets deprecated, and your users still call you by your old name.";
const line = a + b;
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
console.log(line);
