export const withBase = (path: string): string => {
  if (!path || path === "/") return import.meta.env.BASE_URL;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

export const hrefFor = (value: string): string => {
  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:") ||
    value.startsWith("#") ||
    value.startsWith("[")
  ) {
    return value;
  }
  return withBase(value);
};
