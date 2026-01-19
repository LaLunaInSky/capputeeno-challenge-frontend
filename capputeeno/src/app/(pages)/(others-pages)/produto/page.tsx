import { Suspense } from "react";
import TemplateProduto from "./components/templates/produto.template";

const Page = () => {
    return (
        <Suspense>
            <TemplateProduto />
        </Suspense>
    );
};

export default Page;