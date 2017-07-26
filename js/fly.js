

(function (window) {
  'use strict';
  var FlyObj = {};

  // 角度转弧度：
  FlyObj.toRadian = function (angle) {
    return angle / 180 * Math.PI;
  };

  // 加载图片：
  FlyObj.loadImages = function (srcList, callback) {
    var count = 0,
      allLength = srcList.length,
      imgsObj = {};

    srcList.forEach(function (srcStr) {
      var img = new Image();
      img.src = './images/' + srcStr + '.png';
      imgsObj[srcStr] = img;

      img.onload = function () {
        count++;
        if (count >= allLength) {
          callback(imgsObj);
        }
      };
    });
  }

  // 暴露到全局环境中
  window.Fly = FlyObj;
})(window);