import React from "react";
import { Carousel, Col } from "antd";
import Tribu from "../../../public/img/tribunales1.jpg";
import Logo from "../../../public/img/Logos_CuestasPatiño_Sinfondo_Mesa de trabajo 1.png";
import Study from '../../../public/img/estudio1.jpg';
import Tribu2 from '../../../public/img/tribunales4.jpg';
import Tribu3 from '../../../public/img/tribunales5.jpg';
import Study2 from '../../../public/img/estudio2.jpg';
import Image from "next/image";
import "./carouselHome.scss";

export default function CarouselHome() {
  return (
    <Carousel arrows autoplay autoplaySpeed={10000}>
      <div className="carouselHome">
        <Image
          src={Tribu}
          alt="CuestasPatiño"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="CuestasPatiño Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      <div className="carouselHome">
        <Image
          src={Study}
          alt="CuestasPatiño"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="CuestasPatiño Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      <div className="carouselHome">
        <Image
          src={Tribu2}
          alt="CuestasPatiño"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="CuestasPatiño Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      <div className="carouselHome">
        <Image
          src={Study2}
          alt="CuestasPatiño"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="CuestasPatiño Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      <div className="carouselHome">
        <Image
          src={Tribu3}
          alt="CuestasPatiño"
          style={{ objectFit: "cover", height: "87vh" }}
        />
        <div
          className="carouselHomeLogo"
        >
          <Image
            src={Logo}
            alt="CuestasPatiño Logo"
            width={200}
            height={200}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </Carousel>
  );
}
