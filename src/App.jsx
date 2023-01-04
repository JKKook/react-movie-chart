import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppTemplate from './components/AppTemplate';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Popular from './pages/Popular';
import Soon from './pages/Soon';
import Help from './pages/Help';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <AppTemplate /> },
      { path: 'popular', element: <Popular /> },
      { path: 'soon', element: <Soon /> },
      { path: 'help', element: <Help /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
