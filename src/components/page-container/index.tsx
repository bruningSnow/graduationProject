import React, { CSSProperties } from 'react';
import ClassName from 'classnames';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { NavBar, NavBarProps } from '@/components/index';

import styles from './index.module.scss';

export interface PageContainerProps extends NavBarProps {
  className?: string;
  style?: CSSProperties;
}

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { className, children, style, ...rest } = props;

  return (
    <View className={styles.index}>
      <NavBar {...rest} />
      <View className={ClassName(styles.content, className)} style={style}>
        {children}
      </View>
    </View>
  );
};

export default PageContainer;
