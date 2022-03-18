import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { LOCALES } from './i18n';
import { I18nProvider } from './i18n';

import { AppContainer } from './styledComponents/App/AppContainer';
import Layout from './components/Layout/Layout';

const App = () => {
  const theme = localStorage.getItem('theme');
  const language = localStorage.getItem('language');

  if (!theme) localStorage.setItem('theme', 'light');

  if (!language) localStorage.setItem('language', LOCALES.ENGLISH);

  const [locale, setLocale] = useState(
    localStorage.getItem('language')
      ? localStorage.getItem('language')
      : LOCALES.ENGLISH
  );

  const handleLanguageChange = (value) => {
    localStorage.setItem('language', value);
    let requiredLanguage = '';

    if (value === 'sr-lt') requiredLanguage = 'sr-RS';
    else requiredLanguage = 'en-US';

    setLocale(value);
  };

  useEffect(() => {
    console.log(locale);
  }, [locale]);

  return (
    <I18nProvider locale={locale}>
      <Layout />
    </I18nProvider>
  );
};

export default App;
