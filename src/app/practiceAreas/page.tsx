"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Col, Collapse, Row, Typography, Divider } from "antd";
import {
  FormOutlined,
  HighlightOutlined,
  ToolOutlined,
  AreaChartOutlined,
  AuditOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import SocialBar from "@/components/socialBar/socialBar";
import "./practiceAreas.scss";

export default function Page() {
  const pathname = usePathname();
  const items = [
    {
      key: "1",
      label: (
        <>
          <FormOutlined className="practiceAreasIcon" />
          {" Asesoramiento Empresarial"}
        </>
      ),
      children: (
        <p>
          {" "}
          ● Constitución de sociedades.
          <br />
          ● Planificación estratégica y desarrollo corporativo.
          <br />● Cumplimiento normativo y regulatorio.
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <HighlightOutlined className="practiceAreasIcon" />
          {"Derecho Civil y Comercial"}
        </>
      ),
      children: (
        <p>
          {" "}
          ● Negociación, elaboración, revisión y ejecución de contratos.
          <br />
          ● Resolución de disputas civiles y comerciales.
          <br />
          ● Cobranzas extrajudiciales y judiciales.
          <br />● Declaratorias de herederos y sucesiones .
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <AreaChartOutlined className="practiceAreasIcon" />
          {"Derecho Administrativo y Regulatorio"}
        </>
      ),
      children: (
        <p>
          {" "}
          ● Asesoramiento en licitaciones y contratos públicos.
          <br />
          ● Representación ante organismos regulatorios.
          <br />
          ● Cumplimiento de normativas administrativas.
          <br />● Defensa en procedimientos administrativos.
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <>
          <AuditOutlined className="practiceAreasIcon" />
          {"Derecho Penal"}
        </>
      ),
      children: (
        <p>
          {" "}
          ● Defensa del imputado en procesos penales. ● Representación del
          querellante.
          <br />
          ● Asesoramiento en delitos corporativos y económicos.
          <br />
          ● Intervención en sumarios internos.
          <br />
          ● Diseño e implementación de programas de cumplimiento.
          <br />
          ● Gestión de riesgos y prevención de delitos.
          <br />
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <>
          <ToolOutlined className="practiceAreasIcon" />

          {"Derecho del trabajo y la seguridad social"}
        </>
      ),
      children: (
        <p>
          {" "}
          ● Asesoramiento en relaciones laborales y recursos humanos.
          <br />
          ● Elaboración y revisión de contratos laborales.
          <br />
          ● Representación en juicio en conflictos laborales tanto individuales
          como colectivos.
          <br />
          ● Cumplimiento de normativas laborales y prevención de riesgos
          laborales.
          <br />
        </p>
      ),
    },
    {
      key: "6",
      label: (
        <>
          <CommentOutlined className="practiceAreasIcon" />
          {"Defensa del Consumidor"}
        </>
      ),
      children: (
        <p>
          {" "}
          ● Asesoramiento en derechos del consumidor.
          <br />
          ● Representación en reclamos y disputas de consumo ante autoridad
          administrativa o judicial.
          <br />
          ● Cumplimiento de normativas de protección al consumidor.
          <br />
        </p>
      ),
    },
  ];
  return (
    <>
      <Row className="practiceAreasRow">
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Typography.Title level={1} className="practiceAreasTitle">
            Nuestros Servicios
          </Typography.Title>
        </Col>
        <Col span={14} offset={5}>
          <Typography.Title level={5} className="practiceAreasSubtitle">
            En CUESTAS - PATIÑO, ofrecemos una amplia gama de servicios legales
            diseñados para satisfacer las necesidades de cada cliente. Nuestro
            enfoque innovador y personalizado garantiza soluciones efectivas que
            protegen y promueven los intereses de nuestros clientes.
          </Typography.Title>
        </Col>
      </Row>

      <Row>
        <Col span={20} offset={2} style={{ marginBottom: "2%" }}>
          <Divider />
        </Col>
      </Row>
      <Row className="practiceAreasRow2">
        <Col span={20} offset={2}>
          <Collapse
            className="practiceAreasCollapse"
            expandIconPosition="end"
            bordered={false}
            size="large"
            accordion
            items={items}
          />
        </Col>
      </Row>
      <SocialBar />
    </>
  );
}
