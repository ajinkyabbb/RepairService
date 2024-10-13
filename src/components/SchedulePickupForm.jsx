// src/components/SchedulePickupForm.js
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
  FormHelperText,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { appleProducts } from "./appleProducts"; // Ensure this path is correct

const SchedulePickupForm = ({ handleExit }) => {
  // State for form values
  const [formValues, setFormValues] = React.useState({
    date: null, // Initialize as null for DatePicker
    time: "",
    device: "",
    model: "",
    issue1: "",
    name: "",
    surname: "",
    mobile: "",
    email: "",
    addr1: "",
    addr2: "",
    pin: "",
    additionalIssue: "", // New field for additional issue description
  });

  // State for available models and issues based on selected device
  const [availableModels, setAvailableModels] = React.useState([]);
  const [availableIssues, setAvailableIssues] = React.useState([]);

  // State for form errors
  const [errors, setErrors] = React.useState({});

  // Define available time slots
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Validate the field on change
    validateField(name, value);

    // If device changes, update models and issues
    if (name === "device") {
      if (value && appleProducts[value]) {
        setAvailableModels(appleProducts[value].models);
        setAvailableIssues(appleProducts[value].issues);
      } else {
        setAvailableModels([]);
        setAvailableIssues([]);
      }
      // Reset model and issues when device changes
      setFormValues((prevValues) => ({
        ...prevValues,
        model: "",
        issue1: "",
        additionalIssue: "",
      }));
      // Clear related errors
      setErrors((prevErrors) => ({
        ...prevErrors,
        model: "",
        issue1: "",
        additionalIssue: "",
      }));
    }
  };

  // Handle date change
  const handleDateChange = (newDate) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      date: newDate,
    }));
    validateField("date", newDate);
  };

  // Validation functions
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "date":
        if (!value) {
          error = "Pickup date is required.";
        } else if (dayjs(value).isBefore(dayjs(), "day")) {
          error = "Pickup date cannot be in the past.";
        }
        break;
      case "time":
        if (!value) {
          error = "Pickup time is required.";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required.";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          error = "Invalid email address.";
        }
        break;
      case "name":
        if (!value.trim()) {
          error = "First name is required.";
        }
        break;
      case "surname":
        if (!value.trim()) {
          error = "Surname is required.";
        }
        break;
      case "device":
        if (!value) {
          error = "Device selection is required.";
        }
        break;
      case "model":
        if (!value) {
          error = "Model selection is required.";
        }
        break;
      case "issue1":
        if (!value) {
          error = "Issue selection is required.";
        }
        break;
      case "mobile":
        if (!value) {
          error = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Mobile number must be 10 digits.";
        }
        break;
      case "addr1":
        if (!value.trim()) {
          error = "Address Line 1 is required.";
        }
        break;
      case "pin":
        if (!value) {
          error = "PIN Code is required.";
        } else if (!/^\d{6}$/.test(value)) {
          error = "PIN Code must be 6 digits.";
        }
        break;
      default:
        break;
    }

    // Update the errors state
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Validate the entire form
  const validateForm = () => {
    const newErrors = {};

    // Iterate over formValues and validate each field
    Object.keys(formValues).forEach((field) => {
      validateField(field, formValues[field]);
      if (errors[field]) {
        newErrors[field] = errors[field];
      }
    });

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(
      (errorMsg) => errorMsg !== ""
    );

    return !hasErrors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      // Handle form submission logic here
      console.log("Form Values:", formValues);
      // You can add form validation and API calls here

      // Optionally, reset the form or provide user feedback
      // For example, close the modal after successful submission
      handleExit();
    } else {
      // Optionally, scroll to the first error
      const firstErrorField = Object.keys(errors).find(
        (field) => errors[field]
      );
      if (firstErrorField) {
        const element = document.getElementsByName(firstErrorField)[0];
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          element.focus();
        }
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography align="center" color="primary" variant="h6" gutterBottom>
        Schedule Your Apple Product Pickup
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Single Column Layout with Responsive Two Columns on md and above */}
          <Grid item xs={12} md={6}>
            {/* Date Picker */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.date)}
              required
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Pickup Date"
                  value={formValues.date}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  disablePast
                  required
                />
              </LocalizationProvider>
              {errors.date && (
                <FormHelperText>{errors.date}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Pickup Time Select */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.time)}
              required
            >
              <InputLabel>Pickup Time</InputLabel>
              <Select
                name="time"
                value={formValues.time}
                onChange={handleChange}
                label="Pickup Time"
              >
                <MenuItem value="">Select Pickup Time</MenuItem>
                {timeSlots.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
              {errors.time && (
                <FormHelperText>{errors.time}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Email Field */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.email)}
              required
            >
              <TextField
                name="email"
                label="Email"
                value={formValues.email}
                onChange={handleChange}
                fullWidth
                required
                type="email"
              />
              {errors.email && (
                <FormHelperText>{errors.email}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Mobile Number Field */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.mobile)}
              required
            >
              <TextField
                name="mobile"
                label="Mobile Number"
                value={formValues.mobile}
                onChange={handleChange}
                fullWidth
                required
                type="tel"
                inputProps={{ maxLength: 10 }}
                placeholder="Enter 10-digit mobile number"
              />
              {errors.mobile && (
                <FormHelperText>{errors.mobile}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* First Name Field */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.name)}
              required
            >
              <TextField
                name="name"
                label="First Name"
                value={formValues.name}
                onChange={handleChange}
                fullWidth
                required
              />
              {errors.name && (
                <FormHelperText>{errors.name}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Surname Field */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.surname)}
              required
            >
              <TextField
                name="surname"
                label="Surname"
                value={formValues.surname}
                onChange={handleChange}
                fullWidth
                required
              />
              {errors.surname && (
                <FormHelperText>{errors.surname}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Device Select */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.device)}
              required
            >
              <InputLabel>Device</InputLabel>
              <Select
                name="device"
                value={formValues.device}
                onChange={handleChange}
                label="Device"
                required
              >
                <MenuItem value="">Select Device</MenuItem>
                {Object.keys(appleProducts).map((device) => (
                  <MenuItem key={device} value={device}>
                    {device}
                  </MenuItem>
                ))}
              </Select>
              {errors.device && (
                <FormHelperText>{errors.device}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Model Select */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.model)}
              required
              disabled={!formValues.device}
            >
              <InputLabel>Model</InputLabel>
              <Select
                name="model"
                value={formValues.model}
                onChange={handleChange}
                label="Model"
                required
              >
                <MenuItem value="">Select Model</MenuItem>
                {availableModels.map((model) => (
                  <MenuItem key={model} value={model}>
                    {model}
                  </MenuItem>
                ))}
              </Select>
              {errors.model && (
                <FormHelperText>{errors.model}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Issue Select */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.issue1)}
              required
              disabled={!formValues.device}
            >
              <InputLabel>Issue</InputLabel>
              <Select
                name="issue1"
                value={formValues.issue1}
                onChange={handleChange}
                label="Issue"
                required
              >
                <MenuItem value="">Select Issue</MenuItem>
                {availableIssues.map((issue) => (
                  <MenuItem key={issue} value={issue}>
                    {issue}
                  </MenuItem>
                ))}
              </Select>
              {errors.issue1 && (
                <FormHelperText>{errors.issue1}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* PIN Code Select */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.pin)}
              required
            >
              <InputLabel>PIN Code</InputLabel>
              <Select
                name="pin"
                value={formValues.pin}
                onChange={handleChange}
                label="PIN Code"
                required
              >
                <MenuItem value="">Select PIN Code</MenuItem>
                {/* Example PIN codes; replace with actual codes as needed */}
                <MenuItem value="100001">100001</MenuItem>
                <MenuItem value="100002">100002</MenuItem>
                <MenuItem value="100003">100003</MenuItem>
                <MenuItem value="100004">100004</MenuItem>
                <MenuItem value="100005">100005</MenuItem>
                {/* Add more PIN codes as needed */}
              </Select>
              {errors.pin && <FormHelperText>{errors.pin}</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            {/* Address Line 1 */}
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.addr1)}
              required
            >
              <TextField
                name="addr1"
                label="Address Line 1"
                value={formValues.addr1}
                onChange={handleChange}
                fullWidth
                required
              />
              {errors.addr1 && (
                <FormHelperText>{errors.addr1}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            {/* Address Line 2 */}
            <FormControl fullWidth margin="normal">
              <TextField
                name="addr2"
                label="Address Line 2"
                value={formValues.addr2}
                onChange={handleChange}
                fullWidth
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            {/* Additional Issue Description */}
            <FormControl fullWidth margin="normal">
              <TextField
                name="additionalIssue"
                label="Additional Issue Description"
                value={formValues.additionalIssue}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                placeholder="Describe any additional issues or details here..."
              />
            </FormControl>
          </Grid>
        </Grid>

        {/* Buttons */}
        <Grid container justifyContent="flex-end" spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#94e000", // Primary button color
                "&:hover": {
                  backgroundColor: "#7dbd00",
                },
              }}
            >
              Confirm Pickup Date
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                textTransform: "none",
                backgroundColor: "#9b9e95", // Exit button color
                "&:hover": {
                  backgroundColor: "#7f8282",
                },
              }}
              onClick={handleExit}
            >
              Exit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SchedulePickupForm;
