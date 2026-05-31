export const CATEGORIES = ['首頁', '第二餐廳', '女二舍餐廳', '研三舍餐廳', '其他']

export const PAYMENT_LABELS = {
  cash: '現金',
  credit: '信用卡',
  linepay: 'LINE Pay',
  jkopay: '街口支付',
  taiwanpay: 'Taiwan Pay',
  easycard: '悠遊卡',
}

export function getStatus(restaurant) {
  const d = new Date()
  const close = d.getDay()
  const cur = d.getHours() * 60 + d.getMinutes()

  if (!restaurant.days.includes(close)) {
    return 'closed';
  }

  for (const slot of restaurant.hours) {
    const [oh, om] = slot.open.split(':').map(Number)
    const [ch, cm] = slot.close.split(':').map(Number)
    const open = oh * 60 + om
    const close = (ch === 23 && cm === 59) ? 24 * 60 : ch * 60 + cm

    if (cur >= open && cur < close) {
      return (close - cur <= 30) ? 'closing' : 'open'
    }
  }
  return 'closed'
}

export const restaurants = [

  // 二餐----------------------------------------------------------------------
  {
    id: 'ama',
    name: '阿嬤的飯桶',
    englishName: "Ama's Bento",
    category: '第二餐廳',
    hours: [{ open: '10:30', close: '13:30' }, { open: '16:30', close: '21:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { name: "無骨雞排飯", price: 70 },
      { name: "蝦捲飯", price: 75 },
      { name: "卡啦雞飯", price: 75 },
      { name: "岩燒烤雞飯", price: 80 },
      { name: "土魠魚飯", price: 80 },
      { name: "蒜泥白肉飯", price: 80 },
      { name: "炸排骨飯", price: 85 },
      { name: "厚切豬排飯", price: 95 },
      { name: "香酥雞排飯", price: 95 },
      { name: "古早味大滷腿", price: 100 },
      { name: "招牌雞腿飯", price: 100 },
      { name: "椒麻雞腿飯", price: 100 },
      { name: "菜飯", price: 55 }
    ],
    payment: ['cash'],
  },

  {
    id: 'taizu',
    name: '太祖魷魚羹',
    englishName: 'Taizu',
    category: '第二餐廳',
    hours: [{ open: '10:30', close: '14:00' }, { open: '16:30', close: '21:00' }],
    days: [0, 1, 2, 3, 4, 5, 6],
    menu: [ 
      { name: "香菇肉燥飯飯", price: 65 },
      { name: "麻婆豆腐飯", price: 70 },
      { name: "肉燥雞絲飯", price: 75 },
      { name: "雞絲飯", price: 65 },
      { name: "燙青菜", price: 40 },
      { name: "酸辣湯", price: 35 },
      { name: "酸辣湯麵/飯", price: 65 },
      { name: "酸辣湯餃(8顆)", price: 85 },
      { name: "香菇肉燥乾麵", price: 65 },
      { name: "香菇肉燥乾米粉", price: 65 },
      { name: "魷魚羹/飯/米粉", price: 70 },
      { name: "赤肉羹麵/飯/米粉", price: 70 },
      { name: "羊肉羹麵/飯/米粉", price: 85 },
      { name: "綜合羹麵/飯/米粉", price: 75 },
      { name: "魷魚/赤肉羹湯", price: 55 },
      { name: "羊肉羹湯", price: 70 },
      { name: "綜合羹湯", price: 60 }
    ],
    payment: ['cash', 'linepay'],
  },

  {
    id: 'laya',
    name: '拉亞漢堡',
    englishName: 'Laya Burger',
    category: '第二餐廳',
    hours: [{ open: '06:00', close: '22:00' }],
    days: [0, 1, 2, 3, 4, 5, 6],
    menu: [
      { name: "無骨雞排飯", price: 70 },
      { name: "蝦捲飯", price: 75 },
      { name: "卡啦雞飯", price: 75 },
      { name: "岩燒烤雞飯", price: 80 },
      { name: "土魠魚飯", price: 80 },
      { name: "蒜泥白肉飯", price: 80 },
      { name: "炸排骨飯", price: 85 },
      { name: "厚切豬排飯", price: 95 },
      { name: "香酥雞排飯", price: 95 },
      { name: "古早味大滷腿", price: 100 },
      { name: "招牌雞腿飯", price: 100 },
      { name: "椒麻雞腿飯", price: 100 },
      { name: "菜飯", price: 55 }
    ],
    payment: ['cash', 'linepay', 'jkopay'],
  },

  {
    id: 'grandma',
    name: '奶奶的魔法廚房',
    englishName: "Grandma's Magic Kitchen",
    category: '第二餐廳',
    hours: [{ open: '09:00', close: '20:00' }],
    days: [1, 2, 3, 4, 5, 6],
    menu: [
      { id: 1, name: '紅油抄手', price: 80 }
    ],
    payment: ['cash', 'linepay', 'jkopay'],
  },

  {
    id: 'teatank',
    name: '茶壇',
    englishName: 'TeaTank',
    category: '第二餐廳',
    hours: [{ open: '10:30', close: '21:45' }],
    days: [0, 1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '珍珠奶茶', price: 65 },
    ],
    payment: ['cash', 'linepay', 'jkopay', 'easycard'],
  },

  {
    id: 'subway',
    name: 'SUBWAY',
    englishName: 'SUBWAY',
    category: '第二餐廳',
    hours: [{ open: '09:00', close: '21:00' }],
    days: [0, 1, 2, 3, 4, 5, 6],
    menu: [
      { id: 1, name: '交給大家了', price: '000' }
    ],
    payment: ['cash', 'credit', 'linepay'],
  },

  {
    id: '7-11',
    name: '7-ELEVEN 交大',
    englishName: '7-ELEVEN Chiao Da',
    category: '第二餐廳',
    hours: [{ open: '00:00', close: '23:59' }],
    days: [0, 1, 2, 3, 4, 5, 6],
    menu: [
      { id: 1, name: '7-11不用菜單吧www', price: '000' }
    ],
    payment: ['cash', 'credit', 'linepay', 'jkopay', 'taiwanpay', 'easycard'],
  },

  {
    id: 'bro',
    name: '強尼兄弟健康廚房 (好像消失了)',
    englishName: 'Johnny Bros Healthy Kitchen',
    category: '第二餐廳',
    hours: [{ open: '11:00', close: '13:30' }, { open: '16:30', close: '23:30' }],
    days: [0, 1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '聽說他倒了', price: '@@' }
    ],
    payment: ['cash', 'linepay', 'jkopay'],
  },
  {
    id: 'mingsong',
    name: '茗松快餐、麵食',
    englishName: 'Mingsong',
    category: '第二餐廳',
    hours: [{ open: '10:30', close: '14:00' }, { open: '17:00', close: '23:00' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '乾麵', price: 50 },
      { id: 2, name: '湯麵', price: 55 },
      { id: 3, name: '炒麵', price: 65 },
      { id: 4, name: '快餐便當', price: 80 },
      { id: 5, name: '貢丸湯', price: 20 },
      { id: 1, name: '乾麵', price: 50 },
      { id: 2, name: '湯麵', price: 55 },
    ],
    payment: ['cash'],
  },
  {
    id: 'juice',
    name: '果汁甜品吧',
    englishName: 'Juice & Dessert Bar',
    category: '第二餐廳',
    hours: [{ open: '10:00', close: '23:00' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '西瓜汁', price: 45 },
      { id: 2, name: '芒果冰', price: 60 },
      { id: 3, name: '木瓜牛奶', price: 50 },
      { id: 4, name: '豆花', price: 35 },
    ],
    payment: ['cash', 'linepay'],
  },
  {
    id: 'fujimura',
    name: '藤村屋滷味',
    englishName: 'Fujimura Braised',
    category: '第二餐廳',
    hours: [{ open: '11:00', close: '23:30' }],
    days: [2, 3, 4, 5, 6],
    menu: [
      { id: 1, name: '綜合滷味', price: 60 },
      { id: 2, name: '鴨血', price: 20 },
      { id: 3, name: '豆干', price: 15 },
      { id: 4, name: '茶葉蛋', price: 10 },
      { id: 5, name: '海帶', price: 15 },
    ],
    payment: ['cash'],
  },
  {
    id: 'donburi',
    name: '和食軒丼飯',
    englishName: 'He Shi Hsuan Donburi',
    category: '第二餐廳',
    hours: [{ open: '11:00', close: '13:30' }, { open: '16:30', close: '23:00' }],
    days: [0, 1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '親子丼', price: 110 },
      { id: 2, name: '牛丼', price: 120 }
    ],
    payment: ['cash', 'linepay'],
  },
  {
    id: 'su-yi-yuan',
    name: '素怡園',
    englishName: 'Su Yi Yuan Vegetarian',
    category: '第二餐廳',
    hours: [{ open: '10:30', close: '14:00' }, { open: '16:30', close: '23:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '自助餐不需要菜單吧www', price: '000' }
    ],
    payment: ['cash'],
  },
  {
    id: 'congee',
    name: '粥羞餓日',
    englishName: 'Congee',
    category: '第二餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '皮蛋瘦肉粥', price: 65 }
    ],
    payment: ['cash', 'linepay'],
  },

  // 女二------------------------------------------------------------
  {
    id: 'buffet',
    name: '全美自助餐',
    englishName: 'Chuan Mei Buffet',
    category: '女二舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '100g', price: 18 },
      { id: 1, name: '白飯', price: 10 },
      { id: 1, name: '白飯 (單買)', price: 15 },
      { id: 1, name: '主菜', price: '15-50' },
    ],
    payment: ['cash', 'jkopay'],
  },
  {
    id: 'ji-mian-dao',
    name: '極麵道',
    englishName: 'Ji Mian Dao Noodle',
    category: '女二舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '沙茶鍋燒', price: 90 },
    ],
    payment: ['cash', 'jkopay'],
  },
  {
    id: 'bistro',
    name: '比司多 (女二)',
    englishName: 'Bistro Brunch (Girl\'s Dorm 2)',
    category: '女二舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '火腿吐司', price: 45 },
    ],
    payment: ['cash', 'jkopay'],
  },
  {
    id: 'hao-jia-ji-rice',
    name: '好甲基',
    englishName: 'Hao Jia Ji Rice Delicacy',
    category: '女二舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '豬排咖哩', price: 120 }
    ],
    payment: ['cash', 'jkopay'],
  },
  {
    id: 'fruit',
    name: '水果攤',
    englishName: 'Fruit Shop',
    category: '女二舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '芭樂', price: 45 },
    ],
    payment: ['cash', 'jkopay'],
  },
  {
    id: 'a-hua',
    name: 'A華加熱滷味',
    englishName: 'A Hua Braised Food',
    category: '女二舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '王子麵', price: 15 },
    ],
    payment: ['cash', 'jkopay'],
  },
  {
    id: 'family-mart',
    name: '全家',
    englishName: 'Family Mart',
    category: '女二舍餐廳',
    hours: [{ open: '00:00', close: '23:59' }],
    days: [0, 1, 2, 3, 4, 5, 6],
    menu: [
      { id: 1, name: '全家', price: '000' },
    ],
    payment: ['cash', 'jkopay'],
  },
  {
    id: 'mc-donald',
    name: '麥當勞',
    englishName: 'McDonald',
    category: '女二舍餐廳',
    hours: [{ open: '07:00', close: '24:00' }],
    days: [0, 1, 2, 3, 4, 5, 6],
    menu: [
      { id: 1, name: '加油', price: 150 },
    ],
    payment: ['cash', 'jkopay'],
  },
  {
    id: 'tian-cheng',
    name: '天晟燒臘',
    englishName: 'Tian Cheng Roast Food',
    category: '女二舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '脆皮燒肉飯', price: 110 },
    ],
    payment: ['cash', 'jkopay', 'linepay'],
  },
  {
    id: 'louisa',
    name: '路易莎咖啡',
    englishName: 'Louisa Coffee',
    category: '女二舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '經典拿鐵', price: 65 },
    ],
    payment: ['cash', 'jkopay'],
  },


  // 研三----------------------------------------------------------------------
  {
    id: 'bistro',
    name: '比司多 (研三)',
    englishName: 'Bistro Brunch (Grad. Dorm 3)',
    category: '研三舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '火腿吐司', price: 45 },
    ],
    payment: ['cash', 'jkopay'],
  },
  {
    id: 'ya-yan-she',
    name: '鴨研社 (原御膳堂)',
    englishName: 'Ya Yan She',
    category: '研三舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '鴨肉飯加蛋', price: 85 }
    ],
    payment: ['cash', 'Taiwan pay'],
  },
  {
    id: 'Lee-roast',
    name: '李記燒臘',
    englishName: 'Lee\'s Roast Food',
    category: '研三舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '排骨飯', price: 85 }
    ],
    payment: ['cash', 'linepay', 'jkopay'],
  },
  {
    id: 'thai',
    name: '雲泰閣東南亞料理',
    englishName: 'Southeast Asian Food',
    category: '研三舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '月亮蝦餅', price: 65 }
    ],
    payment: ['cash', 'linepay'],
  },
  {
    id: 'butter',
    name: '奶油廚房',
    englishName: 'Butter Kitchen',
    category: '研三舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '燻雞吐司', price: 50 },
    ],
    payment: ['cash', 'linepay'],
  },
  {
    id: 'yi-zao',
    name: '義早早午餐',
    englishName: 'Yi Zao Brunch',
    category: '研三舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '蛋餅', price: 50 },
    ],
    payment: ['cash', 'linepay'],
  },
  {
    id: 'burger-king',
    name: '漢堡王',
    englishName: 'Burger King',
    category: '研三舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '華堡', price: 100 },
    ],
    payment: ['cash', 'linepay'],
  },
  {
    id: 'si-feng',
    name: '細鳳果茶',
    englishName: 'Si Feng Fruit Tea',
    category: '研三舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '細鳳果茶', price: 65 },
    ],
    payment: ['cash', 'linepay'],
  },
  {
    id: 'hi-life',
    name: '萊爾富',
    englishName: 'Hi Life Convenient Store',
    category: '研三舍餐廳',
    hours: [{ open: '07:00', close: '13:30' }],
    days: [1, 2, 3, 4, 5],
    menu: [
      { id: 1, name: '萊爾富就不用菜單了吧', price: '000' }
    ],
    payment: ['cash', 'linepay'],
  },
  {
    id: '7-11',
    name: '7-ELEVEN 迎竹',
    englishName: '7-ELEVEN Yin Zhu',
    category: '研三舍餐廳',
    hours: [{ open: '00:00', close: '23:59' }],
    days: [0, 1, 2, 3, 4, 5, 6],
    menu: [
      { id: 1, name: '7-11就不用菜單了吧', price: '000' }
    ],
    payment: ['cash', 'credit', 'linepay', 'taiwanpay'],
  },




  // ── 其他 ───────────────────────────────────────────────


  {
    id: 'here-space',
    name: 'HERE SPACE',
    englishName: 'HERE SPACE',
    category: '其他',
    hours: [{ open: '09:00', close: '21:00' }],
    days: [1, 2, 3, 4, 5, 6],
    menu: [
      { id: 1, name: '手沖咖啡', price: 90 },
      { id: 2, name: '拿鐵', price: 100 },
    ],
    payment: ['cash', 'credit', 'linepay', 'taiwanpay'],
  },
  {
    id: 'shinewood',
    name: '小木屋鬆餅',
    englishName: 'Shinewood Waffle',
    category: '其他',
    hours: [{ open: '09:00', close: '21:00' }],
    days: [1, 2, 3, 4, 5, 6],
    menu: [
      { id: 1, name: '碳烤雞腿蔬菜鬆餅', price: 150 }
    ],
    payment: ['cash', 'credit', 'linepay', 'taiwanpay'],
  },
]
