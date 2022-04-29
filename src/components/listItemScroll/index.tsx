import React, { CSSProperties } from 'react';
import Taro from '@tarojs/taro';
import Classnames from 'classnames';
import { ScrollView } from '@tarojs/components';
import { ListItem } from '@/components/index';
import { IListItem } from '@/pages/home/consts';

import styles from './index.module.scss';

export interface ListItemScrollProps {
  className?: string;
  style?: CSSProperties;
  listItems: IListItem[];
}

const ListItemScroll: React.FC<ListItemScrollProps> = (props) => {
  const { className, style, listItems } = props;

  return (
    <ScrollView
      className={Classnames(styles.index_scrollview, className)}
      scrollY
      scrollWithAnimation
      style={style}
    >
      {listItems.map((item, itemIndex) => (
        <ListItem
          {...item}
          style={{ marginRight: !(itemIndex % 2) ? '40rpx' : 0 }}
          onClick={({ id }) =>
            Taro.navigateTo({
              url: `/subPackages/productDetail/index?id=${id}`,
            })
          }
        />
      ))}
    </ScrollView>
  );
};

export default ListItemScroll;
