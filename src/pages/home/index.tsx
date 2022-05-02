import React, { useState, useMemo } from 'react';
import { AtGrid } from 'taro-ui';
import Taro from '@tarojs/taro';
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

  return (
    <PageContainer
      className={styles.index}
      title="首页"
      type="homePage"
      hasBack={false}
    >
      <SearchInput />
      <SwiperList
        imageList={swiperImageList}
        current={swiperCurrent}
        onChange={setSwiperCurrent}
      />
      <AtGrid
        className={styles.AtGrid}
        hasBorder={false}
        columnNum={3}
        data={productTypeList.map(({ image, key }) => ({ image, value: key }))}
        onClick={(item: object, index: number) => goClassfiyPage(index + 1)}
      />
      <ClassfiyContainer
        title="数码周边系列"
        listItems={shuma}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(1)}
      />
      <ClassfiyContainer
        title="手工系列"
        listItems={shougong}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(2)}
      />
      <ClassfiyContainer
        title="彩妆系列"
        listItems={caizhuang}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(3)}
      />
      <ClassfiyContainer
        title="服装系列"
        listItems={fuzhuang}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(4)}
      />
      <ClassfiyContainer
        title="配饰系列"
        listItems={peishi}
        style={{ marginBottom: '15px' }}
        onClickMore={() => goClassfiyPage(5)}
      />
      <ClassfiyContainer
        title="生活百货系列"
        listItems={shenghuo}
        onClickMore={() => goClassfiyPage(6)}
      />
      <TabBar current={1} />
    </PageContainer>
  );
};

export default Index;
