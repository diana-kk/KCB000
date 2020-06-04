var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var hidari = Paper.image('img/hidari.png', 0, 0, 20, 23).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var b01 = Paper.image('img/b01.png', 0, 0, 120, 120).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#F4D4AA'
});

hidari.use().transform('t10, 9').appendTo(topBox).click(handlerPre).attr({
  'cursor': 'pointer'
});

function handlerPre() {
  location.replace('ODIA07.html');
}

topBox.text(180, 28, '진단(총괄)평가').attr({
  'font-size': 18,
  'text-anchor': 'middle'
});

migi.use().transform('t329, 9').appendTo(topBox).click(handlerNext).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('ODIA41.html');
}

// 상단
var topArea = Paper.g();

topArea.text(15, 80, '10. 빈칸에 들어갈 한자를 고르세요.').attr({
  'font-size': 20
});

topArea.rect(110, 122, 70, 140).attr({
  'stroke': '#B1E18A',
  'stroke-width': 2,
  'fill': 'none'
});

topArea.rect(110, 192, 140, 70).attr({
  'stroke': '#B1E18A',
  'stroke-width': 2,
  'fill': 'none'
});

topArea.text(129, 171, '老').attr({
  'font-size': 37
});

topArea.text(199, 241, '石').attr({
  'font-size': 37
});

// 하단
var bottomArea = Paper.g();

var circleN = ['①', '②', '③', '④', '⑤'];
var exampleText = ['安', '母', '化', '育', '?'];

for (var i = 0; i < circleN.length; i++) {
  var g1 = bottomArea.rect(55 + (i % 2) * 165, 315 + Math.floor(i / 2) * 100, 100, 70, 10).attr({
    'fill': '#F2F2F2'
  });

  var g2 = bottomArea.text(35 + (i % 2) * 165, 357 + Math.floor(i / 2) * 100, circleN[i]).attr({
    'font-size': 22,
    'fill': '#777777',
    'text-anchor': 'middle'
  });

  var fifth = exampleText[i] == '?';
  var g3 = bottomArea.text(105 + (i % 2) * 165, 362 + Math.floor(i / 2) * 100, exampleText[i]).attr({
    'font-size': (fifth ? 30 : 35),
    'fill': '#282C35',
    'text-anchor': 'middle'
  });

  var g4 = bottomArea.g(g1, g2, g3).click(next).attr({
    'cursor': 'pointer'
  });
}

function next() {
  setTimeout(function() {
    location.replace('ODIA41.html');
  }, 300);
}

// 정지
var r1 = bottomArea.rect(275, 595, 70, 30, 10).attr({
  'stroke': 'gray',
  'fill': '#FDF3E5'
});

var t1 = bottomArea.text(284, 615, '임시저장').attr({
  'font-size': 15,
  'fill': 'gray'
});

var rt1 = bottomArea.g(r1, t1).click(handlerSave).attr({
  'cursor': 'pointer'
});

function handlerSave() {
  Paper.rect(40, 230, 280, 180, 10).attr({
    'stroke': 'gray',
    'fill': '#F6F6F6',
    'opacity': 0.9
  });

  Paper.text(180, 300, '임시저장 하시겠습니까?').attr({
    'font-size': 23,
    'font-weight': 'bold',
    'text-anchor': 'middle'
  });

  Paper.rect(60, 340, 110, 40, 5).click(handlerHome).attr({
    'stroke': 'gray',
    'fill': '#F4D4AA',
    'cursor': 'pointer'
  });

  Paper.text(105, 368, '네').click(handlerHome).attr({
    'font-size': 23,
    'font-weight': 'bold',
    'cursor': 'pointer'
  });

  function handlerHome() {
    Paper.rect(40, 230, 280, 180, 10).attr({
      'stroke': 'gray',
      'fill': '#F6F6F6',
      'opacity': 1
    });

    Paper.text(180, 325, '임시저장 완료하였습니다.').attr({
      'font-size': 23,
      'font-weight': 'bold',
      'text-anchor': 'middle'
    });

    setTimeout(function() {
      location.replace('ODIA.html');
    }, 1000);
  }

  Paper.rect(190, 340, 110, 40, 5).click(handler).attr({
    'stroke': 'gray',
    'fill': '#F4D4AA',
    'cursor': 'pointer'
  });

  Paper.text(215, 368, '아니오').click(handler).attr({
    'font-size': 23,
    'cursor': 'pointer'
  });

  function handler() {
    location.replace('ODIA10.html');
  }
}
