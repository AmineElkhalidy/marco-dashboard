import React, { useState } from "react";

// Lib
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// Routing
import { Link } from "react-router-dom";

// Color Picker
import { SketchPicker } from "react-color";

// MUI
import { Box, Typography, Drawer, Tabs, Tab, TextField } from "@mui/material";

// Steps
import { Steps, StepsProvider, useSteps } from "react-step-builder";

// Icons
import CloseSVG from "../../assets/svgs/close.svg";
import UploadImage from "../../assets/images/upload.png";
import SuccessSVG from "../../assets/svgs/success.svg";

// Tabs functions
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// function FullWidthTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Box
//       my={3}
//       sx={{
//         "& .MuiPaper-root": {
//           background: "#000223",
//           borderRadius: "10px",
//           paddingInline: ".65rem",
//         },
//       }}
//     >
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="Initial infos" {...a11yProps(0)} />
//           <Tab label="Contact" {...a11yProps(1)} />
//           <Tab label="Media" {...a11yProps(2)} />
//           <Tab label="Reviews" {...a11yProps(3)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
//         <TabPanel value={value} index={0}>
//           {/* <InitialInfo /> */}
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           {/* <Contact /> */}
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           {/* <Media /> */}
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//           {/* <Reviews /> */}
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// }

// Initial info tab
function InitialInfo({ next, setIsDrawerOpen, handleChange }) {
  const [open, setOpen] = useState(false);

  const [color, setColor] = useState("#000000");
  const handleColorChange = (color, event) => {
    setColor(color);
  };

  return (
    <Box width="100%">
      <Box component="form" width="100%">
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <label htmlFor="file">
            <img src={UploadImage} alt="Uploading..." />
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ visibility: "none", display: "none" }}
          />
        </Box>

        <Box my={2} width="100%">
          <TextField fullWidth label="Company Name" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Company ID" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth type="date" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Address" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Location" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="City" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Type" />
        </Box>
      </Box>

      {/* Color Picker */}
      <Box width="100%" mt={4}>
        <Box position="relative">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: "18px" }}>
              Color
            </Typography>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-[#788B9A] font-medium hover:text-textColor p-2 z-50"
            >
              + Add
            </button>
          </Box>

          {open && (
            <Box position="absolute" top={8} right={2} py={4}>
              <SketchPicker
                color={color}
                onChangeComplete={handleColorChange}
              />
            </Box>
          )}
        </Box>

        {/* First Row of Colors */}
        <Box width="100%" display="flex" justifyContent="space-between" my={2}>
          {[
            "#EF4444",
            "#F97316",
            "#FACC15",
            "#4ADE80",
            "#2DD4BF",
            "#3B82F6",
            "#6467F2",
          ].map((color, index) => (
            <button
              key={index}
              className="w-[24px] h-[24px] rounded-full"
              style={{ background: color }}
              onClick={() => setOpen((prev) => !prev)}
            />
          ))}
        </Box>
        {/* Second Row of Colors */}
        <Box width="100%" display="flex" justifyContent="space-between" my={1}>
          {[
            "#EC4899",
            "#F43F5E",
            "#D946EF",
            "#8B5CF6",
            "#0EA5E9",
            "#10B981",
            "#84CC16",
          ].map((color, index) => (
            <div
              key={index}
              className="w-[24px] h-[24px] rounded-full"
              style={{ background: color }}
            />
          ))}
        </Box>
      </Box>

      {/* Buttons Container */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="3rem"
      >
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="py-4 px-12 border border-textColor text-[18px] font-medium text-textColor rounded-[10px] "
        >
          Back
        </button>
        <button
          onClick={(event) => {
            handleChange(event, "Contact");
            next();
          }}
          className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
        >
          Save
        </button>
      </Box>
    </Box>
  );
}

