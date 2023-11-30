import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import TodoList from './Todo';

const { Header, Content, Footer } = Layout;

const AdminPage = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Admin Panel</Menu.Item>
          <Menu.Item key="2">Messages</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Головна</Breadcrumb.Item>
          <Breadcrumb.Item>Статистика</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <TodoList />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>sfase6.3</Footer>
    </Layout>
  );
}

export default AdminPage;
