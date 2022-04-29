import React, { CSSProperties } from 'react';
import ClassNames from 'classnames';
import { View, Image } from '@tarojs/components';
import { IListItem } from '@/pages/home/consts';

import styles from './index.module.scss';

export interface ClassfiyContainerItemProps extends IListItem {
  onClick?: (record: IListItem) => void;
  classname?: string;
  style?: CSSProperties;
}

const ClassfiyContainerItem: React.FC<ClassfiyContainerItemProps> = (props) => {
  const { onClick, classname = '', style = {}, ...rest } = props;
  const { imgSrc, sourceName } = rest;

  return (
    <View
      className={ClassNames(styles.listItemContainer, classname)}
      style={{ position: 'relative', ...style }}
      onClick={() => onClick?.(rest)}
    >
      <View className={styles.listItemContainer_imgSrcContainer}>
        <Image
          className={styles.listItemContainer_imgSrc}
          src={imgSrc}
          lazyLoad={true}
          mode="aspectFill"
        />
      </View>
      <View className={styles.listItemContainer_footer}>{sourceName}</View>
    </View>
  );
};

export default ClassfiyContainerItem;
