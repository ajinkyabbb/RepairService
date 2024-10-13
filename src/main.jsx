import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Lazy load the App component
const App = lazy(() => import('./App.jsx'));

// Create a root for the application
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the App component wrapped in StrictMode and Suspense
root.render(
  // <StrictMode>
    <Suspense fallback={<div>Loading App...</div>}>
      <App />
    </Suspense>
  // </StrictMode>
);
