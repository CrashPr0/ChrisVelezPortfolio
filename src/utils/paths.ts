export const withBase = (path: string): string => {
  const base = `${import.meta.env.BASE_URL.replace(/\/+$/, "")}/`;
  if (!path || path === "/") return base;
  return `${base}${path.replace(/^\/+/, "")}`;
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
