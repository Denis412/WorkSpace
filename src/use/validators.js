export function useValidators() {
  return {
    required: (val) =>
      (val && val.length > 0) || "Это поле не должно быть пустым!",
  };
}
