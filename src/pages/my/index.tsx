import React, { useState } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { PageContainer, TabBar, HomeItem } from '@/components/index';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => {
  const [isGetUser, setIsGetUser] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<objectType>({
    nickName: '登陆/注册',
    avatarUrl: 'https://i.ibb.co/jg602Sr/image.png',
  });

  const getUser = () => {
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        setUserProfile(res.userInfo);
        setIsGetUser(true);
        Taro.setStorage({
          key: 'userProfile',
          data: JSON.stringify(res.userInfo),
        });
      },
    });
  };

  useDidShow(() => {
    Taro.getStorage({
      key: 'userProfile',
      success: function (res) {
        if (res) {
          setIsGetUser(true);
          setUserProfile(JSON.parse(res.data));
        }
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
        <View className={styles.myTitleContainer_imgContainer}>
          <Image
            className={styles.myTitleContainer_img}
            src={userProfile.avatarUrl}
          />
        </View>
        {isGetUser ? (
          <View className={styles.myTitleContainer_text} onClick={getUser}>
            {userProfile.nickName}
          </View>
        ) : (
          <AtButton className={styles.myTitleContainer_text} onClick={getUser}>
            {userProfile.nickName}
          </AtButton>
        )}
      </View>

      <View className={styles.myItemContainer}>
        <HomeItem text="关于我们" />
      </View>
      <TabBar current={3} />
    </PageContainer>
  );
};

export default Index;
