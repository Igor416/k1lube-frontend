import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Home, About, Facility, Partners, Korea, Ester, PAO, Products, Product, Library, Contacts, Partnership } from './pages';
import App from './App';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => theme.unstable_sx({
          [theme.breakpoints.up('lg')]: {
            maxWidth: 1000
          },
        })
      }
    }
  }
});

const Index = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='company-about-twc' element={<About />} />
          <Route path='company-production-facility' element={<Facility />} />
          <Route path='company-global-partners' element={<Partners />} />
          <Route path='why-k1lube-korea-synthetic-baseoil' element={<Korea />} />
          <Route path='why-k1lube-esterbased-organic-friction-modifier' element={<Ester />} />
          <Route path='why-k1lube-pao-boosting-tech' element={<PAO />} />
          <Route path='products/:category' element={<Products />} />
          <Route path='product/:slug' element={<Product />} />
          <Route path='library' element={<Library />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='partnership' element={<Partnership />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Index />);
