import { useState } from "react";

type SvgComponentProps = {
  variant: string;
  width: string;
  height: string;
  fill: string;
  stroke?: string;
  strokeWidth?: string;
};

type PathTypes = {
  viewBox: string;
  path: string;
  transform?: string;
};

const SvgComponent = function ({
  variant,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: SvgComponentProps) {
  const [isHovered, setIsHovered] = useState(false);

  const paths: Record<string, PathTypes> = {
    lightBulb: {
      viewBox: "-4 0 19 19",
      path: "M10.328 6.83a5.903 5.903 0 0 1-1.439 3.64 2.874 2.874 0 0 0-.584 1v1.037a.95.95 0 0 1-.95.95h-3.71a.95.95 0 0 1-.95-.95V11.47a2.876 2.876 0 0 0-.584-1A5.903 5.903 0 0 1 .67 6.83a4.83 4.83 0 0 1 9.28-1.878 4.796 4.796 0 0 1 .38 1.88zm-.95 0a3.878 3.878 0 0 0-7.756 0c0 2.363 2.023 3.409 2.023 4.64v1.037h3.71V11.47c0-1.231 2.023-2.277 2.023-4.64zM7.83 14.572a.475.475 0 0 1-.475.476h-3.71a.475.475 0 0 1 0-.95h3.71a.475.475 0 0 1 .475.474zm-.64 1.262a.238.238 0 0 1-.078.265 2.669 2.669 0 0 1-3.274 0 .237.237 0 0 1 .145-.425h2.983a.238.238 0 0 1 .225.16z",
    },
    cv: {
      viewBox: "0 0 846.66 846.66",
      path: "M305.08 127c-27.16,0 -27.16,-41.29 0,-41.29l60.83 0 0 -54.93c0,-11.4 9.25,-20.64 20.65,-20.64l190.32 0c11.4,0 20.65,9.24 20.65,20.64l0 54.93 106.1 0c11.4,0 20.65,9.25 20.65,20.65l0 709.52c0,11.4 -9.25,20.64 -20.65,20.64l-560.6 0c-11.4,0 -20.65,-9.24 -20.65,-20.64l0 -709.52c0,-11.4 9.25,-20.65 20.65,-20.65l67.88 0c27.15,0 27.15,41.29 0,41.29l-47.24 0 0 668.23 519.32 0 0 -668.23c-125.97,0 -251.94,0 -377.91,0zm102.12 -41.29l149.04 0 0 -34.28 -149.04 0 0 34.28zm-191.92 480.71c-27.15,0 -27.15,-41.29 0,-41.29l188.46 0c27.16,0 27.16,41.29 0,41.29l-188.46 0zm0 156.73c-27.15,0 -27.15,-41.29 0,-41.29l188.46 0c27.16,0 27.16,41.29 0,41.29l-188.46 0zm0 -78.36c-27.15,0 -27.15,-41.29 0,-41.29l188.46 0c27.16,0 27.16,41.29 0,41.29l-188.46 0zm294.81 -101.94l121.29 0c11.4,0 20.64,9.25 20.64,20.65l0 121.28c0,11.4 -9.24,20.65 -20.64,20.65l-121.29 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -121.28c0,-11.4 9.24,-20.65 20.64,-20.65zm100.64 41.29l-79.99 0 0 80 79.99 0 0 -80zm-243.28 -252.09c13.62,0.23 24.62,-11.16 24.62,-24.62 0,-13.72 -10.9,-24.63 -24.62,-24.63 -13.69,0 -24.62,10.94 -24.62,24.63 0,13.48 10.98,24.85 24.62,24.62zm20.65 37.98l0 59.74c47.81,-9.73 82.31,-51.95 82.31,-100.88 0,-56.87 -46.09,-102.96 -102.96,-102.96 -56.86,0 -102.95,46.09 -102.95,102.96 0,48.93 34.49,91.15 82.31,100.88l0 -59.75c-26.78,-8.89 -45.28,-34.08 -45.28,-62.59 0,-36.3 29.62,-65.92 65.92,-65.92 36.29,0 65.92,29.63 65.92,65.92 0,28.49 -18.49,53.73 -45.27,62.6zm-20.65 -185.39c79.67,0 144.25,64.58 144.25,144.25 0,79.66 -64.58,144.24 -144.25,144.24 -79.66,0 -144.24,-64.58 -144.24,-144.24 0,-79.67 64.58,-144.25 144.24,-144.25z",
    },
    pocketBuilder: {
      viewBox: "0 0 16 18",
      path: "M6 18C5.71667 18 5.47917 17.9042 5.2875 17.7125C5.09583 17.5208 5 17.2833 5 17V5H0C0 3.61667 0.4875 2.4375 1.4625 1.4625C2.4375 0.4875 3.61667 0 5 0H11V3L14 0H16V8H14L11 5V17C11 17.2833 10.9042 17.5208 10.7125 17.7125C10.5208 17.9042 10.2833 18 10 18H6ZM7 16H9V10H7V16ZM7 8H9V2H5C4.56667 2 4.15833 2.0875 3.775 2.2625C3.39167 2.4375 3.05833 2.68333 2.775 3H7V8Z",
    },
    moon: {
      viewBox: "0 0 1590 1590",
      path: "M814.863 1457.34H808.239C717.387 1456.65 627.586 1437.84 544.096 1402.01C460.605 1366.18 385.102 1314.05 322.009 1248.68C205.012 1123.56 138.505 959.542 135.325 788.276C132.144 617.009 192.515 450.635 304.785 321.261C377.116 240.202 468.045 177.915 569.761 139.753C581.629 135.186 594.561 134.132 607.013 136.716C619.464 139.301 630.909 145.414 639.979 154.327C648.38 162.894 654.297 173.581 657.097 185.249C659.897 196.916 659.476 209.124 655.878 220.571C619.573 319.999 612.381 427.719 635.143 531.091C657.906 634.462 709.681 729.198 784.391 804.179C859.798 878.66 954.758 930.26 1058.28 953.003C1161.8 975.747 1269.64 968.705 1369.32 932.693C1381.19 928.516 1394 927.804 1406.25 930.639C1418.51 933.475 1429.7 939.741 1438.53 948.704C1447.35 957.668 1453.44 968.958 1456.08 981.256C1458.73 993.553 1457.82 1006.35 1453.45 1018.15C1419.61 1108.48 1366.75 1190.49 1298.44 1258.61C1234.9 1321.96 1159.47 1372.13 1076.49 1406.24C993.496 1440.34 904.586 1457.71 814.863 1457.34ZM494.243 325.899C460.967 349.236 430.512 376.357 403.489 406.716C312.373 511.126 263.278 645.653 265.726 784.208C268.174 922.762 321.99 1055.47 416.737 1156.6C467.648 1209.47 528.641 1251.6 596.112 1280.5C663.584 1309.4 736.164 1324.49 809.564 1324.86H814.863C902.715 1324.81 989.289 1303.81 1067.4 1263.6C1145.51 1223.39 1212.91 1165.13 1264 1093.67C1159.88 1107.16 1054.07 1096.6 954.666 1062.82C855.268 1029.04 764.934 972.923 690.604 898.785C616.275 824.647 559.926 734.459 525.886 635.148C491.846 535.837 481.022 430.045 494.243 325.899Z",
    },
  };

  return (
    <svg
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      viewBox={paths[variant].viewBox}
      transform={paths[variant].transform}
      width={width}
      height={height}
      fill={isHovered ? "white" : fill}
      stroke={stroke}
      stroke-width={strokeWidth}
    >
      <title>{variant}</title>
      <path d={paths[variant].path} />
    </svg>
  );
};

export default SvgComponent;