import React from "react";
import {
  Typography,
  Box,
  MenuItem,
  Menu,
  AppBar,
  Button,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Drawer, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import Fade from "react-reveal/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "What is CE?",
    url: "/ce",
  },
];
const Header = ({ ToggleBtn }) => {
  const trigger = useScrollTrigger();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));
  const [open, setOpen] = React.useState(false);
  const handleDrawer = (bool) => () => {
    setOpen(bool);
  };
  const color = theme.palette.mode;
  const btnStyle = {
    fontSize: { md: "20px", xs: "15px" },
    lineHeight: "24px",
    fontWeight: "500",
    border: color == "light" ? "1px solid #000" : "1px solid #fff",
    padding: { md: "15px 40px", xs: "10px" },
    color: color == "light" ? "#000" : "#fff",
    borderRadius: "0",
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ background: color == "light" ? "#C0C0C0" : "#000" }}>
        <AppBar
          position={trigger ? "fixed" : "static"}
          sx={{
            background: color == "light" ? "#C0C0C0" : "#000",
            boxShadow: "none",
          }}
        >
          <Box sx={{ px: { md: "50px", xs: "20px" } }}>
            <Box
              sx={{
                py: { md: "15px", xs: "5px" },
                display: "flex",
                gap: { md: "20px", xs: "10px" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: { md: "150px", xs: "100px" } }}>
                {color == "light" ? (
                  <>
                    <img
                      src={require("../../new-ui/assets/newlogo.png")}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={require("../../new-ui/assets/newlogo.png")}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </>
                )}
              </Box>
              <Button
                href="https://cryptosignal.drazs.com/user/dashboard.php"
                sx={btnStyle}
              >
                LOGIN
              </Button>
              {/* <img src={require("../../new-ui/assets/logonewdark.png")} alt="" /> */}
              <Box display="flex" gap="20px" alignItems="center">
                {!isMobile && (
                  <>
                    <Typography
                      color="text.primary"
                      sx={{
                        cursor: "pointer",
                        fontSize: { md: "20px", xs: "20px" },
                        lineHeight: { md: "24px", xs: "24px" },
                        fontWeight: "500",
                      }}
                    >
                      Premium
                    </Typography>
                    <a
                      href="https://t.me/TheCryptoExpress"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        color="text.primary"
                        sx={{
                          cursor: "pointer",
                          fontSize: { md: "20px", xs: "20px" },
                          lineHeight: { md: "24px", xs: "24px" },
                          fontWeight: "500",
                        }}
                      >
                        Telegram
                      </Typography>
                    </a>
                    <Typography
                      color="text.primary"
                      sx={{
                        cursor: "pointer",
                        fontSize: { md: "20px", xs: "20px" },
                        lineHeight: { md: "24px", xs: "24px" },
                        fontWeight: "500",
                      }}
                    >
                      Why Choose Us
                    </Typography>
                    <Box
                      onClick={handleClick}
                      display="flex"
                      alignItems="center"
                      gap="10px"
                      sx={{ cursor: "pointer" }}
                    >
                      <Typography
                        color="text.primary"
                        sx={{
                          cursor: "pointer",
                          fontSize: { md: "20px", xs: "20px" },
                          lineHeight: { md: "24px", xs: "24px" },
                          fontWeight: "500",
                        }}
                      >
                        Resources
                      </Typography>
                      <KeyboardArrowDownIcon />
                    </Box>
                    <Typography
                      color="text.primary"
                      sx={{
                        cursor: "pointer",
                        fontSize: { md: "20px", xs: "20px" },
                        lineHeight: { md: "24px", xs: "24px" },
                        fontWeight: "500",
                      }}
                    >
                      Request AMA
                    </Typography>
                  </>
                )}
                {!isMobile && (
                  <>
                    {ToggleBtn}
                    {color == "light" ? (
                      <>
                        <img src={require("../assets/tw.png")} alt="imf" />
                        <a href="https://t.me/TheCryptoExpress">
                          <img src={require("../assets/tg.png")} alt="imf" />
                        </a>
                      </>
                    ) : (
                      <>
                        <img src={require("../assets/twl.png")} alt="imf" />
                        <a href="https://t.me/TheCryptoExpress">
                          <img src={require("../assets/tgl.png")} alt="imf" />
                        </a>
                      </>
                    )}
                  </>
                )}
              </Box>
              {isMobile && (
                <>
                  <IconButton aria-label="" onClick={() => setOpen(!open)}>
                    <img
                      src={require("../../new-ui/assets/menuicon.png")}
                      alt="imf"
                    />
                  </IconButton>
                </>
              )}
            </Box>
          </Box>
        </AppBar>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openmenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ width: { md: "100px", xs: "100vw" } }}
        >
          <a href="#learn" style={{ textDecoration: "none", color: "inherit" }}>
            Learn
          </a>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ width: { md: "100px", xs: "100vw" } }}
        >
          Guide
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ width: { md: "100px", xs: "100vw" } }}
        >
          Blog
        </MenuItem>
      </Menu>
      <Drawer
        anchor="bottom"
        onClose={handleDrawer(false)}
        open={isMobile && open}
        PaperProps={{
          sx: {
            background: color == "light" ? "#fff" : "#1F1F1E",
            height: "100vh",
            boxSizing: "border-box",
            padding: "20px",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box display="flex" justifyContent="space-between">
            {ToggleBtn}
            <IconButton aria-label="" onClick={handleDrawer(false)}>
              <CancelPresentationOutlinedIcon
                color="text.primary"
                sx={{ fontSize: "40px" }}
              />
            </IconButton>
          </Box>

          <Fade left>
            <Button
              href="https://cryptosignal.drazs.com/user/dashboard.php"
              sx={btnStyle}
            >
              LOGIN
            </Button>
            <br />
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "800" : "500",
                color: color == "dark" ? "#fff" : "#000",
                textDecoration: "none",
              })}
              onClick={handleDrawer(false)}
            >
              <Typography
                sx={{
                  fontSize: { md: "60px", xs: "40px" },
                  lineHeight: { md: "78px", xs: "50px" },
                  fontWeight: "600",
                }}
              >
                Premium
              </Typography>
              <br />
            </NavLink>
            <NavLink
              to="https://t.me/TheCryptoExpress"
              style={({ isActive }) => ({
                fontWeight: isActive ? "800" : "500",
                color: color == "dark" ? "#fff" : "#000",
                textDecoration: "none",
              })}
              onClick={handleDrawer(false)}
            >
              <Typography
                sx={{
                  fontSize: { md: "60px", xs: "40px" },
                  lineHeight: { md: "78px", xs: "50px" },
                  fontWeight: "600",
                }}
              >
                Telegram
              </Typography>
              <br />
            </NavLink>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "800" : "500",
                color: color == "dark" ? "#fff" : "#000",
                textDecoration: "none",
              })}
              onClick={handleDrawer(false)}
            >
              <Typography
                sx={{
                  fontSize: { md: "60px", xs: "40px" },
                  lineHeight: { md: "78px", xs: "50px" },
                  fontWeight: "600",
                }}
              >
                Why Choose Us
              </Typography>
              <br />
            </NavLink>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "800" : "500",
                color: color == "dark" ? "#fff" : "#000",
                textDecoration: "none",
              })}
              onClick={handleClick}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="10px"
                sx={{ cursor: "pointer" }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "60px", xs: "40px" },
                    lineHeight: { md: "78px", xs: "50px" },
                    fontWeight: "600",
                  }}
                >
                  Resources
                </Typography>
                <KeyboardArrowDownIcon />
              </Box>
              <br />
            </NavLink>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "800" : "500",
                color: color == "dark" ? "#fff" : "#000",
                textDecoration: "none",
              })}
              onClick={handleDrawer(false)}
            >
              <Typography
                sx={{
                  fontSize: { md: "60px", xs: "40px" },
                  lineHeight: { md: "78px", xs: "50px" },
                  fontWeight: "600",
                }}
              >
                Request AMA
              </Typography>
              <br />
            </NavLink>
          </Fade>
          {color == "light" ? (
            <Box hre>
              <img
                src={require("../assets/tw.png")}
                alt="imf"
                style={{ width: "30px" }}
              />
              <br />
              <br />{" "}
              <a href="https://t.me/TheCryptoExpress">
                <img
                  src={require("../assets/tg.png")}
                  alt="imf"
                  style={{ width: "30px" }}
                />
              </a>
            </Box>
          ) : (
            <Box>
              <img
                src={require("../assets/twl.png")}
                alt="imf"
                style={{ width: "30px" }}
              />
              <br />
              <br />{" "}
              <a href="https://t.me/TheCryptoExpress">
                <img
                  src={require("../assets/tgl.png")}
                  alt="imf"
                  style={{ width: "30px" }}
                />
              </a>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
