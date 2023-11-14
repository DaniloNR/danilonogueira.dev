import { forwardRef, ReactElement } from "react";
import { Icon, IconWeight } from "@phosphor-icons/react";
import { SSRBase } from "@phosphor-icons/react/dist/ssr/index";

const weights = new Map<IconWeight, ReactElement>([
  [
    "regular",
    <path
      d="M12.5 8V7.83333C12.5 7.09695 11.903 6.5 11.1667 6.5H10C9.17157 6.5 8.5 7.17157 8.5 8C8.5 8.82843 9.17157 9.5 10 9.5H11C11.8284 9.5 12.5 10.1716 12.5 11C12.5 11.8284 11.8284 12.5 11 12.5H10C9.17157 12.5 8.5 11.8284 8.5 11M8 6.5H3M5.5 6.5V13M0.5 0.5H14.5V14.5H0.5V0.5Z"
      key="typescript"
      fill="none"
    />,
  ],
]);

const CustomIcon: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} viewBox="0 0 15 15" />
));

CustomIcon.displayName = "TypeScript";

export const TypeScript = CustomIcon;
