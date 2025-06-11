import React from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const linksArr: string[] = ["home", "diaries", "auth"];
const loggedInLinks: string[] = ["home", "diaries", "add", "profile"];

const Header = (): JSX.Element => {
  const isLoggedIn: boolean = useSelector((state: RootState) => state.isLoggedIn);

  const [value, setValue] = React.useState<number>(0);

  return (
    <React.Fragment>
      <AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
        <Toolbar>
          <ModeOfTravelIcon sx={{ color: "black" }} />

          <Tabs value={value} onChange={(_e, val) => setValue(val)} sx={{ ml: "auto", textDecoration: "none" }}>
            {isLoggedIn
              ? loggedInLinks.map(
                  (link: string): JSX.Element => (
                    <Tab
                      component={Link}
                      to={`/${link === "home" ? "" : link}`}
                      sx={{
                        textDecoration: "none",
                        ":hover": {
                          textDecoration: "underline",
                          textUnderlineOffset: "18px",
                        },
                      }}
                      key={link}
                      label={link}
                    />
                  )
                )
              : linksArr.map(
                  (link: string): JSX.Element => (
                    <Tab
                      component={Link}
                      to={`/${link === "home" ? "" : link}`}
                      sx={{
                        textDecoration: "none",
                        ":hover": {
                          textDecoration: "underline",
                          textUnderlineOffset: "18px",
                        },
                      }}
                      key={link}
                      label={link}
                    />
                  )
                )}
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
