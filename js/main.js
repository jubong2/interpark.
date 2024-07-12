window.onload = function(){
  // 상단의 마이페이지리스트 기능
const mypageBt = document.querySelector(".mypage-bt")  
const mypageList = document.querySelector(".mypage-list")
mypageBt.addEventListener("click",function(){
  mypageList.classList.toggle("showMypage")
})
// swiper ================
// 프로모션 스와퍼기능
const swPromotion = new Swiper(".sw-promotion" , {
  
})
}