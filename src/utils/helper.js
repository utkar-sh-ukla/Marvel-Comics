/*
    @param {Object} params - The parameters object to filter.
    @returns {Object} - The filtered parameters object.
 */

export const validQueryParams = (params) => {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([key, value]) =>
        (value !== null &&
          value !== undefined &&
          value !== "" &&
          !Array.isArray(value)) ||
        (value.length > 0 && Object.keys(value).length > 0)
    )
  );
};

/*
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds before the function is executed.
 * @returns {Function} - The debounced function.
 */
export const debounce = (func, delay) => {
  let timerId;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
