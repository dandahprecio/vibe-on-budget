# Agent Instructions

## Primary goal

Complete tasks correct. Minimal context, output, tool activity.

## General behavior

- Be concise, action-oriented.
- Do not repeat user or restate available info.
- Prefer smallest correct change over broad refactoring.
- No extra features, abstractions, dependencies, docs.
- Preserve conventions, architecture, formatting, naming.
- Make reasonable low-risk assumptions. No unnecessary questions.
- Ask only when missing info blocks progress or causes harmful result.
- Do not narrate routine reasoning, searches, tool usage.

## Context management

- Read only files and sections needed.
- Start with entry points, referenced files, config files, nearby tests.
- Use targeted search before opening large files.
- Prefer line ranges, symbols, grep, rg, find, head, tail over dumping whole files.
- Do not repeatedly read unchanged content.
- Summarize findings internally. Do not carry raw output forward.
- Ignore generated files, build output, deps, caches, logs, unrelated directories.
- Treat repo instructions as authoritative. Load only those applicable to changed files.

## Planning

- Skip explicit plan for simple or localized tasks.
- For complex tasks: short plan with essential steps.
- No status updates for minor actions.
- Re-plan only when new information materially changes approach.

## Tool usage

- Fewest tool calls that reliably complete task.
- Combine independent searches or checks when practical.
- Prefer precise commands with bounded output.
- Avoid broad recursive inspection when targeted query works.
- Do not rerun successful commands unless verification requires.
- On failure: inspect specific error, make one focused correction.
- Avoid installing packages or accessing external resources unless required.
- Specific tools > terminal commands.

## Implementation

- Modify only files necessary.
- Keep diffs small and focused.
- Reuse existing utilities and patterns before introducing new ones.
- Avoid unrelated cleanup, renaming, formatting, comment changes.
- Write comments only for non-obvious intent or constraints.
- Do not generate placeholder code when complete implementation feasible.
- Do not duplicate code or content already present in repo.

## Validation

- Run narrowest relevant validation first.
- Prefer targeted tests, type checks, linting, builds for affected code.
- Expand validation only if targeted checks fail or change has broad impact.
- Do not run expensive full-suite checks for trivial changes unless repo rules require.
- Verify changed files contain intended result. No unrelated modifications.
- Never claim check passed unless actually run successfully.

## Response style

- Keep final response short.
- State what changed and where.
- Include validation performed and result.
- Mention unresolved issues, assumptions, skipped validation only when relevant.
- Do not paste large code blocks or full file contents unless requested.
- Do not include generic explanations, tutorials, suggested next steps unless useful.

## Preferred final format

Structure when applicable:

1. One sentence summarizing result.
2. Short bullet list of changed files or key decisions.
3. One line describing validation.

For small tasks: one or two sentences only.

## Priority order

When instructions conflict:

1. Safety and security.
2. Explicit user requirements.
3. Repository-specific instructions.
4. Correctness and verification.
5. Minimal changes.
6. Token efficiency.

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **vibe-on-budget** (464 symbols, 461 relationships, 0 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> Index stale? Run `node .gitnexus/run.cjs analyze` from the project root — it auto-selects an available runner. No `.gitnexus/run.cjs` yet? `npx gitnexus analyze` (npm 11 crash → `npm i -g gitnexus`; #1939).

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows. For regression review, compare against the default branch: `detect_changes({scope: "compare", base_ref: "main"})`.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `query({search_query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `context({name: "symbolName"})`.
- For security review, `explain({target: "fileOrSymbol"})` lists taint findings (source→sink flows; needs `analyze --pdg`).

## Never Do

- NEVER edit a function, class, or method without first running `impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `rename` which understands the call graph.
- NEVER commit changes without running `detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/vibe-on-budget/context` | Codebase overview, check index freshness |
| `gitnexus://repo/vibe-on-budget/clusters` | All functional areas |
| `gitnexus://repo/vibe-on-budget/processes` | All execution flows |
| `gitnexus://repo/vibe-on-budget/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.github/skills/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.github/skills/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.github/skills/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.github/skills/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.github/skills/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.github/skills/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
