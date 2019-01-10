const createAction = (type, payload = {}) => {
  return { type, payload };
};

export { createAction };
