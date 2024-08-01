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
import logo from "../../../public/img/Logos_CuestasPatiño_Sinfondo-03.png";
import Link from "next/link";

export default function FooterBar() {
  const data = [
    {
      title:
        "Miguel C. del Corro 661 - Piso 2 Of. 9 - C.P. X5000BGO - Córdoba, Argentina",
      icon: <EnvironmentOutlined />,
      link: "https://maps.app.goo.gl/81X9mtqwEpSmzNGx5",
    },
    {
      title: "+54 9 351 308 6599",
      icon: <PhoneOutlined />,
      link: "https://api.whatsapp.com/send?phone=5493513086599&text=Hola,%20quisiera%20hacer%20una%20consulta%20...",
    },
    {
      title: "+54 9 351 747 2345",
      icon: <PhoneOutlined />,
      link: "https://api.whatsapp.com/send?phone=54935174723455&text=Hola,%20quisiera%20hacer%20una%20consulta%20...",
    },
    // {
    //   title: "Whatsapp: +555 555 555",
    //   icon: <WhatsAppOutlined />,
    // },
    {
      title: "info@cuestaspatino.com.ar",
      icon: <MailOutlined />,
      link: "https://cuestaspatino.com.ar",
    },
  ];
  return (
    <>
      <Row className="footerBar">
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 8,
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image alt="example" src={logo} width={200} height={200} />
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 8,
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <List
            dataSource={data}
            style={{ textAlign: "left" }}
            renderItem={(item) => (
              <Link href={item.link}>
                <List.Item>
                  {item.icon} {` ` + item.title}
                </List.Item>
              </Link>
            )}
          ></List>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 8,
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography.Text strong>
            <CopyrightOutlined />
            {` 2024 Cuestas Patiño.`}
          </Typography.Text>
          <br />
          <Typography.Text>{` Todos los derechos reservados. `}</Typography.Text>
        </Col>
      </Row>
    </>
  );
}
