import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./styles/MainTheme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Box>
        <Navbar />
        <Header />
        <Landing />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
