import { forwardRef, ReactElement } from "react";
import { Icon, IconWeight } from "@phosphor-icons/react";
import { SSRBase } from "@phosphor-icons/react/dist/ssr/index";

const weights = new Map<IconWeight, ReactElement>([
  [
    "regular",
    <path
      d="M2.5 11.5L11.5 3.5L12.5 12.5L7.5 14.5L2.5 11.5ZM2.5 11.5L7.5 2.5L9.5 5.5M2.5 11.5L3.5 0.5L6.5 3.5"
      strokeLinejoin="round"
      key="firebase"
    />,
  ],
]);

const CustomIcon: Icon = forwardRef((props, ref) => (
  <SSRBase
    ref={ref}
    {...props}
    weights={weights}
    viewBox="0 0 15 15"
    fill="none"
  />
));

CustomIcon.displayName = "Firebase";

export const Firebase = CustomIcon;
