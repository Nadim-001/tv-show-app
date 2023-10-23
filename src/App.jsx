import './App.css';
import * as Pages from './pages';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.Homepage />} />
          <Route path="/shows">
            <Route index element={<Pages.Showspage />} />
            <Route path=":id" element={<Pages.Showpage />} />
          </Route>
          <Route path="/search" element={<Pages.Searchpage />} />
          <Route path="*" element={<Pages.NotFoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
