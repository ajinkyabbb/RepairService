import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, styled } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import ScheduleIcon from "../assets/images/schedule.jpg";
import PickupIcon from "../assets/images/Pickup.png";
import DeliveryIcon from "../assets/images/Delivery.jpg";
import { Schedule } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '90%', // Responsive width
  maxWidth: 600, // Maximum width for larger screens
  minWidth: 300, // Minimum width for smaller screens
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 56,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
        [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
  }));
  const steps = ['Step1', 'Create an ad group', 'Create an ad'];
  
  const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
    // backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 100,
    height: 100,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[700],
    }),
    variants: [
      // {
      //   props: ({ ownerState }) => ownerState.active,
      //   style: {
      //     backgroundImage:
      //       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      //     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      //   },
      // },
      // {
      //   props: ({ ownerState }) => ownerState.completed,
      //   style: {
      //     backgroundImage:
      //       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      //   },
      // },
    ],
  }));
  
  export default function ScheduleModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
  
    const icons = {
      1: <img src={ScheduleIcon} alt={"schedule"} />,
      2: <img src={PickupIcon} alt={"schedule"} />,
      3: <img src={DeliveryIcon} alt={"schedule"} />,
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          mt: 2,
          borderRadius: 5,
          background: "#94e000",
          textTransform: "none",
        }}
        href=""
      >
        Schedule Pickup
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stepper
              alternativeLabel
              activeStep={3}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
