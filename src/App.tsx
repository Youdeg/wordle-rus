import { Row } from 'antd';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import React, { FC } from 'react';
import "./app.css";
import Tiles from './components/tiles/Tiles';

const App: FC = () => {
  return (
    <>
      <Layout>
        <Header className='header'>
          <Row justify="center">
            <h1>
          Wordle
          </h1>
          </Row>
        </Header>
        <Content className='content'>
          <Tiles />
        </Content>
      </Layout>
    </>
  );
}

export default App;
