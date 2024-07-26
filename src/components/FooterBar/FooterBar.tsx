"use client";
import { Row, Col, List, Typography } from "antd";
import {
  EnvironmentOutlined,
  CopyrightOutlined,
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import logo from "../../../public/img/Logos_CuestasPatiño_Sinfondo-02.png";

export default function FooterBar() {
  const data = [
    {
      title: "Calle 12 Cordoba, Argentina",
      icon: <EnvironmentOutlined />,
    },
    {
      title: "+555 555 555",
      icon: <PhoneOutlined />,
    },
    {
      title: "Whatsapp: +555 555 555",
      icon: <WhatsAppOutlined />,
    },
    {
      title: "info@cuestaspatino.com.ar",
      icon: <MailOutlined />,
    },
  ];
  return (
    <>
      <Row className="footerBar">
        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
          <Image alt="example" src={logo} width={200} height={200} />
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
          <List
            dataSource={data}
            style={{ textAlign: "left" }}
            renderItem={(item) => (
              <List.Item>
                {item.icon} {` ` + item.title}
              </List.Item>
            )}
          ></List>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography.Text strong>
            <CopyrightOutlined />{` 2024 Cuestas Patino.`}
          </Typography.Text>
          <br />
          <Typography.Text>{` Todos los derechos reservados. `}</Typography.Text>
        </Col>
      </Row>
    </>
  );
}
