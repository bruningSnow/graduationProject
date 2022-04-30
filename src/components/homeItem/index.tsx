import React, { CSSProperties } from 'react';
import ClassNames from 'classnames';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';

import styles from './index.module.scss';

export interface HomeItemProps {
  text: string;
  classname?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const HomeItem: React.FC<HomeItemProps> = (props) => {
  const { text, classname = '', style = {}, onClick } = props;

  return (
    <View
      className={ClassNames(styles.homeItemContainer, classname)}
      style={{ position: 'relative', ...style }}
      onClick={() => onClick?.()}
    >
      <View className={styles.homeItemContainer_text}>{text}</View>
      <AtIcon
        value="arrow-right"
        size="30"
        color="#bab8ba"
        className={styles.homeItemContainer_icon}
      />
    </View>
  );
};

export default HomeItem;
