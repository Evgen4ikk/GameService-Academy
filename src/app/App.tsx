import Loader from '@/shared/ui/Loader/Loader';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSidebarVisible = () => {
    const isHomePage = location.pathname === '/';
    const isGamePage = location.pathname.startsWith('/game');
    const isGenrePage = location.pathname.startsWith('/genre');
    const isDeevloperPage = location.pathname.startsWith('/developers');

    if (windowWidth > 976 && isHomePage) {
      return true;
    } else if (
      (windowWidth > 1380 && isGamePage) ||
      isGenrePage ||
      isDeevloperPage
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <div className='container'>
          {isSidebarVisible() && <Sidebar />}
          <AppRouter />
        </div>
      </Suspense>
    </>
  );
}

export default App;
