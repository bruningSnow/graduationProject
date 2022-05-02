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

export const swiperImageList: string[] = [
  'https://51nbimg.u51.com/be7bfe2ac9704fceb9be920e62e8a998.jpg',
  'https://51nbimg.u51.com/598b4abeb4224990a8d1dc89d7652b7f.jpg',
  'https://51nbimg.u51.com/02fce4f7616f4da69d5f108cc1d1d77a.jpeg',
  'https://51nbimg.u51.com/e30bd0f1e343408a8e3c7955c5b14f21.jpeg',
  'https://51nbimg.u51.com/cd9fc659c16744c89374696fd0fcb6fd.jpeg',
  'https://51nbimg.u51.com/79f7ae9d9f5345608572ff7a74547191.jpg',
];

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
    imgSrc: '',
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
    imgSrc: '',
    sourceName: '小疯分享',
    type: 2,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      shape: '款式',
    },
  },
  {
    id: 61,
    imgSrc: '',
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
    imgSrc: '',
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
    imgSrc: '',
    sourceName: '小疯分享',
    type: 4,
    productAttri: {
      classfiy: 'U盘',
      material: '不锈钢',
      shape: '款式',
    },
  },
  {
    id: 121,
    imgSrc: '',
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
    imgSrc: 'https://51nbimg.u51.com/7c380ff483ab4d0f8ae2fd3e3e489172.jpeg',
    sourceName: '手表',
    type: 5,
    productAttri: {
      classfiy: '配饰',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 14,
    imgSrc: 'https://51nbimg.u51.com/fa477d2ba32145b6b5731ca5fd315c8f.jpeg',
    sourceName: '丝巾',
    type: 5,
    productAttri: {
      classfiy: '配饰',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 15,
    imgSrc: '',
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
    imgSrc: 'https://51nbimg.u51.com/00db1738453b49e0bcd1d76d84bee179.jpg',
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
    imgSrc: 'https://51nbimg.u51.com/40619838dd4a4230a8d6a8f31db9c746.jpg',
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
    imgSrc: 'https://51nbimg.u51.com/cce95713c2144bf69a33444de6abb474.jpg',
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
    imgSrc: 'https://51nbimg.u51.com/d53e837ecaa3444bae9f2574376db138.jpg',
    sourceName: '笔袋',
    type: 6,
    productAttri: {
      classfiy: '生活百货',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 20,
    imgSrc: 'https://51nbimg.u51.com/f612a4107652406c832d0d22cc6f576a.jpg',
    sourceName: '胶带',
    type: 6,
    productAttri: {
      classfiy: '生活百货',
      material: '--',
      shape: '--',
    },
  },
  {
    id: 21,
    imgSrc: 'https://51nbimg.u51.com/02ca81d9f0b842cf8cfbd0b4f4206749.jpg',
    sourceName: '钱包',
    type: 6,
    productAttri: {
      classfiy: '生活百货',
      material: '--',
      shape: '--',
    },
  },
];
