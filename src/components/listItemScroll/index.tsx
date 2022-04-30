import React, { CSSProperties } from 'react';
import Taro from '@tarojs/taro';
import Classnames from 'classnames';
import { View } from '@tarojs/components';
import { ClassfiyContainerItem } from '@/components/index';
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
    <View
      className={Classnames(styles.index_scrollview, className)}
      style={style}
    >
      {listItems.map((item, itemIndex) => (
        <ClassfiyContainerItem
          {...item}
          key={itemIndex}
          style={{ width: 'calc(50% - 30rpx)' }}
          onClick={({ id }) =>
            Taro.navigateTo({
              url: `/subPackages/productDetail/index?id=${id}`,
            })
          }
        />
      ))}
    </View>
  );
};

export default ListItemScroll;
