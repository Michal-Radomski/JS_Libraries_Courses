import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const ReactStrapComponent = (): JSX.Element => {
  const [counter, setCounter] = React.useState<number>(0);

  const handleClick = (): void => {
    setCounter(counter + 1);
  };

  return (
    <React.Fragment>
      <Container className="bg-light py-4 mt-4">
        <Row className="text-center">
          <Col xs="12" className="mb-1">
            The current count is: {counter}
          </Col>
          <Col xs="12">
            <Button color="primary" onClick={handleClick}>
              Click me
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ReactStrapComponent;
