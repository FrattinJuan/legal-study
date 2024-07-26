import { Avatar, Card, Col, Row, Typography } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import legalStudy from "../../../public/img/legalStudyHome.png";
import Image from "next/image";
import "./staff.scss";

export default function Staff() {
  return (
    <>
      <Row style={{ marginTop: "10%" }}>
        <Col span={24}>
         <Typography.Title level={1} className="staffTitle">
            Profesionales
         </Typography.Title>
        </Col>
        <Col span={12}>
          <Col span={12} offset={6}>
            <Card
            className="staffCard"
              // cover={<Avatar size={100} icon={<UserOutlined />} />}
              cover={
                <Image
                  alt="example"
                  src={legalStudy}
                  width={100}
                  height={100}
                />
              }
            >
              {" "}
              <Card.Meta
               
                title="Joaquin Patinio"
                description="Abogado en Derecho Civil"
              />
            </Card>
          </Col>
        </Col>
        <Col span={12}>
          <Col span={12} offset={6}>
            <Card
            className="staffCard"
              // cover={<Avatar size={100} icon={<UserOutlined />} />}
              cover={
                <Image
                  alt="example"
                  src={legalStudy}
                  width={100}
                  height={100}
                />
              }
            >
              {" "}
              <Card.Meta
               
                title="Guadalupe Cuestas"
                description="Abogada en Derecho Penal"
              />
            </Card>
          </Col>
        </Col>
      </Row>
    </>
  );
}
