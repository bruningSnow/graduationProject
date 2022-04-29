import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { PageContainer, TabBar } from '@/components/index';

import { ComponentList } from './index.config';
import styles from './index.module.scss';

interface IRenderItem {
  title: string;
  url: string;
}

const Index: React.FC<{}> = () => {
  return (
    <PageContainer
      className={styles.index}
      title="我的"
      type="homePage"
      hasBack={false}
    >
      my
      <TabBar current={2} />
    </PageContainer>
  );
};

export default Index;
