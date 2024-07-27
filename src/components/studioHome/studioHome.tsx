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
        <Col xs={{
            span: 24,
          }}
          lg={{
            span: 18,
            offset: 3,
          }}>
          <Card
            // title="Nuestro Estudio"
            hoverable={false}
            bordered={false}
            className="studioHomeCard"
          >
            <Card.Grid
              hoverable={false}
              style={{ width: "60%", }}
            >
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
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales
                    euismod nisi purus potenti inceptos phasellus fermentum eros
                    erat. Urna mus faucibus sagittis finibus enim iaculis porta.
                    Luctus rhoncus aliquam ut efficitur eget torquent risus erat
                    pellentesque. Aenean luctus hac urna tempor donec taciti
                    penatibus. Ad varius vel maecenas facilisis lacinia. Posuere
                    aliquam cursus adipiscing quam leo montes praesent.<br></br>{" "}
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales
                    euismod nisi purus potenti inceptos phasellus fermentum eros
                    erat. Urna mus faucibus sagittis finibus enim iaculis porta.
                    Luctus rhoncus aliquam ut efficitur eget torquent risus erat
                    pellentesque. Aenean luctus hac urna tempor donec taciti
                    penatibus. Ad varius vel maecenas facilisis lacinia. Posuere
                    aliquam cursus adipiscing quam leo montes praesent.
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
