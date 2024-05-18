// Load the data from the JSON file
d3.json('data.json').then(function(data) {
  // Convert the data to an NxN matrix
  const matrix = data;

  // Render the 3D bar-chart in the A-Frame scene
  renderBarChart(matrix);
});

function renderBarChart(matrix) {
  const scene = document.querySelector('a-scene');
  const N = matrix.length; // Assuming square matrix
  const cellSize = 0.5; // Size of each cell in the matrix
  const barHeight = 0.2; // Height of each bar

  // Create a grid to hold the bars
  const grid = document.createElement('a-entity');
  scene.appendChild(grid);

  // Render each bar in the matrix
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const value = matrix[row][col];
      const barEntity = document.createElement('a-box');
      barEntity.setAttribute('depth', cellSize);
      barEntity.setAttribute('height', value * barHeight);
      barEntity.setAttribute('width', cellSize);
      barEntity.setAttribute('position', {
        x: col * cellSize - (N * cellSize) / 2 + cellSize / 2,
        y: value * barHeight / 2,
        z: row * cellSize - (N * cellSize) / 2 + cellSize / 2
      });
      barEntity.setAttribute('material', 'color', '#7BC8A4');
      grid.appendChild(barEntity);
    }
  }
}