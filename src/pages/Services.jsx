import React from "react";
import Iphone from "../assets/images/Iphone.jpg";
import Ipad from "../assets/images/Ipad.jpg";
import iMac from "../assets/images/iMac.jpg";
import AppleWatch from "../assets/images/AppleWatch.jpg";
import MacMini from "../assets/images/Mac-Mini.jpg";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
export default function Services() {
    const items = [
        {
          img: Iphone,
          title: "iPhone Device",
          description: "Get your iPhone repaired with expert precision, making it as good as new.",
        },
        {
          img: MacMini,
          title: "Mac Mini",
          description: "Ensure seamless performance with fast and reliable Mac Mini repairs.",
        },
        {
          img: Ipad,
          title: "iPad",
          description: "We provide quick and dependable iPad repair services for all models.",
        },
        {
          img: iMac,
          title: "iMac",
          description: "Enhance the life of your iMac with professional diagnostics and repairs.",
        },
        {
          img: AppleWatch,
          title: "Apple Watch",
          description: "Get your Apple Watch back in action with our specialized repair services.",
        },
      ];
      
  return (
    <>
     
      <Grid container direction="row" sx={{mt:5,py:5}} justifyContent="center" className="bg-[#f6f6f6]" spacing={2}>
        <Grid item>
          <Grid container direction="column" >
            <Grid
              item
              sx={{ width: "300px", height: "250px" }}
              className="flex justify-center"
            >
              <CardContent sx={{p:0}} className="">
                <Typography
                  variant="h5"
                  sx={{ fontSize: "20px", color: "#94e000" }}
                  component="div"
                  className="font-bold"
                >
                  How We Can Help
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="mt-2"
                  sx={{ fontSize: "50px", fontWeight: "bold" }}
                >
                  We Make Repair Stress Free
                </Typography>
              </CardContent>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 350, borderRadius: 4 }}>
                <CardMedia
                  component="img"
                  sx={{ maxHeight: 250 }}
                  image={items[0].img}
                />
                <CardContent sx={{pb: '0 !important',px:0 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="font-bold"
                    sx={{fontWeight: 'bold',px:"16px"}}
                  >
                    {items[0].title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="mt-2"
                    sx={{px:"16px"}}
                  >
                    {items[0].description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{background: "#94e000"}}
                    className="mt-4 w-full"

                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Second row with 2 columns */}

        <Grid item sx={{ mt:{md: 10}}}>
          <Grid
            container
            direction="column"
            spacing={1}
            justifyContent="center"
           
          >
            {[items[1], items[2]].map((item, i) => (
              <Grid item key={i} xs={6}>
                <Card sx={{ maxWidth: 350, borderRadius: 4,mt:i=== 1 ? 1 : 0  }}>
                  <CardMedia
                    component="img"
                    sx={{ maxHeight: 250 }}
                    image={item.img}
                  />
                  <CardContent sx={{pb: '0 !important',px:0 }}>
                    <Typography
                      variant="h5"
                      component="div"
                      className="font-bold"
                      sx={{fontWeight: 'bold',px:"16px"}}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className="mt-2"
                      sx={{px:"16px"}}
                    >
                      {item.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{background: "#94e000"}}
                      className="mt-4 w-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Third row with 2 columns */}
        <Grid item>
          <Grid
            container
            direction="column"
            spacing={1}
            justifyContent="center"
          >
            {[items[3], items[4]].map((item, i) => (
              <Grid item key={i} xs={6}>
                <Card sx={{ maxWidth: 350, borderRadius: 4,  mt: i=== 1 ? 1 : 0 }}>
                  <CardMedia
                    component="img"
                    sx={{ maxHeight: 250 }}
                    image={item.img}
                  />
                  <CardContent sx={{pb: '0 !important',px:0 }}>
                    <Typography
                      variant="h5"
                      component="div"
                      className="font-bold"
                      sx={{fontWeight: 'bold',px:"16px"}}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className="mt-2"
                      sx={{px:"16px"}}
                    >
                      {item.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{background: "#94e000"}}
                      className="mt-4 w-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
