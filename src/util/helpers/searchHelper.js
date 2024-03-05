import {
  DIACRITICAL_LETTERS_KEY_STRING,
  MAP_DIACRITICAL_LETTERS
} from 'util/constants/defaultValues';

// For ignoring diacritical characters during search
const normalizeSearchTerm = term => {
  let normalizedTerm = term.toLowerCase().trim();
  // Escape special characters
  const escapedReg = DIACRITICAL_LETTERS_KEY_STRING.replace(
    /[.*+?^${}()|[\]\\]/g,
    '\\$&'
  );
  const regexLiteral = new RegExp(`[${escapedReg}]`, 'g');
  normalizedTerm = normalizedTerm.replace(
    regexLiteral,
    ch => MAP_DIACRITICAL_LETTERS[ch] || ch
  );
  return new RegExp(normalizedTerm);
};

export const searchHelper = (columns, tasks, searchTerm) => {
  const result = {};

  for (const [key, value] of Object.entries(columns)) {
    const tasksMap = value.taskIds;

    result[key] = {
      ...value,
      taskIds: tasksMap.filter(taskId => {
        const searchTermNormalized = normalizeSearchTerm(searchTerm);
        const taskContent = tasks[taskId].content.toLowerCase();
        const matchResult = taskContent.match(searchTermNormalized);
        return matchResult !== null;
      })
    };
  }

  return result;
};
