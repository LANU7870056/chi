        // 課程數據
     
 const courses = {
            work: [
{icon: 'fas fa-chart-bar', title: '1.晏子春秋．諫上', url: 'chi-001.htm'},
{icon: 'fas fa-database', title: '2.外儲說右下', url: 'chi-002.htm'},
{icon: 'fas fa-signal', title: '3.夢渓筆談', url: 'chi-003.htm'},
{icon: 'fas fa-calculator', title: '4.左傳．隱公六年', url: 'chi-004.htm'},
{icon: 'fas fa-brain', title: '5.莊子.秋水', url: 'chi-005.htm'},
{icon: 'fas fa-project-diagram', title: '6.古今譚慨', url: 'chi-006.htm'},

{icon: 'fas fa-music', title: '7.哀江頭', url: 'chi-007.htm'},
{icon: 'fas fa-film', title: '8.豔歌行', url: 'chi-008.htm'},
{icon: 'fas fa-theater-masks', title: '9.史記、項羽本紀贊', url: 'chi-009.htm'},
{icon: 'fas fa-gamepad', title: '10.世說新語．品藻第九', url: 'chi-010.htm'},
{icon: 'fas fa-dice', title: '11.列子．說符', url: 'chi-011.htm'},
{icon: 'fas fa-dice-d20', title: '12.史記．貨殖列傳', url: 'chi-012.htm'},
{icon: 'fas fa-guitar', title: '13.王安石-辨私', url: 'chi-013.htm'},
{icon: 'fas fa-drum', title: '15.莊子．至樂', url: 'chi-015.htm'},
{icon: 'fas fa-drum-steelpan', title: '16.世說新語．言語', url: 'chi-016.htm'},
{icon: 'fas fa-headphones', title: '17.論語．陽貨', url: 'chi-017.htm'},
{icon: 'fas fa-microphone', title: '18.辨姦論', url: 'chi-018.htm'},
{icon: 'fas fa-microphone-alt', title: '19.歸去來辭', url: 'chi-019.htm'},
{icon: 'fas fa-star-of-david', title: '20.讀孟嘗君傳', url: 'chi-020.htm'},
{icon: 'fas fa-cross', title: '21.世說新語．規箴篇', url: 'chi-021.htm'},
{icon: 'fas fa-om', title: '22.聊齋志異．蒲松齡', url: 'chi-022.htm'},
{icon: 'fas fa-kaaba', title: '23.過香積寺', url: 'chi-023.htm'},
{icon: 'fas fa-hanukiah', title: '24.說苑．正諫', url: 'chi-024.htm'},
{icon: 'fas fa-church', title: '25.孟子．萬章', url: 'chi-025.htm'},
            ],


work2: [
{icon: 'fas fa-mosque', title: '34.聊齋誌異', url: 'chi-034.htm'},
{icon: 'fas fa-synagogue', title: '35.論語．泰伯', url: 'chi-035.htm'},
{icon: 'fas fa-campground', title: '37.資治通鑑-唐紀31', url: 'chi-037.htm'},
{icon: 'fas fa-fire', title: '38.資稟與修養[節錄]', url: 'chi-038.htm'},
{icon: 'fas fa-hat-wizard', title: '41.孔子使子路問津', url: 'chi-041.htm'},
{icon: 'fas fa-mask', title: '42.論語．微子', url: 'chi-042.htm'},
{icon: 'fas fa-candy-cane', title: '43.微子第十八', url: 'chi-043.htm'},
{icon: 'fas fa-gift', title: '44.論學', url: 'chi-044.htm'},
{icon: 'fas fa-holly-berry', title: '45.勸學', url: 'chi-045.htm'},
{icon: 'fas fa-snowman', title: '47.說苑．反質', url: 'chi-047.htm'},
{icon: 'fas fa-tree', title: '49.五柳先生傳－陶淵明', url: 'chi-049.htm'},
{icon: 'fas fa-file', title: '50.愛蓮說－周敦頤', url: 'chi-050.htm'},
{icon: 'fas fa-file-code', title: '51.柳宗元<蝜蝂傳>', url: 'chi-051.htm'},
{icon: 'fas fa-folder', title: '52.瀧岡阡表-歐陽脩', url: 'chi-052.htm'},
{icon: 'fas fa-folder-open', title: '53.禦暴說-陳黯', url: 'chi-053.htm'},
{icon: 'fas fa-save', title: '54.短歌行-曹操', url: 'chi-054.htm'},
{icon: 'fas fa-upload', title: '55.義田記-錢公輔', url: 'chi-055.htm'},
{icon: 'fas fa-download', title: '56.哀溺文-柳宗元', url: 'chi-056.htm'},
{icon: 'fas fa-wifi', title: '58.楚辭‧漁父', url: 'chi-058.htm'},
{icon: 'fas fa-signal', title: '59.師說', url: 'chi-059.htm'},

            ],



 design: [
{icon: 'fas fa-satellite-dish', title: '60.赤壁之戰-司馬光', url: 'chi-060.htm'},
{icon: 'fas fa-broadcast-tower', title: '61.柳河東', url: 'chi-061.htm'},
{icon: 'fas fa-chart-line', title: '62.哀江頭－杜甫', url: 'chi-062.htm'},
{icon: 'fas fa-chart-pie', title: '63.說林篇－韓非子', url: 'chi-063.htm'},
{icon: 'fas fa-chart-area', title: '64.豔歌行', url: 'chi-064.htm'},
{icon: 'fas fa-table', title: '65.說符－列子', url: 'chi-065.htm'},
{icon: 'fas fa-database', title: '66.史記·貨殖列傳－司馬遷', url: 'chi-066.htm'},
{icon: 'fas fa-server', title: '67.新語．辨惑－陸賈', url: 'chi-067.htm'},
{icon: 'fas fa-network-wired', title: '69.外儲說左上－韓非子', url: 'chi-069.htm'},
{icon: 'fas fa-project-diagram', title: '70.諫太宗十思疏－魏徵', url: 'chi-070.htm'},
{icon: 'fas fa-chart-bar', title: '72.梁惠王下－孟子', url: 'chi-072.htm'},
{icon: 'fas fa-database', title: '73.史記．孔子世家', url: 'chi-073.htm'},
{icon: 'fas fa-signal', title: '74.戰國策－楚策.', url: 'chi-074.htm'},
{icon: 'fas fa-calculator', title: '76.古詩十九首之八', url: 'chi-076.htm'},
{icon: 'fas fa-brain', title: '77.詩經．邶風．凱風', url: 'chi-077.htm'},
{icon: 'fas fa-project-diagram', title: '78.漢書．霍光傳－班固', url: 'chi-078.htm'},
{icon: 'fas fa-music', title: '81.東山談苑·宋人軼事彙編', url: 'chi-081.htm'},
{icon: 'fas fa-film', title: '82.故人之為心', url: 'chi-082.htm'},
{icon: 'fas fa-theater-masks', title: '84.陳情表－李密', url: 'chi-084.htm'},
{icon: 'fas fa-gamepad', title: '86.三國志·諸葛亮傳－陳壽', url: 'chi-086.htm'},
{icon: 'fas fa-dice', title: '87.許由疑盜－韓非子', url: 'chi-087.htm'},
{icon: 'fas fa-dice-d20', title: '88.說難－韓非子', url: 'chi-088.htm'},
{icon: 'fas fa-guitar', title: '89.搜神記 韓憑夫妻', url: 'chi-089.htm'},
{icon: 'fas fa-drum', title: '90.世說新語·雅量', url: 'chi-090.htm'},
{icon: 'fas fa-drum-steelpan', title: '91.孟子見梁惠王', url: 'chi-091.htm'},
{icon: 'fas fa-headphones', title: '92.逍遙遊－莊子', url: 'chi-092.htm'},
{icon: 'fas fa-microphone', title: '93.知北遊－莊子', url: 'chi-093.htm'},
{icon: 'fas fa-microphone-alt', title: '94.莊周貸粟', url: 'chi-094.htm'},
{icon: 'fas fa-star-of-david', title: '95.世說新語．言語篇[詠絮之才]', url: 'chi-095.htm'},
{icon: 'fas fa-cross', title: '96.呂氏春秋·士容', url: 'chi-096.htm'},
{icon: 'fas fa-om', title: '98.鹽鐵論', url: 'chi-098.htm'},
],

doc: [
{icon: 'fas fa-kaaba', title: '101.世說新語．陶侃搬磚', url: 'chi-101.htm'},
{icon: 'fas fa-hanukiah', title: '102.內儲說上－韓非子', url: 'chi-102.htm'},
{icon: 'fas fa-church', title: '103.養梟－劉基', url: 'chi-103.htm'},
{icon: 'fas fa-mosque', title: '105.賣炭翁－白居易', url: 'chi-105.htm'},
{icon: 'fas fa-synagogue', title: '106.晉書．列傳第36－陶侃', url: 'chi-106.htm'},
{icon: 'fas fa-campground', title: '109.左傳·鄭伯克段于鄢', url: 'chi-109.htm'},
{icon: 'fas fa-fire', title: '110.顏氏家訓．慕賢', url: 'chi-110.htm'},
{icon: 'fas fa-hat-wizard', title: '111.晉平公問於師曠', url: 'chi-111.htm'},
{icon: 'fas fa-mask', title: '112.漢．樂府詩', url: 'chi-112.htm'},
{icon: 'fas fa-candy-cane', title: '113.將進酒－李白', url: 'chi-113.htm'},
{icon: 'fas fa-gift', title: '114.贈衛人處士－杜甫', url: 'chi-114.htm'},
{icon: 'fas fa-holly-berry', title: '115.清平樂－李煜', url: 'chi-115.htm'},
{icon: 'fas fa-snowman', title: '117.念奴嬌－蘇軾', url: 'chi-117.htm'},
{icon: 'fas fa-tree', title: '119.水調歌頭－蘇軾', url: 'chi-119.htm'},

],
            project: [
                { icon: 'fas fa-tasks', title: '敏捷開發方法', url: '17.htm' },
                { icon: 'fas fa-calendar', title: '專案排期規劃', url: '18.htm' },
            ]
        };

        // 分類名稱映射
        const categoryNames = {
          work: '第1冊',
            work2: '第2冊',
            design: '第3冊',
            doc: '第4冊',
            project: '第5冊'
        };