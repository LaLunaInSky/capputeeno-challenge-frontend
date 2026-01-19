import TemplateHeader from "./header.template";
import TemplateMain from "./main.template";

const TemplateLayout = ({
    children
} : React.PropsWithChildren) => {
    return (
        <div>
            <TemplateHeader />
            <TemplateMain>
                { children }
            </TemplateMain>
        </div>
    );
};

export default TemplateLayout;