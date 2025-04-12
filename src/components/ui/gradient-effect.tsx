"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const GradientEffect = ({
  className,
  pathClassName,
  dotClassName,
}: {
  className?: string;
  pathClassName?: string;
  dotClassName?: string;
}) => {
  return (
    <div className={cn("w-full h-full", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 460C145.5 460 191 463.265 269 444C326.5 427 339.5 418 397.5 363C439 328.5 455 326.5 490 320C509.664 316.348 521 300.736 538 301.236C553.591 301.236 562.429 311.739 584.66 319.749C592.042 322.408 600.2 323.237 607.356 320.019C624.755 312.195 641.446 293.324 657 293.735C673.408 293.735 693.545 316.572 712.903 323.769C718.727 325.934 725.184 325.395 730.902 322.965C751.726 314.115 764.085 294.106 782 293.735C794.831 293.47 804.103 305.859 822.469 315.515C835.13 322.171 850.214 323.815 862.827 317.069C875.952 310.049 889.748 299.706 903.5 300.736C922.677 302.171 935.293 307.562 945.817 312.673C954.234 316.76 963.095 319.792 972.199 321.954C996.012 327.611 1007.42 331.118 1034 346C1077.5 370.359 1082.5 391.5 1140 426C1206 467 1328.5 459.5 1440 459.5"
          className={cn("stroke-primary/20", pathClassName)}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 384.5C147 384.5 277 384.5 310 370.5C348 360 392.5 340.5 408 332C434 320.5 426 323.235 479 312.235C494 309.729 523 307.435 534.5 309.735C554.5 313.735 555.5 320.235 576 320.735C592 320.735 616 293.735 633 294.235C648.671 294.235 661.31 312.052 684.774 321.942C692.004 324.989 700.2 325.738 707.349 322.505C724.886 314.575 741.932 295.33 757.5 295.742C773.864 295.742 791.711 317.623 810.403 324.654C816.218 326.841 822.661 326.246 828.451 323.991C849.246 315.893 861.599 299.112 879.5 298.742C886.47 298.597 896.865 303.047 907.429 307.911C930.879 318.707 957.139 316.639 982.951 317.063C1020.91 317.686 1037.5 327.797 1056.5 334C1102.24 353.627 1116.5 367.704 1180.5 376.235C1257.5 386.5 1279 384 1440 385"
          className={cn("stroke-primary-foreground/30", pathClassName)}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.path
          d="M0 311C147.5 311.333 294.5 310.735 380.5 310.735C405.976 311.94 422.849 312.228 436.37 312.123C477.503 311.803 518.631 303.605 559.508 308.197C564.04 308.706 569.162 309.524 575 310.735C588 313.433 616 318.702 627.5 316.402C647.5 312.402 659 296.235 680.5 296.235C700.5 296.235 725 326.235 742 325.735C757.654 325.735 768.77 307.583 791.793 297.59C798.991 294.465 807.16 293.777 814.423 296.745C832.335 304.064 850.418 321.648 866 321.235C882.791 321.235 902.316 306.786 921.814 302.392C926.856 301.255 932.097 301.674 937.176 302.631C966.993 308.248 970.679 311.346 989.5 311.735C1006.3 312.083 1036.5 310.235 1055.5 310.235C1114.5 310.235 1090.5 310.235 1124 310.235C1177.5 310.235 1178.99 311.402 1241 311.402C1317.5 311.402 1274.5 309.568 1440 310.235"
          className={cn("stroke-secondary/40", pathClassName)}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.circle
          cx="1235"
          cy="280"
          r="5"
          className={cn("fill-primary", dotClassName)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        />
        <motion.circle
          cx="980"
          cy="320"
          r="4"
          className={cn("fill-primary/80", dotClassName)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        />
        <motion.circle
          cx="785"
          cy="295"
          r="3"
          className={cn("fill-primary/60", dotClassName)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
        />
        <motion.circle
          cx="537"
          cy="300"
          r="5"
          className={cn("fill-primary/70", dotClassName)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
        />
        <motion.circle
          cx="350"
          cy="370"
          r="4"
          className={cn("fill-primary/80", dotClassName)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
        />
      </svg>
    </div>
  );
}; 