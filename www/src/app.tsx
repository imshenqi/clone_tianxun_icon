import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Layout } from './Layout';
import { SearchPage } from './pages/Search';
import { KeywordsPage } from './pages/Keywords';
import { ListPage } from './pages/List';
import { DocsPage } from './pages/Docs';
import { IconsPage } from './pages/Icons';
import { Provider } from './store/context'

export default function App() {
  return (
    <Provider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/icons" element={<ListPage />}>
            <Route index element={<Navigate to="/icons/bi" />} />
            <Route path="/icons/:name" element={<IconsPage />} />
          </Route>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/keywords" element={<KeywordsPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}