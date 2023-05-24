import React, { useState } from "react";
import { Box, Dialog, Paper, Slider } from "@mui/material";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import { SwitchBase } from "../form/Switch";
import Icons from "../../assets/icons";
import useTheme from "../../hooks/useTheme";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { AVALIABLE_TO_WORK_Filter, PRICE_Filter, PRO_TALLENT_Filter, RATING_Filter, RESET_Filter, SERVICE_Filter } from "../../RTK/Reducers/Reducers";
const { RatingIcon, ServiceIcon, PriceIcon, UpIcon, DownIcon, CrossIcon, CheckIcon } = Icons;
const SMFilters = ({ open, onClose = () => { } }) => {
    const { priceFilter, servicesFilter, ratingFilter, availableToWorkFilter, proTallentFilter } = useSelector(store => store.mainReducer)
    const { dark } = useTheme();
    const [price, setPrice] = useState({ view: false, value: priceFilter });
    const [service, setService] = useState({ view: false, value: "All" });
    const [rating, setRating] = useState({ view: false, value: "Rating" });
    const dispatch = useDispatch();
    const PriceDropdown = () => {
        const handleChangePrice = (e, values) => setPrice((e) => ({ ...e, value: values }));
        const handleApplyPrice = () => dispatch(PRICE_Filter(price.value));
        const handleCancelPrice = () => {
            dispatch(PRICE_Filter([0, 1000]));
            setPrice([0, 1000]);
        }
        return (
            <Box sx={{ minWidth: 392, p: 2 }}>
                <Box className="slider-container">
                    <Slider
                        sx={{
                            color: "#090B0C",
                            marginTop: "20px",
                            "& .MuiSlider-thumb": { height: 20, width: 20, border: "5px solid #090B0C", backgroundColor: "#FFFFFF" },
                            "& .MuiSlider-rail": { backgroundColor: "#E5E8EC" },
                            "& .MuiSlider-valueLabel": { display: "none" },
                        }}
                        min={0}
                        max={1000}
                        getAriaLabel={() => "Price range"}
                        value={price.value}
                        onChange={handleChangePrice}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                    <Box sx={styleSheet.flex}>
                        <span className="slider-label ">0$</span>
                        <span className="slider-label ">1 000$</span>
                    </Box>
                    <Box sx={{ ...styleSheet.flex, mt: "25px" }}>
                        <Input label="From" value={`${price.value[0]}$`} disabled />
                        <Input label="To" value={`${price.value[1]}$`} disabled />
                    </Box>
                    <Box sx={{ ...styleSheet.flex, mt: "25px" }}>
                        <Button title="Cancel" onClick={handleCancelPrice} type="secondary" />
                        <Button title="Apply" onClick={handleApplyPrice} type="primary" />
                    </Box>
                </Box>
            </Box>
        );
    };
    const ServiceDropdown = () => {
        const list = ["All", "UI Design", "UX Design"];
        const handleChangeService = (service) => dispatch(SERVICE_Filter(service))
        return (
            <Box className="dropdown-list">
                {list.map((service) => (
                    <Box onClick={() => handleChangeService(service)} key={service} className={servicesFilter === service ? "dropdown-active-item" : "dropdown-item"}>
                        {service}
                    </Box>
                ))}
            </Box>
        );
    };

    const RatingDropdown = () => {
        const list = ["Top rated", 5, 4, 3, 2, 1];
        const handleChangeRating = (service) => dispatch(RATING_Filter(service))
        return (
            <Box className="dropdown-list">
                {list.map((option) => (
                    <Box onClick={() => handleChangeRating(option)} key={option} className={ratingFilter === option ? "dropdown-active-item" : "dropdown-item"}>
                        {option}
                    </Box>
                ))}
            </Box>
        );
    };
    const handleClose = (setter) => setter((e) => ({ ...e, view: !e.view }));
    const handleAvailableToWork = event => dispatch(AVALIABLE_TO_WORK_Filter(event.target.checked))
    const handleProTallent = event => dispatch(PRO_TALLENT_Filter(event.target.checked))
    const handleResetFilters = event => {
        dispatch(RESET_Filter())
        onClose()
    }
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
                    {dark ? <CloseIcon sx={{ color: "#fff" }} /> : <img alt='' src={CrossIcon} onClick={onClose} />}
                </div>
                <CustomButton children={<PriceDropdown />} dark={dark} label="Price per hr : " value={"All"} icon={PriceIcon} open={price.view} setOpen={() => handleClose(setPrice)} />
                <br />
                <CustomButton children={<ServiceDropdown />} dark={dark} label="Services : " value={service.value} icon={ServiceIcon} open={service.view} setOpen={() => handleClose(setService)} />
                <br />
                <CustomButton children={<RatingDropdown />} dark={dark} label="Sort by : " value={rating.value} icon={RatingIcon} open={rating.view} setOpen={() => handleClose(setRating)} />
                <br />
                <ToggleButton label="Available to work" onChange={handleAvailableToWork} checked={availableToWorkFilter} dark={dark} />
                <br />
                <ToggleButton onChange={handleProTallent} checked={proTallentFilter} label="Pro tallent" dark={dark} />
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
                        <Button title="Reset filter" onClick={handleResetFilters} type="secondary" startIcon={<img alt='' src={CrossIcon} />} />
                    </Box>
                    <Box>
                        <Button sx={{ background: "#FBFBFC" }} onClick={onClose} title="Apply filter" type="secondary" startIcon={<img alt='' src={CheckIcon} />} />
                    </Box>
                </Box>
            </Paper>
        </Dialog>
    );
};

export default SMFilters;

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
                    <img alt='' src={icon} />
                    <span style={styleSheet.label}>
                        {label} <span className={dark ? "switch-label switch-label-dark" : "switch-label"}>{value}</span>
                    </span>
                </div>
                <div>{<img alt='' src={open ? UpIcon : DownIcon} />}</div>
            </Box>
            {open && children}
        </Box>
    );
};
