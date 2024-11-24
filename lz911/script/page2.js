document.addEventListener("DOMContentLoaded", function() {
  var img = document.getElementById("image");
  var description = document.getElementById("image-description");
  var images = [
      { src: "../image/display/kyon.jpg", description: "阿虚 (キョン　Kyon) 至今无人知晓其真名<br>高一5班，男性，团内的顶梁柱（自认为），凉宫的1号跑腿，专业吐槽人员。在建团之初，被凉宫擅自认定为团员而入团的开团功臣。<br>普通人类（同样是自认为）从某方面来说，是团内最不正常的人。<br>话虽如此，但若想寻找正常的校园社团，请不要点击图片切换到下一个人物。直接前往下一个页面是明智的选择。" },
      { src: "../image/display/haruhi.jpg", description: "凉宫春日 (涼宮 ハルヒ　Suzumiya Haruhi)<br>雷厉风行的作风却有着超绝的才能（至少是行动力）...<br>团长<br>开学的自我介绍时说出：“我对普通人类没有兴趣。你们之中要是有外星人、未来人、异世界来的人、超能力者，就尽管来找我吧！”，让人不能不认为其头脑有问题的超级问题人物。<br>很任性，喜欢非一般的有趣事物，总有着用不完的精力，时常会迸发出一些出人意料的主意。<br>SOS团所有人注意的中心人物，却是唯一不知晓其他团员真正身份的人。" },
      { src: "../image/display/koizumi.jpg", description: "古泉一树 (古泉一樹　Koizumi Itsuki)<br>副团长（至少作风上是合格的）<br>高一9班，男性，经常挂着一脸祥和笑容的转学生，基于凉宫认为所有转学生都是迷之转学生这个原因入团。由于孤岛事件被提升为副团长。<br>真实身份——超能力者。<br>背后有一个名为“机关”的超能力组织支持，认为凉宫有足以改变世界的能力（或是干脆的称之为神），被派来对其进行守护、以防其毁灭世界的人员，却意外的被拉入团。" },
      { src: "../image/display/yuki.jpg", description: "长门有希 (長門 有希　Nagato Yuki)<br>高一女生，沉默寡言、不苟言笑的三无少女。原为文艺社的最后一名社员，在凉宫霸占文艺社教室时，作为副产品自动成为SOS团团员。<br>真实身份——外星人。<br>更准确的说是咨询统合思念体制造的用于和有机生命体接触用的联系装置外星人。为了解析凉宫春日的真正身份来到地球，却意外的被拉入团。" },
      { src: "../image/display/mikuru.jpg", description:"朝比奈实玖瑠 (朝比奈 みくる　Asahina Mikuru)<br>职位是吉祥物（经常被凉宫迫害的对象）<br>高二女生，长相可爱，身材一流，性格乖巧的爱哭女孩。SOS团中的吉祥物、衣服架子、COSPLAY者、女仆、茶水小姐（虽然是被凉宫强迫）……原为书法社社员，只因为长的可爱，被途径其教室的凉宫强拉入团。在社团教室时的标准服装被限定为女侍服。<br>真实身份——未来人。<br>由于发生时间断层（未来人推断凉宫春日为造成此现象的原因，但详情未解），被派来对凉宫春日进行监视的人员，却意外的被拉入团。"}
  ];
  var currentIndex = 0;

  function updateContent() {
    image.src = images[currentIndex].src;
    description.innerHTML = images[currentIndex].description;
}
updateContent();

image.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  updateContent();
});
});
