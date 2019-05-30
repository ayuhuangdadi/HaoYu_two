// index/event/event.js
const order = ['red', 'yellow', 'blue', 'green', 'red']
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady(res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  showflag() {
    // 要修改数据必须通过 this.setData
    this.setData({
      flag: !this.data.flag
    })
  },
  inputValue: '',
  data: {
    src: '',
    flag: true,
    danmuList: [
      {
        text: '牛皮牛皮',
        color: '#ff0000',
        time: 1
      },
      {
        text: '你最帅',
        color: '#ff00ff',
        time: 3
      },
      {
        text: '秀儿是你吗？',
        color: 'gray',
        time: 10
      }
      ]
  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})