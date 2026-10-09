# AF-P1

App Factory Phase 1 practice repository. Week 1 focuses on taking a small change from an issue through a branch, pull request, review, revision, and merge.

The starter is a small task board. It runs in a browser without a package install. Its task logic has tests using Node's built-in test runner.

## Run locally

Requirements: Python 3 or another static file server; Node.js 20 or newer for tests.

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Run tests in a second terminal:

```sh
npm test
```

Do not open `index.html` directly from the file system; the browser needs a local server for ES modules.

## Week 1 outcome

Every contributor should:

1. Pick or receive an issue.
2. Create a branch named `<initials>/issue-<number>-short-description`.
3. Make a small change and run `npm test`; check the app in the browser when the UI changes.
4. Open a draft pull request linking the issue with `Closes #<number>`.
5. Request a teammate's review, respond to feedback, and merge only after approval.
6. Add their PR and a short reflection to the [team evidence index](docs/evidence-index.md).

See [CONTRIBUTING.md](CONTRIBUTING.md) for commands and review expectations. The team should fill in [the charter](docs/team-charter.md) at onboarding.

## Review rule

At least one person other than the author reviews each pull request. The author records how the change was tested. Resolve review conversations before merging. If repository settings allow it, enable branch protection to require one approval and prevent direct pushes to `main`.

## Scope

This is a teaching scaffold, not a production application. Do not add credentials or personal data. Week 3 will introduce CI; Week 4 will introduce preview deployment.
