/** @jsxImportSource @emotion/react */
import React from "react";
import { css, type SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

// Using the css prop with an object style
const boxStyle: SerializedStyles = css({
  margin: 10,
  padding: 10,
  backgroundColor: "#eee",
  borderRadius: 5,
});

// Creating a styled button component
const StyledButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const style: SerializedStyles = css`
  color: orangered;
`;

const EmotionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <div css={style}>Color orangered</div>

      <div>
        <div css={boxStyle}>
          This is a box styled with the <code>css</code> prop using an object.
        </div>

        <div
          css={css`
            margin: 10px;
            padding: 10px;
            background-color: #eee;
            border-radius: 5px;
          `}
        >
          This is a box styled with the <code>css</code> prop using a tagged template literal.
        </div>

        <StyledButton>Click Me</StyledButton>
      </div>
    </React.Fragment>
  );
};

export default EmotionComponent;
