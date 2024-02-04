import Loader from '@/shared/ui/Loader/Loader';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense } from 'react';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
  return (
    <>
      <Suspense fallback=<Loader />>
        <Header />
        <div className='container'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </>
  );
}

export default App;
