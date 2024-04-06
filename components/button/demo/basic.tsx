import React from 'react';
import { Button, Flex } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" wrap="wrap">
    <Button type="primary">Primary Button 廖顺华</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link" htmlType="reset">
      Link Button
    </Button>
    {/* <button ></button> */}
  </Flex>
);

export default App;
