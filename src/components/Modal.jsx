import React, { useState } from 'react';
import { Button, Modal, Spin, Form, Input } from 'antd';

const AuthModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(true);
    }, 2000);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        {loading ? <Spin /> : 'Open Modal'}
      </Button>
      <Modal
        title="Login"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} disabled={loading}>
            {loading ? <Spin size="small" /> : 'Login'}
          </Button>,
        ]}
      >
        <Form>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AuthModal;
