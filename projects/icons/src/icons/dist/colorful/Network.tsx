import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgNetwork = (
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
        id="network_svg__d"
        width="295%"
        height="400%"
        x="-97.5%"
        y="-150%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation={9} />
      </filter>
      <filter
        id="network_svg__g"
        width="245%"
        height="390%"
        x="-72.5%"
        y="-105%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.25}
          result="shadowSpreadOuter1"
        />
        <feOffset dy={2} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={2}
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
        />
      </filter>
      <filter
        id="network_svg__i"
        width="275%"
        height="380%"
        x="-87.5%"
        y="-100%"
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
        id="network_svg__k"
        width="275%"
        height="380%"
        x="-87.5%"
        y="-100%"
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
        id="network_svg__m"
        width="275%"
        height="380%"
        x="-87.5%"
        y="-100%"
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
        id="network_svg__o"
        width="275%"
        height="380%"
        x="-87.5%"
        y="-100%"
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
      <path id="network_svg__f" d="M4.5 8.5h10v5h-10z" />
      <path id="network_svg__h" d="M0 0h8v5H0z" />
      <path id="network_svg__j" d="M12 0h8v5h-8z" />
      <path id="network_svg__l" d="M0 17h8v5H0z" />
      <path id="network_svg__n" d="M12 17h8v5h-8z" />
      <linearGradient
        id="network_svg__a"
        x1="9.438%"
        x2="81.731%"
        y1="91.259%"
        y2="12.247%"
      >
        <stop offset="0%" stopColor="#727CDD" />
        <stop offset="100%" stopColor="#EBE6FF" />
      </linearGradient>
      <linearGradient
        id="network_svg__b"
        x1="93.823%"
        x2="9.004%"
        y1="9.334%"
        y2="88.281%"
      >
        <stop offset="0%" stopColor="#D2D8FF" />
        <stop offset="100%" stopColor="#6370EA" />
      </linearGradient>
      <rect
        id="network_svg__c"
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
          fill="url(#network_svg__a)"
          stroke="url(#network_svg__b)"
          strokeWidth={0.5}
          opacity={0.625}
          rx={4}
          transform="rotate(16 19.24 17.868)"
        />
        <mask id="network_svg__e" fill="#fff">
          <use xlinkHref="#network_svg__c" />
        </mask>
        <rect
          width={31.5}
          height={27.5}
          x={3.489}
          y={4.118}
          stroke="url(#network_svg__b)"
          strokeWidth={0.5}
          rx={4}
        />
        <rect
          width={27.692}
          height={18}
          x={5.393}
          y={8.868}
          fill="#ACAEFF"
          filter="url(#network_svg__d)"
          mask="url(#network_svg__e)"
          rx={4}
        />
        <g mask="url(#network_svg__e)">
          <g transform="translate(9.24 6.868)">
            <use
              xlinkHref="#network_svg__f"
              fill="#000"
              filter="url(#network_svg__g)"
            />
            <use
              xlinkHref="#network_svg__f"
              fill="#52BCBA"
              stroke="#FFF"
              strokeWidth={0.5}
            />
          </g>
          <g transform="translate(9.24 6.868)">
            <use
              xlinkHref="#network_svg__h"
              fill="#000"
              filter="url(#network_svg__i)"
            />
            <use xlinkHref="#network_svg__h" fill="#FFF" />
          </g>
          <g transform="translate(9.24 6.868)">
            <use
              xlinkHref="#network_svg__j"
              fill="#000"
              filter="url(#network_svg__k)"
            />
            <use xlinkHref="#network_svg__j" fill="#FFF" />
          </g>
          <path
            stroke="#FFF"
            strokeLinecap="square"
            strokeWidth={0.5}
            d="M18.717 13.467v1.9"
          />
          <path
            stroke="#FFF"
            strokeWidth={0.5}
            d="M25.24 11.868v1.523h-12v-1.523m12 13v-2h-12v2"
          />
          <path
            stroke="#FFF"
            strokeLinecap="square"
            strokeWidth={0.5}
            d="M18.717 21.01v1.858"
          />
          <g transform="translate(9.24 6.868)">
            <use
              xlinkHref="#network_svg__l"
              fill="#000"
              filter="url(#network_svg__m)"
            />
            <use xlinkHref="#network_svg__l" fill="#FFF" />
          </g>
          <g transform="translate(9.24 6.868)">
            <use
              xlinkHref="#network_svg__n"
              fill="#000"
              filter="url(#network_svg__o)"
            />
            <use xlinkHref="#network_svg__n" fill="#FFF" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgNetwork);
export default ForwardRef;
