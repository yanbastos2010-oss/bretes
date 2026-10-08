export function getCheckoutUrl(baseUrl: string): string {
  try {
    const url = new URL(baseUrl);
    if (typeof window !== 'undefined' && window.location.search) {
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
    }
    return url.toString();
  } catch {
    return baseUrl;
  }
}

export function redirectToCheckout(baseUrl: string): void {
  const finalUrl = getCheckoutUrl(baseUrl);
  window.location.href = finalUrl;
}
