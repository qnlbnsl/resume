import * as React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

type props = {
    title: string;
    description: string;
    image?: string;
};

const SEO = (props: props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                {props.image && <meta name="image" content={props.image} />}
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;
