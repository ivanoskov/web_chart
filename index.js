class LineChart {
  constructor(drawElement, data) {
    this.drawElement = drawElement;
    this.data = data;
    this.barNum = 5;
    this.barWidth = 1;
    this.marginOffcet = 20;
    this.createCanvas();
    this.draw();
  }
  createCanvas() {
    var canvas = document.createElement("canvas");
    canvas.id = "LineChart";
    this.width = this.drawElement.offsetWidth - this.marginOffcet * 2;
    this.height = this.drawElement.offsetHeight - this.marginOffcet * 2;
    canvas.style.width = this.width + "px";
    canvas.style.height = this.height + "px";
    canvas.style.margin = this.marginOffcet + "px";
    var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
    canvas.width = this.width * scale;
    canvas.height = this.height * scale;
    this.drawElement.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    ctx.scale(scale, scale);
    this.canvas = canvas;
    this.ctx = ctx;
  }
  draw() {
    var maxElement = Math.max(...this.data);
    var minElement = Math.min(...this.data);
    var topOfChart = maxElement * 1.1;
    var bottomOfChar = minElement;
    // draw bars
    var barDistance = (topOfChart / this.barNum).toFixed(2);
    var scaleBarDistanceOnCanvas = (
      barDistance *
      (this.canvas.height / topOfChart)
    ).toFixed(2);
    for (var i = 0; i < this.barNum; i++) {
      console.log((minElement + i * barDistance).toFixed(2));
      this.ctx.beginPath();
      this.ctx.moveTo(
        28,
        this.canvas.height - (i * scaleBarDistanceOnCanvas) - this.barWidth - 4
      );
      this.ctx.lineTo(
        this.canvas.width,
        this.canvas.height - (i * scaleBarDistanceOnCanvas) - this.barWidth - 4
      );
      this.ctx.strokeStyle = "#d3d3d3";
      this.ctx.stroke();

      this.ctx.fillStyle = "#333";
      this.ctx.strokeStyle = "#000";
      this.ctx.font = "italic 8pt Arial";
      this.ctx.fillText(
        (minElement + i * barDistance).toFixed(2).toString(),
        0,
        this.canvas.height - i * scaleBarDistanceOnCanvas - this.barWidth 
      );
    }
  }
  // getLineDistance(data) {
  //   return (topOfChart / this.barNum) * (this.canvas.height / topOfChart);
  // }
}
