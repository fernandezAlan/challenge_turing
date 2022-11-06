import renderer from "react-test-renderer";

import Home from "./Home";

it("render Home component", () => {
  const component = renderer.create(<Home />);
  console.log("component", component);
});
