import test from "node:test";
import assert from "node:assert/strict";
import { addTask, toggleTask, taskSummary } from "../src/tasks.js";

test("adds a trimmed task without changing the input list", () => {
  const original = [{ id: 2, title: "Existing", completed: false }];
  const result = addTask(original, "  New task  ");
  assert.deepEqual(result[1], { id: 3, title: "New task", completed: false });
  assert.equal(original.length, 1);
});

test("does not add a blank task", () => {
  const original = [];
  assert.equal(addTask(original, "   "), original);
});

test("toggles only the selected task", () => {
  const tasks = [
    { id: 1, title: "A", completed: false },
    { id: 2, title: "B", completed: false },
  ];
  const result = toggleTask(tasks, 2);
  assert.equal(result[0].completed, false);
  assert.equal(result[1].completed, true);
  assert.equal(tasks[1].completed, false);
});

test("summarizes completed tasks", () => {
  assert.equal(taskSummary([{ id: 1, completed: true }, { id: 2, completed: false }]), "1 of 2 tasks completed");
});

//Test the next-ID behavior

test("uses the maximum existing ID when IDs are not sequential", () => {
  const tasks = [
    { id: 1, title: "First", completed: false },
    { id: 4, title: "Second", completed: false },
    { id: 6, title: "Third", completed: false },
  ];

  const result = addTask(tasks, "Fourth");

  assert.equal(result[3].id, 7);
});

test("assigns ID 1 when adding a task to an empty list", () => {
  const tasks = [];

  const result = addTask(tasks, "First task");

  assert.deepEqual(result, [
    { id: 1, title: "First task", completed: false },
  ]);
});

