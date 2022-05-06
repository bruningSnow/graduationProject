import React, { useState, useMemo } from 'react';
import { AtGrid } from 'taro-ui';
import Taro, { useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import {
  PageContainer,
  TabBar,
  SwiperList,
  SearchInput,
  ClassfiyContainer,
} from '@/components/index';
import { listItems, productTypeList, swiperImageList } from './consts';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => {
  const [swiperCurrent, setSwiperCurrent] = useState<number>(0);

  const shuma = useMemo(
    () => listItems.filter(({ type }) => type === 1).slice(0, 3),
    [],
  );
  const shougong = useMemo(
    () => listItems.filter(({ type }) => type === 2).slice(0, 3),
    [],
  );
  const caizhuang = useMemo(
    () => listItems.filter(({ type }) => type === 3).slice(0, 3),
    [],
  );
  const fuzhuang = useMemo(
    () => listItems.filter(({ type }) => type === 4).slice(0, 3),
    [],
  );
  const peishi = useMemo(
    () => listItems.filter(({ type }) => type === 5).slice(0, 3),
    [],
  );
  const shenghuo = useMemo(
    () => listItems.filter(({ type }) => type === 6).slice(0, 3),
    [],
  );

  const goClassfiyPage = (type: number) => {
    Taro.reLaunch({ url: `/pages/classfiy/index?type=${type}` });
  };

  useDidShow(() => {
    Taro.showShareMenu({
      withShareTicket: true,
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
  });

  return (
    <PageContainer
      className={styles.index}
      title="首页"
      type="homePage"
      hasBack={false}
    >
      <SearchInput />
      <View className={styles.content}>
        <SwiperList
          imageList={swiperImageList}
          current={swiperCurrent}
          onChange={setSwiperCurrent}
        />
      </View>
      <AtGrid
        className={styles.AtGrid}
        hasBorder={false}
        columnNum={3}
        data={productTypeList.map(({ image, key }) => ({ image, value: key }))}
        onClick={(item: object, index: number) => goClassfiyPage(index + 1)}
      />
      <ClassfiyContainer
        title="e潮品"
        listItems={shuma}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(1)}
      />
      <ClassfiyContainer
        title="百搭潮包"
        listItems={shougong}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(2)}
      />
      <ClassfiyContainer
        title="国潮彩妆"
        listItems={caizhuang}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(3)}
      />
      <ClassfiyContainer
        title="潮玩穿搭"
        listItems={fuzhuang}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(4)}
      />
      <ClassfiyContainer
        title="潮纹织物"
        listItems={peishi}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(5)}
      />
      <ClassfiyContainer
        title="潮玩好物"
        listItems={shenghuo}
        onClickMore={() => goClassfiyPage(6)}
      />
      <TabBar current={1} />
    </PageContainer>
  );
};

export default Index;
