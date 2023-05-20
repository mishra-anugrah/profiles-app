import "./App.scss";
import { HomeList } from "./screens/HomeList";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomeList />
      </div>
    </ThemeProvider>
  );
}

export default App;
