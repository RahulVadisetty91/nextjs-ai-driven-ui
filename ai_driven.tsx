import { Metadata } from 'next';
import Providers from './Providers';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import 'react-basics/dist/styles.css';
import 'styles/locale.css';
import 'styles/index.css';
import 'styles/variables.css';

export default function ({ children }) {
  return (
    <html lang="en" data-scroll="0">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#2f2f2f" media="(prefers-color-scheme: dark)" />
        <meta name="robots" content="noindex,nofollow" />
        {/* AI-Based Dynamic Theme and Localization */}
        <meta name="theme-color" content={getDynamicThemeColor()} />
        <meta name="description" content={getLocalizedDescription()} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | Umami',
    default: 'Umami',
  },
};

// AI Functions for Dynamic Theme and Localization
function getDynamicThemeColor() {
  // Example function that determines theme color based on AI recommendations
  // In a real-world scenario, this could involve AI-driven user preferences or context
  const userPreferredColor = fetchUserPreferredColorFromAI();
  return userPreferredColor || '#fafafa';
}

function getLocalizedDescription() {
  // Example function that provides a localized description based on AI recommendations
  // In a real-world scenario, this might involve AI-driven localization based on user preferences
  const userLocale = fetchUserLocaleFromAI();
  return getDescriptionForLocale(userLocale);
}

// Placeholder functions for fetching user preferences
function fetchUserPreferredColorFromAI() {
  // Fetch or calculate the preferred color using AI models or user data
  // This is a placeholder and should be replaced with actual AI integration
  return '#f0f0f0'; // Example color
}

function fetchUserLocaleFromAI() {
  // Fetch or calculate the user locale using AI models or user data
  // This is a placeholder and should be replaced with actual AI integration
  return 'en'; // Example locale
}

function getDescriptionForLocale(locale: string) {
  // Return a description based on the locale
  const descriptions: Record<string, string> = {
    en: 'Welcome to Umami - Your platform for insights.',
    es: 'Bienvenido a Umami - Su plataforma para obtener información.',
    // Add more locales as needed
  };
  return descriptions[locale] || descriptions['en'];
}
