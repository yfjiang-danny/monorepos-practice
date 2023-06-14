import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBoxplot = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    ref={ref}
    {...props}
  >
    <defs>
      <filter
        id="boxplot_svg__d"
        width="295%"
        height="400%"
        x="-97.5%"
        y="-150%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation={9} />
      </filter>
      <filter
        id="boxplot_svg__g"
        width="357.8%"
        height="187.4%"
        x="-128.9%"
        y="-31.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={2}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
        />
      </filter>
      <filter
        id="boxplot_svg__i"
        width="357.8%"
        height="182.4%"
        x="-128.9%"
        y="-29.4%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={2}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
        />
      </filter>
      <linearGradient
        id="boxplot_svg__a"
        x1="9.438%"
        x2="81.731%"
        y1="91.259%"
        y2="12.247%"
      >
        <stop offset="0%" stopColor="#727CDD" />
        <stop offset="100%" stopColor="#EBE6FF" />
      </linearGradient>
      <linearGradient
        id="boxplot_svg__b"
        x1="93.823%"
        x2="9.004%"
        y1="9.334%"
        y2="88.281%"
      >
        <stop offset="0%" stopColor="#D2D8FF" />
        <stop offset="100%" stopColor="#6370EA" />
      </linearGradient>
      <path
        id="boxplot_svg__f"
        d="M27.214 7.868v1.538h-1.9v1.523h1.925v8.864h-1.925v2.554h1.9v1.54H21.81v-1.54h1.963v-2.554h-1.91v-8.864h1.91V9.406H21.81V7.868h5.405Z"
      />
      <path
        id="boxplot_svg__h"
        d="M14.78 16.125h1.86v7.46h-1.86v2.647h-1.57v-2.647h-1.97v-7.46h1.97V9.868h1.572v6.257Zm-3.54-6.257h5.429v1.545h-5.43V9.868Zm0 15.454h5.429v1.546h-5.43v-1.546Z"
      />
      <rect
        id="boxplot_svg__c"
        width={32}
        height={28}
        x={3.239}
        y={3.868}
        rx={4}
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h40v40H0z" />
      <g transform="translate(.76 2.132)">
        <rect
          width={31.5}
          height={27.5}
          x={3.489}
          y={4.118}
          fill="url(#boxplot_svg__a)"
          stroke="url(#boxplot_svg__b)"
          strokeWidth={0.5}
          opacity={0.625}
          rx={4}
          transform="rotate(16 19.24 17.868)"
        />
        <mask id="boxplot_svg__e" fill="#fff">
          <use xlinkHref="#boxplot_svg__c" />
        </mask>
        <rect
          width={31.5}
          height={27.5}
          x={3.489}
          y={4.118}
          stroke="url(#boxplot_svg__b)"
          strokeWidth={0.5}
          rx={4}
        />
        <rect
          width={27.692}
          height={18}
          x={5.393}
          y={8.868}
          fill="#ACAEFF"
          filter="url(#boxplot_svg__d)"
          mask="url(#boxplot_svg__e)"
          rx={4}
        />
        <g fillRule="nonzero" mask="url(#boxplot_svg__e)">
          <use
            xlinkHref="#boxplot_svg__f"
            fill="#000"
            filter="url(#boxplot_svg__g)"
          />
          <use xlinkHref="#boxplot_svg__f" fill="#FFF" />
        </g>
        <g fillRule="nonzero" mask="url(#boxplot_svg__e)">
          <use
            xlinkHref="#boxplot_svg__h"
            fill="#000"
            filter="url(#boxplot_svg__i)"
          />
          <use xlinkHref="#boxplot_svg__h" fill="#FFF" />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBoxplot);
export default ForwardRef;
