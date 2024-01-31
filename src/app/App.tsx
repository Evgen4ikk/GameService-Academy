import { Suspense } from 'react';
import './App.scss';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
  return (
    <>
      <Suspense fallback=''>
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;
