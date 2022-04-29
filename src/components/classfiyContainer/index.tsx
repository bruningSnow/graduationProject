import Taro from '@tarojs/taro';
import React, { CSSProperties } from 'react';
import ClassNames from 'classnames';
import { View } from '@tarojs/components';
import ClassfiyContainerItem, {
  ClassfiyContainerItemProps,
} from '../classfiyContainerItem';

import styles from './index.module.scss';

export interface ClassfiyContainerProps {
  classname?: string;
  style?: CSSProperties;
  title?: string;
  listItems?: Omit<ClassfiyContainerItemProps, 'classname' | 'style'>[];
  onClickMore?: () => void;
}

const ClassfiyContainer: React.FC<ClassfiyContainerProps> = (props) => {
  const { classname = '', style = {}, title, listItems, onClickMore } = props;

  return (
    <View
      className={ClassNames(styles.ClassfiyContainer, classname)}
      style={style}
    >
      <View className={styles.ClassfiyContainer_title}>
        <View className={styles.ClassfiyContainer_title_text}>{title}</View>
        <View
          className={styles.ClassfiyContainer_title_more}
          onClick={() => onClickMore?.()}
        >
          {'>> 更多'}
        </View>
      </View>
      <View className={styles.SearchInputContainer}>
        {(listItems || []).map((item, itemIndex) => (
          <ClassfiyContainerItem
            {...item}
            key={itemIndex}
            onClick={({ id }) =>
              Taro.navigateTo({
                url: `/subPackages/productDetail/index?id=${id}`,
              })
            }
          />
        ))}
      </View>
    </View>
  );
};

export default ClassfiyContainer;
