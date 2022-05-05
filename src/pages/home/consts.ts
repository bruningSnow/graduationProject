type TProductAttri = {
  classfiy: string; // 系列分类
  caizhi?: string; // 材质
  xinghao?: string; // 型号
  gongneng?: string; // 功能
  shougong?: string; // 是否手工
  kuanshi?: string; // 款式
  mianliao?: string; // 面料分类
  banxing?: string; // 版型
  xinzhuang?: string; // 形状
  chicun?: string; // 尺寸
  rongliao?: string; // 容量
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
    image: 'https://51nbimg.u51.com/dc97b23b5fb846c7916cde129253ef53.png',
  },
  {
    key: '手工系列',
    value: 2,
    image: 'https://51nbimg.u51.com/f08314fbaf434930a90dba32c65c2f9b.png',
  },
  {
    key: '彩妆系列',
    value: 3,
    image: 'https://51nbimg.u51.com/44220e25a0ad4597858ee49ad99127b1.png',
  },
  {
    key: '服装系列',
    value: 4,
    image: 'https://51nbimg.u51.com/b0691d07d35744cea8cd9322d5cd0456.png',
  },
  {
    key: '配饰系列',
    value: 5,
    image: 'https://51nbimg.u51.com/ccd1d5cd1e9748119982d8bdcca3403f.png',
  },
  {
    key: '生活百货系列',
    value: 6,
    image: 'https://51nbimg.u51.com/2b732259f73a43ce87a5aa66934a83b3.png',
  },
];

export const listItems: IListItem[] = [
  {
    id: 1,
    imgSrc: 'https://51nbimg.u51.com/afa8d4b6872f4e8a96a3c3ebceddfd7c.jpg',
    sourceName: '手机壳',
    type: 1,
    productAttri: {
      classfiy: '数码周边',
      caizhi: '液态硅胶',
      kuanshi: '保护壳',
      xinghao: 'HUAWEI/华为',
    },
  },
  {
    id: 2,
    imgSrc: 'https://51nbimg.u51.com/ea92a54dc0054744aba49fa489e20828.jpg',
    sourceName: '鼠标垫',
    type: 1,
    productAttri: {
      classfiy: '数码周边',
      caizhi: '胶垫',
      xinzhuang: '圆形',
    },
  },
  {
    id: 3,
    imgSrc: 'https://51nbimg.u51.com/fdfc34f4b9334f69831354bae382904a.jpg',
    sourceName: '充电宝',
    type: 1,
    productAttri: {
      classfiy: '数码周边',
      xinghao: 'sense 6',
      caizhi: '塑料',
    },
  },
  {
    id: 4,
    imgSrc: 'https://51nbimg.u51.com/730b8698ef414b8bb7550a621d0de103.jpg',
    sourceName: '耳机盒',
    type: 1,
    productAttri: {
      classfiy: '数码周边',
      caizhi: '硅胶',
      xinghao: 'airpods1/2/3/pro代',
    },
  },
  {
    id: 41,
    imgSrc: 'https://51nbimg.u51.com/ecee93647cac43fc86f08cf113dd1015.jpg',
    sourceName: '移动U盘',
    type: 1,
    productAttri: {
      classfiy: '数码周边',
      xinghao: 'F308(64G)',
      rongliao: '64GB',
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
