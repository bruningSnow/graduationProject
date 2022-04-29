import React, { CSSProperties } from 'react';
import ClassName from 'classnames';
import Taro from '@tarojs/taro';
import { CoverView, CoverImage } from '@tarojs/components';
import { tabList } from './consts';

import styles from './index.module.scss';

export type TCurrentData = {
  title: string;
  path?: string;
  dotText?: string | number;
};

export type TTab = {
  title: string;
  iconUrl: string;
  selectedIconUrl: string;
  path?: string;
  dot?: boolean;
  dotText?: string | number;
  dotBg?: string;
  dotColor?: string;
};

export interface TabBarProps {
  current: number;
  style?: CSSProperties;
  classname?: string;
  onClick?(current: number, currentData: TCurrentData): void;
}

const TabBar: React.FC<TabBarProps> = (props) => {
  const { current, style = {}, classname = '', onClick = () => {} } = props;

  /**点击tab 事件 */
  const onClickTab = (index: number, { title, path, dotText }: objectType) => {
    const { route = '' } = Taro.getCurrentPages()[0] || {};
    if (route && path.slice(1) !== route) {
      Taro.switchTab({ url: path });
    }
    onClick(index, { title, path, dotText });
  };

  const renderTab = (tab: TTab, index: number = 1) => {
    const { title, iconUrl, selectedIconUrl, path = '' } = tab;
    return (
      <CoverView
        className={styles.tab}
        onClick={() => onClickTab(index, { title, path })}
      >
        <CoverView>
          <CoverImage
            className={styles.tab_icon}
            src={current === index ? selectedIconUrl : iconUrl}
          />
        </CoverView>
        <CoverView
          style={{
            fontSize: `30rpx`,
            color: current === index ? '#83a6ab' : '#a6a4a6',
          }}
        >
          {tab.title}
        </CoverView>
      </CoverView>
    );
  };
  return (
    <CoverView
      className={ClassName(styles.tabBar, classname)}
      style={{ ...style, backgroundColor: '#fff' }}
    >
      {tabList.map((tab, index) => renderTab(tab, index + 1))}
    </CoverView>
  );
};

export default TabBar;
