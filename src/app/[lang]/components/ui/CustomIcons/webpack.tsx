import { forwardRef, ReactElement } from "react";
import { Icon, IconWeight } from "@phosphor-icons/react";
import { SSRBase } from "@phosphor-icons/react/dist/ssr/index";

const weights = new Map<IconWeight, ReactElement>([
  [
    "regular",
    <>
      <path d="M117.29 98.1L66.24 127v-22.51L98 87l19.29 11.1zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77zM10.71 98.1l51 28.88v-22.49L29.94 87zm-3.5-3.16V34.55l18.68 10.8v38.81zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15 18.54-10.71z" />
      <path d="M61.76 99.37L30.37 82.1V47.92L61.76 66zm4.48 0l31.39-17.25v-34.2L66.24 66zM32.5 44L64 26.66 95.5 44 64 62.16 32.5 44z" />
    </>,
  ],
]);

const CustomIcon: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} viewBox="0 0 128 128" />
));

CustomIcon.displayName = "Webpack";

export default CustomIcon;
