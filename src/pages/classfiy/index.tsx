import React, { useState } from 'react';
import { AtTabs, AtTabsPane } from 'taro-ui';
import Taro, { useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { PageContainer, TabBar, SearchInput } from '@/components/index';
import { productTypeList } from '@/pages/home/consts';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => {
  const [swiperCurrent, setSwiperCurrent] = useState<number>(0);

  useDidShow(() => {
    const { type } = Taro.getCurrentInstance()?.router?.params || {};

    if (type) {
      setSwiperCurrent(parseInt(type) - 1);
    }
  });

  return (
    <PageContainer
      className={styles.index}
      title="分类"
      type="homePage"
      hasBack={false}
    >
      <SearchInput />
      <AtTabs
        current={swiperCurrent}
        scroll
        height="calc(100vh - 182px)"
        tabDirection="vertical"
        tabList={productTypeList.map(({ key }) => ({ title: key }))}
        onClick={setSwiperCurrent}
      >
        <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={0}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页一的内容
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={1}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页二的内容
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={2}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页三的内容
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={3}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页四的内容
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={4}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页五的内容
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={5}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页六的内容
          </View>
        </AtTabsPane>
      </AtTabs>
      <TabBar current={2} />
    </PageContainer>
  );
};

export default Index;
