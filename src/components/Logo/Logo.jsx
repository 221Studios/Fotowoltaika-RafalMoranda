import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

export default function Logo({ className = "" }) {
  return (
    <Image
      src={assetPath("/images/moranda-logo.svg")}
      alt=""
      width={394}
      height={95}
      className={className}
    />
  );
}
