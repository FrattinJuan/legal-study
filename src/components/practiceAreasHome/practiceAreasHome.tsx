import { Button, Col, Row, Typography } from "antd";
import { StarFilled, InfoCircleOutlined } from "@ant-design/icons";
import React from "react";
import "./practiceAreasHome.scss";
import Link from "next/link";

const { Title, Text, Paragraph } = Typography;
export default function PracticeAreas() {
  return (
    <>
      <Row className="banner">
        <Col span={24}>
          <Title className="bannerTitle" level={2}>
            Nuestros Enfoque
          </Title>
        </Col>
        <Col style={{ textAlign: "justify" }} span={18} offset={3}>
          <Col span={24}>
            <Text className="bannerText">
              <Text strong className="bannerTextStrong">
                {" "}
                <StarFilled />
                Asesoramiento Integral:
              </Text>{" "}
              Proporcionamos asesoramiento personalizado en diversas áreas del
              derecho, protegiendo los intereses de nuestros clientes y
              fomentando su desarrollo.
              <br />{" "}
              <Text strong className="bannerTextStrong">
                {" "}
                <StarFilled />
                Resolución de Conflictos:
              </Text>{" "}
              Nos destacamos en negociaciones y litigios, logrando soluciones
              eficaces y prontas para nuestros clientes.
              <br />
              <Text strong className="bannerTextStrong">
                {" "}
                <StarFilled />
                Excelencia y Profesionalismo:
              </Text>{" "}
              Nuestro equipo está altamente capacitado y trabaja
              colaborativamente para superar las expectativas de nuestros
              clientes.
              <br />{" "}
              <Text strong className="bannerTextStrong">
                {" "}
                <StarFilled />
                Atención Personalizada:
              </Text>{" "}
              Construimos relaciones de confianza a largo plazo, ofreciendo un
              servicio cercano y altamente profesional.
              <br />
              <Text strong className="bannerTextStrong">
                {" "}
                <StarFilled />
                Innovación y Tecnología:
              </Text>{" "}
              Utilizamos las últimas tecnologías legales para optimizar nuestros
              procesos y brindar servicios de alta calidad.
            </Text>
          </Col>
          <Col span={24} style={{display: "flex", justifyContent: "center", marginTop: "5%"}}>
            <Link href={"/practiceAreas"}>
              <Button type="default" size="large" icon={<InfoCircleOutlined />}>
                Más informacion
              </Button>
            </Link>
          </Col>
        </Col>
      </Row>
    </>
  );
}
