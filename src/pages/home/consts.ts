type TProductAttri = {
  classfiy: string;
  material: string;
  pattern: string;
  shape: string;
};
export interface IListItem {
  id: number;
  imgSrc: string;
  type: number; // 1 数码周边；2 手工；3 彩妆；4 服装；5 配饰；6 生活百货
  sourceName: string;
  productAttri?: TProductAttri;
}

export interface IProductType {
  key:
    | '数码周边系列'
    | '手工系列'
    | '彩妆系列'
    | '服装系列'
    | '配饰系列'
    | '生活百货系列';
  value: number;
  image: string;
}

export const productTypeList: IProductType[] = [
  {
    key: '数码周边系列',
    value: 1,
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
  },
  {
    key: '手工系列',
    value: 2,
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
  },
  {
    key: '彩妆系列',
    value: 3,
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
  },
  {
    key: '服装系列',
    value: 4,
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
  },
  {
    key: '配饰系列',
    value: 5,
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
  },
  {
    key: '生活百货系列',
    value: 6,
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
  },
];

export const listItems: IListItem[] = [
  {
    id: 1,
    imgSrc: 'https://i.ibb.co/dtp2k1v/QQ20220420-22.jpg',
    sourceName: '小疯分享',
    type: 1,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 2,
    imgSrc: 'https://i.ibb.co/vc9YXQ7/QQ20220420-21.jpg',
    sourceName: '小疯分享',
    type: 1,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 3,
    imgSrc: 'https://i.ibb.co/tPVpZB5/QQ20220420-20.jpg',
    sourceName: '小疯分享',
    type: 1,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 4,
    imgSrc: 'https://i.ibb.co/XXNqc23/QQ20220420-19.jpg',
    sourceName: '小疯分享',
    type: 2,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 5,
    imgSrc: 'https://i.ibb.co/q1dPJXV/QQ20220420-18.jpg',
    sourceName: '小疯分享',
    type: 2,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 6,
    imgSrc: 'https://i.ibb.co/QHQHqHs/QQ20220420-17.jpg',
    sourceName: '小疯分享',
    type: 2,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 7,
    imgSrc: 'https://i.ibb.co/YDxZ3b1/QQ20220420-16.jpg',
    sourceName: '小疯分享',
    type: 3,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 8,
    imgSrc: 'https://i.ibb.co/c6m91CY/QQ20220420-15.jpg',
    sourceName: '小疯分享',
    type: 3,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 9,
    imgSrc: 'https://i.ibb.co/ZMYjqC0/QQ20220420-14.jpg',
    sourceName: '小疯分享',
    type: 3,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 10,
    imgSrc: 'https://i.ibb.co/3MyzWwJ/QQ20220420-13.jpg',
    sourceName: '小疯分享',
    type: 4,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 11,
    imgSrc: 'https://i.ibb.co/gtRLz2Y/image.png',
    sourceName: '小疯分享',
    type: 4,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 12,
    imgSrc: 'https://i.ibb.co/gtRLz2Y/image.png',
    sourceName: '小疯分享',
    type: 4,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 13,
    imgSrc: 'https://i.ibb.co/gtRLz2Y/image.png',
    sourceName: '小疯分享',
    type: 5,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 14,
    imgSrc: 'https://i.ibb.co/gtRLz2Y/image.png',
    sourceName: '小疯分享',
    type: 5,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 15,
    imgSrc: 'https://i.ibb.co/gtRLz2Y/image.png',
    sourceName: '小疯分享',
    type: 5,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 16,
    imgSrc: 'https://i.ibb.co/gtRLz2Y/image.png',
    sourceName: '小疯分享',
    type: 6,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 17,
    imgSrc: 'https://i.ibb.co/gtRLz2Y/image.png',
    sourceName: '小疯分享',
    type: 6,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
  {
    id: 18,
    imgSrc: 'https://i.ibb.co/gtRLz2Y/image.png',
    sourceName: '小疯分享',
    type: 6,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      pattern: '纹样',
      shape: '款式',
    },
  },
];
