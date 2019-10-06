// sketch 1
const s1 = function ( p ) {

  let x = 100;
  let y = 100;

  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(127);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.fill(255, 127, 0);
    p.rect(x,y,50,50);
  };
};

exports.s1 = s1;
