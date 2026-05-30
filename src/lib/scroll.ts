export const DEFAULT_SCROLL_OFFSET = 80;
export const PENDING_HOME_SECTION_KEY = "pending-home-section";

export const getScrollOffset = () => {
  if (typeof window === "undefined") return DEFAULT_SCROLL_OFFSET;

  const navHeight = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-height");
  const parsedNavHeight = Number.parseFloat(navHeight);

  return Number.isFinite(parsedNavHeight)
    ? parsedNavHeight
    : DEFAULT_SCROLL_OFFSET;
};

export const getScrollTargetTop = (
  element: HTMLElement,
  offset = getScrollOffset(),
) => Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);

export const scrollToId = (id: string, offset?: number) => {
  const element = document.getElementById(id);

  if (!element) return;

  const top = getScrollTargetTop(element, offset);
  window.scrollTo({ top, behavior: "smooth" });
};

export const getHashId = (hash: string) => hash.replace(/^#/, "");

export const storePendingHomeSection = (id: string) => {
  if (typeof window === "undefined") return;

  window.sessionStorage.setItem(PENDING_HOME_SECTION_KEY, id);
};

export const consumePendingHomeSection = () => {
  if (typeof window === "undefined") return "";

  const id = window.sessionStorage.getItem(PENDING_HOME_SECTION_KEY) || "";
  window.sessionStorage.removeItem(PENDING_HOME_SECTION_KEY);

  return id;
};
