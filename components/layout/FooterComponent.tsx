type FooterComponentProps = {
  customClass?: string;
};

const FooterComponent = ({ customClass }: FooterComponentProps) => {
  return (
    <footer className={`text-softGrey40 mx-auto text-xs ${customClass}`}>
      <ul className="flex gap-5">
        <li>2023 - PRESENT</li>
        <li>© Marc Terre</li>
      </ul>
    </footer>
  );
};

export default FooterComponent;
