import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import { PageContainer, ClassfiyTabItem } from '@/components/index';
import { listItems, IListItem } from '@/pages/home/consts';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [innerListItems, setInnerListItems] = useState<IListItem[]>([]);

  useEffect(() => {
    const newInnerListItems = listItems.filter(({ sourceName }) =>
      sourceName.includes((inputValue || '').toUpperCase()),
    );

    setInnerListItems(newInnerListItems);
  }, [inputValue]);

  return (
    <PageContainer
      className={styles.index}
      title="宝贝搜索"
      type="subPage"
      hasBack
    >
      <View className={styles.inputContainer}>
        <AtInput
          className={styles.inputContent}
          name="searchKey"
          placeholder="请输入宝贝名称"
          value={inputValue}
          placeholderClass={styles.inputContentPlaceholder}
          onChange={(value) => setInputValue(value as any)}
        >
          <View>搜索</View>
        </AtInput>
      </View>

      <View className={styles.searchList}>
        {innerListItems.length ? (
          innerListItems.map((item, itemIndex: number) => (
            <ClassfiyTabItem
              key={itemIndex}
              {...item}
              itemStyle={{ width: '420rpx' }}
              onClick={({ id }) =>
                Taro.navigateTo({
                  url: `/subPackages/productDetail/index?id=${id}`,
                })
              }
            />
          ))
        ) : (
          <View className={styles.searchList_text}>没有找到相关宝贝</View>
        )}
      </View>
    </PageContainer>
  );
};

export default Index;
