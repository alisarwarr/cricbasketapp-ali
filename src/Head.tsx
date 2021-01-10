import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
    title: string;
}

function Head({ title }: HeadProps) {
    const AppName = "Cric Basket";

    return (
        <Helmet
            title={`${title} | ${AppName}`}
        />
    )
}

export default Head;