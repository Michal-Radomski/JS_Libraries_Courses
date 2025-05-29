import React from "react";

export const getRenderCount = (): (() => React.JSX.Element) => {
  let count = 0;

  return () => {
    count++;
    return <div>Render count : {count / 2}</div>;
  };
};
