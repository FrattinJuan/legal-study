// components/ContactForm.js
import React from "react";
import { Form, Input, Button, InputNumber, message } from "antd";
import axios from "axios";

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      console.log(values);
      const response = await axios.post("https://formspree.io/f/manwobjq", values);
      console.log('Hola',response);
      if (response.status === 200) {
        form.resetFields();
        message.success("Tu mensaje ha sido enviado con exito!");
        // alert("Your message has been sent successfully!");
      }
    } catch (error) {
      console.error(error);
      message.error("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
      // alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="name"
        // placeholder="Nombre"
        rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
      >
        <Input autoComplete="off" placeholder="Nombre" />
      </Form.Item>
      <Form.Item
        name="email"
        // label="Email"
        rules={[
          { required: true, message: "Por favor ingresa tu email" },
          { type: "email", message: "Por favor ingresa un email valido" },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="phone"
        // label="Email"
        rules={[
          { required: true, message: "Por favor ingresa tu numero de telefono" },
        ]}
      >
        <InputNumber style={{ width: "100%" }} placeholder="Telefono" />
      </Form.Item>

      <Form.Item
        name="message"
        // label="Consulta"
        rules={[{ required: true, message: "Por favor ingresa tu consulta" }]}
      >
        <TextArea
          rows={4}
          placeholder="Consulta"
          maxLength={500}
          showCount
          style={{
            height: 200,
            resize: "none",
          }}
        />
      </Form.Item>
      <Form.Item style={{ textAlign: "center" }}>
        <Button size="large" type="default" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
