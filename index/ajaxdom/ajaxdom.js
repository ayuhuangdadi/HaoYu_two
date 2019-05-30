// index/ajaxdom/ajaxdom.js
import {fetchdata} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val:"",
    searchlist:""
  },
  tosearch(e){
    console.log(e);
    let sval = e.detail.value;
    if(sval){

    }
    this.setData({
      val:sval
    });
    this.searchajax()
  },
  searchajax(){
    let timer;
    clearTimeout(timer);
    timer = setTimeout(()=>{
      let searchurl = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=a";
      let data = {
        wd: this.data.val
      };
      fetchdata(searchurl, data).then(res => {
        let strlen = 18;
        let len = strlen + data.wd.length;
        // 1  --> 19  2-->20
        let udata = res.slice(len, -3);
        console.log(udata);
        udata = JSON.parse(udata);
        this.setData({
          searchlist: udata
        })
      });
    },500)
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