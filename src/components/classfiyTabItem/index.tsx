import React, { CSSProperties } from 'react';
import ClassNames from 'classnames';
import { View, Image } from '@tarojs/components';
import { IListItem } from '@/pages/home/consts';

import styles from './index.module.scss';

export interface ClassfiyTabItemProps extends IListItem {
  onClick?: (record: IListItem) => void;
  classname?: string;
  style?: CSSProperties;
  itemStyle?: CSSProperties;
}

const ClassfiyTabItem: React.FC<ClassfiyTabItemProps> = (props) => {
  const {
    onClick,
    classname = '',
    style = {},
    itemStyle = {},
    ...rest
  } = props;
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
        {productAttri?.classfiy && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            品类：{productAttri.classfiy}
          </View>
        )}
        {productAttri?.caizhi && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            材质：{productAttri.caizhi}
          </View>
        )}
        {productAttri?.xinghao && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            型号：{productAttri.xinghao}
          </View>
        )}
        {productAttri?.gongneng && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            功能：{productAttri.gongneng}
          </View>
        )}
        {productAttri?.shougong && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            是否百搭潮包：{productAttri.shougong}
          </View>
        )}
        {productAttri?.kuanshi && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            款式：{productAttri.kuanshi}
          </View>
        )}
        {productAttri?.mianliao && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            面料分类：{productAttri.mianliao}
          </View>
        )}
        {productAttri?.banxing && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            版型：{productAttri.banxing}
          </View>
        )}
        {productAttri?.xinzhuang && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            形状：{productAttri.xinzhuang}
          </View>
        )}
        {productAttri?.chicun && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            尺寸：{productAttri.chicun}
          </View>
        )}
        {productAttri?.rongliao && (
          <View className={styles.ClassfiyTabItem_right_des} style={itemStyle}>
            容量：{productAttri.rongliao}
          </View>
        )}
      </View>
    </View>
  );
};

export default ClassfiyTabItem;
