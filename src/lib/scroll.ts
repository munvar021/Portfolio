export const DEFAULT_SCROLL_OFFSET = 80;

export const scrollToId = (id: string, offset = DEFAULT_SCROLL_OFFSET) => {
  const element = document.getElementById(id);

  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
};

export const getHashId = (hash: string) => hash.replace(/^#/, "");
