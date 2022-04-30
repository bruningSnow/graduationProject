import React, { useState, useEffect } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { PageContainer, ListItemScroll, SwiperList } from '@/components/index';
import { listItems, IListItem } from '@/pages/home/consts';

import { IProduct, productList } from './consts';

import styles from './index.module.scss';

const ProductDetail: React.FC<any> = () => {
  const [swiperCurrent, setSwiperCurrent] = useState<number>(0);
  // 当前商品同类别商品列表
  const [innerListItems, setInnerListItems] = useState<IListItem[]>([]);
  // 当前商品详情页面
  const [product, setProduct] = useState<IProduct>({
    id: 1,
    type: 0,
    bannerList: [],
    contentImageList: [],
  });
  const systemInfo = Taro.getSystemInfoSync();

  const getInnerListItems = (newProduct: IProduct) => {
    const { id: productId, type: productType } = newProduct;
    let newInnerListItems: IListItem[] = [];

    if (!productType) {
      newInnerListItems = listItems;
    } else {
      newInnerListItems = listItems.filter(
        ({ type, id }) => type === productType && id !== productId,
      );
    }

    setInnerListItems(newInnerListItems);
  };

  const init = () => {
    const { id } = Taro.getCurrentInstance()?.router?.params || {};

    if (id) {
      const newProduct =
        productList.find(({ id: prodctId }) => prodctId === parseInt(id)) ||
        product;

      getInnerListItems(newProduct);
      setProduct(newProduct);
    }
  };

  useDidShow(() => {
    init();
    setSwiperCurrent(0);
  });

  return (
    <PageContainer
      className={styles.index}
      title="产品详情"
      type="subPage"
      hasBack
    >
      <SwiperList
        imageList={product.bannerList}
        current={swiperCurrent}
        onChange={setSwiperCurrent}
      />
      <View style={{ marginBottom: '40rpx' }}>
        {product.contentImageList.map((contentImage, contentImageIndex) => (
          <Image
            key={contentImageIndex}
            className={styles.contentImage}
            src={contentImage}
            style={{
              width: systemInfo.screenWidth,
            }}
            mode="widthFix"
          />
        ))}
      </View>
      <ListItemScroll listItems={innerListItems} />
    </PageContainer>
  );
};

export default ProductDetail;
