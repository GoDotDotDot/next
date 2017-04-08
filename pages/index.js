import NavHeader from 'next/head'
import {Button, Layout} from 'antd'
const { Header, Content, Footer } = Layout
export default () => (
  <Layout>
    <NavHeader>
      <title>My page title</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='./static/css/commons.css' />
    </NavHeader>
    <Header>header</Header>
    <Layout>
      <Content>main content
        <Button>btn</Button>
      </Content>
    </Layout>
    <Footer>footer</Footer>
  </Layout>
)