// Contact Tab
function Contact({ next, prev, handleChange }) {
  return (
    <Box width="100%">
      <Box component="form" width="100%">
        <Box my={2} width="100%">
          <TextField fullWidth label="Phone Number" type="tel" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Email" type="email" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Website" />
        </Box>
      </Box>

      {/* Buttons Container */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="3rem"
      >
        <button
          onClick={(event) => {
            handleChange(event, "Initial infos");
            prev();
          }}
          className="py-4 px-12 border border-textColor text-[18px] font-medium text-textColor rounded-[10px] "
        >
          Back
        </button>
        <button
          onClick={(event) => {
            handleChange(event, "Media");
            next();
          }}
          className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
        >
          Save
        </button>
      </Box>
    </Box>
  );
}

// Media Tab
function Media({ next, prev, handleChange }) {
  return (
    <Box width="100%">
      <Box component="form" width="100%">
        <Box my={2} width="100%">
          <TextField fullWidth label="Social Media 1" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Link" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Social Media 2" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Link" />
        </Box>

        <Box width="100%" textAlign="right">
          <button className="text-[#788B9A] text-right">
            + Add another social media
          </button>
        </Box>
      </Box>

      {/* Buttons Container */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="3rem"
      >
        <button
          onClick={(event) => {
            handleChange(event, "Contact");
            prev();
          }}
          className="py-4 px-12 border border-textColor text-[18px] font-medium text-textColor rounded-[10px] "
        >
          Back
        </button>
        <button
          onClick={(event) => {
            handleChange(event, "Reviews");
            next();
          }}
          className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
        >
          Save
        </button>
      </Box>
    </Box>
  );
}

// Reviews Tab
function Reviews({ next, prev, handleChange }) {
  return (
    <Box width="100%">
      <Box component="form" width="100%">
        <Box width="100%" mb={4}>
          <Box my={2} width="100%">
            <TextField fullWidth label="Review 1" />
          </Box>
          <Box my={2} width="100%">
            <TextField fullWidth label="Total Reviews" />
          </Box>
          <Box my={2} width="100%">
            <TextField fullWidth label="Score" />
          </Box>
        </Box>

        <Box width="100%">
          <Box my={2} width="100%">
            <TextField fullWidth label="Review 2" />
          </Box>
          <Box my={2} width="100%">
            <TextField fullWidth label="Total Reviews" />
          </Box>
          <Box my={2} width="100%">
            <TextField fullWidth label="Score" />
          </Box>
        </Box>

        <Box width="100%" textAlign="right">
          <button className="text-[#788B9A] text-right">
            + Add another review
          </button>
        </Box>
      </Box>

      {/* Buttons Container */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="3rem"
      >
        <button
          onClick={(event) => {
            handleChange(event, "Media");
            prev();
          }}
          className="py-4 px-12 border border-textColor text-[18px] font-medium text-textColor rounded-[10px] "
        >
          Back
        </button>
        <button
          onClick={next}
          className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
        >
          Save
        </button>
      </Box>
    </Box>
  );
}

// Success
function Success({ setIsDrawerOpen }) {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img src={SuccessSVG} alt="Successfully registered!" />
      <Typography my={3} sx={{ fontWeight: 700, fontSize: "22px" }}>
        Your company successfully created.
      </Typography>

      <button
        onClick={() => setIsDrawerOpen(false)}
        className="bg-textColor py-[14px] px-[40px] rounded-[10px] font-medium text-white"
      >
        Go to home
      </button>
    </Box>
  );
}

// Steps builder
function StepsBuilder({ setIsDrawerOpen, handleChange }) {
  const { next, prev } = useSteps();
  return (
    <Steps>
      <InitialInfo
        next={next}
        setIsDrawerOpen={setIsDrawerOpen}
        handleChange={handleChange}
      />
      <Contact next={next} prev={prev} handleChange={handleChange} />
      <Media next={next} prev={prev} handleChange={handleChange} />
      <Reviews next={next} prev={prev} handleChange={handleChange} />
      <Success setIsDrawerOpen={setIsDrawerOpen} />
    </Steps>
  );
}

const AddCompany = ({ open, onClose, setIsDrawerOpen }) => {
  const [value, setValue] = React.useState("Initial infos");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width="500px" padding="2rem">
        {/* Drawer Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography sx={{ fontSize: "22px", fontWeight: 700 }} variant="h3">
            Add Company
          </Typography>
          <button onClick={() => setIsDrawerOpen(false)}>
            <img src={CloseSVG} alt="Close svg" />
          </button>
        </Box>

        {/* Drawer tabs */}
        <Box sx={{ width: "100%", marginTop: "1rem", marginBottom: "2rem" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="Initial infos" label="Initial infos" />
            <Tab value="Contact" label="Contact" />
            <Tab value="Media" label="Media" />
            <Tab value="Reviews" label="Reviews" />
          </Tabs>
        </Box>

        <Box width="100%">
          <StepsProvider>
            <StepsBuilder
              setIsDrawerOpen={setIsDrawerOpen}
              handleChange={handleChange}
            />
          </StepsProvider>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddCompany;
