export const sessionStorageMiddleware = store => next => action => {
  const result = next(action);

  const state = {
    ...store.getState(),
    board: {
      ...store.getState()?.board,
      search: null,
      searchTerm: ''
    }
  };
  sessionStorage.setItem('board', JSON.stringify(state));

  return result;
};
