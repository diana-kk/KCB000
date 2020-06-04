var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var level = Paper.image('img/level.png', 0, 0, 65, 58).toDefs();
var bi = Paper.image('img/bi.jpg', 0, 0, 270, 44).toDefs();
var digimg = Paper.image('img/digimg.png', 0, 0, 140, 160).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();

level.use().transform('t0, 18').appendTo(topArea);

topArea.text(75, 60, '진단(총괄)평가').attr({
  'font-size': 30,
  'fill': '#C17D34'
});

bi.use().transform('t45, 110').appendTo(topArea);

topArea.rect(150, 180, 170, 40, 15).attr({
  'stroke': 'gray',
  'fill': 'white'
});
topArea.rect(155, 185, 160, 30, 10).attr({
  'fill': '#F4D4AA'
});

topArea.text(167, 207, '컴퓨터 학력진단 테스트').attr({
  'font-size': 15,
  'fill': 'gray'
});

digimg.use().transform('t95, 260').appendTo(topArea);

var r1 = topArea.rect(50, 500, 260, 50, 5).attr({
  'fill': '#F4D4AA'
});
var t1 = topArea.text(180, 535, '시 작').attr({
  'font-size': 25,
  'text-anchor': 'middle',
  'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('ODIA01.html');
}
