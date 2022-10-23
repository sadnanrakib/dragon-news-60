import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routs/Routes/Routes';

function App() {
  return (
    <div>
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
