# Week 1 issue backlog

Create these as separate GitHub issues. Assign one author and a different reviewer to each. The facilitator can add more documentation or test tasks for larger cohorts.

## 1. Add an empty-state message

When there are no tasks, show a helpful message instead of an empty list. It should disappear after a task is added. Check the behavior in the browser. Keep the existing task summary.

## 2. Add a task deletion action

Add a Delete button for each task. It should remove only the selected task, update the summary, and have an accessible label. Add a unit test for the task-list operation.

## 3. Add a completed-tasks filter

Let users display all tasks or only completed tasks. Toggling the filter should not change task data. Check the empty filtered view.

## 4. Improve the setup guide for a new contributor

Ask someone unfamiliar with the repo to follow the README. Fix at least one confusing instruction, then record what they attempted and what changed.

## 5. Test the next-ID behavior

Add tests for adding a task when IDs are not sequential and for adding to an empty list. Explain why the chosen expectation matters.

## 6. Improve small-screen layout

Make the form and task controls usable at a narrow mobile width. Include before/after screenshots or clear browser reproduction steps.

## 7. Add a count of remaining tasks

Show how many tasks are not yet completed without removing the existing completed count. Add a focused test for the calculation.

## 8. Add keyboard-use notes and fix one issue found

Use only the keyboard to add and complete a task. Document the steps and fix one usability problem found, with a browser check.

## Acceptance for every issue

The PR links the issue, describes behavior, records test steps and result, receives substantive review from another member, and includes any requested revision before merge.
