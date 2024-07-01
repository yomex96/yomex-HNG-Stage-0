document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#f4f4f4', '#e6e6e6', '#dcdcdc', '#d3d3d3', '#FFB6C1', '#ADD8E6', '#90EE90', '#FFD700', '#FFA07A', '#9370DB', '#FF6347', '#4682B4', '#32CD32', '#FF4500', '#8A2BE2'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});