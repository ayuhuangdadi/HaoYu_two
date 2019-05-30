let app = getApp();
//获取全局变量
Page({
  /**
   * 页面的初始数据
   */
  data: {
    musicflag: app.globalMusicFlag
  },
  initmusic(BackgroundAudioManager) {
    //初始化背景音乐
    //播放音乐
    BackgroundAudioManager.title = "我的音乐";
    //不支持本地的
    BackgroundAudioManager.src = 'http://dl.stream.qqmusic.qq.com/C400003mAan70zUy5O.m4a?guid=411843112&vkey=FE23B1383FB84D6E050138AC8042F6A903F42D021C626B19D70BB4A4FAEA2FEA77AFC3D6463C332DA82D218DFB95FE29A95429CAA4413B08&uin=1138&fromtag=3&r=8163260764486338'
    //初始化音乐时候因为是自动播放 所以先把文字设置成暂停
  },
  playmusic() {
    //创建了一个背景音乐的实例
    let BackgroundAudioManager = wx.getBackgroundAudioManager();
    if (this.data.musicflag) {
      //音乐播放的时候
      this.initmusic(BackgroundAudioManager);
      //改变全局变量的时候重新设置页面的局部变量
      app.globalMusicFlag = false;
      this.setData({
        musicflag: app.globalMusicFlag
      });
    } else {
      //音乐暂停的时候
      BackgroundAudioManager.pause();
      app.globalMusicFlag = true;
      this.setData({
        musicflag: app.globalMusicFlag
      });
    }
    //自己写的播放和系统的播放事件同步
    //监听系统背景音乐播放事件
    BackgroundAudioManager.onPlay(() => {
      app.globalMusicFlag = false;
      this.setData({
        musicflag: app.globalMusicFlag
      });
    });
    //监听背景音乐暂停事件
    BackgroundAudioManager.onPause(() => {
      app.globalMusicFlag = true;
      this.setData({
        musicflag: app.globalMusicFlag
      });
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 每次显示页面的时候需要重新把全局的音乐赋值给当前页面的musicflag
    this.setData({
      musicflag: app.globalMusicFlag
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
});
