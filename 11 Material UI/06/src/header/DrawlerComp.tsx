import React from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = ({ links }: { links: string[] }): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((item: string, index: number) => (
            <ListItemButton onClick={() => setOpen(false)} key={index}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)} sx={{ ml: "auto" }}>
        <MenuIcon sx={{ color: "black" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
