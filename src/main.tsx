import { render } from "preact";
import { App } from "./app";

import "./styles/normalize.css";
import "./styles/global.css";
import "./styles/customProperties.css";

render(<App />, document.getElementById("app") as HTMLElement);
