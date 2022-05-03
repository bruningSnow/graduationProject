import React, { useState, useEffect } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { PageContainer, HomeItem } from '@/components/index';

import styles from './index.module.scss';

const Index: React.FC<any> = () => {
  return (
    <PageContainer
      className={styles.index}
      title="实物列表"
      type="subPage"
      hasBack
    >
      <HomeItem text="丝巾" />
      <HomeItem text="笔袋" />
    </PageContainer>
  );
};

export default Index;
