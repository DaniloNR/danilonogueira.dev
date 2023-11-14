import { forwardRef, ReactElement } from "react";
import { Icon, IconWeight } from "@phosphor-icons/react";
import { SSRBase } from "@phosphor-icons/react/dist/ssr/index";

const weights = new Map<IconWeight, ReactElement>([
  [
    "regular",
    <path
      d="M19.1143 2H15L12 6.9L9.42857 2H0L12 23L24 2H19.1143ZM3 3.75H5.91429L12 14.6L18.0857 3.75H21L12 19.5L3 3.75Z"
      key="vue"
    />,
  ],
]);

const CustomIcon: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} viewBox="0 0 24 24" />
));

CustomIcon.displayName = "VueJs";

export default CustomIcon;
