// React + Web3 Essentials
import { Web3OnboardProvider } from '@web3-onboard/react';
import ReactDOM from 'react-dom/client';

// External Packages
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Internal Components
import App from './App';
import ErrorContextProvider from './contexts/ErrorContext';
import { VideoCallContextProvider } from './contexts/VideoCallContext';
import './index.css';
import store from './redux/store';
import { register as registerServiceWorker } from './serviceWorker';
import GlobalContextProvider from './contexts/GlobalContext';

// Internal Configs
import { config as dotEnvConfig } from 'dotenv';
import { web3Onboard } from './connectors/web3Onboard';
import AppContextProvider from './contexts/AppContext';
import { getPreviewBasePath } from '../basePath';

// enable environmental variables across the entire application
dotEnvConfig();

const publicURL = import.meta.env.PUBLIC_URL;

const previewBasePath = getPreviewBasePath();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={previewBasePath || publicURL}>
    <Provider store={store}>
      <GlobalContextProvider>
        <Web3OnboardProvider web3Onboard={web3Onboard}>
          <ErrorContextProvider>
            <AppContextProvider>
              <VideoCallContextProvider>
                <App />
              </VideoCallContextProvider>
            </AppContextProvider>
          </ErrorContextProvider>
        </Web3OnboardProvider>
      </GlobalContextProvider>
    </Provider>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// Register the service worker
registerServiceWorker({
  onUpdate: (registration) => {
    alert('New content is available; please refresh.');
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  },
  onSuccess: (registration) => {
    console.log('Service worker registered successfully:', registration);
  },
});
