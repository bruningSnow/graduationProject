type TProductAttri = {
  classfiy: string;
  material: string;
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
    image: 'https://51nbimg.u51.com/d2ef35d1c7d9471ca2cc7b4696950f84.png',
  },
  {
    key: '手工系列',
    value: 2,
    image: 'https://51nbimg.u51.com/c4e5051f603e43a18c0b85a0e0b0f07d.png',
  },
  {
    key: '彩妆系列',
    value: 3,
    image: 'https://51nbimg.u51.com/daea9104a43a4c93b1724a93ccfa9815.png',
  },
  {
    key: '服装系列',
    value: 4,
    image: 'https://51nbimg.u51.com/daea9104a43a4c93b1724a93ccfa9815.png',
  },
  {
    key: '配饰系列',
    value: 5,
    image: 'https://51nbimg.u51.com/23a350bc0d8d40b99a486941b16a0006.png',
  },
  {
    key: '生活百货系列',
    value: 6,
    image: 'https://51nbimg.u51.com/4274fe8d7e004a2885f12d64fd0faeef.png',
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
      shape: '款式',
    },
  },
  {
    id: 7,
    imgSrc: 'https://51nbimg.u51.com/fbbd8393e17741f8a0f485b2f6834bd3.jpg',
    sourceName: '散粉',
    type: 3,
    productAttri: {
      classfiy: '彩妆',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 8,
    imgSrc: 'https://51nbimg.u51.com/cbca7029642649fe986c4588bb83f689.jpg',
    sourceName: '化妆包',
    type: 3,
    productAttri: {
      classfiy: '彩妆',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 9,
    imgSrc: 'https://51nbimg.u51.com/d82f957a57974a388c91c302a68a8761.jpeg',
    sourceName: '护肤套装',
    type: 3,
    productAttri: {
      classfiy: '彩妆',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 10,
    imgSrc: '',
    sourceName: '口红',
    type: 3,
    productAttri: {
      classfiy: '彩妆',
      material: '--',
      shape: '--',
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
      shape: '款式',
    },
  },
  {
    id: 16,
    imgSrc: 'https://51nbimg.u51.com/ef6b6fefa7cd4d1eab8f8e1b364241b9.jpeg',
    sourceName: '滑板',
    type: 6,
    productAttri: {
      classfiy: '生活百货',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 17,
    imgSrc: 'https://51nbimg.u51.com/8a84dfdd73b14b6ab792b22737f90d2d.jpeg',
    sourceName: '抱枕',
    type: 6,
    productAttri: {
      classfiy: '生活百货',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 18,
    imgSrc: 'https://51nbimg.u51.com/af4d3783984841c5aac88f3b3b14da04.jpeg',
    sourceName: '杯子',
    type: 6,
    productAttri: {
      classfiy: '生活百货',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 19,
    imgSrc: '',
    sourceName: '笔袋',
    type: 6,
    productAttri: {
      classfiy: '生活百货',
      material: '--',
      shape: '--',
    },
  },
];
