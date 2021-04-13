(function () {

  var bv = new Bideo();
  var sp = [
      "https://7wsfot-1255954729.cos.ap-chengdu.myqcloud.com/lmy.mp4",
      "https://7wsfot-1255954729.cos.ap-chengdu.myqcloud.com/xy.mp4",
      "https://7wsfot-1255954729.cos.ap-chengdu.myqcloud.com/mydf.mp4",
      "https://7wsfot-1255954729.cos.ap-chengdu.myqcloud.com/mad.mp4",];
  var index = Math.floor((Math.random()*sp.length));
  bv.init({
    // 视频元素
    videoEl: document.querySelector('#background_video'),

    // 容器元素
    container: document.querySelector('body'),

    // Resize
    resize: true,
     
    // 自动播放
    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // 包含地址和类型的对象数组
    // 添加不同的视频格式
    src: [
      {
        src: sp[index],
        type: 'video/mp4',
      },
    ],

    // 视频加载后的操作（初始帧）
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());