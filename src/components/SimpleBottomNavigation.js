import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const history = useNavigate();
    useEffect(() => {
        if (value === 0) {
            history("/");
        } else if (value === 1) {
            history("/movies");
        } else if (value === 2) {
            history("/series");
        } else if (value === 3) {
            history("/search");
        }
    }, [value, history]);

    return (
        <BottomNavigation
            showLabels
            value={value}
            sx={{ width: "100%", position: "fixed", bottom: 0, backgroundColor: "#000000", zIndex: 100 }}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction style={{ color: "white" }} label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{ color: "white" }} label="Movie" icon={<MovieIcon />} />
            <BottomNavigationAction style={{ color: "white" }} label="Tv" icon={<TvIcon />} />
            <BottomNavigationAction style={{ color: "white" }} label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}
