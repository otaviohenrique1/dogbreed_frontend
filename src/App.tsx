import "bootstrap/dist/css/bootstrap.css";
import { RouterApp } from './pages/routes';
import GlobalContext from './context';

export function App() {
  return (
    <GlobalContext>
      <RouterApp />
    </GlobalContext>
  );
}
