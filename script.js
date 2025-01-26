// pIC50 to IC50 Conversion
document.getElementById('pic50-to-ic50-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the pIC50 value from the input
  const pic50 = parseFloat(document.getElementById('pic50').value);

  // Check if the input is valid
  if (isNaN(pic50)) {
    alert('Please enter a valid number for pIC50.');
    return;
  }

  // Convert pIC50 to IC50 in Molar (M)
  const ic50_M = Math.pow(10, -pic50);

  // Convert IC50 to µM and nM
  const ic50_uM = ic50_M * 1e6; // 1 M = 1e6 µM
  const ic50_nM = ic50_M * 1e9; // 1 M = 1e9 nM

  // Display the results
  document.getElementById('ic50-um').textContent = ic50_uM.toFixed(2);
  document.getElementById('ic50-nm').textContent = ic50_nM.toFixed(2);
});

// IC50 to pIC50 Conversion
document.getElementById('ic50-to-pic50-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the IC50 value and unit from the input
  const ic50 = parseFloat(document.getElementById('ic50').value);
  const unit = document.getElementById('ic50-unit').value;

  // Check if the input is valid
  if (isNaN(ic50)) {
    alert('Please enter a valid number for IC50.');
    return;
  }

  // Convert IC50 to Molar (M)
  let ic50_M;
  if (unit === 'uM') {
    ic50_M = ic50 / 1e6; // Convert µM to M
  } else if (unit === 'nM') {
    ic50_M = ic50 / 1e9; // Convert nM to M
  }

  // Calculate pIC50
  const pic50 = -Math.log10(ic50_M);

  // Display the result
  document.getElementById('pic50-result').textContent = pic50.toFixed(2);
});
