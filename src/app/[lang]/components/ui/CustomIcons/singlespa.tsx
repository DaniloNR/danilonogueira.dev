import { forwardRef, ReactElement } from "react";
import { Icon, IconWeight } from "@phosphor-icons/react";
import { SSRBase } from "@phosphor-icons/react/dist/ssr/index";

const weights = new Map<IconWeight, ReactElement>([
  [
    "regular",
    <>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            fill="currentcolor"
            d="M108.54,200.33,528.42,470.42,449.27,583.84,59.39,386.22l49.15-185.89M77.4,120.12,0,412.86l465.61,236L600,456.28,77.4,120.12Z"
          />
          <polygon
            fill="currentcolor"
            points="284.84 556.34 465.6 648.85 154.69 811.21 284.84 556.34"
          />
          <polygon
            fill="currentcolor"
            points="401.06 328.85 77.4 120.12 569.09 0 401.06 328.85"
          />
        </g>
      </g>
    </>,
  ],
]);

const CustomIcon: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} viewBox="0 0 600 811.21" />
));

CustomIcon.displayName = "SingleSpa";

export default CustomIcon;
