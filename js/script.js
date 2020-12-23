
    const deadline = new Date('2025-12-03T19:00:00.000Z'); // Austrian Time Zone
    const days = 10; // Total days
    var radius = 0;
    
    window.addEventListener('resize', init);
    window.addEventListener('DOMContentLoaded', init);

    function init() {
      var boxWidth = document.querySelector('#box').offsetWidth;
      boxWidth = (boxWidth > 450) ? 450 : boxWidth;
      boxWidth = (boxWidth < 300) ? 300 : boxWidth;

      document.querySelector('#box').style.height = boxWidth + 'px';
      document.querySelector('#box').style.width = boxWidth + 'px';
      document.querySelector('#box canvas').setAttribute("width", boxWidth + 'px');
      document.querySelector('#box canvas').setAttribute("height", boxWidth + 'px');
      radius = boxWidth / 2 - 25;
      timer();
    }


    function graph() {


      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      var startAngle = 0 * Math.PI;
      var endAngle = progress() * Math.PI;
      var counterClockwise = false;

      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, counterClockwise);
      context.strokeStyle = "gray"; //blue
      context.lineWidth = 50;
      context.stroke();


      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      context.lineWidth = 50;
      context.strokeStyle = '#b4ff6f';
      context.stroke();

    }

    var t = setInterval(function () {
      timer();
    }, 1000);

    function progress() {
      const current = new Date();
      const diff = deadline - current;
      var total = days * 24 * 60 * 60 * 1000;
      var progres = ((total - diff) / (24 * 60 * 60 * 1000) * 2) / 10;
      return progres;


    }
    function timer() {
      const current = new Date();

      const diff = deadline - current;

      var days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
      var minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
      var seconds = Math.floor((diff / 1000) % 60) + "";

      document.getElementById('days').innerHTML = days;
      document.getElementById('hours').innerHTML = hours;
      document.getElementById('minutes').innerHTML = minutes;
      document.getElementById('seconds').innerHTML = seconds;
      graph();
    }