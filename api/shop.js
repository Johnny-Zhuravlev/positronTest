const products = [
  {
    id: 1,
    img: 'img/products/air_hood_gh2.png',
    label: 'Вытяжное устройство G2H',
    desc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
    code: 'G2H1065',
    price: '12644',
    quantity: 1,
  },
  {
    id: 2,
    img: 'img/products/air_hood_bxc.png',
    label: 'Вытяжное устройство BXC',
    desc: '14-78/172 м3/ч / гидрорегулируемый расход / от датчика присутствия',
    code: 'BXC1065',
    price: '13444',
    quantity: 2,
  },
  {
    id: 3,
    img: 'img/products/air_hood_ghn.png',
    label: 'Вытяжное устройство GHN',
    desc: '16-82/178 м3/ч / гидрорегулируемый расход / от датчика присутствия',
    code: 'GHN12938',
    price: '14440',
    quantity: 1,
  }
]

const slides = [
  {
    id: 1,
    img: 'img/products/air_hood_gh2.png',
    name: 'G2H',
    desc: 'Вытяжное устройство для механической системы вентиляции',
    code: 'G2H1065',
    min_price: '6 110',
    max_price: '44 292',
    min_price_euro: '60.23',
    max_price_euro: '588.18'
  },
  {
    id: 2,
    img: 'img/products/air_hood_bxc.png',
    name: 'BXC',
    desc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
    code: 'BXC1065',
    min_price: '6 643',
    max_price: '48 330',
    min_price_euro: '65.33',
    max_price_euro: '602.89'
  },
  {
    id: 3,
    img: 'img/products/air_hood_ghn.png',
    name: 'GHN',
    desc: 'Вытяжное устройство с датчиком отсутствия',
    code: 'GHN1238722',
    min_price: '7 443',
    max_price: '52 330',
    min_price_euro: '70.60',
    max_price_euro: '621.60'
  },
  {
    id: 4,
    img: 'img/products/air_hood_tda.png',
    name: 'TDA',
    desc: 'Вытяжное устройство с датчиком присутствия',
    code: 'GHN12938',
    min_price: '8 992',
    max_price: '56 440',
    min_price_euro: '77.60',
    max_price_euro: '643.86'
  },
  {
    id: 14,
    img: 'img/products/air_hood_tda.png',
    name: 'TDA',
    desc: 'Вытяжное устройство с датчиком присутствия',
    code: 'GHN12938',
    min_price: '8 992',
    max_price: '56 440',
    min_price_euro: '77.60',
    max_price_euro: '643.86'
  },
  {
    id: 15,
    img: 'img/products/air_hood_gh2.png',
    name: 'G2H',
    desc: 'Вытяжное устройство для механической системы вентиляции',
    code: 'G2H1065',
    max_price: '6 110',
    max_price: '44 292',
    min_price_euro: '60.23',
    max_price_euro: '588.18'
  },
  {
    id: 23,
    img: 'img/products/air_hood_ghn.png',
    name: 'GHN',
    desc: 'Вытяжное устройство с датчиком отсутствия',
    code: 'GHN1238722',
    min_price: '7 443',
    max_price: '52 330',
    min_price_euro: '70.60',
    max_price_euro: '621.60'
  },
  {
    id: 55,
    img: 'img/products/air_hood_bxc.png',
    name: 'BXC',
    desc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
    code: 'BXC1065',
    min_price: '6 643',
    max_price: '48 330',
    min_price_euro: '65.33',
    max_price_euro: '602.89'
  },
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(products), 100)
  },
  getSlides (cv) {
    setTimeout(() => cv(slides), 100)
  },
}