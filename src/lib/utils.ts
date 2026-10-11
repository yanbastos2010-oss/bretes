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

// Trava anti-duplicação global no frontend (janela de 2 segundos)
let lastTrackedTimestamp = 0;

export function trackInitiateCheckout(): void {
  const now = Date.now();
  // Se já foi disparado nos últimos 2000ms, ignora para evitar duplicidade
  if (now - lastTrackedTimestamp <= 2000) {
    return;
  }
  lastTrackedTimestamp = now;

  try {
    if (typeof window !== 'undefined') {
      const win = window as any;
      // 1. Delega ao Cashflow: o próprio Cashflow envia para o servidor (CAPI)
      //    e para o Meta Pixel com o MESMO eventID único, permitindo que a Meta descarte duplicatas automaticamente.
      if (win.cashflow && typeof win.cashflow.track === 'function') {
        win.cashflow.track('InitiateCheckout');
      } else if (typeof win.fbq === 'function') {
        // Fallback apenas se o script do Cashflow não tiver carregado
        win.fbq('track', 'InitiateCheckout');
      }
    }
  } catch (err) {
    console.error('Erro ao registrar InitiateCheckout:', err);
  }
}

export function trackAndRedirectToCheckout(baseUrl: string): void {
  trackInitiateCheckout();
  const finalUrl = getCheckoutUrl(baseUrl);
  // Tolerância de 180ms para garantir que os beacons de tracking e CAPI sejam despachados pela rede antes do descarregamento da página
  setTimeout(() => {
    window.location.href = finalUrl;
  }, 180);
}

export function redirectToCheckout(baseUrl: string): void {
  trackAndRedirectToCheckout(baseUrl);
}
