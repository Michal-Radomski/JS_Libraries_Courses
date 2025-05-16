import React from "react";

export function Species({
  name,
  language,
  averageLifespan,
}: {
  name: string;
  language: string;
  averageLifespan: number;
}): JSX.Element {
  return (
    <React.Fragment>
      <li>
        {name}
        <ul>
          <li>language: {language}</li>
          <li>average lifespan: {averageLifespan}</li>
        </ul>
      </li>
    </React.Fragment>
  );
}
