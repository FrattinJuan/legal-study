import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { BorderOutlined } from "@ant-design/icons";
import Image from "next/image";
import legalStudy from "../../../public/img/estudioHome.jpg";
import "./studioHome.scss";

const { Title, Text, Paragraph } = Typography;

export default function StudioHome() {
  return (
    <>
      <Row>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 18,
            offset: 3,
          }}
        >
          <Card
            // title="Nuestro Estudio"
            hoverable={false}
            bordered={false}
            className="studioHomeCard"
          >
            <Card.Grid className="studioHomeGrid1" hoverable={false}>
              <Row>
                <Col>
                  <Title className="studioHomeTitle" level={3}>
                    Nuestro Estudio
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Paragraph className="studioHomeParagraph">
                    Somos un Estudio Jurídico comprometido con el asesoramiento
                    legal y la resolución de conflictos. Nos especializamos en
                    brindar servicios tanto a empresas como a particulares,
                    convirtiéndonos en sus aliados estratégicos. Nuestra
                    filosofía se basa en un enfoque integral y adaptativo, que
                    nos permite proporcionar soluciones jurídicas innovadoras y
                    personalizadas. Entendemos que cada cliente es único, con
                    desafíos y objetivos particulares, por lo que entendemos las
                    necesidades específicas de cada uno de nuestros clientes.
                    Esta comprensión nos permite diseñar estrategias legales a
                    medida que no solo protegen los intereses de nuestros
                    clientes, sino que también impulsan su crecimiento y éxito a
                    largo plazo.
                  </Paragraph>
                </Col>
                <Col style={{ marginTop: "28px" }}>
                  <Paragraph className="studioHomeText">
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Asesoramiento Integral:
                    </Text>{" "}
                    Proporcionamos asesoramiento personalizado en diversas áreas
                    del derecho,  protegiendo los intereses de nuestros clientes
                    y fomentando su desarrollo.
                    <br />{" "}
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Resolución de Conflictos:
                    </Text>{" "}
                    Nos destacamos en negociaciones y litigios, logrando
                    soluciones eficaces y prontas para nuestros clientes.
                    <br />
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Excelencia y Profesionalismo:
                    </Text>{" "}
                    Nuestro equipo está altamente capacitado y trabaja
                    colaborativamente para superar las expectativas de nuestros
                    clientes.
                    <br />{" "}
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Atención Personalizada:
                    </Text>{" "}
                    Construimos relaciones de confianza a largo plazo,
                    ofreciendo un servicio cercano y altamente profesional.
                    <br />
                    <Text strong className="studioHomeTextStrong">
                      {" "}
                      • Innovación y Tecnología:
                    </Text>{" "}
                    Utilizamos las últimas tecnologías legales para optimizar
                    nuestros procesos y brindar servicios de alta calidad.
                  </Paragraph>
                </Col>
              </Row>
            </Card.Grid>
            <Card.Grid className="studioHomeGrid2" hoverable={false}>
              <Image
                src={legalStudy}
                alt="studio"
                style={{ width: "100%", height: "100%" }}
              />
            </Card.Grid>
          </Card>
        </Col>
      </Row>
    </>
  );
}
