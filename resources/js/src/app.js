import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ThemeProvider} from "styled-components";

import theme from './theme'
import '../../css/App.css';

import BudgetOverview from './pages/budget-overview';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BudgetOverview />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App
