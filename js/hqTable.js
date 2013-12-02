function makeStockTable() {
  var hqArr = new Array(
    ["600372", "hq_str_sh600372", "航空航天", "2013-12-02", "24.90", "30.00"],
    ["600184", "hq_str_sh600184", "通用机械", "2013-12-02", "24.78", "35.00"],
    ["300075", "hq_str_sz300075", "软件服务", "2013-12-02", "41.65", "45.00"],
    ["300147", "hq_str_sz300147", "医药",     "2013-11-29", "19.38", "23.20"],
    ["300332", "hq_str_sz300332", "环境保护", "2013-11-25", "12.42", "15.00"],
    ["002610", "hq_str_sz002610", "电器设备", "2013-11-25", "8.2",   "9.85" ],
    ["002396", "hq_str_sz002396", "通信设备", "2013-10-25", "17.25", "21.00"],
    ["300055", "hq_str_sz300055", "环境保护", "2013-10-25", "37.00", "49.00"], 
    ["000669", "hq_str_sz000669", "供气供热", "2013-10-25", "31.95", "40.33"],
    ["600761", "hq_str_sh600761", "工程机械", "2013-10-24", "10.22", "12.00"],
    ["300096", "hq_str_sz300096", "软件服务", "2013-12-02", "26.70", "34.26"],
    ["002475", "hq_str_sz002475", "元器件",   "2013-11-29", "29.42", "35.30"],
    ["600406", "hq_str_sh600406", "软件服务", "2013-11-28", "13.60", "16.49"],
    ["300024", "hq_str_sz300024", "工业机械", "2013-11-28", "42.15", "50.00"],
    ["002273", "hq_str_sz002273", "元器件",   "2013-11-25", "18.50", "23.70"],
    ["002065", "hq_str_sz002065", "软件服务", "2013-11-22", "29.90", "38.80"],
    ["601318", "hq_str_sh601318", "保险类",   "2013-11-15", "36.74", "47.00"],
    ["002317", "hq_str_sz002317", "医药",     "2013-11-15", "21.50", "27.80"],
    ["600535", "hq_str_sh600535", "医药",     "2013-11-12", "39.70", "42.30"],
    ["300157", "hq_str_sz300157", "石油",     "2013-11-06", "24.83", "32.00"],
    ["000063", "hq_str_sz000063", "通信设备", "2013-11-06", "15.91", "17.28"],
    ["300289", "hq_str_sz300289", "医药",     "2013-11-06", "30.48", "36.54"],
    ["000826", "hq_str_sz000826", "环境保护", "2013-11-06", "34.89", "45.00"],
    ["601766", "hq_str_sh601766", "运输设备", "2013-11-06", "5.00",  "6.50" ],
    ["601699", "hq_str_sh601699", "煤炭",     "2013-11-01", "11.52", "12.90"],
    ["002422", "hq_str_sz002422", "医药",     "2013-10-31", "46.10", "53.00"],
    ["600633", "hq_str_sh600633", "传媒娱乐", "2013-10-31", "34.66", "45.00"],
    ["000002", "hq_str_sz000002", "房地产",   "2013-10-31", "9.08",  "10.60"],
    ["601601", "hq_str_sh601601", "保险类",   "2013-10-31", "17.13", "22.00"],
    ["600157", "hq_str_sh600157", "煤炭",     "2013-10-31", "6.01",  "7.80" ],
    ["601238", "hq_str_sh601238", "汽车类",   "2013-10-31", "7.92",  "9.50" ],
    ["600597", "hq_str_sh600597", "食品饮料", "2013-10-30", "21.64", "27.00"],
    ["600637", "hq_str_sh600637", "传媒娱乐", "2013-10-30", "38.78", "45.00"],
    ["600699", "hq_str_sh600699", "汽车类",   "2013-10-30", "13.62", "17.00"],
    ["600886", "hq_str_sh600886", "电力",     "2013-10-30", "4.02",  "5.12" ],
    ["600837", "hq_str_sh600837", "证券类",   "2013-10-30", "11.75", "14.62"],
    ["002185", "hq_str_sz002185", "半导体",   "2013-10-29", "10.94", "14.20"],
    ["600518", "hq_str_sh600518", "医药",     "2013-10-29", "19.48", "22.50"],
    ["002572", "hq_str_sz002572", "家居用品", "2013-10-29", "20.78", "23.90"],
    ["002631", "hq_str_sz002631", "家居用品", "2013-10-29", "12.09", "14.50"],
    ["002565", "hq_str_sz002565", "造纸",     "2013-10-29", "16.54", "19.85"],
    ["002604", "hq_str_sz002604", "食品饮料", "2013-10-29", "20.17", "25.60"],
    ["600305", "hq_str_sh600305", "食品饮料", "2013-10-28", "16.63", "20.80"],  //20131113除权处理
    ["002612", "hq_str_sz002612", "纺织服装", "2013-10-28", "23.93", "27.90"],
    ["002303", "hq_str_sz002303", "造纸",     "2013-10-28", "20.21", "24.25"],
    ["002305", "hq_str_sz002305", "房地产",   "2013-10-28", "7.94",  "10.32"],
    ["002048", "hq_str_sz002048", "汽车类",   "2013-10-28", "8.24",  "10.20"],
    ["600805", "hq_str_sh600805", "综合类",   "2013-10-28", "10.30", "13.30"],
    ["600403", "hq_str_sh600403", "煤炭",     "2013-10-28", "9.34",  "11.90"],
    ["600674", "hq_str_sh600674", "电力",     "2013-10-28", "11.47", "14.14"],
    ["002683", "hq_str_sz002683", "化工",     "2013-10-28", "28.12", "35.00"],
    ["002284", "hq_str_sz002284", "汽车类",   "2013-10-25", "8.74",  "10.80"],
    ["002410", "hq_str_sz002410", "软件服务", "2013-10-25", "29.83", "38.18"],
    ["002022", "hq_str_sz002022", "医药",     "2013-10-25", "15.26", "18.30"],
    ["002448", "hq_str_sz002448", "运输设备", "2013-10-25", "13.27", "16.50"],
    ["600741", "hq_str_sh600741", "汽车类",   "2013-10-25", "10.62", "13.65"],
    ["002286", "hq_str_sz002286", "食品饮料", "2013-10-25", "16.86", "18.90"],
    ["000726", "hq_str_sz000726", "纺织服饰", "2013-10-25", "8.95",  "11.60"],
    ["300315", "hq_str_sz300315", "互联网",   "2013-10-25", "28.60", "35.00"],
    ["002376", "hq_str_sz002376", "电脑设备", "2013-10-25", "10.76", "13.25"],
    ["600050", "hq_str_sh600050", "电信运营", "2013-10-25", "3.44",  "4.00" ],
    ["002462", "hq_str_sz002462", "商业连锁", "2013-10-24", "14.99", "18.90"],
    ["601222", "hq_str_sh601222", "电气仪表", "2013-10-24", "25.52", "29.70"],
    ["300257", "hq_str_sz300257", "通用机械", "2013-10-23", "35.85", "45.00"],
    ["300128", "hq_str_sz300128", "元器件",   "2013-10-23", "10.90", "12.00"],
    ["002230", "hq_str_sz002230", "软件服务", "2013-10-22", "48.86", "58.63"],
    ["601799", "hq_str_sh601799", "汽车类",   "2013-10-22", "12.78", "14.00"],
    ["300074", "hq_str_sz300074", "通信设备", "2013-10-22", "32.70", "38.85"],
    ["300258", "hq_str_sz300258", "汽车类",   "2013-10-21", "11.88", "14.50"],
    ["002138", "hq_str_sz002138", "元器件",   "2013-10-21", "16.56", "19.80"],
    ["300005", "hq_str_sz300005", "纺织服装", "2013-10-21", "16.25", "18.70"],
    ["002251", "hq_str_sz002251", "商业连锁", "2013-10-18", "14.78", "16.50"],
    ["300144", "hq_str_sz300144", "旅游",     "2013-10-18", "19.65", "21.32"],
    ["002126", "hq_str_sz002126", "汽车类",   "2013-10-18", "7.87",  "9.45" ],
    ["600828", "hq_str_sh600828", "商业连锁", "2013-10-16", "5.99",  "6.75" ],
    ["600138", "hq_str_sh600138", "旅游",     "2013-10-16", "18.40", "21.00"],
    ["300299", "hq_str_sz300299", "软件服务", "2013-10-15", "18.42", "20.00"],
    ["300287", "hq_str_sz300287", "软件服务", "2013-10-15", "33.50", "40.20"],
    ["300253", "hq_str_sz300253", "软件服务", "2013-10-14", "57.75", "70.00"],
    ["002521", "hq_str_sz002521", "造纸",     "2013-10-14", "8.61",  "9.80" ],
    ["002063", "hq_str_sz002063", "软件服务", "2013-10-14", "19.50", "26.50"],
    ["300094", "hq_str_sz300094", "农林牧渔", "2013-10-14", "7.37",  "8.40" ],
    ["002313", "hq_str_sz002313", "通信设备", "2013-10-14", "19.96", "20.00"]
  )
  
  function makeTable() {    
    var hqLength = hqArr.length;
    for(var i=0;i<hqLength;i++)
      {
        id = i + 1;
        putsStockQuotes(id,hqArr[i][0],eval(hqArr[i][1]).split(","),hqArr[i][2],hqArr[i][3],hqArr[i][4],hqArr[i][5]);       
      }
  }

  return makeTable;
}


