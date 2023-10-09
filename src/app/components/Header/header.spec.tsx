import { render } from "@testing-library/react";
import { Navigation, NavigationLinks } from "../Navigation";

const links: NavigationLinks[] = [
  {
    name: "Home",
    href: "/",
  },
];

test("Active link renders correctly", () => {
  const { debug } = render(<Navigation navLinks={links} />);

  debug();
});
