export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};

/**
 * Calculates the number of years from a starting year to the current year.
 * @param {number} startYear - The starting year.
 * @returns {number} - The number of years from the starting year to the current year.
 */
export const calculateYearsSince = (startYear: number): number => {
  const currentDate = new Date().getFullYear();
  return currentDate - startYear;
}
