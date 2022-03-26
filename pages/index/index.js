Page({
  data:{
    imgUrls:[
      '/images/img1.jpeg',
      '/images/img2.jpg'
    ],
  },
  phone:function(e){
    wx.makePhoneCall({
  phoneNumber: '13417025501' 
})
  }
})