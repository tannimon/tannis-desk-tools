// ── EXCLUDED TERMS ───────────────────────────────────────────────────────────
// Ongoing, hand-curated list of junk phrases that have shown up as false
// "medications" in real charts — almost always sig/instruction fragments
// ("Take one", "Take") left over after the real drug name and dose got
// stripped out elsewhere on the line. Add to this any time you spot one.
//
// HOW TO EDIT:
//   - One phrase per line, in quotes, followed by a comma.
//   - Lowercase is fine either way — matching ignores case automatically.
//   - Order doesn't matter. Blank/extra lines won't break anything.
//   - If this file fails to load (missing, bad syntax, wrong path), the tool
//     just runs without it — nothing else breaks.
//
// This list is also merged at runtime with anything flagged directly inside
// the tool (the small flag icon on each result row), which is stored in
// your browser's local storage. Use the "Download updated excluded_terms.js"
// button in the tool's flag panel to export the merged list (this file +
// everything flagged in-app) and replace this file with it in the repo.

const EXCLUDED_TERMS = [
  "take",
  "take one",
  "take 1",
  'affected areas of the legtwice',
  'at bedtime',
  'back once a day',
  'constipation',
  'emergency medical care may repeat every',
  'hours',
  'indications infusion every',
  'injection',
  'last time this was given',
  'legtwice',
  'medical care may repeat every',
  'modified medications',
  'morning',
  'noon',
  'quantity',
  'take',
  'take 1',
  'take one',
  'up to',
  'per',
  'for other',
  'misc',
  'intramuscular',
  'by misc route',
  'at',
  'at dinner time and then',
  'mouth',
  'sig takes',
  'takes',
  'then once before bed',
  'by mouth',
  'by mouth every',
  'dormir',
  'tab',
  'tome',
  'pldoras por va',
];
