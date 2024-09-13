import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://9a96ebf755a7fc6a081abcbadf64cdcf@o4507934935875584.ingest.us.sentry.io/4507934937382912",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  profilesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
