import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

const AdvancedComponents = (): JSX.Element => {
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default AdvancedComponents;
