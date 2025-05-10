export const formatId = (url: string) => {
  if (url !== undefined) {
    return url
      .split("/")
      .filter((segment) => segment)
      .pop();
  } else {
    return "";
  }
};

export const formatTilte = (name: string): string => {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
};
