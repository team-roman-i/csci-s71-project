import { Link, Outlet } from 'umi';
import { Layout } from 'antd';
import React from 'react';

import styles from './index.less';
import logo from '../assets/synaxis-logo.png'
const { Header, Footer, Content } = Layout;

export default function DefaultLayout() {
  return (
      <Layout>
          <Header className={styles.siteHeader}>
              <img src={logo} alt={'logo'} style={{width: '160px'}} data-testid='logo'/>
          </Header>
          <Content className={styles.siteContent}>
              <Outlet />
          </Content>
          <Footer className={styles.siteFooter} />
      </Layout>
  );
}
