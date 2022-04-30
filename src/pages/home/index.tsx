import React, { useState, useMemo } from 'react';
import { AtGrid } from 'taro-ui';
import {
  PageContainer,
  TabBar,
  SwiperList,
  SearchInput,
  ClassfiyContainer,
} from '@/components/index';
import { listItems } from './consts';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => {
  const [swiperCurrent, setSwiperCurrent] = useState<number>(0);

  const shuma = useMemo(() => listItems.filter(({ type }) => type === 1), []);
  const shougong = useMemo(
    () => listItems.filter(({ type }) => type === 2),
    [],
  );
  const caizhuang = useMemo(
    () => listItems.filter(({ type }) => type === 3),
    [],
  );
  const fuzhuang = useMemo(
    () => listItems.filter(({ type }) => type === 4),
    [],
  );
  const peishi = useMemo(() => listItems.filter(({ type }) => type === 5), []);
  const shenghuo = useMemo(
    () => listItems.filter(({ type }) => type === 6),
    [],
  );

  return (
    <PageContainer
      className={styles.index}
      title="首页"
      type="homePage"
      hasBack={false}
    >
      <SearchInput />
      <SwiperList
        imageList={[
          'https://i.ibb.co/vc9YXQ7/QQ20220420-21.jpg',
          'https://i.ibb.co/dtp2k1v/QQ20220420-22.jpg',
        ]}
        current={swiperCurrent}
        onChange={setSwiperCurrent}
      />
      <AtGrid
        className={styles.AtGrid}
        hasBorder={false}
        columnNum={3}
        data={[
          {
            image:
              'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
            value: '数码周边系列',
          },
          {
            image:
              'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
            value: '手工系列',
          },
          {
            image:
              'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
            value: '彩妆系列',
          },
          {
            image:
              'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
            value: '服装系列',
          },
          {
            image:
              'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
            value: '配饰系列',
          },
          {
            image:
              'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
            value: '生活百货系列',
          },
        ]}
      />
      <ClassfiyContainer
        title="数码周边系列"
        listItems={shuma}
        style={{ marginBottom: '15px' }}
      />
      <ClassfiyContainer
        title="手工系列"
        listItems={shougong}
        style={{ marginBottom: '15px' }}
      />
      <ClassfiyContainer
        title="彩妆系列"
        listItems={caizhuang}
        style={{ marginBottom: '15px' }}
      />
      <ClassfiyContainer
        title="服装系列"
        listItems={fuzhuang}
        style={{ marginBottom: '15px' }}
      />
      <ClassfiyContainer
        title="配饰系列"
        listItems={peishi}
        style={{ marginBottom: '15px' }}
      />
      <ClassfiyContainer title="生活百货系列" listItems={shenghuo} />
      <TabBar current={1} />
    </PageContainer>
  );
};

export default Index;
