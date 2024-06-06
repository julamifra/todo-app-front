export const validateForm = (value: string) => {
  if (!value) {
    return "An empty todo cannot be added.";
  }
  return "";
};
