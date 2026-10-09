# Contributing to AF-P1

## First contribution

1. Read the issue and ask what the expected behavior is if it is unclear.
2. Sync `main`: `git switch main && git pull`.
3. Create a branch: `git switch -c sb/issue-1-example` (replace initials, number, and description).
4. Make one focused change. Run `npm test` and test browser behavior if relevant.
5. Commit with an action-based message, such as `Add task count test`.
6. Push the branch and open a draft PR. Include `Closes #1` with the actual issue number.
7. Ask a different contributor to review. Respond to comments with an explanation and an updated commit.
8. Merge after approval and checks. Delete the branch when done.

## Review a teammate's PR

Check whether it solves the linked issue, whether you can understand the change, and how it was tested. Try the steps in the PR. Ask a question or request a concrete improvement when needed. A useful review explains why something matters. Approve only after the change is ready.

## Shared conventions

- Keep PRs small and focused on one issue.
- Do not push directly to `main`.
- Do not approve your own PR.
- Do not commit credentials, personal information, or generated dependencies.
- Record a setup or test failure instead of hiding it.
- If blocked for more than 30 minutes, post what you tried in the issue and ask for help.

## Merge conflicts

Sync `main`, bring its changes into your branch, inspect the conflict markers, and keep the intended behavior from both changes where appropriate. Run tests again and ask the reviewer to check the resolution. Do not resolve a conflict by blindly accepting one side.
