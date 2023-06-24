type NavigationProps = {
  listItems: {
    label?: string;
    route?: string;
  }[];
};

export const Navigation = (props: NavigationProps) => {
  const { listItems } = props;
  return (
    <nav>
      {listItems.map((items, index) => (
        <li key={index}>
          <a href={items.route}>{items.label}</a>
        </li>
      ))}
    </nav>
  );
};

export default Navigation;
