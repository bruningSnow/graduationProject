import React, { useState, useEffect } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { PageContainer, TabBar } from '@/components/index';

import { ComponentList } from './index.config';
import styles from './index.module.scss';

const Index: React.FC<{}> = () => {
  const [] = useState<objectType>({
    nikeName: '登陆/注册',
  });

  useDidShow(() => {
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log('res.userInfo =>', res.userInfo);
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        // this.setState({
        //   userInfo: res.userInfo,
        //   hasUserInfo: true
        // })
      },
    });
  });

  return (
    <PageContainer
      className={styles.index}
      title="个人中心"
      type="homePage"
      hasBack={false}
    >
      <View className={styles.myTitleContainer}>
        <Image
          className={styles.myTitleContainer_img}
          src="https://i.ibb.co/jg602Sr/image.png"
        />
        <View className={styles.myTitleContainer_text}>燃情学</View>
      </View>
      <TabBar current={2} />
    </PageContainer>
  );
};

export default Index;
