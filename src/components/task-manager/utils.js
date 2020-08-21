export const extend = (oldData, newData) => {
  return Object.assign({}, oldData, newData);
};

export const setFocusEnd = (el) => {
  el.focus();
  el.setSelectionRange(el.value.length,el.value.length);
};
