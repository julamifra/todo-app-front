export const validateForm = (value: string) => {
  if (!value) {
    return "Empty todos cannot be added.";
  }
  return "";
};
