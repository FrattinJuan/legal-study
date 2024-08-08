import { Avatar, Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import { UserOutlined, LinkedinOutlined } from "@ant-design/icons";
import legalStudy from "../../../public/img/legalStudyHome.png";
import Joaco from "../../../public/img/joaco3.jpg";
import Guada from "../../../public/img/guada3.jpg";
import Image from "next/image";
import "./staff.scss";
import Link from "next/link";

export default function Staff() {
  return (
    <>
      <Row style={{ marginTop: "5%", marginBottom: "5%" }}>
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
              offset: 8,
            }}
          >
            <Card
              className="staffCard"
              bordered={false}
              // cover={<Avatar size={100} icon={<UserOutlined />} />}
              // cover={
              //   <Image
              //     // style={{
              //     //   width: "100%",
              //     //   // height: "auto",
              //     //   objectFit: "fill",
              //     //   borderRadius: "0",
              //     // }}
              //     className="staffCardImage"
              //     alt="example"
              //     src={Guada}
              //     // width={100}
              //     // height={50}
              //   />
              // }
              // cover={<UserOutlined style={{ fontSize: "120px" }} />}
            >
              {" "}
              <Card.Meta
                title="Guadalupe C. Cuestas "
                description={
                  <p style={{fontSize: "15px" }}>
                    M.P. 1-41509
                    <br />
                    M.F. T° 509 F° 128
                    <br />
                    gcuestas@cuestaspatino.com.ar
                    <br />
                    <Link
                      href={
                        "https://www.linkedin.com/in/guadalupe-cuestas-807258268/"
                      }
                    >
                      <LinkedinOutlined style={{ fontSize: "20px" }} />
                    </Link>
                  </p>
                }
              />
            </Card>
          </Col>
        </Col>

        {/* <Col span={1} style={{ display: "flex", justifyContent: "center" }}>
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col> */}
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
              offset: 4,
            }}
          >
            <Card
              className="staffCard"
              bordered={false}
              // cover={<Avatar size={100} icon={<UserOutlined />} />}
              // cover={
              //   <Image
              //     alt="example"
              //     className="staffCardImage"
              //     style={{
              //       // height: "350px",
              //       // width: "100%",
              //       // borderTopLeftRadius: "150px",
              //       // borderTopRightRadius: "150px",
              //     }}
              //     src={Joaco}
              //     // width={100}
              //     // height={0}
              //   />
              // }
              // cover={<UserOutlined style={{ fontSize: "120px" }} />}
            >
              {" "}
              <Card.Meta
                title="Joaquín Patiño"
                description={
                  <p style={{fontSize: "15px" }}>
                    M.P. 1-41857 <br />
                    M.F. T° 509 F° 403 <br />
                    jpatino@cuestaspatino.com.ar <br />
                    <Link
                      href={
                        "https://www.linkedin.com/in/patinojoaquin/"
                      }
                    >
                      <LinkedinOutlined style={{ fontSize: "20px" }} />
                    </Link>
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
