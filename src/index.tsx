import { h, render } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import 'preact/devtools';
import App from './App.js';
import './index.sass';

// Internationalisation packages
import { I18nextProvider, initReactI18next } from 'preact-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import i18next from 'i18next'
const Backend = new HttpApi(null, {
  addPath: 'build/locales/{{lng}}/{{ns}}',
  allowMultiLoading: false,
  loadPath: 'locales/{{lng}}/{{ns}}.json'
})

i18next
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: true
    },
    react: {
      defaultTransParent: 'div', // needed for preact
      wait: true,
    },
    detection: {
      order: ['navigator', 'localStorage', 'querystring', 'cookie', 'sessionStorage', 'htmlTag', 'path', 'subdomain'],
    }
  })

const root = document.getElementById('root')

if (root) {
  render(
    <I18nextProvider i18n={i18next}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </I18nextProvider>, root)
}
