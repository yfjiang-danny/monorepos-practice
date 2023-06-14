import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgThumbStar = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11 9.09a.909.909 0 0 0-.91-.908H7.219l.437-2.077a.684.684 0 0 0-.186-.627L6.985 5l-2.99 2.99a.907.907 0 0 0-.269.646v4.546a.91.91 0 0 0 .91.909h4.09c.378 0 .7-.227.837-.555l1.372-3.204A.898.898 0 0 0 11 10v-.91m-10 5h1.818V8.637H1v5.455ZM12.5 2.4l.824 1.517L15 4.244l-1.167 1.265.212 1.719-1.545-.736-1.545.736.212-1.72L10 4.245l1.676-.327L12.5 2.4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgThumbStar);
export default ForwardRef;
