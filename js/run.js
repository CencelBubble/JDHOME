
console.log($);

$(function () {
 //   删除顶部广告
 $(".rm-btn").on("click",function () {
     $(".top-AdPositionId").remove();
 });


    var span = $(".address>span");

// 地区选择
    $(".address").on("mouseenter",function () {
        $(this).css({
            background:"#ffff",
            cursor:"pointer"
        });
        $(".citys").show().css("z-index",999);

        //获取存储默认地区的元素
        // var span = $(this).find("span");

        //获取默认地地区的val值
       var deafultvalue = span.text();

        //获取地区列表所有的a标签
        var as = $(".c_list").find("a");
       //封装成函数
        function changeDeafultValue() {

            //情况所有样式
            as.removeClass("pitch");
            as.each(function (index,val) {

                var text =   as.eq(index).text();
                //设置和默认位置区域样式
                if(text == deafultvalue){
                    as.eq(index).addClass("pitch");
                }
            });
        }
       //封装函数
        changeDeafultValue();

       //注册移入事件
        as.on("mouseenter",function () {
           $(this).addClass("address-list")
               // .parent()
               // .siblings()
               // .children("a")
               // .removeClass("address-list");
        });
        as.on("mouseleave",function () {
            as.removeClass("address-list");
        });
       //点击事件  选中地区需要span的值和当前样式
        as.on("click",function (e) {
            //设置span的值
            span.text($(this).text());
            //阻止冒泡
            e.stopPropagation();
            //重新设置默认地区位置
            changeDeafultValue();
        //    关闭地区列表框
           $(".citys").hide();


        });

        //获取国家列表
        var countrys = $(".country a");
        //获取国家列表
        countrys.on("click",function () {

            $(".citys").hide();
        });
        //  移入事件
        countrys.on("mouseenter",function () {
                $(this).addClass("c-hover")
        });
        countrys.on("mouseleave",function () {
            countrys.removeClass("c-hover");
        });

    });
    //选择地区离开
    $(".address").on("mouseleave",function () {
        $(this).css({
            background:"#e3e4e5",
            cursor:"pointer"
        });
        $(".citys").hide();
    });

    /*导航栏显示颜色*/

    var alla =  $(".Control").find("a");
    alla.on("mouseenter",function () {
        //判断不是带有类样式的属性
       if(!alla.hasClass("nav-list-show")) {
           $(this).css({
               color:"#e33333"
           })
       }
    });
    alla.on("mouseleave",function () {
        if(!alla.hasClass("nav-list-show")) {
            $(this).css({
                color:""
            })
        }
    });
// nav导航栏
   $(".nav-list-show").on("mouseenter",function () {
      $(this).find(".reveal").show().css({
          zIndex:999
      });
       $(this).css({
          backgroundColor:"#fff"
       });

   });

   $(".nav-list-show").on("mouseleave",function () {
       $(this).find(".reveal").hide();
       $(this).css({
           backgroundColor:""
       });
   });


    /*搜索框*/
    $(".input-field").on("blur",function () {
           $(this).val("积木");
    });

    $(".input-field").on("focus",function () {

      $(this).val("");
    });
    /*购物车下面的热门栏*/

     /*购物车显示*/

    $(".shopcar").on("mouseenter",function () {
            $(".basket").css({
                zIndex:999,

            }).show();
    });
    $(".shopcar").on("mouseleave",function () {
        $(".basket").hide();
    });

    /*左边栏*/
    //获取所有的li
    var list = $(".l-slide ul>li");
    list.on("mouseenter",function () {
        //设置索引值
        var idx = $(this).index();
        //获取所有需要显示的div
        var product = $(".product");
        product.eq(idx).show();

    });
    list.on("mouseleave",function () {
        //设置索引值
        var idx = $(this).index();
        //获取所有需要显示的div
        var product = $(".product");
        product.eq(idx).hide();

    });

    //轮播图
    (function () {
        //获取所有的li
        var lis = $(".pic li");
        //设置索引值
        var index = 0;

        //获取最大盒子
        var bigBox = $(".carousel");

        //获取按钮盒子
        var ctrlBox = $(".ctrl-btn");
        //获取按钮
        var next =$("#next");
        var prev = $("#prev");
        //获取小圆点盒子
        var circle = $(".circle");
        //获取所有的圆点
        var spans = circle.children("span");



        //隐藏所有图片

        lis.hide();

        //展示第一张图片
        lis.eq(index).show();

        //右边按钮

        next.on("click",function () {
                index++;
                //判断索引值
                index = index == lis.length?0:index;

                //设置效果
                lis.eq(index).stop().fadeIn().siblings().stop().fadeOut();
                spans.eq(index).addClass("light").siblings().removeClass("light");


            });


        //左边按钮
        prev.on("click",function () {
           index--;
           index = index>-1?index:lis.length-1;
           lis.eq(index).stop().fadeIn().siblings().stop().fadeOut();
           spans.eq(index).addClass("light").siblings().removeClass("light");
        });

        var timeId =null;
        //设置定时器
        function start() {
            clearInterval(timeId);
            timeId = setInterval(function () {

                next.click();
            },3000);
        }

        //开启定时器
        start();

        //移入大盒子显示按钮
        bigBox.on("mouseenter",function () {
            ctrlBox.show();
            clearInterval(timeId);
        });
        //离开隐藏
        bigBox.on("mouseleave",function () {
            ctrlBox.hide();
            start();
        });



        /*

         //设置第一张显示

        setInterval(function () {

             if(index == lis.length){
                 index=0;
             }
             console.log(index);
             lis.eq(index).fadeIn().siblings().fadeOut();
             index++;
         },2000);*/

    }());


    //公告栏
    var notice = $(".noticebox");
    //获取span
    var selm = notice.find("span");
    //获取边框
    var samllBorder = notice.find("s");
    //获取新闻
    var news = notice.find(".news");
    //设置第一个展示
    news.eq(0).show();
    //注册span的移入事件
    selm.on("mouseenter",function () {
        //设置索引值
        var idx = $(this).index();
        //获取内容距离左边的位置
        var titleLeft = ($(this).position().left+6)+"px";
        //设置移动距离
        samllBorder.stop().animate({left:titleLeft});

        idx = idx>1?idx-2:idx;
        news.eq(idx).stop().show().siblings(".news").hide();

    });

    var flag = true;
    //侧边栏事件
    (function () {
      //获取所有的li
      var slidrLi = $(".sliderbar>ul>li")
      //获取div
      var sliderDiv = slidrLi.children(".slider-item");

     //获取登录框
     

      //注册事件
        slidrLi.on("mouseenter",function (e) {
                e.stopPropagation();
                var idx = 0;

                $(this).addClass("showColor").siblings().removeClass("showColor");
                $(this).children("div").eq(0).show().css({
                    backgroundColor:"#e83632"
                }).stop().animate({left:"-60px"},function () {
                    flag= false;
                    console.log("进入时开始执行"+false)
                });



            //设置索引值



        });

        //离开时情况所有样式
        slidrLi.on("mouseleave",function (e) {
                e.stopPropagation();
                slidrLi.removeClass("showColor");
                $(this).children("div").eq(0).css({
                    backgroundColor:"#7a6e6e"
                }).stop().animate({left:0},function () {
                    $(this).hide();
                    flag= true;
                    console.log("离开执行完毕"+flag);
                });


        });

        var loginBox = $(".login");
        
        //获取登录方式盒子
        var login_method= $(".login-method");
        //获取li
         var list = $(".l-ul").children();
       
       
        //获取遮罩层
        var mask = $(".login-mask");
         //获取两种方式不同的盒子
         var showdiv = $(".choice");

        

        //点击事件
        slidrLi.on("click",function(){
                loginBox.show();
                mask.show();

                // loginBox.hide();
                // mask.hide();
                  //获取关闭按钮
         var closeBtn = $(".close");
        //关闭事件
         closeBtn.on("click",function(){

            loginBox.hide();
            mask.hide();
            showdiv.hide();
            list.removeClass("login-color");
         })



         //登录方式移动事件
         //设置第一个显示红色
         list.eq(0).addClass("login-color");
         showdiv.eq(0).show();
         //注册事件
         list.on("click",function(){
             //设置索引值
             var idx = $(this).index();

            $(this).addClass("login-color").siblings().removeClass("login-color");
            showdiv.eq(idx).show().siblings(".choice").hide();
         });
        })

    }());



   //秒杀时间

   
   (function(){
    //获取秒杀盒子
    var sk_time = $(".sk-time");
    
     //获取存储时间的元素
     var times = sk_time.find("a");
     //获取时
     var h = times.eq(0);
     var m = times.eq(1);
     var s = times.eq(2);
    //获取当前时间
    //设置活动结束事件
    var endTime = Date.now() + 60*60*1000;
    
    //开始定时器
    setInterval(function(){
        
      //相差的事件毫秒数
       var  erverTime = endTime - Date.now();

       var house =  erverTime/(3600*1000)>1?erverTime/(3600*1000):0+"0";
       
        h.text(house);

       var minutes = Math.floor(erverTime /(1000*60));
       minutes = minutes < 10?"0"+minutes:minutes;
       m.text(minutes)
     
       var seconds = Math.round(erverTime/(1000)%60);
       seconds = seconds <10?"0"+seconds:seconds;
       s.text(seconds)

    },1000)


   }());






    //限时商品
       (function () {


           //顶层盒子
           var box = $(".seamless");
           //获取最大的外部边框

           var outbox = $(".switchover");
            //盒子的宽度
           var boxWidth = box.width();
           //获取列表li
           var list = outbox.children();

           //获取需要展示的所有图片
           var imgs = list.children("ul").find("img");
           //商品介绍
           var introduce = list.children("ul").find("p");
            //优惠
           var price = $(".commodity-price");
           //零售
           var retail = $(".retail-price");

           //按钮
           var btns =$(".toggle-btn").children();

           //设置图片
           var pics = ["images/wf01.jpg",
               "images/wf02.jpg",
               "images/wf03.jpg",
               "images/wf04.jpg",
               "images/wf05.jpg",
               "images/wf06.jpg",
               "images/wf07.jpg",
               "images/wf08.jpg",
               "images/wf09.jpg",
               "images/wf10.jpg",
               "images/wf11.jpg",
               "images/wf12.jpg"];
           //内容
           var contents =[
               "七匹狼袜子男袜夏薄款吸汗透气休闲纯色棉袜 经典6双礼盒装",
               "和田玉吊坠 本命佛玉坠 十二生肖八大守护神菩萨玉佩项链 开光男女情侣款白玉笑佛玉观音挂件附鉴定证书 属鸡-不动尊菩萨",
               "【买1送1 品质保证】【厂家直销 仅售30元免邮】防水女包牛津布百搭小背包尼龙双肩包潮款迷你胸包 黑色6095",
               "六品堂 6本装 凹槽字帖贴楷书儿童小学生练字帖楷书初学者数字幼儿练字板学前班练字本一二三年级文具",
               "SUGAR 糖果手机C9 64GB+3GB 高通8核 全网通4G手机 双卡双待 5000万像素拍摄 曜岩黑",
               "炊大皇（COOKER KING）炒锅麦饭石不粘锅电磁炉家用锅具燃气炉适用 30cm (适合1-4人）",
               "VERSACE范思哲男装棉质圆领印花短袖T恤V800683S VJ00295 黑色新款 XL",
               "易跑MINI5跑步机 家用静音智能语音控速折叠运动迷你健身器材 PLUS版【京东送货】",
               "意大利芭喜Baci进口巧克力礼盒装386g 爱心型礼物送女友礼品 情人节生日创意礼物表白礼物",
               "雅萌（YA-MAN） yaman美容器 射频美容仪器   脸部洁面仪 导入导出补水仪  11t",
               "龍隐 金刚菩提子手串佛珠尼泊尔藏式文玩手链爆肉双龙纹高油密同树原籽男士款 五瓣爆肉双龙纹蜂窝梅花桩19-20mm 深度清理",
               "红粉宣言2018春秋季新款百搭修身弹力牛仔裤女小脚 深蓝色 28 (2尺1)",
           ]
           //优惠价
           var prices = [
               "37.90",
               "296.00",
               "30.00",
               "18.00",
               "699.00",
               "119.90",
               "399.90",
               "1769.90",
               "188.00",
               "3699.00",
               "198.00",
               "69.00"

           ];
           //零售价
           var retails =[
               "79.00",
               "356.00",
               "498.00",
               "39.90",
               "1699.00",
               "159.90",
               "690.00",
               "2499.00",
               "498.00",
               "4599.00",
               "298.00",
               "139.00"
           ];



           //初始化
           imgs.each(function (index) {

               imgs.eq(index).attr("src",pics[index]);
               introduce.eq(index).text(contents[index]);
               price.eq(index).text(prices[index]);
               retail.eq(index).text(retails[index]);
           })

           //克隆第一份li
           var objLi = list.eq(0).clone();

           //追加到ul里面
           objLi.appendTo(outbox);


           //获取li的个数
           var liLength = outbox.children().length;

            console.log(liLength);
           //设置ul的宽度

           outbox.css("width",(boxWidth*liLength)+"px");


           //设置索引
           var index = 0;
            //右边按钮
           btns.eq(0).on("click",function () {
                index++;
                //判断索引值是否超过图片的个数
                if(index == liLength){

                    index =0;
                    //控制ul立马跳转到最左边的位置
                    outbox.css({left:"-"+(index*boxWidth)+"px"})
                    index++;
                }
              outbox.stop().animate({left:"-"+(index*boxWidth)+"px"});

           });

           //左边按钮
           btns.eq(1).on("click",function () {
              index--;
              //判断是否小于0
              if(index < 0){
                  index = liLength-1;
                  //控制ul立马跳转到最右边的位置
                  outbox.css({left:"-"+(index*boxWidth)+"px"});
                  index--;
              }
              outbox.stop().animate({left:"-"+(index*boxWidth)+"px"});
           });

       }());





    //右边栏
    (function () {
        //创建索引值
        var idx = 0;
        //获取外部盒子
        var seamless = $(".r-seamless");

        //获取内部盒子
        var innerBox = seamless.children("div").eq(0);
        //获取内部盒子的宽度
        var innerWidth = innerBox.width();
        var ul = seamless.find("ul");

        //获取切换小圆点
        var toggle = seamless.children("div").eq(1).children();
        toggle.eq(0).css("backgroundColor","#e83632");
        //克隆第一个元素
        var ObjLi =ul.children().eq(0).clone();

        //添加到ul
        ul.append(ObjLi);

        //获取li的个数
        var LiCount = ul.children().length;

        //设置ul的长度
        ul.css("width",(LiCount*innerWidth)+"px");

        //移入事件
        //设置定时器开关
        var timer = null;

        //小圆点移入事件
        toggle.on("mouseenter",function () {
            //判断用户移入时当前的索引值是否等于2
            if(idx == LiCount - 1){
                idx = 0;
                //立马移动到最左侧;
                ul.css("left","-"+(idx*innerBox.width())+"px");
            }

            //设置索引值
            idx = $(this).index();
            $(this).css("backgroundColor","#e83632").siblings().css("backgroundColor","gray");
            ul.stop().animate({left:"-"+(idx*innerBox.width())+"px"});

        });


        beginTimer();
        //设置定时器
        //封装成函数
    function beginTimer(){
        //开启之前清楚旧的定时器
        clearInterval(timer);
        timer = setInterval(function () {
            idx++; //1
            //1的样式
            if(idx == LiCount-1){
                //到最后一张图片设置第一个圆点的样式
                toggle.eq(0).css("backgroundColor","#e83632").siblings().css("backgroundColor","gray");
            }
            if(idx == LiCount){
                //索引值等于li的个数时，设置索引值为0 并且设置ul的图片回到第一个 在+1移动到第二个li
                idx = 0;
                ul.css("left","-"+(idx*innerWidth)+"px");
                idx++;
            }
            toggle.eq(idx).css("backgroundColor","#e83632").siblings().css("backgroundColor","gray");

            ul.stop().animate({left:"-"+(idx*innerWidth)+"px"})




        },2000)
    }

        innerBox.on("mouseenter",function(){
            //清楚定时器
            clearInterval(timer);
        }).on("mouseleave",function(){
            //开启定时器
            beginTimer();
        });
    }());




    //排行榜
    (function () {

        //排名数组
        var  arrRanking = [1,2,3,4,5,6];
        //颜色
        var arrColor = ["red","orangered","orange","black","black","black"];

        //填充内容
        var allObj ={
            phone:{
                pics:[
                    "images/手机1.jpg",
                    "images/手机2.jpg",
                    "images/手机3.jpg",
                    "images/手机4.jpg",
                    "images/手机5.jpg",
                    "images/手机6.jpg"
                ],
                title:[
                    "Apple iPhone 8 Plus (A1864) 64GB 金色 移动联通电信4G手机",
                    "荣耀9i 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待",
                    "小米8SE 全面屏智能手机 6GB+64GB 灰色 全网通4G 双卡双待  拍照手机 游戏手机",
                    "荣耀10 GT游戏加速 AIS手持夜景 6GB+64GB 幻夜黑 全网通 移动联通电信4G 双卡双待",
                    "Apple iPhone 7 Plus (A1661) 32G 金色 移动联通电信4G手机",
                    "小米 红米6  全网通版 3GB内存 巴厘蓝 32G 移动联通电信4G手机 双卡双待 拍照手机"
                ]
            },
            big:{
                pics:[
                    "images/大家电01.jpg",
                    "images/大家电02.jpg",
                    "images/大家电03.jpg",
                    "images/大家电04.jpg",
                    "images/大家电05.jpg",
                    "images/大家电06.jpg"
                ],
                title:[
                    "美的 Midea 8公斤全自动波轮洗衣机 智能童锁 水位随心调节 MB80V31\n",
                    "海尔（Haier）258升 风冷无霜三门冰箱 中门5℃~-18℃变温 TABT杀菌 3D立体环绕风 BCD-258WDPM\n",
                    "小米（MI）小米电视4C 50英寸 L50M5-AD 2GB+8GB HDR 4K超高清 蓝牙语音遥控 人工智能语音网络液晶平板电视",
                    "创维（Skyworth）50M9 50英寸人工智能丰富教育资源HDR 4K超高清智能互联网液晶电视机(黑色)\n",
                    "JHS A019 1p 移动空调 单冷一体机",
                    "奥克斯（AUX）2匹 冷暖 变频  制冷 立柜式空调柜机(KFR-51LW/BpNSP1+3)"
                ]
            },
            life:{
                pics:[
                    "images/电器01.jpg",
                    "images/电器02.jpg",
                    "images/电器03.jpg",
                    "images/电器04.jpg",
                    "images/电器05.jpg",
                    "images/电器06.jpg"
                ],
                title:[
                    "先锋（Singfun）大风量电风扇 落地扇 电扇 DD1701 京东自营五叶风扇",
                    "TCL TFS16RD 五叶遥控落地扇/电风扇",
                    "艾美特(Airmate)饮水机台式 即热式饮水机 速热电热水瓶电水壶 即热饮水机 办公室桌面饮水器 2L",
                    "小米（MI）小米净水器前置活性炭滤芯",
                    "美的（Midea）AC120-17ARW 劲冷遥控冷风扇/空调扇/冷风机/制冷电风扇",
                    "奥克斯（AUX）YLR-5-N 冷热双门饮水机"

                ]
            },
            kitchen:{
                pics:[
                    "images/厨房01.jpg",
                    "images/厨房02.jpg",
                    "images/厨房03.jpg",
                    "images/厨房04.jpg",
                    "images/厨房05.jpg",
                    "images/厨房06.jpg"
                ],
                title:[
                    "【闪电发货】美国品牌Ashton无油空气炸锅家用升级四代智能大容量电炸锅多功能薯条机烘烤箱 260智能黑色升级新款+送食谱 支持8天无理由退货",
                    "小熊（Bear）料理机 打蛋器电动家用迷你打奶油机搅拌器烘焙手持DDQ-B01K1",
                    "美的（Midea）电压力锅 一锅双胆 智能预约 WQC50A1P 5L高压锅",
                    "东菱（Donlim）打蛋器 电动 搅拌机 打奶油 打发器 手持 料理机 HM-955",
                    "荣事达（Royalstar）养生壶玻璃加厚煮茶壶煮茶器烧水壶花茶壶1.8L多功能陶瓷涂层防糊底YSH8073\n",
                    "长虹（CHANGHONG） 电饭煲电饭锅小型电饭煲大带蒸笼西施煲 3L"
                ]
            },
            drink:{
                pics:[
                    "images/冲调01.jpg",
                    "images/冲调02.jpg",
                    "images/冲调03.jpg",
                    "images/冲调04.jpg",
                    "images/冲调05.jpg",
                    "images/冲调06.jpg"
                ],
                title:[
                    "立顿Lipton 奶茶 经典醇香浓原味奶茶10条175g(包装随机) 小黄人速溶固体饮料办公室饮品",
                    "恒大冰泉 长白山天然矿泉水 500ML*24 整箱",
                    "蒙牛 酸酸乳 原味250ml*24 礼盒装",
                    "伊利 纯牛奶250ml*24盒",
                    "农夫山泉 饮用天然水5L*4桶 整箱",
                    "农夫山泉 饮用天然水塑膜量贩装550ml*12瓶"
                ]
            }

        };

        //获取排行榜内部tab栏盒子
        var innerBox = $(".life-style");
        //获取所有tab栏下的所有标签
        var moveA  = innerBox.children().eq(0).find("a");


        //获取排行榜内部的盒子
        var innerDiv = innerBox.children("div").eq(1);
        //获取需要操作的ul
        var ul = innerDiv.children("ul");

        //获取按钮
        var btns = innerBox.children("div").eq(2).children();


        ul.eq(0).show();
        // moveA.eq(0).css("color","red");
        //填充内容
        function init(){
            //设置索引值获取ul
            var idx = 0;
            //设置个数获取属性
            var count = 0;
            //设置元素个数
            var number = 0;
            //遍历所有all对象
           for(var key in allObj){
               //遍历all对象的key
            //第一层
               //获取ul
               var ulElm = ul.eq(idx);
               //获取存储排名的span元素
               var spanElm = ulElm.find("span");
               idx++;
               for(var attr in allObj[key]){
                  // 第二层   0 是图片格式  1 是文字内容
                   //设置个数
                   var attrs  = count == 0?ulElm.find("img"):ulElm.find("p").children("a");

                   //遍历all对像中的key中的attr
                   for(var value in allObj[key][attr]){
                       //判断是不是img元素
                       if(count == 0){
                           //img标签添加属性
                           attrs.eq(number).attr("data-original",allObj[key][attr][value])
                       }else{
                           //a元素添加内容
                           attrs.eq(number).text(allObj[key][attr][value]);
                           spanElm.eq(number).text(arrRanking[number]);
                           spanElm.eq(number).css("color",arrColor[number]);
                       }

                        number++;
                   }

                    number = 0;
                   count++;
               }
               count = 0;
           }
        }

        init();




        //注册事件
        moveA.on("mouseenter",function () {
           //设置索引值
            $(this).css("color","red").siblings().css("color","#050505");
            ul.eq($(this).index()).show(100).siblings().hide();


        });

        //按钮
        btns.on("mouseenter",function () {
           //设置索引值
            var idx = $(this).index();
            $(this).css("background","red").siblings().css("background","white");
            ul.stop().animate({left:"-"+(idx*innerDiv.width()+"px")},function () {

            });


        });

    }());

    //会买专辑
    (function () {
        //获取外部的盒子
        var outBox = $(".album");

       //获取可视框
        var astrict = $(".astrict");
        //获取宽度
        var Width = astrict.width();
        //获取可移动的产品列表
        var productList = astrict.children().eq(0);

        //获取产品集合
        var products = productList.children();
        //获取按钮
        var clickBtn = outBox.children("div").eq(2).children();

        //获取小圆点
        var moveCircle = outBox.children().eq(1).children();

        // //克隆
        // var liObj = products.eq(0).clone();
        //创建div
     var liObj =    $("<div class=\"product-item\">\n" +
            "                        <!--大图-->\n" +
            "                        <div class=\"a-pic\">\n" +
            "                            <a href=\"#\"><img class=\"\" src=\"images/撸串01.jpg\" alt=\"\"></a>\n" +
            "                            <span></span>\n" +
            "                        </div>\n" +
            "                        <!--小图-->\n" +
            "                        <div class=\"a-small\">\n" +
            "                            <a href=\"#\"><img class=\"\" src=\"images/撸串02.jpg\" alt=\"\"></a>\n" +
            "                            <a href=\"#\"><img class=\"\" src=\"images/撸串03.jpg\" alt=\"\"></a>\n" +
            "                            <a href=\"#\"><img class=\"\" src=\"images/撸串04.jpg\" alt=\"\"></a>\n" +
            "\n" +
            "                        </div>\n" +
            "                        <!--标题-->\n" +
            "                        <div class=\"a-title\">\n" +
            "                            宅家尽兴撸串，无烟电烤炉更健康\n" +
            "\n" +
            "                        </div>\n" +
            "                        <!--介绍-->\n" +
            "                        <div class=\"a-content\">\n" +
            "                            烧烤是很多朋友都无法拒绝的美食，总是担心外面烧烤摊的食物材料干净卫生问题？那就自己在家自制烧烤吧，选择一款家用的电烧烤炉，无烟烤盘烧烤更干净，自选优质食材自制烧烤，尽情享受宅家烧烤盛宴。\n" +
            "                        </div>\n" +
            "                    </div>");

        liObj.appendTo(productList);
         //获取长度
        var liLength = productList.children().length;

         //设置长度
        productList.css("width",(liLength*Width)+"px");



        //点击事件



        //设置索引
        var idx = 0;
        //右边
        clickBtn.eq(1).on("click",function () {
            idx++;
            if(idx == liLength-1){
                moveCircle.eq(0).css("backgroundColor","red").siblings().css("backgroundColor","#fff");

            }
            if(idx ==liLength){
                idx = 0;

                productList.css({left:"-"+(idx*Width)+"px"});
                idx++;
            }
            moveCircle.eq(idx).css("backgroundColor","red").siblings().css("backgroundColor","#fff");
            productList.stop().animate({left:"-"+(idx*Width)+"px"});

        });
        //左边
        clickBtn.eq(0).on("click",function () {
            idx--;
            if(idx < 0){
                idx = liLength-1;
                productList.css({left:"-"+(idx*Width)+"px"});
                idx--;
            }
            moveCircle.eq(idx).css("backgroundColor","red").siblings().css("backgroundColor","#fff");
            productList.stop().animate({left:"-"+(idx*Width)+"px"});

        });





        //圆点移动
        moveCircle.on("mouseenter",function () {
            idx = $(this).index();

            $(this).css("backgroundColor","red").siblings().css("backgroundColor","#fff");

            productList.stop().animate({left:"-"+(idx*Width)+"px"});

        });

        var timer = null;
        //开启定时器
        function openTimer(){
            clearInterval(timer);
            timer = setInterval(function () {


                clickBtn.eq(1).click();

            },2000)
        }

        openTimer();

        astrict.on("mouseenter",function () {
           //清楚定时器
           clearInterval(timer);
        }).on("mouseleave",function () {
            //开启定时器
            openTimer();
        });




    }());

    //领劵中心
    (function () {

        //获取可视区
        var clien  = $(".ticket-item");

        var width = clien.width();

        //获取需要移动的元素
        var move = clien.children().eq(0);

        //获取按钮
        var btns = $(".c-btn").children();


        btns.on("mouseenter",function () {

            var idx = $(this).index();
            $(this).css("background","red").siblings().css("background","#fff");
            move.stop().animate({left:"-"+(idx*width)+"px"});
        });

    }());



   //觅me

    (function () {

     //获取父元素


    //展示部分
    var secret = $(".secret");

    var parent =secret.parent(".jd1");

    //宽度
     var width = secret.width();

     //获取移动div
      var move =   secret.children().eq(0);
      //获取li的个数
      var Lilength = move.children().length;

      //按钮
       var btns = $(".s-btn").children();

       //圆点
        var circles = $(".s-circle").children();

        //设置索引值
        var idx = 0;
        circles.eq(idx).css("background","red");

        //右边
        btns.eq(0).on("click",function () {
            idx++;
            if(idx == Lilength -1){
                circles.eq(0).css("background","red").siblings().css("background","gray");

            }

            if(idx == Lilength ){
                idx = 0;
                move.css("left","-"+(idx*width)+"px");
                idx++;
            }
            circles.eq(idx).css("background","red").siblings().css("background","gray");
            move.stop().animate({left:"-"+(idx*width)+"px"});

        });
        //左边
        btns.eq(1).on("click",function () {
            idx--;
            if(idx < 0){

                idx = Lilength-1;

                move.css("left","-"+(idx*width)+"px");
                idx--;

            }

           circles.eq(idx).css("background","red").siblings().css("background","gray");
            move.stop().animate({left:"-"+(idx*width)+"px"});


        });

        //圆点
        circles.on("mouseenter",function () {
            //顺时针移入 避免出现逆时针移动
            if($(this).index() == 1 && idx == Lilength-1){
                idx = 0;
                move.css("left","-"+(idx*width)+"px")

            }
            idx = $(this).index();
            $(this).css("background","red").siblings().css("background","gray");
           move.stop().animate({left:"-"+(idx*width)+"px"});
        });
        var timer = null;
        function openTimer(){
            clearInterval(timer);
        timer = setInterval(function () {
            btns.eq(0).click();
            },2000);
        }
        openTimer();
        parent.on("mouseenter",function () {
            clearInterval(timer);
        }).on("mouseleave",function(){
            openTimer();
        });

      }());


    //发现好货
    (function () {
       //获取盒子
      var box = $(".good");

      //获取li

       var lis = box.find("li");
      var imgs = box.find("img");

      var as = box.find("a");

      lis.on("mouseenter",function () {

          $(this).find("img").stop().animate({opacity:"0.8"});
          $(this).find("a").addClass("color");

      }).on("mouseleave",function(){
          $(this).find("img").stop().animate({opacity:"1"});
          $(this).find("a").removeClass("color");
      });
      //获取a标签



    }());

   //会逛
    (function () {
        var parent = $(".window-shopping");

        var imgs = parent.children();

        imgs.on("mouseenter",function () {
            $(this).stop().animate({opacity:.7});
        }).on("mouseleave",function(){
            $(this).stop().animate({opacity:1});
        });

    }());

    //时尚达人
    (function () {

        //事件委托
        $(".fashion").on("mouseenter","img",function () {
           $(this).stop().animate({opacity:.8});
        });

        $(".fashion").on("mouseleave","img",function () {
            $(this).stop().animate({opacity:1});
        });

    }());
    //时尚达人
    (function () {

        //事件委托
        $(".intelligent").on("mouseenter","img",function () {
            $(this).stop().animate({opacity:.8});
        });

        $(".intelligent").on("mouseleave","img",function () {
            $(this).stop().animate({opacity:1});
        });

    }());

    //时尚达人
    (function () {

        //事件委托
        $(".Lifestyle").on("mouseenter","img",function () {
            $(this).stop().animate({opacity:.8});
        });

        $(".Lifestyle").on("mouseleave","img",function () {
            $(this).stop().animate({opacity:1});
        });

    }());
    (function () {

        //事件委托
        $(".home").on("mouseenter","img",function () {
            $(this).stop().animate({opacity:.8});
        });

        $(".home").on("mouseleave","img",function () {
            $(this).stop().animate({opacity:1});
        });

    }());

    //特色推荐

    (function () {
        //大盒子
       var feature= $(".feature-item");

        //指定展示区域
       var limit = feature.children().eq(0);

       //宽度
        var width = limit.width();

       //按钮
        var btns = feature.children().eq(1).children();

        //小圆点
        var circles = feature.children().eq(2).children();

        //获取需要移动的ul
        var moveUl = limit.children("ul");

        //获取list集合
        var list = moveUl.children();


        //获取list的个数
        var liLength = list.length;
        //设置索引
        var idx = 0;

        //设置第一个展示
        circles.eq(0).css("background","orange");
        //右边
        btns.eq(0).on("click",function () {
            idx++;

            if(idx == liLength-1){
                circles.eq(0).css("background","orange").siblings().css("background","#fff");
            }

            if(idx == liLength){
                idx = 0;
                //移动到左边
                moveUl.css("left","-"+(idx*width)+"px");
                idx++;

            }

            circles.eq(idx).css("background","orange").siblings().css("background","#fff");
            moveUl.stop().animate({left:"-"+(idx*width)+"px"});


        });
        //左边
        btns.eq(1).on("click",function () {
            idx--;

            if(idx < 0){
                idx = liLength-1;
                //移动到最右边位置
                moveUl.css("left","-"+(idx*width)+"px");
                idx--;
            }
            circles.eq(idx).css("background","orange").siblings().css("background","#fff");
            moveUl.stop().animate({left:"-"+(idx*width)+"px"});
        });


        //圆点展示
        circles.on("mouseenter",function () {

            //防止出现逆时针移动
            if($(this).index() == 1 && idx == liLength-1){

                idx = 0;
                moveUl.css("left","-"+(idx*width)+"px");
            }

           idx = $(this).index();
           $(this).css("background","orange").siblings().css("background","#fff");

           moveUl.stop().animate({left:"-"+(idx*width)+"px"});

        });


        //开始定时器
        var timer = null;

        function openTimer(){
            clearInterval(timer);

            timer = setInterval(function () {
                btns.eq(0).click();

            },2000)
        }

        openTimer();

        feature.on("mouseenter",function () {
            clearInterval(timer);
        }).on("mouseleave",function () {
            openTimer();
        });

    }());



    //直播
    (function () {

        var live = $(".jd-live");


        live.on("mouseenter","img",function () {

            $(this).css("opacity",".8");

        }).on("mouseleave","img",function () {
            $(this).css("opacity","1");
        });


    }());


    //还没逛够

    (function () {

        //获取所有的li
       var lis = $(".falls-stream").children();

       lis.on("mouseenter",function () {
          $(this).find(".shop-current").show();
          $(this).find(".shop-mask").show();
          $(this).find(".shop-title").css("color","red");


       }).on("mouseleave",function () {
           $(this).find(".shop-current").hide();
           $(this).find(".shop-mask").hide();
           $(this).find(".shop-title").css("color","black");
       });
        //获取所有的遮罩层
       /* var mask = $(".shop-mask");

        mask.on("mouseenter",function () {
            //div显示
            $(this).next(".shop-current").show();
            //文字变亮
            $(this).prev(".shop-name").children("p").css("color","red");
            console.log(1);
        });

         mask.on("mouseleave",function () {
             //div显示
             $(this).next(".shop-current").hide();
             //文字变亮
             $(this).prev(".shop-name").children("p").css("color","black");
             console.log(2);
         })*/




    }());


    var bottom = $(".bottom-btn");

    bottom.on("click",function () {
       $("html,body").animate({scrollTop:0});
    });

});