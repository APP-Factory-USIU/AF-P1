import test from "node:test";
import assert from "node:assert/strict";
import { addTask, remainingTasks, toggleTask, taskSummary, deleteTask} from "../src/tasks.js";

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

test("calculates remaining tasks", () => {
  const tasks = [
    { id: 1, title: "A", completed: true },
    { id: 2, title: "B", completed: false },
    { id: 3, title: "C", completed: false },
  ];
  assert.equal(remainingTasks(tasks), 2);
});

test("deletes only the selected task without changing the input list", () => {
  const tasks = [
    { id: 1, title: "Same title", completed: false },
    { id: 2, title: "Same title", completed: true },
    { id: 3, title: "Another task", completed: true },
  ];
  const original = structuredClone(tasks);
  const result = deleteTask(tasks, 2);
  assert.deepEqual(result, [tasks[0], tasks[2]]);
  assert.deepEqual(tasks, original);
  assert.equal(taskSummary(result), "1 of 2 tasks completed");
});

test("deleting an unknown task leaves all tasks intact", () => {
  const tasks = [{ id: 1, title: "Keep me", completed: false }];
  assert.deepEqual(deleteTask(tasks, 99), tasks);
});

test("deleting the last task updates the summary to zero", () => {
  const result = deleteTask([{ id: 1, title: "Last task", completed: true }], 1);
  assert.deepEqual(result, []);
  assert.equal(taskSummary(result), "0 of 0 tasks completed");
});
test("summarizes completed and remaining tasks", () => {
  assert.equal(
    taskSummary([{ id: 1, completed: true }, { id: 2, completed: false }]),
    "1 of 2 tasks completed, 1 remaining"
  );
});
