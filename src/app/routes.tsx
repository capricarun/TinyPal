import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Pattern1 from "./pages/Pattern1";
import Pattern2 from "./pages/Pattern2";
import Pattern3 from "./pages/Pattern3";
import Pattern4 from "./pages/Pattern4";
import Story from "./pages/Story";
import PatternsInfo from "./pages/PatternsInfo";
import MomentEntry from "./pages/MomentEntry";
import Processing from "./pages/Processing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/story",
    Component: Story,
  },
  {
    path: "/story/patterns-info",
    Component: PatternsInfo,
  },
  {
    path: "/patterns/1",
    Component: Pattern1,
  },
  {
    path: "/patterns/2",
    Component: Pattern2,
  },
  {
    path: "/patterns/3",
    Component: Pattern3,
  },
  {
    path: "/patterns/4",
    Component: Pattern4,
  },
  {
    path: "/moment-entry",
    Component: MomentEntry,
  },
  {
    path: "/processing",
    Component: Processing,
  },
], { basename: "/TinyPal" });
