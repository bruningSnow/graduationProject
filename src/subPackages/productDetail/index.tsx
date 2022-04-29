import React, { useState, useEffect } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { PageContainer, ListItemScroll, SwiperList } from '@/components/index';
import { listItems, IListItem } from '@/pages/home/consts';

import { IProduct, productList } from './consts';

import styles from './index.module.scss';

const ProductDetail: React.FC<any> = () => {
  const [swiperCurrent, setSwiperCurrent] = useState<number>(0);
  const [innerListItems, setInnerListItems] = useState<IListItem[]>([]);
  const [product, setProduct] = useState<IProduct>({
    id: 1,
    bannerList: [],
    contentImageList: [],
  });

  useEffect(() => {
    const { id } = Taro.getCurrentInstance()?.router?.params || {};

    if (id) {
      const newInnerListItems = listItems.filter(
        ({ id: itemId }) => itemId !== parseInt(id),
      );
      const newProduct =
        productList.find(({ id: prodctId }) => prodctId === parseInt(id)) ||
        product;

      setInnerListItems(newInnerListItems);
      setProduct(newProduct);
    }
  }, []);

  useDidShow(() => {
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
      <View style={{ marginBottom: '40rpx', overflow: 'hidden' }}>
        {product.contentImageList.map((contentImage, contentImageIndex) => (
          <Image
            key={contentImageIndex}
            className={styles.contentImage}
            src={contentImage}
            mode="aspectFill"
          />
        ))}
      </View>
      <ListItemScroll listItems={innerListItems} />
    </PageContainer>
  );
};

export default ProductDetail;
