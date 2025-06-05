import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { pink } from "@mui/material/colors";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FormComponent = (): JSX.Element => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            value={inputs.name}
            onChange={handleChange}
            type={"text"}
            sx={{ margin: 3 }}
            placeholder="Name"
            variant="outlined"
          />
          <TextField
            name="email"
            value={inputs.email}
            onChange={handleChange}
            type={"email"}
            sx={{ margin: 3 }}
            placeholder="Email"
            variant="standard"
          />
          <TextField
            name="password"
            value={inputs.password}
            onChange={handleChange}
            type={"password"}
            sx={{ margin: 3 }}
            placeholder="Password"
            variant="filled"
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div>
        <Box component="form" sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </div>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
      </div>

      <div>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
          </RadioGroup>
        </FormControl>
      </div>
    </React.Fragment>
  );
};

export default FormComponent;
