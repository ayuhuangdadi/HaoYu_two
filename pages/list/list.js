// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[
      { title: "天猫超市", tiright: "交易成功", more: "更多", piao: "申请开票", wuliu: "查看物流", ping: "评价", captcha: "//img.alicdn.com/imgextra/i1/725677994/O1CN01ffIn7z28vIgHZp7n8_!!0-item_pic.jpg_200x200.jpg", jianjie: "蜀道香 麻辣猪肉脯100g四川特产好吃的休闲小吃 网红小零食猪肉干", canshu: "猪肉脯;麻辣味", price: "￥32.80", num: "x1", number: "共1件商品", add:"合计:￥32.80" },
      { title: "潮工坊数码旗舰店", tiright: "卖家已发货", more: "更多", piao: "申请开票", wuliu: "查看物流", ping: "确认收货", captcha: "//img.alicdn.com/imgextra/i4/2259005213/O1CN01BeFldg1oNbBAiuEMp_!!2259005213.jpg_200x200.jpg", jianjie: "潮工坊 耳机原装正品入耳式适用iPhonevivo小米oppo手机安卓有线控x20重低音炮耳塞", canshu: "官方标配;白色【一条】", price: "￥45.80", num: "x1", number: "共1件商品", add: "合计:￥45.80" },
      {
        title: "handaiwei佐轩专卖店", tiright: "卖家已发货", more: "更多", piao: "申请开票", wuliu: "查看物流", ping: "确认收货", captcha: "//img.alicdn.com/imgextra/i3/1589942160/O1CN018gmjxH1RpK235LXqy_!!1589942160.jpg_200x200.jpg", jianjie: "2件】男士短袖t恤2019夏季新款潮牌宽松韩版半袖体恤男潮流上衣服", canshu: "52-T516墨绿+9821灰色;L", price: "￥69.00", num: "x1", number: "共1件商品", add: "合计:￥69.00" }
    ]
  },
  more(e){
    wx.navigateTo({
      url: '../more/more',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})