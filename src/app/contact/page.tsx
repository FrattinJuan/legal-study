"use client";

import { usePathname } from "next/navigation";
import SocialBar from "@/components/socialBar/socialBar";
import { Col, Divider, Row, Typography } from "antd";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import "./contact.scss";
import ContactForm from "@/components/contactForm/contactForm";
export default function Page() {
  const pathname = usePathname();

  return (
    <>
      <Row className="contactRow">
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Typography.Title level={1} className="contactTitle">
            Contacto
          </Typography.Title>
        </Col>
        <Col span={14} offset={5}>
          <Typography.Title level={5} className="contactSubtitle">
            Si tienes alguna consulta o necesitas ayuda, no dudes en
            contactarnos.
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2} style={{ marginBottom: "2%" }}>
          <Divider />
        </Col>
      </Row>
      <Row className="contactRow2">
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 12,
          }}
        >
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Typography.Title className="contactTitle3" level={3}>
              Donde encontrarnos
            </Typography.Title>
          </Col>
          {/* <Col span={20} offset={2} style={{ marginBottom: "5%" }}>
            <Typography.Text className="contactText">
              Encontrará nuestro estudio en pleno zona del polo judicial de la
              Ciudad de Córdoba sobre calle Simón Bolívar Nro. 524, en una
              casona construida a principios del siglo pasado totalmente
              reacondicionada y equipada para brindar a nuestros clientes y
              facilitar a nuestros profesionales y personal las herramientas y
              material de trabajo que requiere la práctica profesional moderna.
            </Typography.Text>
          </Col> */}
          <Col span={20} offset={2}>
            {/* <iframe
              width="600"
              height="450"
              // style="border:0"
              loading="lazy"
              // allowfullscreen
              // referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=ajnds"
            ></iframe> */}
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.374524485315!2d-64.1962542!3d-31.421380499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a27dec0831d5%3A0x7027d616ab37acf0!2sMiguel%20Calixto%20del%20Corro%20661%20Piso%202%20Of.%209%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1723070176524!5m2!1sen!2sar"
              }
              // width="600"
              height="450"
              style={{ width: "100%", border: "1px solid black" }}
              // style="border:0;"
              // allowfullscreen=""
              // loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <GoogleMapsEmbed
              apiKey="lkans"
              height={420}
              width="100%"
              mode="place"
              q="Brooklyn+Bridge,New+York,NY"
            /> */}
          </Col>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 12,
          }}
        >
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Typography.Title level={3} className="contactTitle3">
              Envianos tu consulta
            </Typography.Title>
          </Col>
          <Col span={20} offset={2}>
            <ContactForm />
          </Col>
        </Col>
      </Row>
      <SocialBar />
    </>
  );
}
