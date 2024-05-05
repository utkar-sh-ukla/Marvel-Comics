/**
 * Filters out null, undefined, empty strings, empty arrays, and empty objects from the given parameters object.
 * @param {Object} params - The parameters object to filter.
 * @returns {Object} - The filtered parameters object.
 */
export const validQueryParams = (params) => {
    return Object.fromEntries(
      Object.entries(params).filter(
        ([key, value]) =>
          value !== null &&                               // Exclude null values
          value !== undefined &&                          // Exclude undefined values
          value !== "" &&                                 // Exclude empty strings
          !Array.isArray(value) || value.length > 0 &&   // Exclude empty arrays
          Object.keys(value).length > 0                  // Exclude empty objects
      )
    );
  };
  