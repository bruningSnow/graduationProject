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
    imgSrc: 'https://51nbimg.u51.com/3bb66291501c4d998a267f788623c209.jpg',
    sourceName: '移动U盘',
    type: 1,
    productAttri: {
      classfiy: '数码周边',
      material: '金属',
      pattern: '九色鹿',
      shape: '插拔移动式',
    },
  },
  {
    id: 2,
    imgSrc: 'https://51nbimg.u51.com/387e20ea4b90426eac2e92fdb1455ace.jpg',
    sourceName: '蓝牙耳机盒',
    type: 1,
    productAttri: {
      classfiy: '数码周边',
      material: '塑料',
      pattern: '--',
      shape: '充电款',
    },
  },
  {
    id: 3,
    imgSrc: 'https://51nbimg.u51.com/aaf8a0330a7c49048f1849ed12089623.jpg',
    sourceName: '耳机',
    type: 1,
    productAttri: {
      classfiy: '数码周边',
      material: '--',
      pattern: '九色鹿',
      shape: '戴耳式',
    },
  },
  {
    id: 4,
    imgSrc: 'https://51nbimg.u51.com/237ccf4363c043d1a46244c1fc61f91f.jpg',
    sourceName: '充电宝',
    type: 1,
    productAttri: {
      classfiy: '数码周边',
      material: '金属',
      pattern: '--',
      shape: '便携移动式',
    },
  },
  {
    id: 5,
    imgSrc: 'https://51nbimg.u51.com/237ccf4363c043d1a46244c1fc61f91f.jpgg',
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
