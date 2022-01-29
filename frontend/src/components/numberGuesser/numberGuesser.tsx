import React from "react";

interface NumberGuesserProps {
    aProp: string
}

export const NumberGuesser: React.FC<NumberGuesserProps> = ({ aProp }) => (
    <div>Number guesser {aProp}</div>
)