import React, { useState } from "react";
import { Box, Dialog, Paper, Slider } from "@mui/material";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import { SwitchBase } from "../form/Switch";
import Icons from "../../assets/icons";
import useTheme from "../../hooks/useTheme";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
const { RatingIcon, ServiceIcon, PriceIcon, UpIcon, DownIcon, CrossIcon, CheckIcon } = Icons;
const SM_Filters = ({ open, onClose = () => {} }) => {
 const { dark } = useTheme();
 const [price, setPrice] = useState({ view: false, value: [0, 10000] });
 const [service, setService] = useState({ view: false, value: "All" });
 const [rating, setRating] = useState({ view: false, value: "Rating" });

 const PriceDropdown = () => {
  const { value } = price;
  const handleChange = (e, v) => setPrice((e) => ({ ...e, value: v }));

  return (
   <Box sx={{ minWidth: "90%", p: 2 }}>
    <Box className="slider-container">
     <Slider
      sx={{
       color: dark ? "#fff" : "#090B0C",
       marginTop: "20px",
       "& .MuiSlider-thumb": { height: 20, width: 20, border: dark ? "5px solid #fff" : "5px solid #090B0C", backgroundColor: dark ? "#090B0C" : "#FFFFFF" },
       "& .MuiSlider-rail": { backgroundColor: "#E5E8EC" },
       "& .MuiSlider-valueLabel": { display: "none" },
      }}
      min={0}
      max={10000}
      getAriaLabel={() => "Price range"}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
     />
     <Box sx={styleSheet.flex}>
      <span className="slider-label ">0$</span>
      <span className="slider-label ">10 000$</span>
     </Box>
     <Box sx={{ ...styleSheet.flex, mt: "25px", justifyContent: "flex-start" }}>
      <Input label="From" value={`${value[0]}$`} disabled style={{ width: "100px" }} />
      <Input label="To" value={`${value[1]}$`} disabled style={{ width: "100px" }} />
     </Box>
     <Box sx={{ ...styleSheet.flex, justifyContent: "flex-start", paddingRight: "30px", mt: "25px" }}>
      <Box>
       <Button title="Cancel" type="secondary" sx={{ width: "115px" }} />
      </Box>
      <Box>
       <Button title="Apply" type="primary" sx={{ width: "115px" }} />
      </Box>
     </Box>
    </Box>
   </Box>
  );
 };
 const ServiceDropdown = () => {
  const list = ["All", "UI Design", "UX Design", "Top rated"];
  const handleClick = (e) => setService((k) => ({ ...k, value: e }));

  return (
   <Box className="dropdown-list" sx={{ mt: 3 }}>
    {list.map((e) => (
     <Box onClick={() => handleClick(e)} key={e} className={service.value === e ? (dark ? "dropdown-active-item white-text" : "dropdown-active-item") : "dropdown-item"}>
      {e}
     </Box>
    ))}
   </Box>
  );
 };
 const RatingDropdown = () => {
  const list = ["Rating", "Price per hr", "Top rated"];
  const handleClick = (e) => setRating((l) => ({ ...l, value: e }));
  return (
   <Box className="dropdown-list" sx={{ mt: 3 }}>
    {list.map((e) => (
     <Box onClick={() => handleClick(e)} key={e} className={rating.value === e ? (dark ? "dropdown-active-item white-text" : "dropdown-active-item") : "dropdown-item"}>
      {e}
     </Box>
    ))}
   </Box>
  );
 };
 const handleClose = (setter) => setter((e) => ({ ...e, view: !e.view }));

 return (
  <Dialog
   onClose={onClose}
   open={open}
   sx={{ zIndex: "999999" }}
   fullScreen
   PaperProps={{
    style: { backgroundColor: dark ? "#090b0c" : "#fff" },
   }}
  >
   <Box sx={{ px: "16px", pt: 5 }}>
    <div className="sm-filters-title">
     <h1 className={dark ? "white-text" : ""}>Filters</h1>
     {dark ? <CloseIcon sx={{ color: "#fff" }} /> : <img src={CrossIcon} onClick={onClose} />}
    </div>
    <CustomButton children={<PriceDropdown />} dark={dark} label="Price per hr : " value={"All"} icon={PriceIcon} open={price.view} setOpen={() => handleClose(setPrice)} />
    <br />
    <CustomButton children={<ServiceDropdown />} dark={dark} label="Services : " value={service.value} icon={ServiceIcon} open={service.view} setOpen={() => handleClose(setService)} />
    <br />
    <CustomButton children={<RatingDropdown />} dark={dark} label="Sort by : " value={rating.value} icon={RatingIcon} open={rating.view} setOpen={() => handleClose(setRating)} />
    <br />
    <ToggleButton label="Available to work" dark={dark} />
    <br />
    <ToggleButton label="Pro tallent" dark={dark} />
   </Box>
   <Paper
    sx={{
     zIndex: 99999,
     height: "87px",
     width: "100%",
     position: "fixed",
     bottom: 0,
     left: 0,
     right: 0,
     border: "none",
     background: dark ? "#090b0c" : "#fff",
     boxShadow: "none",
     px: "16px",
     pt: 5,
    }}
    elevation={3}
   >
    <Box sx={{ ...styleSheet.flex, justifyContent: "space-around", paddingRight: "30px" }}>
     <Box>
      <Button title="Reset filter" type="secondary" startIcon={<img src={CrossIcon} />} />
     </Box>
     <Box>
      <Button sx={{ background: "#FBFBFC" }} title="Apply filter" type="secondary" startIcon={<img src={CheckIcon} />} />
     </Box>
    </Box>
   </Paper>
  </Dialog>
 );
};

export default SM_Filters;

const ToggleButton = ({ label, dark, ...rest }) => {
 return (
  <Box sx={{ ...styleSheet.button, ...styleSheet.flex }}>
   <span className={dark ? "switch-label switch-label-dark" : "switch-label"}>{label}</span>
   <SwitchBase {...rest} />
  </Box>
 );
};
const valuetext = (value) => `${value}$`;
const styleSheet = {
 flex: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 5 },
 button: { px: "20px", py: "2px", pr: "0px", border: " 1px solid #ececf0", borderRadius: "10px" },
 filterButton: { px: "12px", py: "9px", border: " 1px solid #ececf0", borderRadius: "10px", cursor: "pointer" },
 label: { fontStyle: "normal", fontWeight: 600, fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.01em", color: "#878F9A" },
 dropdownContainer: {
  background: "#FFFFFF",
  padding: "12px",
  minWidth: "183px",
  minHeight: "130px",
  position: "absolute",
  zIndex: 9999,
  boxShadow: "0px 32px 72px -8px rgba(91, 95, 99, 0.08)",
  borderRadius: "12px",
 },
};

const CustomButton = ({ icon, label, value, open, setOpen, dark, children }) => {
 return (
  <Box sx={{ ...styleSheet.filterButton }}>
   <Box sx={{ ...styleSheet.flex }} onClick={setOpen}>
    <div style={{ ...styleSheet.flex }}>
     <img src={icon} />
     <span style={styleSheet.label}>
      {label} <span className={dark ? "switch-label switch-label-dark" : "switch-label"}>{value}</span>
     </span>
    </div>
    <div>{<img src={open ? UpIcon : DownIcon} />}</div>
   </Box>
   {open && children}
  </Box>
 );
};
