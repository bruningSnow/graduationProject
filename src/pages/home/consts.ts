type TProductAttri = {
  classfiy: string; // 分类
  caizhi?: string; // 材质
  xinghao?: string; // 型号
  gongneng?: string; // 功能
  shougong?: string; // 是否百搭潮包
  kuanshi?: string; // 款式
  mianliao?: string; // 面料分类
  banxing?: string; // 版型
  xinzhuang?: string; // 形状
  chicun?: string; // 尺寸
  rongliao?: string; // 容量
  dianchironglian?: string; // 电池容量
  qudongqi?: string; // 驱动器
  jiekou?: string; // 接口
  gongyi?: string; // 工艺
  guige?: string; // 规格
  xiliesehao?: string; // 系列色号
  chanpinjinghanlian?: string; // 产品净含量
  yanse?: string; // 颜色
  xiemian?: string; // 鞋面
  banmian?: string; // 板面
  chengzhong?: string; // 承重
  shuliang?: string; // 数量
  baozhuang?: string; // 包装
  gongxiao?: string; // 功效
  shihefuzhi?: string; // 适合肤质
};
export interface IListItem {
  id: number;
  imgSrc: string;
  type: number; // 1 e潮品；2 百搭潮包；3 国潮彩妆；4 潮玩穿搭；5 潮纹织物；6 潮玩好物
  sourceName: string;
  productAttri?: TProductAttri;
}

export interface IProductType {
  key: 'e潮品' | '百搭潮包' | '国潮彩妆' | '潮玩穿搭' | '潮纹织物' | '潮玩好物';
  value: number;
  image: string;
}

export const swiperImageList: string[] = [
  'https://51nbimg.u51.com/1d195c2332e644c88ad5da74ad9fb125.jpg',
  '',
  'https://51nbimg.u51.com/18d7f6441208412384f8de73f760bd8e.jpg',
  'https://51nbimg.u51.com/59150c7a3a2c419990d78d970259ecb3.jpg',
  'https://51nbimg.u51.com/aa8b210d8d7c449995c1a146830a82d9.jpg',
  'https://51nbimg.u51.com/e059f485a2154b2b8792aec381de6426.jpg',
];

