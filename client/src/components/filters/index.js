import React, { useState, useEffect } from "react";
import "./styles.css";
import { Box, Slider } from "@mui/material";
import Switch from "../form/Switch";
import Icons from "../../assets/icons";
import DropdownButton from "../dropdown";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import SM_Filters from "./SmallScreenFilters";
import useTheme from "../../hooks/useTheme";
const { RatingIcon, ServiceIcon, PriceIcon, FilterIcon, ListIcon, GridIcon, DarkFilterIcon, ListWhite, GridWhite } = Icons;

const Index = (props) => {
    const { dark } = useTheme();
    const { view, setView, setData } = props;
    const [price, setPrice] = useState([0, 10000]);
    const [service, setService] = useState("");
    const [rating, setRating] = useState("Rating");
    const [viewFilters, setViewFilters] = useState(false);
    const [modelViewFilters, setModelViewFilters] = useState(false);

    const matches = useMediaQuery("(max-width:768px)");
    useEffect(() => {
        if (matches && viewFilters) setViewFilters(false);
        else if (!matches && modelViewFilters) setModelViewFilters(false);
    }, [matches]);
    
    const PriceDropdown = () => {
        const handleChange = (e, v) => setPrice(v);

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
                        max={10000}
                        getAriaLabel={() => "Price range"}
                        value={price}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                    <Box sx={styleSheet.flex}>
                        <span className="slider-label ">0$</span>
                        <span className="slider-label ">10 000$</span>
                    </Box>
                    <Box sx={{ ...styleSheet.flex, mt: "25px" }}>
                        <Input label="From" value={`${price[0]}$`} disabled />
                        <Input label="To" value={`${price[1]}$`} disabled />
                    </Box>
                    <Box sx={{ ...styleSheet.flex, mt: "25px" }}>
                        <Button title="Cancel" type="secondary" />
                        <Button title="Apply" type="primary" />
                    </Box>
                </Box>
            </Box>
        );
    };
    const ServiceDropdown = () => {
        const list = ["All", "UI Design", "UI Design", "Top rated"];
        const handleClick = (e) => setService(e);

        return (
            <Box className="dropdown-list">
                {list.map((e) => (
                    <Box onClick={() => handleClick(e)} key={e} className={rating === e ? "dropdown-active-item" : "dropdown-item"}>
                        {e}
                    </Box>
                ))}
            </Box>
        );
    };
    const RatingDropdown = () => {
        const list = ["Rating", "Price per hr", "Top rated"];
        const handleClick = (e) => setRating(e);
        return (
            <Box className="dropdown-list">
                {list.map((e) => (
                    <Box onClick={() => handleClick(e)} key={e} className={rating === e ? "dropdown-active-item" : "dropdown-item"}>
                        {e}
                    </Box>
                ))}
            </Box>
        );
    };
    const ViewToggleContainer = () => {
        const viewItems = [
            <Box className={!view ? `${dark ? "filter-toggle-active filter-toggle-active-dark" : "filter-toggle-active"}` : "filter-toggle-item"} onClick={() => setView(false)}>
                <img src={dark ? GridWhite : GridIcon} />
                Grid
            </Box>,
            <Box className={view ? `${dark ? "filter-toggle-active filter-toggle-active-dark" : "filter-toggle-active"}` : "filter-toggle-item"} onClick={() => setView(true)}>
                <img src={dark ? ListWhite : ListIcon} />
                List
            </Box>,
        ];

        return (
            <Box sx={{ display: { xs: "none", sm: "flex" } }} className={dark ? "filter-toggle-container filter-toggle-container-dark" : "filter-toggle-container"}>
                {viewItems.map((item) => (
                    <>{item}</>
                ))}
            </Box>
        );
    };

    const handleViewFilters = () => {
        if (matches) setModelViewFilters(true);
        else setViewFilters((e) => !e);
    };

    return (
        <>
            <Box sx={{ ...styleSheet.flex, mt: 2, mb: 3 }}>
                <Box sx={{ ...styleSheet.flex }}>
                    <h2 className={dark ? "talents talents-dark" : "talents"}>{props.title || "Talents"} </h2>
                    <span className={dark ? "number_of_talents number_of_talents-dark" : "number_of_talents"}>1244</span>
                </Box>
                <Box sx={{ ...styleSheet.flex, flexDirection: { xs: "column", sm: "row" } }}>
                    {!props.hideGridView && ViewToggleContainer()}
                    <Button style={{ padding: "15px" }} title={<img src={viewFilters || modelViewFilters ? FilterIcon : DarkFilterIcon} />} type={viewFilters ? "primary" : "secondary"} onClick={handleViewFilters} />
                </Box>
            </Box>
            {matches && <SM_Filters open={modelViewFilters} onClose={() => setModelViewFilters(false)} view={view} setView={setView} />}
            {viewFilters && !matches && (
                <Box sx={{ ...styleSheet.flex, mt: 2, mb: 3, flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" } }}>
                    <Box sx={{ ...styleSheet.flex, flexDirection: { xs: "column", sm: "row" } }}>
                        <FilterButton dark={dark} label="Price per hr : " icon={PriceIcon} value="All" component={<PriceDropdown />} />
                        <FilterButton dark={dark} label="Services : " icon={ServiceIcon} value="All" component={<ServiceDropdown />} />
                        <FilterButton dark={dark} label="Sort by : " icon={RatingIcon} value="Rating" component={<RatingDropdown />} />
                        <FilterButton dark={dark} label="Reset all" />
                    </Box>
                    <Box sx={{ ...styleSheet.flex, flexDirection: { xs: "column", sm: "row" } }}>
                        <ToggleButton label="Available to work" defaultChecked={true} dark={dark} />
                        <ToggleButton label="Pro tallent" dark={dark} />
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Index;

const FilterButton = ({ icon, label, value, component, dark }) => <DropdownButton dark={dark} icon={icon} label={label} value={value} children={component} />;

const ToggleButton = ({ label, dark, ...rest }) => {
    return (
        <Box sx={styleSheet.button}>
            <Switch label={label} dark={dark} {...rest} />
        </Box>
    );
};

const styleSheet = {
    flex: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 },
    button: { px: "20px", py: "2px", pr: "0px", border: " 1px solid #ececf0", borderRadius: "10px" },
    filterButton: { px: "20px", py: "10px", border: " 1px solid #ececf0", borderRadius: "10px", cursor: "pointer" },
    label: { fontStyle: "normal", fontWeight: 600, fontSize: "12px", lineHeight: "20px", letterSpacing: "-0.01em", color: "#878F9A" },
};

const valuetext = (value) => `${value}$`;
