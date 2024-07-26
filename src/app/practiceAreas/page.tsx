"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Row } from "antd";
import SocialBar from "@/components/socialBar/socialBar";

export default function Page() {
  const pathname = usePathname();
  return (
    <>
      <Row>Agregar servicios</Row>
      <SocialBar />
    </>
  );
}
