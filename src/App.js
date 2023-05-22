import "./App.scss";
import { LandingPage } from "./screens/LandingPage";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./components/Profile";
import { ComingSoon } from "./components/ComingSoon";
import { Provider } from "react-redux";
import store from "./store/store";
import { NotFound } from "./components/NotFound";
import { Wrapper } from "./components/Wrapper";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="*" element={<Wrapper />}>
                <Route
                  exact
                  path="user/:userId/profile"
                  element={<Profile />}
                />
                <Route path="user/:userId/*" element={<ComingSoon />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
