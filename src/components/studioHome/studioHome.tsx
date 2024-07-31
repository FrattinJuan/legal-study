import React from "react";
import { Card, Col, Row, Typography } from "antd";
import Image from "next/image";
import legalStudy from "../../../public/img/legalStudyHome.png";
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
            <Card.Grid hoverable={false} style={{ width: "60%" }}>
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
                    legal y la resolución de conflictos.<br /> Nos especializamos en
                    brindar servicios tanto a empresas como a particulares,
                    convirtiéndonos en sus aliados estratégicos, entendiendo las
                    necesidades específicas de cada cliente para proporcionar
                    estrategias legales que protejan sus intereses y promuevan
                    su crecimiento.
                  </Paragraph>
                </Col>
              </Row>
            </Card.Grid>
            <Card.Grid hoverable={false} style={{ width: "40%", padding: 0 }}>
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
