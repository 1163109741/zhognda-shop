/*
 * 城市选择jquer插件
 *
 * Licensed under the MIT license:
 * https://github.com/callmeJozo/kuCity
 *
 * Author: Naraku(http://segmentfault.com/u/naraku_)
 *
 * Version:  1.0
 *
 */

(function ($) {
    var Select;
    var allCities = [
  {
      "ID": 1,
      "SimpleName": "BJS",
      "Name": "北京市",
      "ZipCode": "100000",
      "ProvinceID": 1
  },
  {
      "ID": 2,
      "SimpleName": "TJS",
      "Name": "天津市",
      "ZipCode": "100000",
      "ProvinceID": 2
  },
  {
      "ID": 3,
      "SimpleName": "SJZS",
      "Name": "石家庄市",
      "ZipCode": "050000",
      "ProvinceID": 3
  },
  {
      "ID": 4,
      "SimpleName": "TSS",
      "Name": "唐山市",
      "ZipCode": "063000",
      "ProvinceID": 3
  },
  {
      "ID": 5,
      "SimpleName": "QHDS",
      "Name": "秦皇岛市",
      "ZipCode": "066000",
      "ProvinceID": 3
  },
  {
      "ID": 6,
      "SimpleName": "HDS",
      "Name": "邯郸市",
      "ZipCode": "056000",
      "ProvinceID": 3
  },
  {
      "ID": 7,
      "SimpleName": "XTS",
      "Name": "邢台市",
      "ZipCode": "054000",
      "ProvinceID": 3
  },
  {
      "ID": 8,
      "SimpleName": "BDS",
      "Name": "保定市",
      "ZipCode": "071000",
      "ProvinceID": 3
  },
  {
      "ID": 9,
      "SimpleName": "ZJKS",
      "Name": "张家口市",
      "ZipCode": "075000",
      "ProvinceID": 3
  },
  {
      "ID": 10,
      "SimpleName": "CDS",
      "Name": "承德市",
      "ZipCode": "067000",
      "ProvinceID": 3
  },
  {
      "ID": 11,
      "SimpleName": "CZS",
      "Name": "沧州市",
      "ZipCode": "061000",
      "ProvinceID": 3
  },
  {
      "ID": 12,
      "SimpleName": "LFS",
      "Name": "廊坊市",
      "ZipCode": "065000",
      "ProvinceID": 3
  },
  {
      "ID": 13,
      "SimpleName": "HSS",
      "Name": "衡水市",
      "ZipCode": "053000",
      "ProvinceID": 3
  },
  {
      "ID": 14,
      "SimpleName": "TYS",
      "Name": "太原市",
      "ZipCode": "030000",
      "ProvinceID": 4
  },
  {
      "ID": 15,
      "SimpleName": "DTS",
      "Name": "大同市",
      "ZipCode": "037000",
      "ProvinceID": 4
  },
  {
      "ID": 16,
      "SimpleName": "YQS",
      "Name": "阳泉市",
      "ZipCode": "045000",
      "ProvinceID": 4
  },
  {
      "ID": 17,
      "SimpleName": "CZS",
      "Name": "长治市",
      "ZipCode": "046000",
      "ProvinceID": 4
  },
  {
      "ID": 18,
      "SimpleName": "JCS",
      "Name": "晋城市",
      "ZipCode": "048000",
      "ProvinceID": 4
  },
  {
      "ID": 19,
      "SimpleName": "SZS",
      "Name": "朔州市",
      "ZipCode": "036000",
      "ProvinceID": 4
  },
  {
      "ID": 20,
      "SimpleName": "JZS",
      "Name": "晋中市",
      "ZipCode": "030600",
      "ProvinceID": 4
  },
  {
      "ID": 21,
      "SimpleName": "YCS",
      "Name": "运城市",
      "ZipCode": "044000",
      "ProvinceID": 4
  },
  {
      "ID": 22,
      "SimpleName": "XZS",
      "Name": "忻州市",
      "ZipCode": "034000",
      "ProvinceID": 4
  },
  {
      "ID": 23,
      "SimpleName": "LFS",
      "Name": "临汾市",
      "ZipCode": "041000",
      "ProvinceID": 4
  },
  {
      "ID": 24,
      "SimpleName": "LLS",
      "Name": "吕梁市",
      "ZipCode": "030500",
      "ProvinceID": 4
  },
  {
      "ID": 25,
      "SimpleName": "HHHTS",
      "Name": "呼和浩特市",
      "ZipCode": "010000",
      "ProvinceID": 5
  },
  {
      "ID": 26,
      "SimpleName": "BTS",
      "Name": "包头市",
      "ZipCode": "014000",
      "ProvinceID": 5
  },
  {
      "ID": 27,
      "SimpleName": "WHS",
      "Name": "乌海市",
      "ZipCode": "016000",
      "ProvinceID": 5
  },
  {
      "ID": 28,
      "SimpleName": "CFS",
      "Name": "赤峰市",
      "ZipCode": "024000",
      "ProvinceID": 5
  },
  {
      "ID": 29,
      "SimpleName": "TLS",
      "Name": "通辽市",
      "ZipCode": "028000",
      "ProvinceID": 5
  },
  {
      "ID": 30,
      "SimpleName": "EEDSS",
      "Name": "鄂尔多斯市",
      "ZipCode": "010300",
      "ProvinceID": 5
  },
  {
      "ID": 31,
      "SimpleName": "HLBES",
      "Name": "呼伦贝尔市",
      "ZipCode": "021000",
      "ProvinceID": 5
  },
  {
      "ID": 32,
      "SimpleName": "BYNES",
      "Name": "巴彦淖尔市",
      "ZipCode": "014400",
      "ProvinceID": 5
  },
  {
      "ID": 33,
      "SimpleName": "WLCBS",
      "Name": "乌兰察布市",
      "ZipCode": "011800",
      "ProvinceID": 5
  },
  {
      "ID": 34,
      "SimpleName": "XAM",
      "Name": "兴安盟",
      "ZipCode": "137500",
      "ProvinceID": 5
  },
  {
      "ID": 35,
      "SimpleName": "XLGLM",
      "Name": "锡林郭勒盟",
      "ZipCode": "011100",
      "ProvinceID": 5
  },
  {
      "ID": 36,
      "SimpleName": "ALSM",
      "Name": "阿拉善盟",
      "ZipCode": "016000",
      "ProvinceID": 5
  },
  {
      "ID": 37,
      "SimpleName": "SYS",
      "Name": "沈阳市",
      "ZipCode": "110000",
      "ProvinceID": 6
  },
  {
      "ID": 38,
      "SimpleName": "DLS",
      "Name": "大连市",
      "ZipCode": "116000",
      "ProvinceID": 6
  },
  {
      "ID": 39,
      "SimpleName": "ASS",
      "Name": "鞍山市",
      "ZipCode": "114000",
      "ProvinceID": 6
  },
  {
      "ID": 40,
      "SimpleName": "FSS",
      "Name": "抚顺市",
      "ZipCode": "113000",
      "ProvinceID": 6
  },
  {
      "ID": 41,
      "SimpleName": "BXS",
      "Name": "本溪市",
      "ZipCode": "117000",
      "ProvinceID": 6
  },
  {
      "ID": 42,
      "SimpleName": "DDS",
      "Name": "丹东市",
      "ZipCode": "118000",
      "ProvinceID": 6
  },
  {
      "ID": 43,
      "SimpleName": "JZS",
      "Name": "锦州市",
      "ZipCode": "121000",
      "ProvinceID": 6
  },
  {
      "ID": 44,
      "SimpleName": "YKS",
      "Name": "营口市",
      "ZipCode": "115000",
      "ProvinceID": 6
  },
  {
      "ID": 45,
      "SimpleName": "FXS",
      "Name": "阜新市",
      "ZipCode": "123000",
      "ProvinceID": 6
  },
  {
      "ID": 46,
      "SimpleName": "LYS",
      "Name": "辽阳市",
      "ZipCode": "111000",
      "ProvinceID": 6
  },
  {
      "ID": 47,
      "SimpleName": "PJS",
      "Name": "盘锦市",
      "ZipCode": "124000",
      "ProvinceID": 6
  },
  {
      "ID": 48,
      "SimpleName": "TLS",
      "Name": "铁岭市",
      "ZipCode": "112000",
      "ProvinceID": 6
  },
  {
      "ID": 49,
      "SimpleName": "CYS",
      "Name": "朝阳市",
      "ZipCode": "122000",
      "ProvinceID": 6
  },
  {
      "ID": 50,
      "SimpleName": "HLDS",
      "Name": "葫芦岛市",
      "ZipCode": "125000",
      "ProvinceID": 6
  },
  {
      "ID": 51,
      "SimpleName": "CCS",
      "Name": "长春市",
      "ZipCode": "130000",
      "ProvinceID": 7
  },
  {
      "ID": 52,
      "SimpleName": "JLS",
      "Name": "吉林市",
      "ZipCode": "132000",
      "ProvinceID": 7
  },
  {
      "ID": 53,
      "SimpleName": "SPS",
      "Name": "四平市",
      "ZipCode": "136000",
      "ProvinceID": 7
  },
  {
      "ID": 54,
      "SimpleName": "LYS",
      "Name": "辽源市",
      "ZipCode": "136200",
      "ProvinceID": 7
  },
  {
      "ID": 55,
      "SimpleName": "THS",
      "Name": "通化市",
      "ZipCode": "134000",
      "ProvinceID": 7
  },
  {
      "ID": 56,
      "SimpleName": "BSS",
      "Name": "白山市",
      "ZipCode": "134300",
      "ProvinceID": 7
  },
  {
      "ID": 57,
      "SimpleName": "SYS",
      "Name": "松原市",
      "ZipCode": "131100",
      "ProvinceID": 7
  },
  {
      "ID": 58,
      "SimpleName": "BCS",
      "Name": "白城市",
      "ZipCode": "137000",
      "ProvinceID": 7
  },
  {
      "ID": 59,
      "SimpleName": "YBCXZZZZ",
      "Name": "延边朝鲜族自治州",
      "ZipCode": "133000",
      "ProvinceID": 7
  },
  {
      "ID": 60,
      "SimpleName": "HEBS",
      "Name": "哈尔滨市",
      "ZipCode": "150000",
      "ProvinceID": 8
  },
  {
      "ID": 61,
      "SimpleName": "QQHES",
      "Name": "齐齐哈尔市",
      "ZipCode": "161000",
      "ProvinceID": 8
  },
  {
      "ID": 62,
      "SimpleName": "JXS",
      "Name": "鸡西市",
      "ZipCode": "158100",
      "ProvinceID": 8
  },
  {
      "ID": 63,
      "SimpleName": "HGS",
      "Name": "鹤岗市",
      "ZipCode": "154100",
      "ProvinceID": 8
  },
  {
      "ID": 64,
      "SimpleName": "SYSS",
      "Name": "双鸭山市",
      "ZipCode": "155100",
      "ProvinceID": 8
  },
  {
      "ID": 65,
      "SimpleName": "DQS",
      "Name": "大庆市",
      "ZipCode": "163000",
      "ProvinceID": 8
  },
  {
      "ID": 66,
      "SimpleName": "YCS",
      "Name": "伊春市",
      "ZipCode": "152300",
      "ProvinceID": 8
  },
  {
      "ID": 67,
      "SimpleName": "JMSS",
      "Name": "佳木斯市",
      "ZipCode": "154000",
      "ProvinceID": 8
  },
  {
      "ID": 68,
      "SimpleName": "QTHS",
      "Name": "七台河市",
      "ZipCode": "154600",
      "ProvinceID": 8
  },
  {
      "ID": 69,
      "SimpleName": "MDJS",
      "Name": "牡丹江市",
      "ZipCode": "157000",
      "ProvinceID": 8
  },
  {
      "ID": 70,
      "SimpleName": "HHS",
      "Name": "黑河市",
      "ZipCode": "164300",
      "ProvinceID": 8
  },
  {
      "ID": 71,
      "SimpleName": "SHS",
      "Name": "绥化市",
      "ZipCode": "152000",
      "ProvinceID": 8
  },
  {
      "ID": 72,
      "SimpleName": "DXALDQ",
      "Name": "大兴安岭地区",
      "ZipCode": "165000",
      "ProvinceID": 8
  },
  {
      "ID": 73,
      "SimpleName": "SHS",
      "Name": "上海市",
      "ZipCode": "200000",
      "ProvinceID": 9
  },
  {
      "ID": 74,
      "SimpleName": "NJS",
      "Name": "南京市",
      "ZipCode": "210000",
      "ProvinceID": 10
  },
  {
      "ID": 75,
      "SimpleName": "WXS",
      "Name": "无锡市",
      "ZipCode": "214000",
      "ProvinceID": 10
  },
  {
      "ID": 76,
      "SimpleName": "XZS",
      "Name": "徐州市",
      "ZipCode": "221000",
      "ProvinceID": 10
  },
  {
      "ID": 77,
      "SimpleName": "CZS",
      "Name": "常州市",
      "ZipCode": "213000",
      "ProvinceID": 10
  },
  {
      "ID": 78,
      "SimpleName": "SZS",
      "Name": "苏州市",
      "ZipCode": "215000",
      "ProvinceID": 10
  },
  {
      "ID": 79,
      "SimpleName": "NTS",
      "Name": "南通市",
      "ZipCode": "226000",
      "ProvinceID": 10
  },
  {
      "ID": 80,
      "SimpleName": "LYGS",
      "Name": "连云港市",
      "ZipCode": "222000",
      "ProvinceID": 10
  },
  {
      "ID": 81,
      "SimpleName": "HAS",
      "Name": "淮安市",
      "ZipCode": "223200",
      "ProvinceID": 10
  },
  {
      "ID": 82,
      "SimpleName": "YCS",
      "Name": "盐城市",
      "ZipCode": "224000",
      "ProvinceID": 10
  },
  {
      "ID": 83,
      "SimpleName": "YZS",
      "Name": "扬州市",
      "ZipCode": "225000",
      "ProvinceID": 10
  },
  {
      "ID": 84,
      "SimpleName": "ZJS",
      "Name": "镇江市",
      "ZipCode": "212000",
      "ProvinceID": 10
  },
  {
      "ID": 85,
      "SimpleName": "TZS",
      "Name": "泰州市",
      "ZipCode": "225300",
      "ProvinceID": 10
  },
  {
      "ID": 86,
      "SimpleName": "SQS",
      "Name": "宿迁市",
      "ZipCode": "223800",
      "ProvinceID": 10
  },
  {
      "ID": 87,
      "SimpleName": "HZS",
      "Name": "杭州市",
      "ZipCode": "310000",
      "ProvinceID": 11
  },
  {
      "ID": 88,
      "SimpleName": "NBS",
      "Name": "宁波市",
      "ZipCode": "315000",
      "ProvinceID": 11
  },
  {
      "ID": 89,
      "SimpleName": "WZS",
      "Name": "温州市",
      "ZipCode": "325000",
      "ProvinceID": 11
  },
  {
      "ID": 90,
      "SimpleName": "JXS",
      "Name": "嘉兴市",
      "ZipCode": "314000",
      "ProvinceID": 11
  },
  {
      "ID": 91,
      "SimpleName": "HZS",
      "Name": "湖州市",
      "ZipCode": "313000",
      "ProvinceID": 11
  },
  {
      "ID": 92,
      "SimpleName": "SXS",
      "Name": "绍兴市",
      "ZipCode": "312000",
      "ProvinceID": 11
  },
  {
      "ID": 93,
      "SimpleName": "JHS",
      "Name": "金华市",
      "ZipCode": "321000",
      "ProvinceID": 11
  },
  {
      "ID": 94,
      "SimpleName": "QZS",
      "Name": "衢州市",
      "ZipCode": "324000",
      "ProvinceID": 11
  },
  {
      "ID": 95,
      "SimpleName": "ZSS",
      "Name": "舟山市",
      "ZipCode": "316000",
      "ProvinceID": 11
  },
  {
      "ID": 96,
      "SimpleName": "TZS",
      "Name": "台州市",
      "ZipCode": "318000",
      "ProvinceID": 11
  },
  {
      "ID": 97,
      "SimpleName": "LSS",
      "Name": "丽水市",
      "ZipCode": "323000",
      "ProvinceID": 11
  },
  {
      "ID": 98,
      "SimpleName": "HFS",
      "Name": "合肥市",
      "ZipCode": "230000",
      "ProvinceID": 12
  },
  {
      "ID": 99,
      "SimpleName": "WHS",
      "Name": "芜湖市",
      "ZipCode": "241000",
      "ProvinceID": 12
  },
  {
      "ID": 100,
      "SimpleName": "BBS",
      "Name": "蚌埠市",
      "ZipCode": "233000",
      "ProvinceID": 12
  },
  {
      "ID": 101,
      "SimpleName": "HNS",
      "Name": "淮南市",
      "ZipCode": "232000",
      "ProvinceID": 12
  },
  {
      "ID": 102,
      "SimpleName": "MASS",
      "Name": "马鞍山市",
      "ZipCode": "243000",
      "ProvinceID": 12
  },
  {
      "ID": 103,
      "SimpleName": "HBS",
      "Name": "淮北市",
      "ZipCode": "235000",
      "ProvinceID": 12
  },
  {
      "ID": 104,
      "SimpleName": "TLS",
      "Name": "铜陵市",
      "ZipCode": "244000",
      "ProvinceID": 12
  },
  {
      "ID": 105,
      "SimpleName": "AQS",
      "Name": "安庆市",
      "ZipCode": "246000",
      "ProvinceID": 12
  },
  {
      "ID": 106,
      "SimpleName": "HSS",
      "Name": "黄山市",
      "ZipCode": "242700",
      "ProvinceID": 12
  },
  {
      "ID": 107,
      "SimpleName": "CZS",
      "Name": "滁州市",
      "ZipCode": "239000",
      "ProvinceID": 12
  },
  {
      "ID": 108,
      "SimpleName": "FYS",
      "Name": "阜阳市",
      "ZipCode": "236100",
      "ProvinceID": 12
  },
  {
      "ID": 109,
      "SimpleName": "SZS",
      "Name": "宿州市",
      "ZipCode": "234100",
      "ProvinceID": 12
  },
  {
      "ID": 110,
      "SimpleName": "CHS",
      "Name": "巢湖市",
      "ZipCode": "238000",
      "ProvinceID": 12
  },
  {
      "ID": 111,
      "SimpleName": "LAS",
      "Name": "六安市",
      "ZipCode": "237000",
      "ProvinceID": 12
  },
  {
      "ID": 112,
      "SimpleName": "BZS",
      "Name": "亳州市",
      "ZipCode": "236800",
      "ProvinceID": 12
  },
  {
      "ID": 113,
      "SimpleName": "CZS",
      "Name": "池州市",
      "ZipCode": "247100",
      "ProvinceID": 12
  },
  {
      "ID": 114,
      "SimpleName": "XCS",
      "Name": "宣城市",
      "ZipCode": "366000",
      "ProvinceID": 12
  },
  {
      "ID": 115,
      "SimpleName": "FZS",
      "Name": "福州市",
      "ZipCode": "350000",
      "ProvinceID": 13
  },
  {
      "ID": 116,
      "SimpleName": "XMS",
      "Name": "厦门市",
      "ZipCode": "361000",
      "ProvinceID": 13
  },
  {
      "ID": 117,
      "SimpleName": "PTS",
      "Name": "莆田市",
      "ZipCode": "351100",
      "ProvinceID": 13
  },
  {
      "ID": 118,
      "SimpleName": "SMS",
      "Name": "三明市",
      "ZipCode": "365000",
      "ProvinceID": 13
  },
  {
      "ID": 119,
      "SimpleName": "QZS",
      "Name": "泉州市",
      "ZipCode": "362000",
      "ProvinceID": 13
  },
  {
      "ID": 120,
      "SimpleName": "ZZS",
      "Name": "漳州市",
      "ZipCode": "363000",
      "ProvinceID": 13
  },
  {
      "ID": 121,
      "SimpleName": "NPS",
      "Name": "南平市",
      "ZipCode": "353000",
      "ProvinceID": 13
  },
  {
      "ID": 122,
      "SimpleName": "LYS",
      "Name": "龙岩市",
      "ZipCode": "364000",
      "ProvinceID": 13
  },
  {
      "ID": 123,
      "SimpleName": "NDS",
      "Name": "宁德市",
      "ZipCode": "352100",
      "ProvinceID": 13
  },
  {
      "ID": 124,
      "SimpleName": "NCS",
      "Name": "南昌市",
      "ZipCode": "330000",
      "ProvinceID": 14
  },
  {
      "ID": 125,
      "SimpleName": "JDZS",
      "Name": "景德镇市",
      "ZipCode": "333000",
      "ProvinceID": 14
  },
  {
      "ID": 126,
      "SimpleName": "PXS",
      "Name": "萍乡市",
      "ZipCode": "337000",
      "ProvinceID": 14
  },
  {
      "ID": 127,
      "SimpleName": "JJS",
      "Name": "九江市",
      "ZipCode": "332000",
      "ProvinceID": 14
  },
  {
      "ID": 128,
      "SimpleName": "XYS",
      "Name": "新余市",
      "ZipCode": "338000",
      "ProvinceID": 14
  },
  {
      "ID": 129,
      "SimpleName": "YTS",
      "Name": "鹰潭市",
      "ZipCode": "335000",
      "ProvinceID": 14
  },
  {
      "ID": 130,
      "SimpleName": "GZS",
      "Name": "赣州市",
      "ZipCode": "341000",
      "ProvinceID": 14
  },
  {
      "ID": 131,
      "SimpleName": "JAS",
      "Name": "吉安市",
      "ZipCode": "343000",
      "ProvinceID": 14
  },
  {
      "ID": 132,
      "SimpleName": "YCS",
      "Name": "宜春市",
      "ZipCode": "336000",
      "ProvinceID": 14
  },
  {
      "ID": 133,
      "SimpleName": "FZS",
      "Name": "抚州市",
      "ZipCode": "332900",
      "ProvinceID": 14
  },
  {
      "ID": 134,
      "SimpleName": "SRS",
      "Name": "上饶市",
      "ZipCode": "334000",
      "ProvinceID": 14
  },
  {
      "ID": 135,
      "SimpleName": "JNS",
      "Name": "济南市",
      "ZipCode": "250000",
      "ProvinceID": 15
  },
  {
      "ID": 136,
      "SimpleName": "QDS",
      "Name": "青岛市",
      "ZipCode": "266000",
      "ProvinceID": 15
  },
  {
      "ID": 137,
      "SimpleName": "ZBS",
      "Name": "淄博市",
      "ZipCode": "255000",
      "ProvinceID": 15
  },
  {
      "ID": 138,
      "SimpleName": "ZZS",
      "Name": "枣庄市",
      "ZipCode": "277100",
      "ProvinceID": 15
  },
  {
      "ID": 139,
      "SimpleName": "DYS",
      "Name": "东营市",
      "ZipCode": "257000",
      "ProvinceID": 15
  },
  {
      "ID": 140,
      "SimpleName": "YTS",
      "Name": "烟台市",
      "ZipCode": "264000",
      "ProvinceID": 15
  },
  {
      "ID": 141,
      "SimpleName": "WFS",
      "Name": "潍坊市",
      "ZipCode": "261000",
      "ProvinceID": 15
  },
  {
      "ID": 142,
      "SimpleName": "JNS",
      "Name": "济宁市",
      "ZipCode": "272100",
      "ProvinceID": 15
  },
  {
      "ID": 143,
      "SimpleName": "TAS",
      "Name": "泰安市",
      "ZipCode": "271000",
      "ProvinceID": 15
  },
  {
      "ID": 144,
      "SimpleName": "WHS",
      "Name": "威海市",
      "ZipCode": "265700",
      "ProvinceID": 15
  },
  {
      "ID": 145,
      "SimpleName": "RZS",
      "Name": "日照市",
      "ZipCode": "276800",
      "ProvinceID": 15
  },
  {
      "ID": 146,
      "SimpleName": "LWS",
      "Name": "莱芜市",
      "ZipCode": "271100",
      "ProvinceID": 15
  },
  {
      "ID": 147,
      "SimpleName": "LYS",
      "Name": "临沂市",
      "ZipCode": "276000",
      "ProvinceID": 15
  },
  {
      "ID": 148,
      "SimpleName": "DZS",
      "Name": "德州市",
      "ZipCode": "253000",
      "ProvinceID": 15
  },
  {
      "ID": 149,
      "SimpleName": "LCS",
      "Name": "聊城市",
      "ZipCode": "252000",
      "ProvinceID": 15
  },
  {
      "ID": 150,
      "SimpleName": "BZS",
      "Name": "滨州市",
      "ZipCode": "256600",
      "ProvinceID": 15
  },
  {
      "ID": 151,
      "SimpleName": "HZS",
      "Name": "荷泽市",
      "ZipCode": "255000",
      "ProvinceID": 15
  },
  {
      "ID": 152,
      "SimpleName": "ZZS",
      "Name": "郑州市",
      "ZipCode": "450000",
      "ProvinceID": 16
  },
  {
      "ID": 153,
      "SimpleName": "KFS",
      "Name": "开封市",
      "ZipCode": "475000",
      "ProvinceID": 16
  },
  {
      "ID": 154,
      "SimpleName": "LYS",
      "Name": "洛阳市",
      "ZipCode": "471000",
      "ProvinceID": 16
  },
  {
      "ID": 155,
      "SimpleName": "PDSS",
      "Name": "平顶山市",
      "ZipCode": "467000",
      "ProvinceID": 16
  },
  {
      "ID": 156,
      "SimpleName": "AYS",
      "Name": "安阳市",
      "ZipCode": "454900",
      "ProvinceID": 16
  },
  {
      "ID": 157,
      "SimpleName": "HBS",
      "Name": "鹤壁市",
      "ZipCode": "456600",
      "ProvinceID": 16
  },
  {
      "ID": 158,
      "SimpleName": "XXS",
      "Name": "新乡市",
      "ZipCode": "453000",
      "ProvinceID": 16
  },
  {
      "ID": 159,
      "SimpleName": "JZS",
      "Name": "焦作市",
      "ZipCode": "454100",
      "ProvinceID": 16
  },
  {
      "ID": 160,
      "SimpleName": "PYS",
      "Name": "濮阳市",
      "ZipCode": "457000",
      "ProvinceID": 16
  },
  {
      "ID": 161,
      "SimpleName": "XCS",
      "Name": "许昌市",
      "ZipCode": "461000",
      "ProvinceID": 16
  },
  {
      "ID": 162,
      "SimpleName": "LHS",
      "Name": "漯河市",
      "ZipCode": "462000",
      "ProvinceID": 16
  },
  {
      "ID": 163,
      "SimpleName": "SMXS",
      "Name": "三门峡市",
      "ZipCode": "472000",
      "ProvinceID": 16
  },
  {
      "ID": 164,
      "SimpleName": "NYS",
      "Name": "南阳市",
      "ZipCode": "473000",
      "ProvinceID": 16
  },
  {
      "ID": 165,
      "SimpleName": "SQS",
      "Name": "商丘市",
      "ZipCode": "476000",
      "ProvinceID": 16
  },
  {
      "ID": 166,
      "SimpleName": "XYS",
      "Name": "信阳市",
      "ZipCode": "464000",
      "ProvinceID": 16
  },
  {
      "ID": 167,
      "SimpleName": "ZKS",
      "Name": "周口市",
      "ZipCode": "466000",
      "ProvinceID": 16
  },
  {
      "ID": 168,
      "SimpleName": "ZMDS",
      "Name": "驻马店市",
      "ZipCode": "463000",
      "ProvinceID": 16
  },
  {
      "ID": 169,
      "SimpleName": "WHS",
      "Name": "武汉市",
      "ZipCode": "430000",
      "ProvinceID": 17
  },
  {
      "ID": 170,
      "SimpleName": "HSS",
      "Name": "黄石市",
      "ZipCode": "435000",
      "ProvinceID": 17
  },
  {
      "ID": 171,
      "SimpleName": "SYS",
      "Name": "十堰市",
      "ZipCode": "442000",
      "ProvinceID": 17
  },
  {
      "ID": 172,
      "SimpleName": "YCS",
      "Name": "宜昌市",
      "ZipCode": "443000",
      "ProvinceID": 17
  },
  {
      "ID": 173,
      "SimpleName": "XFS",
      "Name": "襄樊市",
      "ZipCode": "441000",
      "ProvinceID": 17
  },
  {
      "ID": 174,
      "SimpleName": "EZS",
      "Name": "鄂州市",
      "ZipCode": "436000",
      "ProvinceID": 17
  },
  {
      "ID": 175,
      "SimpleName": "JMS",
      "Name": "荆门市",
      "ZipCode": "448000",
      "ProvinceID": 17
  },
  {
      "ID": 176,
      "SimpleName": "XGS",
      "Name": "孝感市",
      "ZipCode": "432100",
      "ProvinceID": 17
  },
  {
      "ID": 177,
      "SimpleName": "JZS",
      "Name": "荆州市",
      "ZipCode": "434000",
      "ProvinceID": 17
  },
  {
      "ID": 178,
      "SimpleName": "HGS",
      "Name": "黄冈市",
      "ZipCode": "438000",
      "ProvinceID": 17
  },
  {
      "ID": 179,
      "SimpleName": "XNS",
      "Name": "咸宁市",
      "ZipCode": "437000",
      "ProvinceID": 17
  },
  {
      "ID": 180,
      "SimpleName": "SZS",
      "Name": "随州市",
      "ZipCode": "441300",
      "ProvinceID": 17
  },
  {
      "ID": 181,
      "SimpleName": "ESTJZMZZZZ",
      "Name": "恩施土家族苗族自治州",
      "ZipCode": "445000",
      "ProvinceID": 17
  },
  {
      "ID": 182,
      "SimpleName": "SNJ",
      "Name": "神农架",
      "ZipCode": "442400",
      "ProvinceID": 17
  },
  {
      "ID": 183,
      "SimpleName": "CSS",
      "Name": "长沙市",
      "ZipCode": "410000",
      "ProvinceID": 18
  },
  {
      "ID": 184,
      "SimpleName": "ZZS",
      "Name": "株洲市",
      "ZipCode": "412000",
      "ProvinceID": 18
  },
  {
      "ID": 185,
      "SimpleName": "XTS",
      "Name": "湘潭市",
      "ZipCode": "411100",
      "ProvinceID": 18
  },
  {
      "ID": 186,
      "SimpleName": "HYS",
      "Name": "衡阳市",
      "ZipCode": "421000",
      "ProvinceID": 18
  },
  {
      "ID": 187,
      "SimpleName": "SYS",
      "Name": "邵阳市",
      "ZipCode": "422000",
      "ProvinceID": 18
  },
  {
      "ID": 188,
      "SimpleName": "YYS",
      "Name": "岳阳市",
      "ZipCode": "414000",
      "ProvinceID": 18
  },
  {
      "ID": 189,
      "SimpleName": "CDS",
      "Name": "常德市",
      "ZipCode": "415000",
      "ProvinceID": 18
  },
  {
      "ID": 190,
      "SimpleName": "ZJJS",
      "Name": "张家界市",
      "ZipCode": "427000",
      "ProvinceID": 18
  },
  {
      "ID": 191,
      "SimpleName": "YYS",
      "Name": "益阳市",
      "ZipCode": "413000",
      "ProvinceID": 18
  },
  {
      "ID": 192,
      "SimpleName": "CZS",
      "Name": "郴州市",
      "ZipCode": "423000",
      "ProvinceID": 18
  },
  {
      "ID": 193,
      "SimpleName": "YZS",
      "Name": "永州市",
      "ZipCode": "425000",
      "ProvinceID": 18
  },
  {
      "ID": 194,
      "SimpleName": "HHS",
      "Name": "怀化市",
      "ZipCode": "418000",
      "ProvinceID": 18
  },
  {
      "ID": 195,
      "SimpleName": "LDS",
      "Name": "娄底市",
      "ZipCode": "417000",
      "ProvinceID": 18
  },
  {
      "ID": 196,
      "SimpleName": "XXTJZMZZZZ",
      "Name": "湘西土家族苗族自治州",
      "ZipCode": "416000",
      "ProvinceID": 18
  },
  {
      "ID": 197,
      "SimpleName": "GZS",
      "Name": "广州市",
      "ZipCode": "510000",
      "ProvinceID": 19
  },
  {
      "ID": 198,
      "SimpleName": "SGS",
      "Name": "韶关市",
      "ZipCode": "521000",
      "ProvinceID": 19
  },
  {
      "ID": 199,
      "SimpleName": "SZS",
      "Name": "深圳市",
      "ZipCode": "518000",
      "ProvinceID": 19
  },
  {
      "ID": 200,
      "SimpleName": "ZHS",
      "Name": "珠海市",
      "ZipCode": "519000",
      "ProvinceID": 19
  },
  {
      "ID": 201,
      "SimpleName": "STS",
      "Name": "汕头市",
      "ZipCode": "515000",
      "ProvinceID": 19
  },
  {
      "ID": 202,
      "SimpleName": "FSS",
      "Name": "佛山市",
      "ZipCode": "528000",
      "ProvinceID": 19
  },
  {
      "ID": 203,
      "SimpleName": "JMS",
      "Name": "江门市",
      "ZipCode": "529000",
      "ProvinceID": 19
  },
  {
      "ID": 204,
      "SimpleName": "ZJS",
      "Name": "湛江市",
      "ZipCode": "524000",
      "ProvinceID": 19
  },
  {
      "ID": 205,
      "SimpleName": "MMS",
      "Name": "茂名市",
      "ZipCode": "525000",
      "ProvinceID": 19
  },
  {
      "ID": 206,
      "SimpleName": "ZQS",
      "Name": "肇庆市",
      "ZipCode": "526000",
      "ProvinceID": 19
  },
  {
      "ID": 207,
      "SimpleName": "HZS",
      "Name": "惠州市",
      "ZipCode": "516000",
      "ProvinceID": 19
  },
  {
      "ID": 208,
      "SimpleName": "MZS",
      "Name": "梅州市",
      "ZipCode": "514000",
      "ProvinceID": 19
  },
  {
      "ID": 209,
      "SimpleName": "SWS",
      "Name": "汕尾市",
      "ZipCode": "516600",
      "ProvinceID": 19
  },
  {
      "ID": 210,
      "SimpleName": "HYS",
      "Name": "河源市",
      "ZipCode": "517000",
      "ProvinceID": 19
  },
  {
      "ID": 211,
      "SimpleName": "YJS",
      "Name": "阳江市",
      "ZipCode": "529500",
      "ProvinceID": 19
  },
  {
      "ID": 212,
      "SimpleName": "QYS",
      "Name": "清远市",
      "ZipCode": "511500",
      "ProvinceID": 19
  },
  {
      "ID": 213,
      "SimpleName": "DGS",
      "Name": "东莞市",
      "ZipCode": "511700",
      "ProvinceID": 19
  },
  {
      "ID": 214,
      "SimpleName": "ZSS",
      "Name": "中山市",
      "ZipCode": "528400",
      "ProvinceID": 19
  },
  {
      "ID": 215,
      "SimpleName": "CZS",
      "Name": "潮州市",
      "ZipCode": "515600",
      "ProvinceID": 19
  },
  {
      "ID": 216,
      "SimpleName": "JYS",
      "Name": "揭阳市",
      "ZipCode": "522000",
      "ProvinceID": 19
  },
  {
      "ID": 217,
      "SimpleName": "YFS",
      "Name": "云浮市",
      "ZipCode": "527300",
      "ProvinceID": 19
  },
  {
      "ID": 218,
      "SimpleName": "NNS",
      "Name": "南宁市",
      "ZipCode": "530000",
      "ProvinceID": 20
  },
  {
      "ID": 219,
      "SimpleName": "LZS",
      "Name": "柳州市",
      "ZipCode": "545000",
      "ProvinceID": 20
  },
  {
      "ID": 220,
      "SimpleName": "GLS",
      "Name": "桂林市",
      "ZipCode": "541000",
      "ProvinceID": 20
  },
  {
      "ID": 221,
      "SimpleName": "WZS",
      "Name": "梧州市",
      "ZipCode": "543000",
      "ProvinceID": 20
  },
  {
      "ID": 222,
      "SimpleName": "BHS",
      "Name": "北海市",
      "ZipCode": "536000",
      "ProvinceID": 20
  },
  {
      "ID": 223,
      "SimpleName": "FCGS",
      "Name": "防城港市",
      "ZipCode": "538000",
      "ProvinceID": 20
  },
  {
      "ID": 224,
      "SimpleName": "QZS",
      "Name": "钦州市",
      "ZipCode": "535000",
      "ProvinceID": 20
  },
  {
      "ID": 225,
      "SimpleName": "GGS",
      "Name": "贵港市",
      "ZipCode": "537100",
      "ProvinceID": 20
  },
  {
      "ID": 226,
      "SimpleName": "YLS",
      "Name": "玉林市",
      "ZipCode": "537000",
      "ProvinceID": 20
  },
  {
      "ID": 227,
      "SimpleName": "BSS",
      "Name": "百色市",
      "ZipCode": "533000",
      "ProvinceID": 20
  },
  {
      "ID": 228,
      "SimpleName": "HZS",
      "Name": "贺州市",
      "ZipCode": "542800",
      "ProvinceID": 20
  },
  {
      "ID": 229,
      "SimpleName": "HCS",
      "Name": "河池市",
      "ZipCode": "547000",
      "ProvinceID": 20
  },
  {
      "ID": 230,
      "SimpleName": "LBS",
      "Name": "来宾市",
      "ZipCode": "546100",
      "ProvinceID": 20
  },
  {
      "ID": 231,
      "SimpleName": "CZS",
      "Name": "崇左市",
      "ZipCode": "532200",
      "ProvinceID": 20
  },
  {
      "ID": 232,
      "SimpleName": "HKS",
      "Name": "海口市",
      "ZipCode": "570000",
      "ProvinceID": 21
  },
  {
      "ID": 233,
      "SimpleName": "SYS",
      "Name": "三亚市",
      "ZipCode": "572000",
      "ProvinceID": 21
  },
  {
      "ID": 234,
      "SimpleName": "ZQS",
      "Name": "重庆市",
      "ZipCode": "400000",
      "ProvinceID": 22
  },
  {
      "ID": 235,
      "SimpleName": "CDS",
      "Name": "成都市",
      "ZipCode": "610000",
      "ProvinceID": 23
  },
  {
      "ID": 236,
      "SimpleName": "ZGS",
      "Name": "自贡市",
      "ZipCode": "643000",
      "ProvinceID": 23
  },
  {
      "ID": 237,
      "SimpleName": "PZHS",
      "Name": "攀枝花市",
      "ZipCode": "617000",
      "ProvinceID": 23
  },
  {
      "ID": 238,
      "SimpleName": "LZS",
      "Name": "泸州市",
      "ZipCode": "646100",
      "ProvinceID": 23
  },
  {
      "ID": 239,
      "SimpleName": "DYS",
      "Name": "德阳市",
      "ZipCode": "618000",
      "ProvinceID": 23
  },
  {
      "ID": 240,
      "SimpleName": "MYS",
      "Name": "绵阳市",
      "ZipCode": "621000",
      "ProvinceID": 23
  },
  {
      "ID": 241,
      "SimpleName": "GYS",
      "Name": "广元市",
      "ZipCode": "628000",
      "ProvinceID": 23
  },
  {
      "ID": 242,
      "SimpleName": "SNS",
      "Name": "遂宁市",
      "ZipCode": "629000",
      "ProvinceID": 23
  },
  {
      "ID": 243,
      "SimpleName": "NJS",
      "Name": "内江市",
      "ZipCode": "641000",
      "ProvinceID": 23
  },
  {
      "ID": 244,
      "SimpleName": "LSS",
      "Name": "乐山市",
      "ZipCode": "614000",
      "ProvinceID": 23
  },
  {
      "ID": 245,
      "SimpleName": "NCS",
      "Name": "南充市",
      "ZipCode": "637000",
      "ProvinceID": 23
  },
  {
      "ID": 246,
      "SimpleName": "MSS",
      "Name": "眉山市",
      "ZipCode": "612100",
      "ProvinceID": 23
  },
  {
      "ID": 247,
      "SimpleName": "YBS",
      "Name": "宜宾市",
      "ZipCode": "644000",
      "ProvinceID": 23
  },
  {
      "ID": 248,
      "SimpleName": "GAS",
      "Name": "广安市",
      "ZipCode": "638000",
      "ProvinceID": 23
  },
  {
      "ID": 249,
      "SimpleName": "DZS",
      "Name": "达州市",
      "ZipCode": "635000",
      "ProvinceID": 23
  },
  {
      "ID": 250,
      "SimpleName": "YAS",
      "Name": "雅安市",
      "ZipCode": "625000",
      "ProvinceID": 23
  },
  {
      "ID": 251,
      "SimpleName": "BZS",
      "Name": "巴中市",
      "ZipCode": "635500",
      "ProvinceID": 23
  },
  {
      "ID": 252,
      "SimpleName": "ZYS",
      "Name": "资阳市",
      "ZipCode": "641300",
      "ProvinceID": 23
  },
  {
      "ID": 253,
      "SimpleName": "ABCZQZZZZ",
      "Name": "阿坝藏族羌族自治州",
      "ZipCode": "624600",
      "ProvinceID": 23
  },
  {
      "ID": 254,
      "SimpleName": "GZCZZZZ",
      "Name": "甘孜藏族自治州",
      "ZipCode": "626000",
      "ProvinceID": 23
  },
  {
      "ID": 255,
      "SimpleName": "LSYZZZZ",
      "Name": "凉山彝族自治州",
      "ZipCode": "615000",
      "ProvinceID": 23
  },
  {
      "ID": 256,
      "SimpleName": "GYS",
      "Name": "贵阳市",
      "ZipCode": "55000",
      "ProvinceID": 24
  },
  {
      "ID": 257,
      "SimpleName": "LPSS",
      "Name": "六盘水市",
      "ZipCode": "553000",
      "ProvinceID": 24
  },
  {
      "ID": 258,
      "SimpleName": "ZYS",
      "Name": "遵义市",
      "ZipCode": "563000",
      "ProvinceID": 24
  },
  {
      "ID": 259,
      "SimpleName": "ASS",
      "Name": "安顺市",
      "ZipCode": "561000",
      "ProvinceID": 24
  },
  {
      "ID": 260,
      "SimpleName": "TRDQ",
      "Name": "铜仁地区",
      "ZipCode": "554300",
      "ProvinceID": 24
  },
  {
      "ID": 261,
      "SimpleName": "QXNBYZMZZZZ",
      "Name": "黔西南布依族苗族自治州",
      "ZipCode": "551500",
      "ProvinceID": 24
  },
  {
      "ID": 262,
      "SimpleName": "BJDQ",
      "Name": "毕节地区",
      "ZipCode": "551700",
      "ProvinceID": 24
  },
  {
      "ID": 263,
      "SimpleName": "QDNMZDZZZZ",
      "Name": "黔东南苗族侗族自治州",
      "ZipCode": "551500",
      "ProvinceID": 24
  },
  {
      "ID": 264,
      "SimpleName": "QNBYZMZZZZ",
      "Name": "黔南布依族苗族自治州",
      "ZipCode": "550100",
      "ProvinceID": 24
  },
  {
      "ID": 265,
      "SimpleName": "KMS",
      "Name": "昆明市",
      "ZipCode": "650000",
      "ProvinceID": 25
  },
  {
      "ID": 266,
      "SimpleName": "QJS",
      "Name": "曲靖市",
      "ZipCode": "655000",
      "ProvinceID": 25
  },
  {
      "ID": 267,
      "SimpleName": "YXS",
      "Name": "玉溪市",
      "ZipCode": "653100",
      "ProvinceID": 25
  },
  {
      "ID": 268,
      "SimpleName": "BSS",
      "Name": "保山市",
      "ZipCode": "678000",
      "ProvinceID": 25
  },
  {
      "ID": 269,
      "SimpleName": "ZTS",
      "Name": "昭通市",
      "ZipCode": "657000",
      "ProvinceID": 25
  },
  {
      "ID": 270,
      "SimpleName": "LJS",
      "Name": "丽江市",
      "ZipCode": "674100",
      "ProvinceID": 25
  },
  {
      "ID": 271,
      "SimpleName": "SMS",
      "Name": "思茅市",
      "ZipCode": "665000",
      "ProvinceID": 25
  },
  {
      "ID": 272,
      "SimpleName": "LCS",
      "Name": "临沧市",
      "ZipCode": "677000",
      "ProvinceID": 25
  },
  {
      "ID": 273,
      "SimpleName": "CXYZZZZ",
      "Name": "楚雄彝族自治州",
      "ZipCode": "675000",
      "ProvinceID": 25
  },
  {
      "ID": 274,
      "SimpleName": "HHHNZYZZZZ",
      "Name": "红河哈尼族彝族自治州",
      "ZipCode": "654400",
      "ProvinceID": 25
  },
  {
      "ID": 275,
      "SimpleName": "WSZZMZZZZ",
      "Name": "文山壮族苗族自治州",
      "ZipCode": "663000",
      "ProvinceID": 25
  },
  {
      "ID": 276,
      "SimpleName": "XSBNDZZZZ",
      "Name": "西双版纳傣族自治州",
      "ZipCode": "666200",
      "ProvinceID": 25
  },
  {
      "ID": 277,
      "SimpleName": "DLBZZZZ",
      "Name": "大理白族自治州",
      "ZipCode": "671000",
      "ProvinceID": 25
  },
  {
      "ID": 278,
      "SimpleName": "DHDZJPZZZZ",
      "Name": "德宏傣族景颇族自治州",
      "ZipCode": "678400",
      "ProvinceID": 25
  },
  {
      "ID": 279,
      "SimpleName": "NJLSZZZZ",
      "Name": "怒江傈僳族自治州",
      "ZipCode": "671400",
      "ProvinceID": 25
  },
  {
      "ID": 280,
      "SimpleName": "DQCZZZZ",
      "Name": "迪庆藏族自治州",
      "ZipCode": "674400",
      "ProvinceID": 25
  },
  {
      "ID": 281,
      "SimpleName": "LSS",
      "Name": "拉萨市",
      "ZipCode": "850000",
      "ProvinceID": 26
  },
  {
      "ID": 282,
      "SimpleName": "CDDQ",
      "Name": "昌都地区",
      "ZipCode": "854000",
      "ProvinceID": 26
  },
  {
      "ID": 283,
      "SimpleName": "SNDQ",
      "Name": "山南地区",
      "ZipCode": "856000",
      "ProvinceID": 26
  },
  {
      "ID": 284,
      "SimpleName": "RKZDQ",
      "Name": "日喀则地区",
      "ZipCode": "857000",
      "ProvinceID": 26
  },
  {
      "ID": 285,
      "SimpleName": "NQDQ",
      "Name": "那曲地区",
      "ZipCode": "852000",
      "ProvinceID": 26
  },
  {
      "ID": 286,
      "SimpleName": "ALDQ",
      "Name": "阿里地区",
      "ZipCode": "859100",
      "ProvinceID": 26
  },
  {
      "ID": 287,
      "SimpleName": "LZDQ",
      "Name": "林芝地区",
      "ZipCode": "860100",
      "ProvinceID": 26
  },
  {
      "ID": 288,
      "SimpleName": "XAS",
      "Name": "西安市",
      "ZipCode": "710000",
      "ProvinceID": 27
  },
  {
      "ID": 289,
      "SimpleName": "TCS",
      "Name": "铜川市",
      "ZipCode": "727000",
      "ProvinceID": 27
  },
  {
      "ID": 290,
      "SimpleName": "BJS",
      "Name": "宝鸡市",
      "ZipCode": "721000",
      "ProvinceID": 27
  },
  {
      "ID": 291,
      "SimpleName": "XYS",
      "Name": "咸阳市",
      "ZipCode": "712000",
      "ProvinceID": 27
  },
  {
      "ID": 292,
      "SimpleName": "WNS",
      "Name": "渭南市",
      "ZipCode": "714000",
      "ProvinceID": 27
  },
  {
      "ID": 293,
      "SimpleName": "YAS",
      "Name": "延安市",
      "ZipCode": "716000",
      "ProvinceID": 27
  },
  {
      "ID": 294,
      "SimpleName": "HZS",
      "Name": "汉中市",
      "ZipCode": "723000",
      "ProvinceID": 27
  },
  {
      "ID": 295,
      "SimpleName": "YLS",
      "Name": "榆林市",
      "ZipCode": "719000",
      "ProvinceID": 27
  },
  {
      "ID": 296,
      "SimpleName": "AKS",
      "Name": "安康市",
      "ZipCode": "725000",
      "ProvinceID": 27
  },
  {
      "ID": 297,
      "SimpleName": "SLS",
      "Name": "商洛市",
      "ZipCode": "711500",
      "ProvinceID": 27
  },
  {
      "ID": 298,
      "SimpleName": "LZS",
      "Name": "兰州市",
      "ZipCode": "730000",
      "ProvinceID": 28
  },
  {
      "ID": 299,
      "SimpleName": "JYGS",
      "Name": "嘉峪关市",
      "ZipCode": "735100",
      "ProvinceID": 28
  },
  {
      "ID": 300,
      "SimpleName": "JCS",
      "Name": "金昌市",
      "ZipCode": "737100",
      "ProvinceID": 28
  },
  {
      "ID": 301,
      "SimpleName": "BYS",
      "Name": "白银市",
      "ZipCode": "730900",
      "ProvinceID": 28
  },
  {
      "ID": 302,
      "SimpleName": "TSS",
      "Name": "天水市",
      "ZipCode": "741000",
      "ProvinceID": 28
  },
  {
      "ID": 303,
      "SimpleName": "WWS",
      "Name": "武威市",
      "ZipCode": "733000",
      "ProvinceID": 28
  },
  {
      "ID": 304,
      "SimpleName": "ZYS",
      "Name": "张掖市",
      "ZipCode": "734000",
      "ProvinceID": 28
  },
  {
      "ID": 305,
      "SimpleName": "PLS",
      "Name": "平凉市",
      "ZipCode": "744000",
      "ProvinceID": 28
  },
  {
      "ID": 306,
      "SimpleName": "JQS",
      "Name": "酒泉市",
      "ZipCode": "735000",
      "ProvinceID": 28
  },
  {
      "ID": 307,
      "SimpleName": "QYS",
      "Name": "庆阳市",
      "ZipCode": "744500",
      "ProvinceID": 28
  },
  {
      "ID": 308,
      "SimpleName": "DXS",
      "Name": "定西市",
      "ZipCode": "743000",
      "ProvinceID": 28
  },
  {
      "ID": 309,
      "SimpleName": "LNS",
      "Name": "陇南市",
      "ZipCode": "742100",
      "ProvinceID": 28
  },
  {
      "ID": 310,
      "SimpleName": "LXHZZZZ",
      "Name": "临夏回族自治州",
      "ZipCode": "731100",
      "ProvinceID": 28
  },
  {
      "ID": 311,
      "SimpleName": "GNCZZZZ",
      "Name": "甘南藏族自治州",
      "ZipCode": "747000",
      "ProvinceID": 28
  },
  {
      "ID": 312,
      "SimpleName": "XNS",
      "Name": "西宁市",
      "ZipCode": "810000",
      "ProvinceID": 29
  },
  {
      "ID": 313,
      "SimpleName": "HDDQ",
      "Name": "海东地区",
      "ZipCode": "810600",
      "ProvinceID": 29
  },
  {
      "ID": 314,
      "SimpleName": "HBCZZZZ",
      "Name": "海北藏族自治州",
      "ZipCode": "810300",
      "ProvinceID": 29
  },
  {
      "ID": 315,
      "SimpleName": "HNCZZZZ",
      "Name": "黄南藏族自治州",
      "ZipCode": "811300",
      "ProvinceID": 29
  },
  {
      "ID": 316,
      "SimpleName": "HNCZZZZ",
      "Name": "海南藏族自治州",
      "ZipCode": "813000",
      "ProvinceID": 29
  },
  {
      "ID": 317,
      "SimpleName": "GLCZZZZ",
      "Name": "果洛藏族自治州",
      "ZipCode": "814000",
      "ProvinceID": 29
  },
  {
      "ID": 318,
      "SimpleName": "YSCZZZZ",
      "Name": "玉树藏族自治州",
      "ZipCode": "815000",
      "ProvinceID": 29
  },
  {
      "ID": 319,
      "SimpleName": "HXMGZCZZZZ",
      "Name": "海西蒙古族藏族自治州",
      "ZipCode": "817000",
      "ProvinceID": 29
  },
  {
      "ID": 320,
      "SimpleName": "YCS",
      "Name": "银川市",
      "ZipCode": "750000",
      "ProvinceID": 30
  },
  {
      "ID": 321,
      "SimpleName": "SZSS",
      "Name": "石嘴山市",
      "ZipCode": "753000",
      "ProvinceID": 30
  },
  {
      "ID": 322,
      "SimpleName": "WZS",
      "Name": "吴忠市",
      "ZipCode": "751100",
      "ProvinceID": 30
  },
  {
      "ID": 323,
      "SimpleName": "GYS",
      "Name": "固原市",
      "ZipCode": "756000",
      "ProvinceID": 30
  },
  {
      "ID": 324,
      "SimpleName": "ZWS",
      "Name": "中卫市",
      "ZipCode": "751700",
      "ProvinceID": 30
  },
  {
      "ID": 325,
      "SimpleName": "WLMQS",
      "Name": "乌鲁木齐市",
      "ZipCode": "830000",
      "ProvinceID": 31
  },
  {
      "ID": 326,
      "SimpleName": "KLMYS",
      "Name": "克拉玛依市",
      "ZipCode": "834000",
      "ProvinceID": 31
  },
  {
      "ID": 327,
      "SimpleName": "TLFDQ",
      "Name": "吐鲁番地区",
      "ZipCode": "838000",
      "ProvinceID": 31
  },
  {
      "ID": 328,
      "SimpleName": "HMDQ",
      "Name": "哈密地区",
      "ZipCode": "839000",
      "ProvinceID": 31
  },
  {
      "ID": 329,
      "SimpleName": "CJHZZZZ",
      "Name": "昌吉回族自治州",
      "ZipCode": "831100",
      "ProvinceID": 31
  },
  {
      "ID": 330,
      "SimpleName": "BETLMGZZZ",
      "Name": "博尔塔拉蒙古自治州",
      "ZipCode": "833400",
      "ProvinceID": 31
  },
  {
      "ID": 331,
      "SimpleName": "BYGLMGZZZ",
      "Name": "巴音郭楞蒙古自治州",
      "ZipCode": "841000",
      "ProvinceID": 31
  },
  {
      "ID": 332,
      "SimpleName": "AKSDQ",
      "Name": "阿克苏地区",
      "ZipCode": "843000",
      "ProvinceID": 31
  },
  {
      "ID": 333,
      "SimpleName": "KZLSKEKZZZZ",
      "Name": "克孜勒苏柯尔克孜自治州",
      "ZipCode": "835600",
      "ProvinceID": 31
  },
  {
      "ID": 334,
      "SimpleName": "KSDQ",
      "Name": "喀什地区",
      "ZipCode": "844000",
      "ProvinceID": 31
  },
  {
      "ID": 335,
      "SimpleName": "HTDQ",
      "Name": "和田地区",
      "ZipCode": "848000",
      "ProvinceID": 31
  },
  {
      "ID": 336,
      "SimpleName": "YLHSKZZZ",
      "Name": "伊犁哈萨克自治州",
      "ZipCode": "833200",
      "ProvinceID": 31
  },
  {
      "ID": 337,
      "SimpleName": "TCDQ",
      "Name": "塔城地区",
      "ZipCode": "834700",
      "ProvinceID": 31
  },
  {
      "ID": 338,
      "SimpleName": "ALTDQ",
      "Name": "阿勒泰地区",
      "ZipCode": "836500",
      "ProvinceID": 31
  },
  {
      "ID": 339,
      "SimpleName": "SHZS",
      "Name": "石河子市",
      "ZipCode": "832000",
      "ProvinceID": 31
  },
  {
      "ID": 340,
      "SimpleName": "ALES",
      "Name": "阿拉尔市",
      "ZipCode": "843300",
      "ProvinceID": 31
  },
  {
      "ID": 341,
      "SimpleName": "TMSKS",
      "Name": "图木舒克市",
      "ZipCode": "843900",
      "ProvinceID": 31
  },
  {
      "ID": 342,
      "SimpleName": "WJQS",
      "Name": "五家渠市",
      "ZipCode": "831300",
      "ProvinceID": 31
  },
  {
      "ID": 343,
      "SimpleName": "XGTBXZQ",
      "Name": "香港特别行政区",
      "ZipCode": "000000",
      "ProvinceID": 32
  },
  {
      "ID": 344,
      "SimpleName": "AMTBXZQ",
      "Name": "澳门特别行政区",
      "ZipCode": "000000",
      "ProvinceID": 33
  },
  {
      "ID": 345,
      "SimpleName": "TWS",
      "Name": "台湾省",
      "ZipCode": "000000",
      "ProvinceID": 34
  }
    ];
    //$.ajax({
    //    type: 'POST',
    //    url: '../Areas/GetCity',
    //    dataType: "json",
    //    data: {},
    //    async: false,
    //    success: function (msg) {
    //        allCities = msg;
    //    }
    //});


    var regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i, // 匹配汉字，拼音
        regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/, // 只匹配拼音
        reg_ae = /^[a-e]$/i, // 匹配首字母为 a-h
        reg_fj = /^[f-j]/i, // 匹配首字母为 i-p
        reg_ko = /^[k-o]/i, // 匹配首字母为 q-z
        reg_qt = /^[p-t]/i, // 匹配首字母为 q-z
        reg_uz = /^[u-z]/i; // 匹配首字母为 q-z
    //构建城市分类字面量
    var city = {
        hot: {},
        ABCDE: {},
        FGHIJ: {},
        KLMNO: {},
        PQRST: {},
        UVWXYZ: {}
    };

    //城市按首字母分类，填充到分类字面量
    (function() {
        for (var i = 0, len = allCities.length; i < len; i++) {
            var ltPart, //当前字母下的城市
          en = allCities[i].Name,
          spletter = allCities[i].SimpleName,
          first = spletter[0].toUpperCase();


            if (reg_ae.test(first)) {
                ltPart = 'ABCDE';
            } else if (reg_fj.test(first)) {
                ltPart = 'FGHIJ';
            } else if (reg_ko.test(first)) {
                ltPart = 'KLMNO';
            } else if (reg_qt.test(first)) {
                ltPart = 'PQRST';
            } else if (reg_uz.test(first)) {
                ltPart = 'UVWXYZ';
            }

            city[ltPart][first] ? city[ltPart][first].push(en) : (city[ltPart][first] = [], city[ltPart][first].push(en));

            city.hot['hot'] = []
            city.hot['hot'].push("宁波市")
            city.hot['hot'].push("北京市")
            city.hot['hot'].push("杭州市")
            city.hot['hot'].push("上海市")
            city.hot['hot'].push("南京市")
            city.hot['hot'].push("苏州市")
            //设置前16个城市为热门城市
            //if (i < 16) {
            //    city.hot['hot'] ? city.hot['hot'].push(en) : (city.hot['hot'] = [], city.hot['hot'].push(en));
            //}
        }
    })();

    var KuCity = function(target) {
        this.target = target; // 输入框
        this.container = null; //插件容器
        this.resultct = null; //搜索结果容器
        this.isKeyslect = false; //是否在用上下键选择
        this.isContainerExit = false; // 插件容器是否已存在
    };

    KuCity.prototype = {
        constructor: KuCity,
        //初始化
        init: function() {
            this.creatItem();
            this.tabChange();
            this.citySelect();
            this.inputSearch();
            this.keySelect();
            this.stopPropagation();
        },
        creathot:function(){
            var str = '<h3 class="kucity_header">热门城市</h3><dl><dd id="hotcity">';
            for (var i = 0; i < city.hot.hot.length; i++)
            {

                str += "<span  style=' width: 15%;display: inline-block; cursor: pointer;padding: 3px 0;border: 1px solid #fff;transition: all .3s;'>" + city.hot.hot[i] + "</span>";
            }
           
            return str + "</dd></dl>";
        },
        //创建市列表
        creatItem: function() {
            if(this.isContainerExit) return;
            var template = '<div class="kucity"><div class="citybox">' + this.creathot() + '<ul class="kucity_nav"><li class="active">ABCDE</li><li>FGHIJ</li><li>KLMNO</li><li>PQRST</li><li>UVWXYZ</li></ul><div class="kucity_body"></div></div><ul class="result"></ul></div>';
            $('body').append(template);

            this.container = $('.kucity');
            this.resultct = $('.result');

            for (var group in city) {
                var itemKey = [];
                if (group == "hot")
                    continue;
                for (var item in city[group]) {
                    itemKey.push(item);
                }
                itemKey.sort();
                var itembox = $('<div class="kucity_item">');
                itembox.addClass(group);

                for (var i = 0, iLen = itemKey.length; i < iLen; i++) {

                    var dl = $('<dl>'),
                        dt = '<dt>' + (itemKey[i] == 'hot' ? '' : itemKey[i]) + '</dt>',
                        dd = $('<dd>'),
                        str = '';

                    for (var j = 0, jLen = city[group][itemKey[i]].length; j < jLen; j++) {
                        str += '<span>' + city[group][itemKey[i]][j] + '</span>'
                    }

                    dd.append(str);
                    dl.append(dt).append(dd);
                    itembox.append(dl);
                }
                $('.kucity_body').append(itembox);
                this.container.find('.ABCDE').addClass('active');
            }
            this.isContainerExit = true;
        },
        //创建搜索结果列表
        creatResult: function(re, value) {
            var result = re.result,
                len = result.length,
                str = '';
            if (!!len) {
                for (var i = 0; i < len; i++) {
                    str += '<li><span class="name">' + result[i].cityName + '</span><span class="letter">' + result[i].py + '</span></li>'
                }
                this.container.find('.result').html('').html(str).find('li').eq(0).addClass('active');
            } else {
                this.container.find('.result').html('<li>没有找到<span class="noresult">' + value + '</span>相关信息</li>');
            }
        },
        //列表切换
        tabChange: function() {
            $('.kucity_nav').on('click', 'li', function(e) {
                var current = $(e.target),
                    index = current.index();

                current.addClass('active').siblings().removeClass('active');
                $('.kucity_item').eq(index).addClass('active').siblings().removeClass('active');
                $(' .kucity_body').scrollTop(0);

            })
        },
        //城市选择
        citySelect: function() {
            var self = this;
            $('.kucity_item dd').on('click', 'span', function (e) {
                var data = { Name: $(e.target).text() };
                for (var i = 0 ; i < allCities.length; i++) {
                    var row = allCities[i];
                    if (row.Name == data.Name) {
                        data.ID = row.ID;
                        break;
                    }
                }
                self.target.val(data.Name);
                Select(data);
                self.container.slideUp(300);
            })
            $('#hotcity').on('click', 'span', function (e) {
                var data = { Name: $(e.target).text() };
                for (var i = 0 ; i < allCities.length; i++) {
                    var row = allCities[i];
                    if (row.Name == data.Name) {
                        data.ID = row.ID;
                        break;
                    }
                }
                self.target.val((data.Name));
                Select(data);
                self.container.slideUp(300);
            })
            hotcity
        },
        //上下键选择搜索结果
        keySelect: function() {
            var self = this;
            this.target.on('keydown', function(e){
                var current = self.resultct.find('.active').index();
                if(current !== -1){
                    switch(e.keyCode){
                        //上
                        case 38: 
                            keyActive(false);
                            break;
                        //下
                        case 40:
                            keyActive(true);
                            break;
                        //确定
                        case 13: 
                            self.isKeyslect = false;
                            self.target.val(self.resultct.find('.active .name').text());
                            self.triggleShow('all');
                            self.target.blur();
                            break;
                        default: 
                            self.isKeyslect = false;
                            break;
                    }

                    function keyActive(isInorder) {
                        var max = self.resultct.find('li').length - 1;
                        if(isInorder){
                            current = current == max ? 0 : current + 1;
                        }else{
                            current = current == 0 ? max : current - 1;
                        }
                        self.resultct.find('li').eq(current).addClass('active').siblings().removeClass('active');
                        self.isKeyslect = true;
                    }
                }
            })
        },
        //搜索
        inputSearch: function() {
            var self = this;
            this.target.on('keyup', function(e) {
                if(!self.isKeyslect){
                    self.throttle(search, this);
                }
            })
            // 输入框搜索
            function search(e) {
                return;
                var container = self.container;
                self.triggleShow(false);
                var value = $(this).val();
                if (value) {
                    var url = 'https://sjipiao.alitrip.com/city_search.do?_ksTS=1439362066383_11337&lines=10&_input_charset=utf-8&needProvince=true&q=' + value;
                    $.ajax({
                        url: url,
                        type: 'get',
                        dataType: 'jsonp'
                    }).done(function(re) {
                        self.creatResult(re, value);
                    })
                } else {
                    self.triggleShow(true);
                }
            }
        },
        //列表，结果，整体 显示切换
        triggleShow: function(open) {
            var container = this.container;
            if (open === 'all') {
                container.slideUp(300)
            } else if (open) {
                container.find('.citybox').show().end().find('.result').hide();
            } else {
                container.find('.citybox').hide().end().find('.result').show();
            }
        },
        //函数节流
        throttle: function(fn, context) {
            clearTimeout(fn.tId);
            fn.tId = setTimeout(function(){
                fn.call(context);
            }, 100)
        },
        //阻止事件冒泡
        stopPropagation: function() {
            var self = this;
            //阻止事件冒泡
            this.container.on('click', stopPropagation);
            this.target.on('click', stopPropagation);
            //页面点击 隐藏
            $(document).on('click', function() {
                self.container.slideUp(300);
            })
            function stopPropagation(e) {
                e.stopPropagation();
            }
        }
    };

    var kucity = null;
    var IsRun = true;
    $.fn.kuCityGet = function () {
        return allCities;
    }
    $.fn.kuCity = function (options) {
        Select = options;
        var target = $(this);

        target.on('focus', function (e) {
            
            var top = $(this).offset().top + $(this).outerHeight(),
                left = $(this).offset().left;
            kucity = kucity ? kucity : new KuCity(target);
            kucity.target = $(e.target);
            if(IsRun==true)
                kucity.init();
            IsRun = false;
            kucity.container.slideDown(300).offset({
                'top': top ,
                'left': left+1
            });
            kucity.triggleShow(true);
            kucity.resultct.on('click', 'li', function () {
              
                kucity.target.val($(this).find('.name').text());
                kucity.triggleShow('all');
            })
        })
        return this;
    };
})(jQuery)
