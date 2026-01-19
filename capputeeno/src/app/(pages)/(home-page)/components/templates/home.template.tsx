"use client"

import TemplateFiltersBarDisplay from "./filters_bar_display.template";
import TemplateProductsView from "./products_view.template";

const TemplateHome = () => {
    return (
        <div>
            <TemplateFiltersBarDisplay />
            <TemplateProductsView />
        </div>
    );
};

export default TemplateHome;