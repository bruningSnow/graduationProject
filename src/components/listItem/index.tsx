import React, { CSSProperties } from 'react';
import ClassNames from 'classnames';
import { View, Image } from '@tarojs/components';
import { IListItem } from '@/pages/home/consts';
// import IconFont from '../iconfont';

import styles from './index.module.scss';

export interface ListItemProps extends IListItem {
  onClick?: (record: IListItem) => void;
  classname?: string;
  style?: CSSProperties;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { onClick, classname = '', style = {}, ...rest } = props;
  const { imgSrc, sourceIcon, sourceName, pageViews } = rest;

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
      <View className={styles.listItemContainer_footer}>
        <View className={styles.listItemContainer_footerLeft}>
          <Image
            className={styles.listItemContainer_footerLeft_img}
            src={sourceIcon}
            lazyLoad={true}
            mode="aspectFill"
          />
          <View className={styles.listItemContainer_footerLeft_text}>
            {sourceName}
          </View>
        </View>
        <View className={styles.listItemContainer_footerRight}>
          {/* <IconFont name="yanjing" size={30} color="#888888" /> */}
          <View className={styles.listItemContainer_footerRight_text}>
            {pageViews}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
