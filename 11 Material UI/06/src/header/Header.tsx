import React from "react";
import { AppBar, Button, Link, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import { Box } from "@mui/system";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";

import { CustomizedTypography } from "../styled/style";
import DrawerComp from "./DrawlerComp";

const links: string[] = ["Products", "Solutions", "Pricing", "Enterprise"];

const Header = (): JSX.Element => {
  const isMatch: boolean = useMediaQuery(useTheme().breakpoints.down("md"));
  // console.log({ isMatch });

  const [value, setValue] = React.useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ bgcolor: "transparent", boxShadow: "0", position: "sticky" }}>
        {isMatch ? (
          <Box display="flex">
            <ApiIcon sx={{ color: "black", padding: 1 }} />
            <Typography sx={{ fontFamily: "Roboto", padding: 0.5, color: "black" }} variant="h6">
              CodeEnv
            </Typography>
            <DrawerComp links={links} />
          </Box>
        ) : (
          <React.Fragment>
            <Toolbar>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <ApiIcon sx={{ color: "black" }} />
                <Box>
                  <Tabs component={Link} sx={{ textDecoration: "none" }} value={value} onChange={handleChange}>
                    {links.map((link: string, index: number) => (
                      <Tab
                        sx={{
                          fontWeight: "bold",
                          textDecoration: "none",
                          ":hover": {
                            textDecoration: "underline",
                            textUnderlineOffset: "5px",
                          },
                        }}
                        key={index}
                        label={link}
                      />
                    ))}
                  </Tabs>
                </Box>
                <Box display="flex" marginLeft={"auto"}>
                  <Button sx={{ mr: 2 }} variant="outlined">
                    Talk To Us
                  </Button>
                  <Button sx={{ ml: 2 }} variant="contained">
                    Try For Free
                  </Button>
                </Box>
              </Box>
            </Toolbar>
          </React.Fragment>
        )}

        <Box width="100%" height="100vh">
          <video width={"100%"} height="65%" autoPlay loop muted playsInline>
            <source src="/video.mp4" type="video/mp4" />
            <p>Your browser doesn't support HTML video.</p>
          </video>
          <Box display="flex" width="100%">
            <CustomizedTypography
              fontSize={{ lg: 30, md: 24, sm: 18, xs: 15 }} //* Responsive Font Sizes
              margin="auto"
              variant="h4"
              color="black"
              textAlign={"center"}
            >
              Build Your Softwares Hassle Free And With Top Notch Quality
            </CustomizedTypography>
          </Box>
          <Box width="100%" display="flex" justifyContent={"center"} margin="auto" marginTop={5}>
            <Button endIcon={<EmailIcon />} variant="outlined" sx={{ mr: 3 }}>
              Signup
            </Button>
            <Button color="error" endIcon={<GoogleIcon />} sx={{ ml: 3 }} variant="contained">
              Signup
            </Button>
          </Box>
        </Box>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
