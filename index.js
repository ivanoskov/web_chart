class LineChart {
  constructor(drawElement, data) {
    this.drawElement = drawElement;
    this.data = data;
    this.linesNum = 5;
    this.lineWidth = 1;
    this.createCanvas();
    this.draw();
}
  createCanvas() {
    var canvas = document.createElement("canvas");
    canvas.id = "LineChart";
    canvas.width = this.drawElement.offsetWidth;
    canvas.height = this.drawElement.offsetHeight;
    this.drawElement.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.ctx = ctx;
  }
  draw(){
    
    // draw lines
    var lineDistance = this.getLineDistance(this.data);
    console.log(lineDistance);
    for (var i = 0; i < this.linesNum; i++){
        this.ctx.fillRect(0, this.canvas.height - (i * lineDistance) - this.lineWidth, this.canvas.width, this.lineWidth);
    }
  }
  getLineDistance(data){
    var maxElement = Math.max(...this.data);
    var minElement = Math.min(...this.data);
    console.log(minElement);
    var topOfChart = maxElement * 1.1;
    var bottomOfChar = minElement;
    return (topOfChart  / this.linesNum) * (this.canvas.height / topOfChart);
  }
}
