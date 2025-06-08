import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Box } from "@mui/system";
import { IconButton, Toolbar } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import CameraRoundedIcon from "@mui/icons-material/CameraRounded";
import CameraTwoToneIcon from "@mui/icons-material/CameraTwoTone";
import CameraSharpIcon from "@mui/icons-material/CameraSharp";

const MaterialIcons = (): JSX.Element => {
  return (
    <React.Fragment>
      <Box>
        <Toolbar>
          <IconButton onClick={() => alert("Icon Selected")}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton>
            <ArrowCircleDownIcon color="error" />
          </IconButton>
        </Toolbar>

        <div>
          <div>
            <p>Filled</p>
            <CameraIcon />
          </div>
          <div>
            <p>Outlined</p>
            <CameraOutlinedIcon />
          </div>
          <div>
            <p>Rounded</p>
            <CameraRoundedIcon />
          </div>
          <div>
            <p>Two Tone</p>
            <CameraTwoToneIcon />
          </div>
          <div>
            <p>Sharp</p>
            <CameraSharpIcon />
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default MaterialIcons;
