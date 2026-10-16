export type AnalyticsEventName = "project_open" | "cv_download" | "contact_submit";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", name, payload);
  window.clarity?.("event", name);
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: document.title,
    });
  }

  window.clarity?.("set", "route", path);
}
