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
import logo from "../../../public/img/Logos_CuestasPatiño_Sinfondo_Mesa de trabajo 1.png";
import Link from "next/link";
import TypedInputNumber from "antd/es/input-number";

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
          style={{ display: "flex", justifyContent: "center"}}
        >
          <List
            dataSource={data}
            style={{ textAlign: "left", color: '#460305!important'  }}
            renderItem={(item) => (
              <Link href={item.link}>
                <List.Item style={{ color: '#460305' }}>
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
          <Typography.Paragraph>
            <Typography.Text strong>
              <CopyrightOutlined />
              {` 2024 Cuestas Patiño.`}
            </Typography.Text>
            <br />
            <Typography.Text>{` Todos los derechos reservados. `}</Typography.Text>
            <br />
            <Link href="https://www.linkedin.com/in/juan-frattin/"><Typography.Text keyboard strong>Desarrollado por Juan Frattin</Typography.Text></Link>
          </Typography.Paragraph>
        </Col>
      </Row>
    </>
  );
}
