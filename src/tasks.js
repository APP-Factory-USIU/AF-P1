export function addTask(tasks, title) {
  const trimmed = title.trim();
  if (!trimmed) return tasks;
  const nextId = Math.max(0, ...tasks.map((task) => task.id)) + 1;
  return [...tasks, { id: nextId, title: trimmed, completed: false }];
}

export function toggleTask(tasks, id) {
  return tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
}

export function remainingTasks(tasks) {
  return tasks.filter((task) => !task.completed).length;
}

export function taskSummary(tasks) {
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = remainingTasks(tasks);
  return `${completed} of ${tasks.length} tasks completed, ${remaining} remaining`;
}