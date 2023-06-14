import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLineBar = (
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
        id="line-bar_svg__d"
        width="295%"
        height="400%"
        x="-97.5%"
        y="-150%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation={9} />
      </filter>
      <filter
        id="line-bar_svg__g"
        width="177.8%"
        height="200%"
        x="-38.9%"
        y="-35.7%"
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
        id="line-bar_svg__i"
        width="174.2%"
        height="194.3%"
        x="-37.1%"
        y="-33.7%"
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
        id="line-bar_svg__a"
        x1="9.438%"
        x2="81.731%"
        y1="91.259%"
        y2="12.247%"
      >
        <stop offset="0%" stopColor="#727CDD" />
        <stop offset="100%" stopColor="#EBE6FF" />
      </linearGradient>
      <linearGradient
        id="line-bar_svg__b"
        x1="93.823%"
        x2="9.004%"
        y1="9.334%"
        y2="88.281%"
      >
        <stop offset="0%" stopColor="#D2D8FF" />
        <stop offset="100%" stopColor="#6370EA" />
      </linearGradient>
      <path
        id="line-bar_svg__f"
        d="M13.464 24.859h-3.6v-9.8h3.6v9.8m7.2 0h-3.6v-14h3.6v14m7.2 0h-3.6v-5.6h3.6v5.6Z"
      />
      <path
        id="line-bar_svg__h"
        d="m27.57 12.542-2.118-1.536-3.964 5.381-4.134-.907-8.65 8.6 1.978 1.768 7.435-7.515 4.298.944z"
      />
      <rect
        id="line-bar_svg__c"
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
          fill="url(#line-bar_svg__a)"
          stroke="url(#line-bar_svg__b)"
          strokeWidth={0.5}
          opacity={0.625}
          rx={4}
          transform="rotate(16 19.24 17.868)"
        />
        <mask id="line-bar_svg__e" fill="#fff">
          <use xlinkHref="#line-bar_svg__c" />
        </mask>
        <rect
          width={31.5}
          height={27.5}
          x={3.489}
          y={4.118}
          stroke="url(#line-bar_svg__b)"
          strokeWidth={0.5}
          rx={4}
        />
        <rect
          width={27.692}
          height={18}
          x={5.393}
          y={8.868}
          fill="#ACAEFF"
          filter="url(#line-bar_svg__d)"
          mask="url(#line-bar_svg__e)"
          rx={4}
        />
        <g mask="url(#line-bar_svg__e)">
          <use
            xlinkHref="#line-bar_svg__f"
            fill="#000"
            filter="url(#line-bar_svg__g)"
          />
          <use xlinkHref="#line-bar_svg__f" fill="#FFF" />
        </g>
        <g
          fillRule="nonzero"
          mask="url(#line-bar_svg__e)"
          transform="rotate(7 18.137 18.427)"
        >
          <use
            xlinkHref="#line-bar_svg__h"
            fill="#000"
            filter="url(#line-bar_svg__i)"
          />
          <use xlinkHref="#line-bar_svg__h" fill="#FFF" />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLineBar);
export default ForwardRef;
