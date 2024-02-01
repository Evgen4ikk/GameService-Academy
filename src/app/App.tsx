import { Header } from '@/widgets/Header';
import { Suspense } from 'react';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
  return (
    <>
      <Suspense fallback=''>
        <Header />
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;
