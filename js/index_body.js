// middle_body部分图片轮播
const news_list = [
    {img: "./img/view1.jpg", title: "蒙自市 ——[过桥千载韵，榴红醉南滇]", url: "https://baike.baidu.com/item/%E8%92%99%E8%87%AA%E5%B8%82/7595141"},
    {img: "./img/view2.jpg", title: "个旧市 ——[千年锡光沉碧水，一城星火映湖山]", url: "https://baike.baidu.com/item/%E4%B8%AA%E6%97%A7%E5%B8%82?fromModule=lemma_search-box"},
    {img: "./img/view3.jpg", title: "开远市 ——[铁轨载春秋，凤凰涅槃城]", url: "https://baike.baidu.com/item/%E5%BC%80%E8%BF%9C%E5%B8%82?fromModule=lemma_search-box"},
    {img: "./img/view4.jpg", title: "弥勒市 ——[温泉煮禅意，葡藤酿岁月]", url: "https://baike.baidu.com/item/%E5%BC%A5%E5%8B%92%E5%B8%82?fromModule=lemma_search-box"},
    {img: "./img/view5.jpg", title: "建水县 ——[临安烟火淬紫陶，文庙钟声越千年]", url: "https://baike.baidu.com/item/%E5%BB%BA%E6%B0%B4%E5%8E%BF?fromModule=lemma_search-box"},
    {img: "./img/view6.jpg", title: "石屏县 ——[异龙湖砚泼水墨，豆腐点化天地鲜]", url: "https://baike.baidu.com/item/%E7%9F%B3%E5%B1%8F%E5%8E%BF?fromModule=lemma_search-box"},
    {img: "./img/view7.jpg", title: "泸西县 ——[古洞藏星河，阡陌织桃源]", url: "https://baike.baidu.com/item/%E6%B3%B8%E8%A5%BF%E5%8E%BF?fromModule=lemma_search-box"},
    {img: "./img/view8.jpg", title: "元阳县 ——[云裁天梯作镜，哈尼绣大地指纹]", url: "https://baike.baidu.com/item/%E5%85%83%E9%98%B3%E5%8E%BF?fromModule=lemma_search-box"},
    {img: "./img/view9.jpg", title: "红河县 ——[马蹄叩响云中路，棕榈摇落边陲月]", url: "https://baike.baidu.com/item/%E7%BB%BF%E6%98%A5%E5%8E%BF?fromModule=lemma_search-box"},
    {img: "./img/view10.jpg", title: "绿春县 ——[绿海无涯连国境，春潮有信叩山门]", url: "https://baike.baidu.com/item/%E7%BB%BF%E6%98%A5%E5%8E%BF/1206990"},
    {img: "./img/view11.jpg", title: "金平县 ——[蝶翼驮来边城梦，雨林深处锁沧澜]", url: "https://baike.baidu.com/item/%E9%87%91%E5%B9%B3%E8%8B%97%E6%97%8F%E7%91%B6%E6%97%8F%E5%82%A3%E6%97%8F%E8%87%AA%E6%B2%BB%E5%8E%BF?fromtitle=%E9%87%91%E5%B9%B3%E5%8E%BF&fromid=1202098&fromModule=lemma_search-box"},
    {img: "./img/view12.jpg", title:"河口县 ——[百年商埠通四海，一城霓虹共中南]", url: "https://baike.baidu.com/item/%E6%B2%B3%E5%8F%A3%E7%91%B6%E6%97%8F%E8%87%AA%E6%B2%BB%E5%8E%BF?fromModule=lemma_search-box"},
    {img: "./img/view13.jpg", title: "屏边县 ——[苗岭笙歌穿云起，大围山色蘸天青]", url: "https://baike.baidu.com/item/%E5%B1%8F%E8%BE%B9%E8%8B%97%E6%97%8F%E8%87%AA%E6%B2%BB%E5%8E%BF?fromtitle=%E5%B1%8F%E8%BE%B9&fromid=3008501&fromModule=lemma_search-box"}
];
let index = 0;
function translate() {
    const imageElement = document.getElementById("news_img");
    const titleElement = document.getElementById("news_title");
    const linkElement = document.getElementById("news_link");

    if (!imageElement || !titleElement || !linkElement) {
        console.error("找不到 HTML 元素，请检查 ID 是否正确！");
        return;
    }    
    imageElement.src = news_list[index].img;
    imageElement.alt = news_list[index].title;
    titleElement.textContent = news_list[index].title;
    linkElement.href = news_list[index].url;
    index++;
    if (index >= news_list.length) {
                index = 0;
            }

    setTimeout(translate, 3000);
}
 document.addEventListener("DOMContentLoaded", translate);