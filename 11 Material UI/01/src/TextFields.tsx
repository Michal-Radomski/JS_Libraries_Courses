import React from "react";
import { Input, TextField, Typography } from "@mui/material";

const ariaLabel = { "aria-label": "description" };

const TextFields = (): JSX.Element => {
  const [name, setName] = React.useState<string>("");
  return (
    <React.Fragment>
      <div>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          type={"text"}
          sx={{ margin: 3 }}
          placeholder="Name"
          variant="outlined"
        />
        <TextField type={"email"} sx={{ margin: 3 }} placeholder="Email" variant="standard" />
        <TextField type={"password"} sx={{ margin: 3 }} placeholder="Password" variant="filled" />
        <Typography>{name}</Typography>
      </div>

      <TextField label={'margin="none"'} id="margin-none" />
      <TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
      <TextField label={'margin="normal"'} id="margin-normal" margin="normal" />

      <Input defaultValue="Hello world" inputProps={ariaLabel} />
      <Input placeholder="Placeholder" inputProps={ariaLabel} />
      <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
      <Input defaultValue="Error" error inputProps={ariaLabel} />

      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField label="Filled success" variant="filled" color="success" focused />
      <TextField label="Standard warning" variant="standard" color="warning" focused />
    </React.Fragment>
  );
};

export default TextFields;
