/// <reference types="vite/client" />
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function checkIsMobileOrTablet(): boolean {
  if (typeof window === 'undefined') return true;
  const ua = navigator.userAgent || '';
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet|Silk/i.test(ua)) {
    return true;
  }
  // iPadOS on Safari (identifies as MacIntel with touch points)
  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
    return true;
  }
  // Tablets/hybrids with coarse touch pointer
  if (navigator.maxTouchPoints > 0 && window.matchMedia?.('(pointer: coarse)').matches) {
    return true;
  }
  return false;
}

function checkIsPreview(): boolean {
  if (typeof window === 'undefined') return true;
  if (import.meta.env?.DEV) return true;
  const host = window.location.hostname || '';
  if (
    host.includes('run.app') ||
    host.includes('ais-dev-') ||
    host.includes('ais-pre-') ||
    host === 'localhost' ||
    host === '127.0.0.1'
  ) {
    return true;
  }
  try {
    if (window.self !== window.top) return true;
  } catch {
    return true;
  }
  if (
    document.referrer &&
    (document.referrer.includes('aistudio.google.com') || document.referrer.includes('alkalimakersuite'))
  ) {
    return true;
  }
  return false;
}

const isAllowed = checkIsMobileOrTablet() || checkIsPreview();

createRoot(document.getElementById('root')!).render(
  isAllowed ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        color: '#000000',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '1rem',
      }}
    >
      Carregando...
    </div>
  ),
);
