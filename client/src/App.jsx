import React from 'react';
import router from './routes/index';
import { RouterProvider } from 'react-router-dom';
function App() {
  return  (
    <div className='App'>
         <RouterProvider router={router} />
        </div>
        );
      }

      export default App;