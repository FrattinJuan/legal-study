"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, ConfigProvider, theme } from "antd";
import CarouselHome from "@/components/carouselHome/carouselHome";
import StudioHome from "@/components/studioHome/studioHome";
import PracticeAreas from "@/components/practiceAreas/practiceAreas";
import Staff from "@/components/staff/staff";
import SocialBar from "@/components/socialBar/socialBar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <link rel="icon" href="../../public/img/webico.ico" />
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: "#00b96b",
          },
          components: {
            FloatButton: {
              colorPrimary: "#00b96b",
            }
          },
          algorithm: [theme.defaultAlgorithm],
        }}
      >
        {/* <h1>Hello, HOME page</h1> */}
        <CarouselHome />
        <StudioHome />
        <PracticeAreas />
        <Staff />
        <SocialBar />


        {/* <button type="button" onClick={() => router.push("/dashboard")}>
          Go to dashboard
        </button>
        <Button type="primary">Button</Button> */}
      </ConfigProvider>
    </>
  );
}
