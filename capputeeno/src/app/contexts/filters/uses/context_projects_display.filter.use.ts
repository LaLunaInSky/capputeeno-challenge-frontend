"use client"

import { useContext } from "react";
import FilterContextProjectsDisplay from "../context_projects_display.filter";

const UseFilterContextProjectDisplay = () => {
    return useContext(
        FilterContextProjectsDisplay
    );
};

export default UseFilterContextProjectDisplay;