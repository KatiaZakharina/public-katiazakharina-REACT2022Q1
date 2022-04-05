export const passedBrowserValidation = (container: HTMLElement, name: string) => {
  const selector = `[name=${name}]:valid`;
  const isValidated = container.querySelector(selector);
  return !!isValidated;
};
