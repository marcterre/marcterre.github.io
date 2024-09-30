"use client";
import { FunctionComponent } from "react";

type FunctionComponentProps = {
  children: React.ReactNode;
};

type HeaderProps = {};

export const GlitchText: FunctionComponent<FunctionComponentProps> = ({
  children,
}) => (
  <span className="relative inline-block">
    <span className="absolute top-0 left-0 -ml-1 text-red-500">{children}</span>
    <span className="absolute top-0 left-0 ml-1 text-blue-500">{children}</span>
    <span className="relative text-green-500">{children}</span>
  </span>
);

export const CyberButton: FunctionComponent<FunctionComponentProps> = ({
  children,
}) => (
  <button className="px-6 py-2 text-lg font-bold text-black bg-green-500 border-2 border-green-300 rounded-md hover:bg-green-600 hover:border-green-400 transition-all duration-300 shadow-lg shadow-green-500/50">
    {children}
  </button>
);

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <header className="relative z-10">
        <h1 className="text-4xl font-bold mb-2 animate-glitch">MARC TERRE</h1>
        <p className="text-xl text-pink-300">Web Developer</p>
      </header>
    </>
  );
};

export default Header;
