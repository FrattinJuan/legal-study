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
          <Col span={20} offset={2} style={{ marginBottom: "5%" }}>
            <Typography.Text className="contactText">
              Encontrará nuestro estudio en pleno zona del polo judicial de la
              Ciudad de Córdoba sobre calle Simón Bolívar Nro. 524, en una
              casona construida a principios del siglo pasado totalmente
              reacondicionada y equipada para brindar a nuestros clientes y
              facilitar a nuestros profesionales y personal las herramientas y
              material de trabajo que requiere la práctica profesional moderna.
            </Typography.Text>
          </Col>
          <Col span={20} offset={2}>
            <GoogleMapsEmbed
              apiKey="XYZ"
              height={300}
              width="100%"
              mode="place"
              q="Brooklyn+Bridge,New+York,NY"
            />
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
