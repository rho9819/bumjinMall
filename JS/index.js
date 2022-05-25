let imgList = {
img1: ['./Image/마크22.jpg','./Image/마크11.jpg'], 
img2: ['./Image/아디다스22.jpg','./Image/아디다스11.jpg'],
img3: ['./Image/아웃스탠딩22.png','./Image/아웃스탠딩11.png'],
img4: ['./Image/캔버스22.jpg','./Image/캔버스11.png'],
img5: ['./Image/토피22.jpg','./Image/토피11.jpg'],
img6: ['./Image/후드티22.png','./Image/후드티11.jpg'],
img7: ['./Image/Man/데님팬츠2.jpg', './Image/Man/데님팬츠1.jpg'],
img8: ['./Image/Man/언폴갓 수원시 스트릿 오버핏 얇은 반팔티2.jfif', './Image/Man/언폴갓 서울시 스트릿 오버핏 얇은 반팔티1.jfif'],
img9: ['./Image/Man/나이키2.jfif', './Image/Man/나이키1.jfif'],
img10: ['./Image/Man/Denny&Dora Mens B-3_B-6 Sheepskin Shearling Bomber Jacket Brown Color.jfif', './Image/Man/Denny&Dora Mens Brown Shearling Jacket.jfif'],
img11: ['./Image/Man/조끼2.png', './Image/Man/조끼1.jfif'],
img12: ['./Image/Man/[W CONCEPT]2.jfif' , './Image/Man/[W CONCEPT1.jfif'],

img13: ['./Image/Woman/원피스2.jpg', './Image/Woman/원피스1.jpg'],
img14: ['./Image/Woman/안다르2.jpg', './Image/Woman/안다르1.jpg'],
img15: ['./Image/Woman/첫자켓2.jpg', './Image/Woman/청자켓1.jpg'],
img16: ['./Image/Woman/가디건2.jpg', './Image/Woman/가디건1.jpg'],
img17: ['./Image/Woman/자켓2.jpg', './Image/Woman/자켓1.png'],
img18: ['./Image/Woman/비키니2.2039' , './Image/Woman/비키니1.jpg'],

img19: ['./Image/item/샤넬 자켓2.jfif', './Image/item/샤넬 자켓1.jfif'],
img20: ['./Image/item/스웨터2.jfif', './Image/item/스웨터1.jfif'],
img21: ['./Image/item/농구복2.jfif', './Image/item/농구복1.jfif'],
img22: ['./Image/item/축구옷2.jfif', './Image/item/축구옷1.jfif'],
img23: ['./Image/item/구찌2.jfif', './Image/item/구찌1.jfif'],
img24: ['./Image/item/지갑2.jfif' , './Image/item/지갑1.jfif']

}

let slideAnimation;

function slide(imgs, imgTag) {
    var imageIndex = 0; 

    if(imageIndex > 1){
        imgTag.src = imgs[0]
        imageIndex = 0
     }else{ 
        imgTag.src = imgs[imageIndex]
     }
     imageIndex++

}
addEventListener("mouseover", function(e){
    if(e.target.className == "img"){
        slideAnimation = setInterval(function() {
            slide(imgList[e.target.id],e.target)
          }, 1);
    }
})

addEventListener("mouseout", (e)=>{
    if(e.target.className == "img"){
          clearInterval(slideAnimation)
          e.target.src = imgList[e.target.id][1]
    }
})


