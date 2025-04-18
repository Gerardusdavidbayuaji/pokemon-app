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
