import { ReactElement } from "react";
import "./Navigation.styles.scss";

type NavigationProps = {
  navigationItems: {
    label?: string | ReactElement;
    route: string;
    icon?: ReactElement;
  }[];
};

export const Navigation = (props: NavigationProps) => {
  const { navigationItems } = props;
  return (
    <ul className="navigation">
      {navigationItems.map((items, index) => {
        const { route, icon } = items;
        return (
          <li className="navigation-list-item" key={index}>
            <div className="navigation-list-item-icon">{icon}</div>
            <a
              href={route}
              className="navigation-list-item-link"
              target="_blank"
              rel="noreferrer"
            >
              {items.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
