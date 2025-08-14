function getAtomColor(atom) {
  const colors = {
    'H₂': '#3399ff', 'H₂O': '#99ccff', 'NaCl': '#ffffff',
    'CO₂': '#888888', 'CaCO₃': '#f5f5dc', 'MgO': '#98fb98',
    'FeO': '#cd5c5c', 'NH₃': '#dda0dd', 'CH₄': '#87ceeb',
    'HCl': '#e0ffff', 'CCl': '#778899', 'O₂': '#99ccff', 'N₂': '#ccffcc', 'Cl₂': '#ccffff', 'Na₂O': '#ffcc99',
'MgCl₂': '#c1e1c1', 'KCl': '#f9e79f', 'CaCl₂': '#e5e5ff', 'FeCl₃': '#ff9999',
'2HCl': '#b3ffff', 'CO': '#a0a0a0', 'CN': '#999999', 'H₂S': '#f0e68c',
'SO₂': '#e6e6fa', 'SO₃': '#dcdcdc', 'CS₂': '#ffd700', 'NaH': '#e0ffff',
'KBr': '#ffe4b5', 'CaBr₂': '#ffe5b4', 'FeBr₃': '#ff6666', 'CF₄': '#b0e0e6',
'SiO₂': '#dddddd', 'SiC': '#708090', 'Fe₃C': '#b22222', 'NO': '#ffb6c1',
'NO₂': '#cd5c5c', 'CaF₂': '#f8f8ff', 'AlCl₃': '#ffe4c4', 'Al₂O₃': '#d3d3d3',
'ZnCl₂': '#fafad2', 'AgCl': '#f5f5f5', 'CuCl₂': '#87ceeb', 'CuO': '#4169e1',
'PbO': '#696969', 'PbCl₂': '#dcdcdc', 'SnCl₂': '#e0e0e0', 'BaCl₂': '#f0ffff',
'BaO': '#f5fffa', 'LiCl': '#faf0e6', 'Li₂O': '#fdf5e6'
  };
  return colors[atom] || '#dde';
}