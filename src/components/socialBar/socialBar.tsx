import { Button, Col, Row } from "antd";
import {
  XOutlined,
  InstagramOutlined,
  MailOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React from "react";
import "./socialBar.scss";

export default function SocialBar() {
  return (
    <>
      <Row className="socialBar">
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            className="socialBarButton"
            shape="circle"
            size="large"
            icon={<XOutlined />}
          />

          <Button
            className="socialBarButton"
            shape="circle"
            size="large"
            icon={<InstagramOutlined />}
          />

          <Button
            className="socialBarButton"
            shape="circle"
            size="large"
            icon={<LinkedinOutlined />}
          />

          <Button
            className="socialBarButton"
            shape="circle"
            size="large"
            icon={<WhatsAppOutlined />}
          />

          <Button
            className="socialBarButton"
            shape="circle"
            size="large"
            icon={<MailOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}
