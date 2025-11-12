import { ReactTyped } from "react-typed";

const TypedJs = () => (
  <ReactTyped
    strings={[
      "FRONTEND DEVELOPER.",
      "GRAPHICS DESIGNER.",
    ]}
    typeSpeed={40}
    backSpeed={50}
    attr="placeholder"
    loop
    className="uppercase"
  >
    <input type="text" />
  </ReactTyped>
);

export default TypedJs
