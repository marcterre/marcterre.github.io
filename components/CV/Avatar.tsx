import { FunctionComponent } from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: "sm" | "md";
};

const Avatar: FunctionComponent<AvatarProps> = ({ src, alt, size = "md" }) => {
  return (
    <div
      className={`relative inline-block ${
        size === "md" ? "h-28 w-28" : "h-12 w-12"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-white rounded-full" />
        <div className="relative">
          <img
            className="h-full w-full object-cover rounded-full"
            src={src}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
