function calculateTrap() {
  const input = document.getElementById("inputArray").value;
  const height = input.split(",").map(Number);
  const n = height.length;

  const left = Array(n).fill(0);
  const right = Array(n).fill(0);
  let water = 0;

  left[0] = height[0];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }

  right[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  }

  const waterAt = [];
  for (let i = 0; i < n; i++) {
    const w = Math.min(left[i], right[i]) - height[i];
    waterAt[i] = w > 0 ? w : 0;
    water += waterAt[i];
  }

  // Generate output table
  let html = `<table><tr><th>Index</th>`;
  for (let i = 0; i < n; i++) html += `<th>${i}</th>`;
  html += `</tr><tr><th>Height</th>`;
  for (let h of height) html += `<td class='block'>${h}</td>`;
  html += `</tr><tr><th>Water</th>`;
  for (let w of waterAt) html += `<td class='water'>${w}</td>`;
  html += `</tr></table>`;
  html += `<h3>Total Water Trapped: ${water} units</h3>`;

  document.getElementById("output").innerHTML = html;
}