//大盘指数显示模块
function putsIndexQuotes(hqStr) {
  var color = putsColor(hqStr[3]);
  document.write("<td style=color:" + color + ">");
  document.write(hqStr[0] + ":&nbsp" + hqStr[1] + "&nbsp&nbsp" + hqStr[2] + "&nbsp&nbsp" + hqStr[3] + "%");
  document.write("</td>");
}


//创业板指数显示模块
function putsCYBQuotes(hqStr) {
  var nowChange = hqStr[3] - hqStr[2];
  var color = putsColor(nowChange);
  nowChange = (hqStr[3] == 0) ? "---" : nowChange.toFixed(2); 
  var nowChangePer = ((hqStr[3] - hqStr[2]) / hqStr[2]) * 100;
  nowChangePer = (hqStr[3] == 0) ? "---" : nowChangePer.toFixed(2); 
  document.write("<td style=color:" + color + ">");
  document.write(hqStr[0] + ":&nbsp" + hqStr[3] + "&nbsp&nbsp" + nowChange + "&nbsp&nbsp" + nowChangePer + "%");
  document.write("</td>");
}


//根据数值设置字的颜色
function putsColor(nowChange) {
  return (nowChange < 0) ? "#009933" : "#FF0000";
}


//根据行业分类关键字给出醒目颜色
function putsColorPoint(str, pointStr) {
  return (str === pointStr) ? "#DAA520" : "#000000";
}


