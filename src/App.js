import * as React from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Header from "./ui/component/Header";
import Hero from "./ui/component/Hero";
import { useLayoutEffect } from "react";
import CE from "./ui/component/CE";
import Trade from "./ui/component/Trade";
import Service from "./ui/component/Service";
import Subscriptions from "./ui/component/Subscriptions";
import Contact from "./ui/component/Contact";
import Footer from "./ui/component/Footer";
import Index from "./ui/pages/index";
import Home from "./new-ui";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: { fontFamily: "Poppins" },
        palette: {
          mode,
          primary: {
            // main: "#32E7B1",
            main: "#052FC2",
            dark: "#0D0D0D",
          },
          secondary: {
            main: "#1B1B1B",
            light: "#F9F8F7",
          },
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <Box className="main" sx={{ bgcolor: mode == "dark" ? "#000" : "#fff" }}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header ToggleBtn={<ToggleBtn />} />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="old" element={<Index />} />
                  <Route path="ce" element={<CE />} />
                  <Route path="trade" element={<Trade />} />
                  <Route path="service" element={<Service />} />
                  <Route path="subscriptions" element={<Subscriptions />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
              </Routes>
            </Wrapper>
          </BrowserRouter>
        </ThemeProvider>
      </Box>
    </ColorModeContext.Provider>
  );
}

export default App;

export function ToggleBtn() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <IconButton onClick={colorMode.toggleColorMode} sx={{ ml: 2 }}>
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon sx={{ fontSize: "40px", color: "#fff" }} />
      ) : (
        <Brightness4Icon sx={{ fontSize: "40px", color: "#000" }} />
      )}
    </IconButton>
  );
}
