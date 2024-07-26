import { Col, Row, Typography } from "antd";
import React from "react";
import "./practiceAreas.scss";

const { Title, Text, Paragraph } = Typography;
export default function PracticeAreas() {
  return (
    <>
      <Row className="banner">
        <Col span={24}>
          <Title className="bannerTitle" level={2}>
            Nuestros Servicios
          </Title>
        </Col>
        <Col style={{ textAlign: "center" }} span={18} offset={3}>
          <Text className="bannerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
            dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit
            amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
            consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Text>
        </Col>
      </Row>
    </>
  );
}
