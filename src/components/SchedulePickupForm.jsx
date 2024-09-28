import React from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Grid,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";

const SchedulePickupForm = () => {
  const [formValues, setFormValues] = React.useState({
    date: "",
    time: "",
    device: "",
    make: "",
    model: "",
    issue1: "",
    issue2: "",
    name: "",
    surname: "",
    mobile: "",
    email: "",
    addr1: "",
    addr2: "",
    pin: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Our Techs are fully vaccinated and follow Safe work practices
      </Typography>
      <Typography align="center" color="primary">
        Click here for Calendar
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Date</InputLabel>
              <Select
                name="date"
                value={formValues.date}
                onChange={handleChange}
              >
                <MenuItem value="">Select Pickup Date</MenuItem>
                {/* Add options */}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Device</InputLabel>
              <Select
                name="device"
                value={formValues.device}
                onChange={handleChange}
              >
                <MenuItem value="">Select Device</MenuItem>
                {/* Add options */}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Model</InputLabel>
              <Select
                name="model"
                value={formValues.model}
                onChange={handleChange}
              >
                <MenuItem value="">Select Model</MenuItem>
                {/* Add options */}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Issue 2</InputLabel>
              <Select
                name="issue2"
                value={formValues.issue2}
                onChange={handleChange}
              >
                <MenuItem value="">Select Issue</MenuItem>
                {/* Add options */}
              </Select>
            </FormControl>
            <TextField
              name="name"
              label="Name"
              value={formValues.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="mobile"
              label="Mobile"
              value={formValues.mobile}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="addr2"
              label="Addr. 2"
              value={formValues.addr2}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Time</InputLabel>
              <Select
                name="time"
                value={formValues.time}
                onChange={handleChange}
              >
                <MenuItem value="">Select Pickup Time</MenuItem>
                {/* Add options */}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Make</InputLabel>
              <Select
                name="make"
                value={formValues.make}
                onChange={handleChange}
              >
                <MenuItem value="">Select Make</MenuItem>
                {/* Add options */}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Issue 1</InputLabel>
              <Select
                name="issue1"
                value={formValues.issue1}
                onChange={handleChange}
              >
                <MenuItem value="">Select Issue</MenuItem>
                {/* Add options */}
              </Select>
            </FormControl>
            <TextField
              name="email"
              label="Email"
              value={formValues.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="surname"
              label="Surname"
              value={formValues.surname}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="addr1"
              label="Addr. 1"
              value={formValues.addr1}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>PIN</InputLabel>
              <Select
                name="pin"
                value={formValues.pin}
                onChange={handleChange}
              >
                <MenuItem value="">Select PIN Code</MenuItem>
                {/* Add options */}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Buttons */}
        
      </form>
    </div>
  );
};

export default SchedulePickupForm;
