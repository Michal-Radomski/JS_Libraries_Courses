import React from "react";

export function Person({ name, hairColor, eyeColor }: { name: string; hairColor: string; eyeColor: string }): JSX.Element {
  return (
    <React.Fragment>
      <li>
        {name}
        <ul>
          <li>hair: {hairColor}</li>
          <li>eyes: {eyeColor}</li>
        </ul>
      </li>
    </React.Fragment>
  );
}
