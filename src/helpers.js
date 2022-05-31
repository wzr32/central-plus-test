export const setLocalStorage = (name, data) => {
  if (localStorage.getItem(name)) {
    localStorage.setItem(name, JSON.stringify(data));
  }
};
