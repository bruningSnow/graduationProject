import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import { PageContainer } from '@/components/index';

import styles from './index.module.scss';

interface IRenderItem {
  title: string;
  url: string;
}

const Index: React.FC<{}> = () => {
  return (
    <PageContainer
      className={styles.index}
      title="物品搜索"
      type="subPage"
      hasBack
    >
      <AtInput name="searchKey" onChange={() => {}}>
        <View>搜索</View>
      </AtInput>
    </PageContainer>
  );
};

export default Index;
