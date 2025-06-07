import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Collapse,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  ImageList,
  ImageListItem,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Rating,
  Snackbar,
  Stack,
  TextField,
  Typography,
  type SnackbarCloseReason,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";

import { itemData, top100Films } from "./data/data";

const AdvancedComponents = (): JSX.Element => {
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [openList, setOpenList] = React.useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [value, _] = React.useState<number | null>(2);

  const toggleDrawer = (newOpen: boolean) => (): void => {
    setOpenDrawer(newOpen);
  };

  const array = ["First", "Second", "Third", "Fourth", "Fifth"];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const DrawerList: JSX.Element = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <div>
        <SimpleSnackbar />
      </div>

      <div>
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/photos/aerial-view-of-london-and-the-river-thames-picture-id637710754?k=20&m=637710754&s=612x612&w=0&h=FG9cz6qFrOTMr1ale8bfZvJ3OXn_EONPYAkVmZAbz44="
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Visit To London
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
                except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </CardActions>
        </Card>
      </div>

      <div>
        <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>This is my Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              A dialog is a popup window which can ask user something like an information or confirmation
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>

      <div>
        <Link href="#" underline="none">
          {'underline="none"'}
        </Link>
        <Link href="#" underline="hover">
          {'underline="hover"'}
        </Link>
        <Link href="#" underline="always">
          {'underline="always"'}
        </Link>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Button Link
        </Link>
      </div>

      <div>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
        </Container>
      </div>
      <div>
        <Container sx={{ background: "green" }} maxWidth="xs">
          This is XS
        </Container>
        <br />
        <Container sx={{ background: "green" }} maxWidth="sm">
          This is SM
        </Container>
        <br />
        <Container sx={{ background: "green" }} maxWidth="md">
          This is MD
        </Container>
        <br />
        <Container sx={{ background: "green" }} maxWidth="lg">
          This is LG
        </Container>
        <br />
        <Container sx={{ background: "green" }} maxWidth="xl">
          This is XL
        </Container>
      </div>

      <div>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </div>

      <div>
        <Box>
          <List>
            <ListItem divider>
              <ListItemButton onClick={() => setOpenList(true)}>
                <ListItemIcon>{">"}</ListItemIcon>
                <ListItemText primary={"Expand List"} />
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={openList}>
            <List sx={{ marginLeft: 25 }}>
              {array.map((listElm, index) => (
                <ListItem divider key={index}>
                  <ListItemButton onClick={() => setOpenList(false)}>
                    <ListItemText primary={listElm} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      </div>

      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel2-content" id="panel2-header">
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>

      <div>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>

      <div>
        <Alert severity="success">This is a success Alert.</Alert>
        <Alert severity="info">This is an info Alert.</Alert>
        <Alert variant="filled" severity="warning">
          This is a filled warning Alert.
        </Alert>
        <Alert variant="filled" severity="error">
          This is a filled error Alert.
        </Alert>
        <Alert variant="outlined" severity="success">
          This is an outlined success Alert.
        </Alert>
        <Alert severity="success" color="warning">
          This is a success Alert with warning colors.
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success Alert with an encouraging title.
        </Alert>
      </div>

      <div>
        <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </Stack>
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>
      </div>

      <div>
        <Box sx={{ "& > legend": { mt: 2 } }}>
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(_event, newValue): void => {
              _(newValue);
            }}
          />
          <Typography component="legend">Uncontrolled</Typography>
          <Rating
            name="simple-uncontrolled"
            onChange={(_event, newValue): void => {
              console.log({ newValue });
            }}
            defaultValue={2}
          />
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={value} readOnly />
          <Typography component="legend">Disabled</Typography>
          <Rating name="disabled" value={value} disabled />
          <Typography component="legend">No rating given</Typography>
          <Rating name="no-value" value={null} />
        </Box>
      </div>

      <div>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </React.Fragment>
  );
};

export default AdvancedComponents;

function SimpleSnackbar(): JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(true);
  };

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason): void => {
    console.log({ reason });
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Note archived" action={action} />
    </div>
  );
}
