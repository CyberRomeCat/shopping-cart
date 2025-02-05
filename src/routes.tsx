import App from './App';
import ErrorPage from './components/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: ':page',
    element: <App />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
