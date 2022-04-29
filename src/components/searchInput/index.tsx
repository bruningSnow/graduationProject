import React, { CSSProperties } from 'react';
import ClassNames from 'classnames';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';

import styles from './index.module.scss';

export interface SearchInputProps {
  classname?: string;
  style?: CSSProperties;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { classname = '', style = {} } = props;

  return (
    <View className={ClassNames(styles.SearchInput, classname)} style={style}>
      <View className={styles.SearchInputContainer}>
        <AtIcon value="search" size="15" color="#2a2a2a"></AtIcon>
        <View style={{ marginLeft: 10 }}>搜索你想要的物品</View>
      </View>
    </View>
  );
};

export default SearchInput;
