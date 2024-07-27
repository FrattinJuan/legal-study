import { Avatar, Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import legalStudy from "../../../public/img/legalStudyHome.png";
import Image from "next/image";
import "./staff.scss";

export default function Staff() {
  return (
    <>
      <Row style={{ marginTop: "10%", marginBottom: "10%" }}>
        <Col span={24}>
          <Typography.Title level={1} className="staffTitle">
            Profesionales
          </Typography.Title>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 12,
          }}
        >
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 12,
              offset: 6,
            }}
          >
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
                title="Guadalupe C. Cuestas "
                description={
                  <p>
                    M.P. 1-41509
                    <br />
                    M.F. T° 509 F° 128
                    <br />
                    gcuestas@cuestaspatino.com.ar
                    <br />
                    Tel 3513086599
                  </p>
                }
              />
            </Card>
          </Col>
        </Col>

        {/* <Col span={1} style={{ display: "flex", justifyContent: "center" }}>
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col> */}
        <Col xs={{
            span: 24,
          }}
          lg={{
            span: 12,
          }}>
          <Col  xs={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 12,
              offset: 6,
            }}>
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
                title="Joaquín Patiño"
                description={
                  <p>
                    M.P. 1-41857 <br />
                    M.F. T° 509 F° 403 <br />
                    jpatino@cuestaspatino.com.ar <br />
                    Telefono 3517472345
                  </p>
                }
              />
            </Card>
          </Col>
        </Col>
      </Row>
    </>
  );
}
