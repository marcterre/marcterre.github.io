import { FunctionComponent } from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: "sm" | "md";
};

const Avatar: FunctionComponent<AvatarProps> = ({ src, alt, size = "md" }) => {
  return (
    <div className={`${size === "md" ? "h-28 w-28" : "h-12 w-12"}`}>
      <img
        className="h-full w-full object-cover rounded-full"
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
    </div>
  );
};

export default Avatar;
