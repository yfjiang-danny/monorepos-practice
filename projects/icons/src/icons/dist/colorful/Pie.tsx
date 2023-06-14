import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPie = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <linearGradient
        id="pie_svg__a"
        x1="9.438%"
        x2="81.731%"
        y1="103.889%"
        y2=".69%"
      >
        <stop offset="0%" stopColor="#727CDD" />
        <stop offset="100%" stopColor="#EBE6FF" />
      </linearGradient>
      <linearGradient
        id="pie_svg__b"
        x1="93.823%"
        x2="9.004%"
        y1="-3.115%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#D2D8FF" />
        <stop offset="100%" stopColor="#6370EA" />
      </linearGradient>
      <filter
        id="pie_svg__c"
        width="126.5%"
        height="126.5%"
        x="-13.2%"
        y="-13.2%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation={1} />
      </filter>
      <filter
        id="pie_svg__e"
        width="177.8%"
        height="177.8%"
        x="-38.9%"
        y="-27.8%"
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
      <path
        id="pie_svg__d"
        d="M8.03.67v9.3h9.3C16.996 14.453 13.249 18 8.698 18A8.68 8.68 0 0 1 0 9.302C0 4.75 3.547 1.004 8.03.67ZM9.368 0C13.986.27 17.733 4.016 18 8.632H9.368Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h40v40H0z" />
      <g transform="translate(4 3)">
        <rect
          width={10.5}
          height={10.5}
          x={19.25}
          y={0.25}
          fill="url(#pie_svg__a)"
          stroke="url(#pie_svg__b)"
          strokeWidth={0.5}
          opacity={0.625}
          rx={5.25}
        />
        <rect
          width={30.6}
          height={30.6}
          x={-0.3}
          y={2.7}
          fill="url(#pie_svg__a)"
          stroke="url(#pie_svg__b)"
          strokeWidth={0.6}
          rx={15.3}
        />
        <rect
          width={22.667}
          height={22.667}
          x={3.667}
          y={6.667}
          fill="#ACAFFA"
          filter="url(#pie_svg__c)"
          rx={11.333}
        />
        <g fillRule="nonzero" transform="translate(6 9)">
          <use xlinkHref="#pie_svg__d" fill="#000" filter="url(#pie_svg__e)" />
          <use xlinkHref="#pie_svg__d" fill="#FFF" />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPie);
export default ForwardRef;