export const productTypeList: IProductType[] = [
  {
    key: 'e潮品',
    value: 1,
    image: 'https://51nbimg.u51.com/dc97b23b5fb846c7916cde129253ef53.png',
  },
  {
    key: '百搭潮包',
    value: 2,
    image: 'https://51nbimg.u51.com/f08314fbaf434930a90dba32c65c2f9b.png',
  },
  {
    key: '国潮彩妆',
    value: 3,
    image: 'https://51nbimg.u51.com/44220e25a0ad4597858ee49ad99127b1.png',
  },
  {
    key: '潮玩穿搭',
    value: 4,
    image: 'https://51nbimg.u51.com/b0691d07d35744cea8cd9322d5cd0456.png',
  },
  {
    key: '潮纹织物',
    value: 5,
    image: 'https://51nbimg.u51.com/ccd1d5cd1e9748119982d8bdcca3403f.png',
  },
  {
    key: '潮玩好物',
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
      classfiy: 'e潮品',
      caizhi: '液态硅胶',
      kuanshi: '保护壳',
      xinghao: 'IPone13',
    },
  },
  {
    id: 2,
    imgSrc: 'https://51nbimg.u51.com/08afda745401457ba96064ac90a72ccf.jpg',
    sourceName: '鼠标垫',
    type: 1,
    productAttri: {
      classfiy: 'e潮品',
      caizhi: '正面布料/底面橡胶',
      xinzhuang: '圆形',
      chicun: '30*30/40*40/50*50 (cm)',
    },
  },
  {
    id: 3,
    imgSrc: 'https://51nbimg.u51.com/fdfc34f4b9334f69831354bae382904a.jpg',
    sourceName: '充电宝',
    type: 1,
    productAttri: {
      classfiy: 'e潮品',
      chicun: '官方标配',
      caizhi: '塑料',
    },
  },
  {
    id: 4,
    imgSrc: 'https://51nbimg.u51.com/730b8698ef414b8bb7550a621d0de103.jpg',
    sourceName: '耳机盒',
    type: 1,
    productAttri: {
      classfiy: 'e潮品',
      dianchironglian: '400mAh',
      qudongqi: '40mm',
    },
  },
  {
    id: 41,
    imgSrc: 'https://51nbimg.u51.com/ecee93647cac43fc86f08cf113dd1015.jpg',
    sourceName: '移动U盘',
    type: 1,
    productAttri: {
      classfiy: 'e潮品',
      jiekou: 'USB2.0',
      rongliao: '32GB/64GB',
    },
  },
  {
    id: 5,
    imgSrc: 'https://51nbimg.u51.com/e538fd6dd8cf4015824e20f39d27226c.jpg',
    sourceName: '百搭潮包包',
    type: 2,
    productAttri: {
      classfiy: '百搭潮包',
    },
  },
  {
    id: 6,
    imgSrc: 'https://51nbimg.u51.com/e538fd6dd8cf4015824e20f39d27226c.jpg',
    sourceName: '双肩包',
    type: 2,
    productAttri: {
      classfiy: '百搭潮包',
      caizhi: '涤纶',
      gongyi: '丝网印刷',
    },
  },
  {
    id: 61,
    imgSrc: 'https://51nbimg.u51.com/3be88bd5faa44fa5ae700c326fb3741e.jpg',
    sourceName: '钱包',
    type: 2,
    productAttri: {
      classfiy: '百搭潮包',
      caizhi: 'PU软皮磨砂料',
      guige: '13.5*9.5cm',
    },
  },
  {
    id: 7,
    imgSrc: 'https://51nbimg.u51.com/03ab0710193a4779af6de5e229967a7e.jpg',
    sourceName: '散粉',
    type: 3,
    productAttri: {
      classfiy: '国潮彩妆',
      gongxiao: '隐形毛孔、定妆',
    },
  },
  {
    id: 8,
    imgSrc: 'https://51nbimg.u51.com/80db4770b5824490b768c7a95a2946da.jpg',
    sourceName: '化妆包',
    type: 3,
    productAttri: {
      classfiy: '国潮彩妆',
      caizhi: 'PU皮面',
      chicun: '19*13*10厘米',
    },
  },
  {
    id: 9,
    imgSrc: 'https://51nbimg.u51.com/118b87ba447f451a8d9cd529c13bd19f.jpg',
    sourceName: '护肤套装',
    type: 3,
    productAttri: {
      classfiy: '国潮彩妆',
      gongxiao: '控油防嗮、轻薄透气',
      shihefuzhi: '任何肤质',
    },
  },
  {
    id: 10,
    imgSrc: 'https://51nbimg.u51.com/c53ac0f5f26643aa93dabf5717dfcf71.jpg',
    sourceName: '口红',
    type: 3,
    productAttri: {
      classfiy: '国潮彩妆',
      xiliesehao: '四色藻井',
      chanpinjinghanlian: '3.2G/支',
    },
  },
  {
    id: 11,
    imgSrc: 'https://51nbimg.u51.com/b43995371e604f6fb8873260e6a2af43.jpg',
    sourceName: '短袖',
    type: 4,
    productAttri: {
      classfiy: '潮玩穿搭',
      caizhi: '纯棉',
      yanse: '多色可选',
    },
  },
  {
    id: 12,
    imgSrc: 'https://51nbimg.u51.com/5fc4d8f53e51404abe5ab14c922b587c.jpg',
    sourceName: '卫衣',
    type: 4,
    productAttri: {
      classfiy: '潮玩穿搭',
      mianliao: '80%棉、20%涤纶',
      gongyi: '数码印花',
    },
  },
  {
    id: 121,
    imgSrc: 'https://51nbimg.u51.com/6a13330f88d14948943d5a8cb3a3691c.jpg',
    sourceName: '鞋子',
    type: 4,
    productAttri: {
      classfiy: '潮玩穿搭',
      yanse: '黑色标准版、白色标准版',
      xiemian: '粒面皮',
    },
  },
  {
    id: 13,
    imgSrc: 'https://51nbimg.u51.com/1bde43eec6ec46f093b4c672a6cb81be.jpg',
    sourceName: '手表',
    type: 5,
    productAttri: {
      classfiy: '潮纹织物',
      caizhi: '塑钢',
      yanse: '多色可选',
    },
  },
  {
    id: 14,
    imgSrc: 'https://51nbimg.u51.com/867e4b3cf7954b3c89e7f08a890ace2f.jpg',
    sourceName: '丝巾',
    type: 5,
    productAttri: {
      classfiy: '潮纹织物',
      mianliao: '真丝',
      yanse: '黑、白、粉、黄',
    },
  },
  {
    id: 15,
    imgSrc: 'https://51nbimg.u51.com/3696b497514e4bfcb6fd67f5fd3e4451.jpg',
    sourceName: '发带',
    type: 5,
    productAttri: {
      classfiy: '潮纹织物',
      banxing: '标准',
      yanse: '粉色 绿色 橙色 蓝色',
    },
  },
  {
    id: 16,
    imgSrc: 'https://51nbimg.u51.com/9df00b8ccce04929a6be3b56414783a7.jpg',
    sourceName: '滑板',
    type: 6,
    productAttri: {
      classfiy: '潮玩好物',
      banmian: '七层进口加拿大枫木',
      chengzhong: '静态400斤',
    },
  },
  {
    id: 17,
    imgSrc: 'https://51nbimg.u51.com/b06913fb8e554f6b8380fcd2943b301c.jpg',
    sourceName: '抱枕',
    type: 6,
    productAttri: {
      classfiy: '潮玩好物',
      mianliao: '斜纹科技面料，棉麻混纺',
      gongyi: '热转印工艺',
    },
  },
  {
    id: 24,
    imgSrc: 'https://51nbimg.u51.com/89cbb4d01fdf4ae6923e7e8bcb597fdd.jpg',
    sourceName: '隔热垫',
    type: 6,
    productAttri: {
      classfiy: '潮玩好物',
      chicun: '圆形/103*103*8mm',
      caizhi: '吸水陶瓷 软木',
      yanse: '可定制自己喜欢的图案',
    },
  },
  {
    id: 18,
    imgSrc: 'https://51nbimg.u51.com/cc01e0f4c8f44c7b8d3a64cd87d52e92.jpg',
    sourceName: '杯子',
    type: 6,
    productAttri: {
      classfiy: '潮玩好物',
      caizhi: '陶瓷',
      rongliao: '400ML',
    },
  },
  {
    id: 19,
    imgSrc: 'https://51nbimg.u51.com/5b089d9aeb244f7fbbcbb41534426925.jpg',
    sourceName: '笔袋',
    type: 6,
    productAttri: {
      classfiy: '潮玩好物',
      caizhi: '帆布，内衬防水尼龙布',
      gongyi: '热转印工艺',
    },
  },
  {
    id: 20,
    imgSrc: 'https://51nbimg.u51.com/8e21744825b744ed86a5a9757c0db7ee.jpg',
    sourceName: '胶带',
    type: 6,
    productAttri: {
      classfiy: '潮玩好物',
      caizhi: '和纸',
      shuliang: '一套四种款式',
    },
  },
  {
    id: 21,
    imgSrc: 'https://51nbimg.u51.com/a2be5439bb8649fdb5e5ca77b3e69928.jpg',
    sourceName: '行李箱',
    type: 6,
    productAttri: {
      classfiy: '潮玩好物',
      caizhi: 'PC（线型碳酸聚酯材料）',
      shuliang: '一套三种款式',
    },
  },
  {
    id: 22,
    imgSrc: 'https://51nbimg.u51.com/54d60d4ea8cc4499a6d4540a89845694.jpg',
    sourceName: '口罩',
    type: 6,
    productAttri: {
      classfiy: '潮玩好物',
      baozhuang: '独立包装',
      gongyi: '热转印工艺',
    },
  },
  {
    id: 23,
    imgSrc: 'https://51nbimg.u51.com/2761abf6a83b49efabd4fdd7f022623a.jpg',
    sourceName: '眼罩',
    type: 6,
    productAttri: {
      classfiy: '潮玩好物',
      gongneng: '遮光助眠，缓解眼疲劳',
      caizhi: '外部100%桑蚕丝，内衬丝绵300ml',
    },
  },
];
