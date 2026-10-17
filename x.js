var rawText = `sid,na,md,mpri,pri2,year
"2330","凱基台灣50","115/02","10.86","10.86","115"
"0050","元大台灣50","081/07","40.22","10.06","99"
"0052","富邦台灣科技","115/09","63.46","63.46","115"
"00918","中信綠能","111/11","15.11","15.11","111"
"00919","群益台灣高息","111/10","14.89","14.89","111"
"00929 ","復華台灣科技","115/09","40.51","40.51","115"
"00939","統一台灣高息動能","113/03","14.83","14.83","113"
`;


// 2. 將 x.js 裡面的 rawText 轉成標準 sto2 物件陣列
    var sto2 = rawText.trim().split(/\r?\n/).slice(1).map(function(row) {
      // 清除雙引號並以逗號切割欄位
    var cols = row.replace(/"/g, '').split(',');
      
      return {
        sid: cols[0],               // 代號
        na: cols[1],                // 名稱
        md: cols[2],                // 月日
        mpri: parseFloat(cols[3]),  // 價格1
        pri2: parseFloat(cols[4]),  // 價格2
        year: parseInt(cols[5], 10) // 年份
      };
    });


  function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return "";
        }
const sCookie = decodeURIComponent(getCookie("s"));
const pr2Cookie = decodeURIComponent(getCookie("pr2"));




// 1. 將 Cookie 字串切割為陣列並去除前後空白
const sList = sCookie ? sCookie.split(',').map(s => s.trim()) : [];
const pr2List = pr2Cookie ? pr2Cookie.split(',').map(p => p.trim()) : [];

// 2. 建立 sid -> price 的 key-value 對照表
const priceMap = {};
sList.forEach((sid, index) => {
  if (sid && pr2List[index] !== undefined) {
    priceMap[sid] = parseFloat(pr2List[index]);
  }
});

// 3. 依序搜尋 sto2 中的 sid 並更新 pri2
sto2.forEach(item => {
  if (priceMap.hasOwnProperty(item.sid) && !isNaN(priceMap[item.sid])) {
    item.pri2 = priceMap[item.sid];
  }

// 計算 (mpri - pri2) / pri2 的百分比，並保留小數點後 2 位
//if (item.pri2 !== 0 && !isNaN(item.pri2) && !isNaN(item.mpri)) {
//    const rate = ((item.mpri - item.pri2) / item.pri2) * 100;
//    item.year = rate.toFixed(2) + '%';
//  }

});