//股票行情表格显示模块
function putsStockQuotes(id, name, hqStr, industry, myDate, bidPrice, forecastPrice) {

  //当股票当日停盘或者初始化而造成当前价格为0时，对涨跌幅不显示
  var nowChange = ((hqStr[3] - hqStr[2]) / hqStr[2]) * 100;
  nowChange = (hqStr[3] == 0) ? "---" : nowChange.toFixed(2); 

  var totalChange = ((hqStr[3] - bidPrice) / bidPrice) * 100;
  totalChange = (hqStr[3] == 0) ? "---" : totalChange.toFixed(2);

  var nowPrice = parseFloat(hqStr[3]);
  nowPrice = nowPrice.toFixed(2);

  //溢价空间计算
  var premiumSpace = ((forecastPrice - hqStr[3]) / hqStr[3]) * 100;
  premiumSpace = (hqStr[3] == 0) ? "---" : premiumSpace.toFixed(2);

  //根据当日涨跌幅来显示当日涨跌列的颜色
  var colorNow = putsColor(nowChange);

  //根据累计涨跌幅来显示累计涨跌列的颜色
  var colorTotal = putsColor(totalChange);

  //关键行业分类加醒目颜色
  var colorPoint = putsColorPoint(industry, "暂无");

  //根据市场，设置市场标示符
  var market = (name >= 600000) ? "sh" : "sz";

  document.write("<tr> <td>" + id +"</td>");             //序号

  //股票代码，点击链接跳转至相应新浪股票实时行情网址
  //http://finance.sina.com.cn/realstock/company/sh600000/nc.shtml
  document.write("<td>" + "<a href=\"http://finance.sina.com.cn/realstock/company/" + market + name + "/nc.shtml\" target=\"_blank\">" + name + "</a>" + "</td>");        //股票代码
  document.write("<td>" + "<a href=\"http://finance.sina.com.cn/realstock/company/" + market + name + "/nc.shtml\" target=\"_blank\">" + hqStr[0] + "</a>" + "</td>");    //股票名称
  document.write("<td style=color:" + colorNow +">" + nowChange + "%</td>");            //当日涨跌
  document.write("<td style=color:" + colorNow +">" + nowPrice + "</td>");              //当前价格
  document.write("<td style=color:" + colorPoint + ">" + industry + "</td>");           //行业分类
  document.write("<td style=color:" + colorPoint + ">" + myDate + "</td>");             //关注日期
  document.write("<td style=color:" + colorTotal +">" + totalChange +"%</td>");         //累计涨跌
  document.write("<td style=color:" + colorPoint + ">" + forecastPrice +"</td>");       //目标价格
  document.write("<td style=color:" + colorPoint + ">" + premiumSpace +"%</td></tr>");  //溢价空间

}


