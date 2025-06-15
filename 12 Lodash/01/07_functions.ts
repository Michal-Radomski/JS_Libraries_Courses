import _ from "lodash";

{
  //* Functions
  const vehicle = {
    drive: () => {
      console.log("test");
    },
    brake: () => {
      console.log("test");
    },
  };

  console.log(_.functions(vehicle)); // [ 'drive', 'brake' ]
}
