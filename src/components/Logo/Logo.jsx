import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";

export default function Logo({ className = "" }) {
  return (
    <Image
      src={withBasePath("/images/moranda-logo.svg")}
      alt=""
      width={394}
      height={95}
      className={className}
    />
  );
}
