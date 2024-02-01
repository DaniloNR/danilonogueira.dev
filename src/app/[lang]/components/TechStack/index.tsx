import { lazy, Suspense } from "react";
import { Spinner } from "@phosphor-icons/react/dist/ssr/index";
import type { Icon } from "@phosphor-icons/react";
import styles from "./styles.module.scss";

type TechStackProps = {
  stack: string[];
};

export default function TechStack({ stack }: TechStackProps) {
  return (
    <ul className={styles.techstack}>
      {stack.map((tech) => {
        const Component = lazy<Icon>(
          () =>
            import(
              `@/app/[lang]/components/ui/CustomIcons/${tech.toLowerCase()}`
            )
        );

        const iconConfig = {
          size: "1.25rem",
          stroke: "currentcolor",
        };

        return (
          <li key={tech}>
            <Suspense fallback={<Spinner {...iconConfig} />}>
              <Component {...iconConfig} alt={tech} />
              {tech}
            </Suspense>
          </li>
        );
      })}
    </ul>
  );
}
