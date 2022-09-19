import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './app/index';
import store from './store/index';
import "./styles.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
