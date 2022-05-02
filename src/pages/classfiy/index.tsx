import React, { useState, useMemo } from 'react';
import { AtTabs, AtTabsPane } from 'taro-ui';
import Taro, { useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import {
  PageContainer,
  TabBar,
  SearchInput,
  ClassfiyTabItem,
} from '@/components/index';
import { productTypeList, listItems, IListItem } from '@/pages/home/consts';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => {
  const [swiperCurrent, setSwiperCurrent] = useState<number>(0);

  useDidShow(() => {
    const { type } = Taro.getCurrentInstance()?.router?.params || {};

    if (type) {
      setSwiperCurrent(parseInt(type) - 1);
    }
  });

  const swiperCurrent_0_data = useMemo(() => {
    return listItems.filter(({ type }) => type === 1);
  }, []);

  const swiperCurrent_1_data = useMemo(() => {
    return listItems.filter(({ type }) => type === 2);
  }, []);

  const swiperCurrent_2_data = useMemo(() => {
    return listItems.filter(({ type }) => type === 3);
  }, []);

  const swiperCurrent_3_data = useMemo(() => {
    return listItems.filter(({ type }) => type === 4);
  }, []);

  const swiperCurrent_4_data = useMemo(() => {
    return listItems.filter(({ type }) => type === 5);
  }, []);

  const swiperCurrent_5_data = useMemo(() => {
    return listItems.filter(({ type }) => type === 6);
  }, []);

  const toProductDetail = ({ id }: IListItem) => {
    Taro.navigateTo({
      url: `/subPackages/productDetail/index?id=${id}`,
    });
  };

  return (
    <PageContainer
      className={styles.index}
      title="分类"
      type="homePage"
      hasBack={false}
    >
      <SearchInput />
      <View className={styles.content}>
        <AtTabs
          current={swiperCurrent}
          scroll
          height="calc(100vh - 182px)"
          tabDirection="vertical"
          tabList={productTypeList.map(({ key }) => ({ title: key }))}
          onClick={setSwiperCurrent}
        >
          <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={0}>
            <View className={styles.tabsPane}>
              {swiperCurrent_0_data.map((item, itemIndex: number) => {
                if (itemIndex === swiperCurrent_0_data.length - 1) {
                  return (
                    <ClassfiyTabItem
                      style={{ marginBottom: 0 }}
                      {...item}
                      onClick={toProductDetail}
                    />
                  );
                }
                return <ClassfiyTabItem {...item} onClick={toProductDetail} />;
              })}
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={1}>
            <View className={styles.tabsPane}>
              {swiperCurrent_1_data.map((item, itemIndex: number) => {
                if (itemIndex === swiperCurrent_0_data.length - 1) {
                  return (
                    <ClassfiyTabItem
                      style={{ marginBottom: 0 }}
                      {...item}
                      onClick={toProductDetail}
                    />
                  );
                }
                return <ClassfiyTabItem {...item} onClick={toProductDetail} />;
              })}
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={2}>
            <View className={styles.tabsPane}>
              {swiperCurrent_2_data.map((item, itemIndex: number) => {
                if (itemIndex === swiperCurrent_0_data.length - 1) {
                  return (
                    <ClassfiyTabItem
                      style={{ marginBottom: 0 }}
                      {...item}
                      onClick={toProductDetail}
                    />
                  );
                }
                return <ClassfiyTabItem {...item} onClick={toProductDetail} />;
              })}
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={3}>
            <View className={styles.tabsPane}>
              {swiperCurrent_3_data.map((item, itemIndex: number) => {
                if (itemIndex === swiperCurrent_0_data.length - 1) {
                  return (
                    <ClassfiyTabItem
                      style={{ marginBottom: 0 }}
                      {...item}
                      onClick={toProductDetail}
                    />
                  );
                }
                return <ClassfiyTabItem {...item} onClick={toProductDetail} />;
              })}
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={4}>
            <View className={styles.tabsPane}>
              {swiperCurrent_4_data.map((item, itemIndex: number) => {
                if (itemIndex === swiperCurrent_0_data.length - 1) {
                  return (
                    <ClassfiyTabItem
                      style={{ marginBottom: 0 }}
                      {...item}
                      onClick={toProductDetail}
                    />
                  );
                }
                return <ClassfiyTabItem {...item} onClick={toProductDetail} />;
              })}
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection="vertical" current={swiperCurrent} index={5}>
            <View className={styles.tabsPane}>
              {swiperCurrent_5_data.map((item, itemIndex: number) => {
                if (itemIndex === swiperCurrent_0_data.length - 1) {
                  return (
                    <ClassfiyTabItem
                      style={{ marginBottom: 0 }}
                      {...item}
                      onClick={toProductDetail}
                    />
                  );
                }
                return <ClassfiyTabItem {...item} onClick={toProductDetail} />;
              })}
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
      <TabBar current={2} />
    </PageContainer>
  );
};

export default Index;
