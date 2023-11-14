import { forwardRef, ReactElement } from "react";
import { Icon, IconWeight } from "@phosphor-icons/react";
import { SSRBase } from "@phosphor-icons/react/dist/ssr/index";

const weights = new Map<IconWeight, ReactElement>([
  [
    "regular",
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z"
      key="vercel"
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

CustomIcon.displayName = "Vercel";

export const Vercel = CustomIcon;
