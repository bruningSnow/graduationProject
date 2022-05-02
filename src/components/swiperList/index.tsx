import React, { CSSProperties } from 'react';
import ClassNames from 'classnames';
import Taro from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';

import styles from './index.module.scss';

export interface SwiperListProps {
  classname?: string;
  style?: CSSProperties;
  imageList: string[];
  onChange: any;
  current: number;
}

const SwiperList: React.FC<SwiperListProps> = (props) => {
  const { imageList, onChange, current, classname = '', style = {} } = props;
  const systemInfo = Taro.getSystemInfoSync();

  return (
    <Swiper
      className={ClassNames(styles.swiper, classname)}
      style={style}
      indicatorColor="#999"
      indicatorActiveColor="#333"
      circular
      indicatorDots={imageList.length > 1}
      autoplay
      current={current}
      onChange={({ detail }) => onChange(detail.current)}
    >
      {imageList.map((banner, bannerIndex) => (
        <SwiperItem className={styles.SwiperItem} key={bannerIndex}>
          <View className={styles.swiperItem_ImageContainer}>
            <Image
              src={banner}
              style={{
                width: systemInfo.screenWidth,
                height: (systemInfo.screenWidth / 16) * 9,
              }}
            />
          </View>
        </SwiperItem>
      ))}
    </Swiper>
  );
};

export default SwiperList;
