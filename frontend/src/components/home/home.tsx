import React from "react";

interface HomeProps {
    aProp: string
}

export const Home: React.FC<HomeProps> = ({ aProp }) => (
    <div>Homepage {aProp}</div>
)