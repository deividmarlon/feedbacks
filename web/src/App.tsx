import { Widget } from "./components/Widget";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
export function App() {
  return (
    <Router>
      <AppRoutes/>
      <Widget/>
    </Router>
  )
}
