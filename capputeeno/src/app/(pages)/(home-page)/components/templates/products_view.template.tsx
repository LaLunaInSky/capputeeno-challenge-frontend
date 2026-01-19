"use client"

import TemplatePageBar from "./page_bar.template";
import TemplateProductsDisplay from "./products_display.template";

const TemplateProductsView = () => {
    return (
        <TemplatePageBar>
            <TemplateProductsDisplay />
        </TemplatePageBar>
    );
};

export default TemplateProductsView;