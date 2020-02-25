export const p5def = //whitespace matteres here
`( p ) => {
  let BACKGROUND = '#fffbf4';
  let STROKE = '#282828';
  let x = 100;
  let y = 100;

  p.setup = () => {
    p.createCanvas(200, 200);
    p.stroke(STROKE);
    p.noLoop();
  }
  p.draw = () => {
    p.background(BACKGROUND);
    p.line(0,0,100,100);
  }
}`;
