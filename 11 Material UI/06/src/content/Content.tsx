import React from "react";
import { Box } from "@mui/material";

import ContentItem from "./ContentItem";

const contentArray: { [key: string]: string }[] = [
  {
    title: "Get Things Done",
    description:
      " lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.",
    img: "/1.jpg",
  },
  {
    title: "Productivity Is Brilliant",
    description:
      " lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.",
    img: "/2.jpg",
  },
  {
    title: "Fast Development",
    description:
      " lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.",
    img: "/3.jpg",
  },
];

const Content = (): JSX.Element => {
  return (
    <React.Fragment>
      <Box bgcolor="#fbf2f2" display="flex" justifyContent={"center"} flexDirection="column" width="100%" height="10%">
        {contentArray.map(
          (cont: (typeof contentArray)[0], index: number): JSX.Element => (
            <ContentItem
              title={cont.title}
              description={cont.description}
              img={cont.img}
              key={index}
              swap={index % 2 === 0}
            />
          )
        )}
      </Box>
    </React.Fragment>
  );
};

export default Content;
