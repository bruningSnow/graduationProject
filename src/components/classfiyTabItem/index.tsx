import React, { CSSProperties } from 'react';
import ClassNames from 'classnames';
import { View, Image } from '@tarojs/components';
import { IListItem } from '@/pages/home/consts';

import styles from './index.module.scss';

export interface ClassfiyTabItemProps extends IListItem {
  onClick?: (record: IListItem) => void;
  classname?: string;
  style?: CSSProperties;
}

const ClassfiyTabItem: React.FC<ClassfiyTabItemProps> = (props) => {
  const { onClick, classname = '', style = {}, ...rest } = props;
  const { imgSrc, sourceName, productAttri } = rest;

  return (
    <View
      className={ClassNames(styles.ClassfiyTabItem, classname)}
      style={style}
      onClick={() => onClick?.(rest)}
    >
      <Image
        className={styles.ClassfiyTabItem_imgSrc}
        src={imgSrc}
        mode="scaleToFill"
      />
      <View className={styles.ClassfiyTabItem_right}>
        <View className={styles.ClassfiyTabItem_right_title}>{sourceName}</View>
        <View className={styles.ClassfiyTabItem_right_des}>
          品类：{productAttri?.classfiy}
        </View>
        <View className={styles.ClassfiyTabItem_right_des}>
          材质：{productAttri?.material}
        </View>
        <View className={styles.ClassfiyTabItem_right_des}>
          款式：{productAttri?.shape}
        </View>
      </View>
    </View>
  );
};

export default ClassfiyTabItem;
