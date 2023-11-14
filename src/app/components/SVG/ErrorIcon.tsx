import * as React from "react"
import { SVGProps } from "react"
const ErrorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="https://ssl.gstatic.com/docs/forms/qp_sprite190.svg"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="#D93025"
      d="M11 15h2v2h-2v-2Zm0-8h2v6h-2V7Zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z"
    />
  </svg>
)
export default ErrorIcon;
