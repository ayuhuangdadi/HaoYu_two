// pages/animate/animate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animdata:{}
    // 初始化动画元素
  },

  /**
   * 生命周期函数--监听页面加载
   */
// 动画的持续时间 duration
// 动画的延迟时间 delay
// 动画的中心点 transfor
  onLoad: function (options) {
      // 创建一个动画实例
      let animation = wx.createAnimation({
        duration:3000,
        timingFunction:"linear",
        delay:100
      });
      // 需要把动画挂载到实例上面
      this.animation = animation;
      animation.rotate(3600).scale(0.01).step();
      animation.rotate(0).scale(1).step();
      // 把animation 赋值给动画对象animdata
      setTimeout(()=>{
        this.setData({
          animdata: animation.export()
        });
      },1000)
      
      // 导入动画队列
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