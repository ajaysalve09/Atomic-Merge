const mergeRules = {
  'H+H': 'H₂', 'H₂+O': 'H₂O', 'Na+Cl': 'NaCl',
  'C+O₂': 'CO₂', 'Ca+CO₃': 'CaCO₃', 'Mg+O': 'MgO',
  'Fe+O': 'FeO', 'N+H₃': 'NH₃', 'C+H₄': 'CH₄',
  'H+Cl': 'HCl', 'C+Cl': 'CCl', 'O+O': 'O₂', 'N+N': 'N₂', 'Cl+Cl': 'Cl₂', 'Na+O': 'Na₂O',
  'Mg+Cl': 'MgCl₂', 'K+Cl': 'KCl', 'Ca+Cl': 'CaCl₂', 'Fe+Cl': 'FeCl₃',
  'H₂+Cl₂': '2HCl', 'N₂+H₂': 'NH₃', 'C+O': 'CO', 'C+N': 'CN',
  'H+S': 'H₂S', 'S+O': 'SO₂', 'S+O₂': 'SO₃', 'C+S': 'CS₂',
  'Na+H': 'NaH', 'K+Br': 'KBr', 'Ca+Br': 'CaBr₂', 'Fe+Br': 'FeBr₃',
  'C+F': 'CF₄', 'Si+O₂': 'SiO₂', 'C+Si': 'SiC', 'C+Fe': 'Fe₃C',
  'N+O': 'NO', 'N+O₂': 'NO₂', 'Ca+F': 'CaF₂', 'Al+Cl': 'AlCl₃',
  'Al+O': 'Al₂O₃', 'Zn+Cl': 'ZnCl₂', 'Ag+Cl': 'AgCl', 'Cu+Cl': 'CuCl₂',
  'Cu+O': 'CuO', 'Pb+O': 'PbO', 'Pb+Cl': 'PbCl₂', 'Sn+Cl': 'SnCl₂',
  'Ba+Cl': 'BaCl₂', 'Ba+O': 'BaO', 'Li+Cl': 'LiCl', 'Li+O': 'Li₂O'
};

const wikipediaLessons = {
  'Introduction': `
    <p>Atoms and molecules form the foundation of all matter in the universe. Everything we see, touch, eat, and breathe is made up of atoms that combine to form molecules. From the air we inhale (O₂, CO₂) to the water we drink (H₂O), understanding molecules is fundamental to understanding life itself.</p>
    <p>An atom is the smallest unit of an element that retains its chemical properties. Atoms consist of a nucleus (protons and neutrons) and electrons that orbit this nucleus. When two or more atoms bond together chemically, they form a molecule.</p>
    <p>Chemistry, biology, physics, and many branches of science rely on molecular theory to explain natural phenomena, such as chemical reactions, biological processes, and the behavior of matter.</p>
    <p>Each element on the periodic table represents a unique type of atom, and combinations of these atoms lead to the formation of millions of different molecules with various properties and functions.</p>
    <p>In this section, we will cover the detailed history, classification, and importance of molecules, and answer some frequently asked questions to help students grasp core concepts of atomic and molecular science.</p>
    <p>Atoms are the building blocks, and molecules are the structures built from them. They play a central role in disciplines ranging from pharmacology to astrophysics.</p>
    <p>Mastering the basic understanding of atoms and molecules allows scientists and students to predict, manipulate, and innovate in the world around us.</p>
    <p>This module is designed to make molecular learning engaging, visual, and memorable for learners of all ages.</p>
    <p>Whether you're curious about how soap cleans, how food digests, or how stars shine — molecules hold the answers.</p>
  `,

  'History': `
    <p>The concept of the atom dates back to ancient Greece. Around 400 BCE, Democritus proposed that all matter is composed of indivisible units called "atomos." Although revolutionary, this idea was philosophical and lacked scientific proof.</p>
    <p>In the 18th century, Antoine Lavoisier established the Law of Conservation of Mass, laying a foundation for chemical reactions and atomic theory.</p>
    <p>In the early 19th century, John Dalton introduced the first scientific atomic theory. He proposed that elements are made of identical atoms and that compounds are formed by atoms combining in fixed ratios.</p>
    <p>Dalton’s model was simple and didn’t explain internal structure. In 1897, J.J. Thomson discovered the electron, proposing the “plum pudding” model of the atom, where negatively charged electrons are embedded in a positive sphere.</p>
    <p>In 1911, Ernest Rutherford conducted the gold foil experiment. He proposed that atoms have a dense, positively charged nucleus surrounded by electrons, introducing the nuclear model.</p>
    <p>In 1913, Niels Bohr refined Rutherford’s model by introducing energy levels for electrons, leading to the Bohr atomic model. This explained spectral lines and was a significant leap forward.</p>
    <p>In 1926, Erwin Schrödinger introduced the quantum mechanical model of the atom, treating electrons as wavefunctions rather than particles in fixed orbits.</p>
    <p>James Chadwick discovered the neutron in 1932, completing the picture of the atomic nucleus.</p>
    <p>Meanwhile, molecular theory evolved alongside. In 1811, Amedeo Avogadro proposed that equal volumes of gases at the same temperature and pressure contain the same number of molecules.</p>
    <p>The development of quantum chemistry in the 20th century helped explain bonding at the molecular level, including valence bond theory and molecular orbital theory.</p>
    <p>Modern chemistry relies on powerful tools like X-ray crystallography and spectroscopy to study atomic arrangements and molecular structures in incredible detail.</p>
    <p>Today, we understand the behavior of atoms and molecules through both theoretical models and experimental data.</p>
  `,

  'Classification': `
    <p>Molecules can be classified in multiple ways depending on their size, nature, bonding type, and composition. This classification helps scientists understand and predict chemical behavior and properties.</p>
    <h4>1. Based on Composition</h4>
    <ul>
      <li><strong>Elements:</strong> Molecules made of the same type of atom (e.g., O₂, N₂).</li>
      <li><strong>Compounds:</strong> Molecules made of different atoms (e.g., H₂O, CO₂).</li>
    </ul>
    <h4>2. Based on Nature</h4>
    <ul>
      <li><strong>Organic Molecules:</strong> Contain carbon and hydrogen (e.g., CH₄, C₆H₁₂O₆).</li>
      <li><strong>Inorganic Molecules:</strong> Generally lack carbon-hydrogen bonds (e.g., NaCl, H₂SO₄).</li>
    </ul>
    <h4>3. Based on Size</h4>
    <ul>
      <li><strong>Small Molecules:</strong> Have low molecular weight (e.g., H₂O, NH₃).</li>
      <li><strong>Macromolecules:</strong> Very large molecules (e.g., proteins, DNA).</li>
    </ul>
    <h4>4. Based on Bonding</h4>
    <ul>
      <li><strong>Covalent Molecules:</strong> Atoms share electrons (e.g., O₂, CH₄).</li>
      <li><strong>Ionic Compounds:</strong> Formed by electron transfer and electrostatic attraction (e.g., NaCl).</li>
      <li><strong>Metallic Bonds:</strong> In metals where electrons are delocalized (e.g., Cu, Fe alloys).</li>
    </ul>
    <p>Each classification provides insights into the molecule’s properties such as solubility, conductivity, polarity, and reactivity.</p>
    <p>Understanding these classifications is vital in fields like pharmaceuticals, nanotechnology, and environmental chemistry.</p>
  `,

  'Importance': `
    <p>Molecules are fundamental to life and technology. From cells in your body to the stars in the sky, everything is composed of atoms and molecules. Studying molecules reveals the secrets of nature at a microscopic level.</p>
    <ul>
      <li><strong>Medicine:</strong> Understanding molecular structures helps in designing better drugs, vaccines, and diagnostics.</li>
      <li><strong>Environment:</strong> Molecular knowledge is key to understanding climate change, pollution, and greenhouse gases.</li>
      <li><strong>Food Industry:</strong> Chemistry helps improve flavor, shelf life, and nutritional value of food.</li>
      <li><strong>Materials Science:</strong> Enables creation of new materials such as plastics, superconductors, and nanomaterials.</li>
      <li><strong>Energy:</strong> Molecular engineering improves energy storage (batteries) and generation (solar panels, biofuels).</li>
      <li><strong>Agriculture:</strong> Development of fertilizers, pesticides, and genetically modified organisms relies on molecular biology.</li>
      <li><strong>Forensics:</strong> DNA analysis and toxicology are based on molecular identification.</li>
      <li><strong>Space Exploration:</strong> Molecular science helps study atmospheres, life possibilities, and fuel efficiency in space travel.</li>
    </ul>
    <p>The study of molecules bridges the gap between physics and biology, chemistry and medicine, and science and engineering.</p>
    <p>Without molecular knowledge, advancements in biotechnology, artificial intelligence (drug design), and clean energy would be impossible.</p>
  `,

  'All Elements': `

  <h4> Alkali Metals (6) :</h4>
  <ul>
    <li><strong>3. Li:</strong> Lithium</li>
    <li><strong>11. Na:</strong> Sodium</li>
    <li><strong>19. K:</strong> Potassium</li>
    <li><strong>37. Rb:</strong> Rubidium</li>
    <li><strong>55. Cs:</strong> Cesium</li>
    <li><strong>87. Fr:</strong> Francium</li>
  </ul>
  

  <h4> Alkaline Earth Metals (6) :</h4>
  <ul>
    <li><strong>4. Be:</strong> Beryllium</li>
    <li><strong>12. Mg:</strong> Magnesium</li>
    <li><strong>20. Ca:</strong> Calcium</li>
    <li><strong>38. Sr:</strong> Strontium</li>
    <li><strong>56. Ba:</strong> Barium</li>
    <li><strong>88. Ra:</strong> Radium</li>
  </ul>

  <h4> Transition Metals (38) :</h4>
  <ul>
    <li><strong>21. Sc:</strong> Scandium</li>
    <li><strong>22. Ti:</strong> Titanium</li>
    <li><strong>23. V:</strong> Vanadium</li>
    <li><strong>24. Cr:</strong> Chromium</li>
    <li><strong>25. Mn:</strong> Manganese</li>
    <li><strong>26. Fe:</strong> Iron</li>
    <li><strong>27. Co:</strong> Cobalt</li>
    <li><strong>28. Ni:</strong> Nickel</li>
    <li><strong>29. Cu:</strong> Copper</li>
    <li><strong>30. Zn:</strong> Zinc</li>
    <li><strong>39. Y:</strong> Yttrium</li>
    <li><strong>40. Zr:</strong> Zirconium</li>
    <li><strong>41. Nb:</strong> Niobium</li>
    <li><strong>42. Mo:</strong> Molybdenum</li>
    <li><strong>43. Tc:</strong> Technetium</li>
    <li><strong>44. Ru:</strong> Ruthenium</li>
    <li><strong>45. Rh:</strong> Rhodium</li>
    <li><strong>46. Pd:</strong> Palladium</li>
    <li><strong>47. Ag:</strong> Silver</li>
    <li><strong>48. Cd:</strong> Cadmium</li>
    <li><strong>72. Hf:</strong> Hafnium</li>
    <li><strong>73. Ta:</strong> Tantalum</li>
    <li><strong>74. W:</strong> Tungsten</li>
    <li><strong>75. Re:</strong> Rhenium</li>
    <li><strong>76. Os:</strong> Osmium</li>
    <li><strong>77. Ir:</strong> Iridium</li>
    <li><strong>78. Pt:</strong> Platinum</li>
    <li><strong>79. Au:</strong> Gold</li>
    <li><strong>80. Hg:</strong> Mercury</li>
    <li><strong>104. Rf:</strong> Rutherfordium</li>
    <li><strong>105. Db:</strong> Dubnium</li>
    <li><strong>106. Sg:</strong> Seaborgium</li>
    <li><strong>107. Bh:</strong> Bohrium</li>
    <li><strong>108. Hs:</strong> Hassium</li>
    <li><strong>109. Mt:</strong> Meitnerium</li>
    <li><strong>110. Ds:</strong> Darmstadtium</li>
    <li><strong>111. Rg:</strong> Roentgenium</li>
    <li><strong>112. Cn:</strong> Copernicium</li>
  </ul>

  <h4> Lanthanides (15) :</h4>
  <ul>
    <li><strong>57. La:</strong> Lanthanum</li>
    <li><strong>58. Ce:</strong> Cerium</li>
    <li><strong>59. Pr:</strong> Praseodymium</li>
    <li><strong>60. Nd:</strong> Neodymium</li>
    <li><strong>61. Pm:</strong> Promethium</li>
    <li><strong>62. Sm:</strong> Samarium</li>
    <li><strong>63. Eu:</strong> Europium</li>
    <li><strong>64. Gd:</strong> Gadolinium</li>
    <li><strong>65. Tb:</strong> Terbium</li>
    <li><strong>66. Dy:</strong> Dysprosium</li>
    <li><strong>67. Ho:</strong> Holmium</li>
    <li><strong>68. Er:</strong> Erbium</li>
    <li><strong>69. Tm:</strong> Thulium</li>
    <li><strong>70. Yb:</strong> Ytterbium</li>
    <li><strong>71. Lu:</strong> Lutetium</li>
  </ul>

  <h4> Actinides (15) :</h4>
  <ul>
    <li><strong>89. Ac:</strong> Actinium</li>
    <li><strong>90. Th:</strong> Thorium</li>
    <li><strong>91. Pa:</strong> Protactinium</li>
    <li><strong>92. U:</strong> Uranium</li>
    <li><strong>93. Np:</strong> Neptunium</li>
    <li><strong>94. Pu:</strong> Plutonium</li>
    <li><strong>95. Am:</strong> Americium</li>
    <li><strong>96. Cm:</strong> Curium</li>
    <li><strong>97. Bk:</strong> Berkelium</li>
    <li><strong>98. Cf:</strong> Californium</li>
    <li><strong>99. Es:</strong> Einsteinium</li>
    <li><strong>100. Fm:</strong> Fermium</li>
    <li><strong>101. Md:</strong> Mendelevium</li>
    <li><strong>102. No:</strong> Nobelium</li>
    <li><strong>103. Lr:</strong> Lawrencium</li>
  </ul>

  <h4> Metalloids (7) :</h4>
  <ul>
    <li><strong>5. B:</strong> Boron</li>
    <li><strong>14. Si:</strong> Silicon</li>
    <li><strong>32. Ge:</strong> Germanium</li>
    <li><strong>33. As:</strong> Arsenic</li>
    <li><strong>51. Sb:</strong> Antimony</li>
    <li><strong>52. Te:</strong> Tellurium</li>
    <li><strong>84. Po:</strong> Polonium</li>
  </ul>

  <h4> Other Nonmetals (7) :</h4>
  <ul>
    <li><strong>1. H:</strong> Hydrogen</li>
    <li><strong>6. C:</strong> Carbon</li>
    <li><strong>7. N:</strong> Nitrogen</li>
    <li><strong>8. O:</strong> Oxygen</li>
    <li><strong>15. P:</strong> Phosphorus</li>
    <li><strong>16. S:</strong> Sulfur</li>
    <li><strong>34. Se:</strong> Selenium</li>
  </ul>

  <h4> Halogens (6) :</h4>
  <ul>
    <li><strong>9. F:</strong> Fluorine</li>
    <li><strong>17. Cl:</strong> Chlorine</li>
    <li><strong>35. Br:</strong> Bromine</li>
    <li><strong>53. I:</strong> Iodine</li>
    <li><strong>85. At:</strong> Astatine</li>
    <li><strong>117. Ts:</strong> Tennessine</li>
  </ul>

  <h4> Noble Gases (7) :</h4>
  <ul>
    <li><strong>2. He:</strong> Helium</li>
    <li><strong>10. Ne:</strong> Neon</li>
    <li><strong>18. Ar:</strong> Argon</li>
    <li><strong>36. Kr:</strong> Krypton</li>
    <li><strong>54. Xe:</strong> Xenon</li>
    <li><strong>86. Rn:</strong> Radon</li>
    <li><strong>118. Og:</strong> Oganesson</li>
  </ul>

  <h4>Superheavy Elements (4) :</h4>
<ul>
  <li><strong>113. Nh:</strong> Nihonium</li>
  <li><strong>114. Fl:</strong> Flerovium</li>
  <li><strong>115. Mc:</strong> Moscovium</li>
  <li><strong>116. Lv:</strong> Livermorium</li>
</ul>

<h4>Post-Transition Metals (7) :</h4>
<ul>
  <li><strong>13. Al:</strong> Aluminium</li>
  <li><strong>31. Ga:</strong> Gallium</li>
  <li><strong>49. In:</strong> Indium</li>
  <li><strong>50. Sn:</strong> Tin</li>
  <li><strong>81. Tl:</strong> Thallium</li>
  <li><strong>82. Pb:</strong> Lead</li>
  <li><strong>83. Bi:</strong> Bismuth</li>
</ul>

`
};

const moleculeNames = {
  'H₂O₂': 'Hydrogen Peroxide :',
  'C₂H₆': 'Ethane :',
  'C₂H₄': 'Ethene :',
  'C₂H₂': 'Ethyne :',
  'C₆H₆': 'Benzene :',
  'C₂H₅OH': 'Ethanol :',
  'HNO₃': 'Nitric Acid :',
  'H₂SO₄': 'Sulfuric Acid :',
  'NaOH': 'Sodium Hydroxide :',
  'KOH': 'Potassium Hydroxide :',
  'Ca(OH)₂': 'Calcium Hydroxide :',
  'CH₃COOH': 'Acetic Acid :',
  'Na₂CO₃': 'Sodium Carbonate :',
  'NaHCO₃': 'Sodium Bicarbonate :',
  'CaSO₄': 'Calcium Sulfate :',
  'NH₄Cl': 'Ammonium Chloride :',
  'NaNO₃': 'Sodium Nitrate :',
  'NaNO₂': 'Sodium Nitrite :',
  'KNO₃': 'Potassium Nitrate :',
  'CuSO₄': 'Copper(II) Sulfate :',
  'FeSO₄': 'Iron(II) Sulfate :',
  'Fe₂O₃': 'Iron(III) Oxide :',
  'Pb(NO₃)₂': 'Lead(II) Nitrate :',
  'ZnO': 'Zinc Oxide :',
  'Na₃PO₄': 'Sodium Phosphate :',
  'Al(OH)₃': 'Aluminum Hydroxide :',
  'H₂': 'Hydrogen :',
  'H₂O': 'Water :',
  'NaCl': 'Sodium Chloride :',
  'CO₂': 'Carbon Dioxide :',
  'CaCO₃': 'Calcium Carbonate :',
  'MgO': 'Magnesium Oxide :',
  'FeO': 'Iron(II) Oxide :',
  'NH₃': 'Ammonia :',
  'CH₄': 'Methane :',
  'HCl': 'Hydrochloric Acid :',
  'CCl': 'Carbon Chloride :',
  'O₂': 'Oxygen :',
  'N₂': 'Nitrogen :',
  'Cl₂': 'Chlorine :',
  'Na₂O': 'Sodium Oxide :',
  'MgCl₂': 'Magnesium Chloride :',
  'KCl': 'Potassium Chloride :',
  'CaCl₂': 'Calcium Chloride :',
  'FeCl₃': 'Iron(III) Chloride :',
  '2HCl': 'Hydrochloric Acid :',
  'CO': 'Carbon Monoxide :',
  'CN': 'Cyanide :',
  'H₂S': 'Hydrogen Sulfide :',
  'SO₂': 'Sulfur Dioxide :',
  'SO₃': 'Sulfur Trioxide :',
  'CS₂': 'Carbon Disulfide :',
  'NaH': 'Sodium Hydride :',
  'KBr': 'Potassium Bromide :',
  'CaBr₂': 'Calcium Bromide :',
  'FeBr₃': 'Iron(III) Bromide :',
  'CF₄': 'Carbon Tetrafluoride :',
  'SiO₂': 'Silicon Dioxide :',
  'SiC': 'Silicon Carbide :',
  'Fe₃C': 'Cementite :',
  'NO': 'Nitric Oxide :',
  'NO₂': 'Nitrogen Dioxide :',
  'CaF₂': 'Calcium Fluoride :',
  'AlCl₃': 'Aluminum Chloride :',
  'Al₂O₃': 'Aluminum Oxide :',
  'ZnCl₂': 'Zinc Chloride :',
  'AgCl': 'Silver Chloride :',
  'CuCl₂': 'Copper(II) Chloride :',
  'CuO': 'Copper(II) Oxide :',
  'PbO': 'Lead(II) Oxide :',
  'PbCl₂': 'Lead(II) Chloride :',
  'SnCl₂': 'Tin(II) Chloride :',
  'BaCl₂': 'Barium Chloride :',
  'BaO': 'Barium Oxide :',
  'LiCl': 'Lithium Chloride :',
  'Li₂O': 'Lithium Oxide :'
};

const moleculeLessons = {
'H₂O₂': `
<p><strong>Equation:</strong> H₂ + O₂ → H₂O₂</p>
<p>Hydrogen Peroxide (H₂O₂) is a pale blue liquid in its pure form and a powerful oxidizing agent. It is used as a disinfectant and bleaching agent. It breaks down into water and oxygen, making it environmentally safe, but concentrated forms can be hazardous.</p>
`,
'C₂H₆': `
<p><strong>Equation:</strong> C + H → C₂H₆</p>
<p>Ethane (C₂H₆) is a colorless, odorless gas and the second simplest alkane. It is a common component of natural gas and is used as a petrochemical feedstock in ethylene production.</p>
`,
'C₂H₄': `
<p><strong>Equation:</strong> C + H → C₂H₄</p>
<p>Ethene (C₂H₄), also known as ethylene, is the simplest alkene and a key plant hormone. It is used for ripening fruits and synthesizing plastics. Ethene is a highly flammable gas with a sweet odor.</p>
`,
'C₂H₂': `
<p><strong>Equation:</strong> C + H → C₂H₂</p>
<p>Ethyne (C₂H₂), commonly called acetylene, is a hydrocarbon with a triple bond between carbon atoms. It is used in welding and as a raw material for organic compounds and is highly reactive due to the triple bond.</p>
`,
'C₆H₆': `
<p><strong>Equation:</strong> C + H → C₆H₆</p>
<p>Benzene (C₆H₆) is a colorless, sweet-smelling, and highly flammable liquid. It is used in manufacturing plastics, resins, and synthetic fibers, but it is classified as a carcinogen—long-term exposure is hazardous.</p>
`,
'C₂H₅OH': `
<p><strong>Equation:</strong> C₂H₆O → C₂H₅OH</p>
<p>Ethanol (C₂H₅OH) is a volatile, flammable alcohol commonly used as a solvent or in beverages. It is used in fuel (bioethanol), antiseptics, and alcoholic drinks, and is produced via fermentation or industrial synthesis.</p>
`,
'HNO₃': `
<p><strong>Equation:</strong> N + O + H → HNO₃</p>
<p>Nitric Acid (HNO₃) is a highly corrosive and strong mineral acid. It is used in fertilizers, explosives, and metal processing, and can cause severe burns and emit toxic fumes.</p>
`,
'H₂SO₄': `
<p><strong>Equation:</strong> H₂O + SO₃ → H₂SO₄</p>
<p>Sulfuric Acid (H₂SO₄) is a dense, oily liquid and one of the most important industrial chemicals. It is used in batteries, fertilizers, and chemical synthesis, and is highly corrosive and dangerous to handle.</p>
`,
'NaOH': `
<p><strong>Equation:</strong> Na + H₂O → NaOH + H₂</p>
<p>Sodium Hydroxide (NaOH), also known as caustic soda, is a strong base. It is used in soap making, paper production, and chemical manufacturing, and can cause severe skin burns.</p>
`,
'KOH': `
<p><strong>Equation:</strong> K + H₂O → KOH + H₂</p>
<p>Potassium Hydroxide (KOH) is similar to NaOH but more soluble. It is used in making liquid soaps and biodiesel and is a strong alkali that must be handled with care.</p>
`,

'Ca(OH)₂': `
<p><strong>Equation:</strong> CaO + H₂O → Ca(OH)₂</p>
<p><strong>Calcium Hydroxide (Ca(OH)₂)</strong>, also known as slaked lime, is used in construction (mortar, plaster) and water treatment. It is slightly soluble in water and forms limewater.</p>
`,
'CH₃COOH': `
<p><strong>Equation:</strong> CO₂ + CH₄ → CH₃COOH (via biological or industrial synthesis)</p>
<p><strong>Acetic Acid (CH₃COOH)</strong> is the main component of vinegar apart from water. It is used in food preservation, cleaning, and chemical synthesis. Though it is a weak acid, it is corrosive in concentrated form.</p>
`,
'Na₂CO₃': `
<p><strong>Equation:</strong> NaCl + NH₃ + CO₂ + H₂O → Na₂CO₃ (Solvay process)</p>
<p><strong>Sodium Carbonate (Na₂CO₃)</strong> is a white solid used in cleaning products and glass making. Commonly known as washing soda, it is used as a water softener and pH regulator.</p>
`,
'NaHCO₃': `
<p><strong>Equation:</strong> Na₂CO₃ + CO₂ + H₂O → 2NaHCO₃</p>
<p><strong>Sodium Bicarbonate (NaHCO₃)</strong>, or baking soda, is a white crystalline powder. It is used in baking, cleaning, and fire extinguishers and reacts with acids to release CO₂ gas.</p>
`,
'CaSO₄': `
<p><strong>Equation:</strong> CaCO₃ + H₂SO₄ → CaSO₄ + CO₂ + H₂O</p>
<p><strong>Calcium Sulfate (CaSO₄)</strong> occurs as gypsum and is used in construction. It is used in plaster of Paris and drywall and acts as a soil conditioner.</p>
`,
'NH₄Cl': `
<p><strong>Equation:</strong> NH₃ + HCl → NH₄Cl</p>
<p><strong>Ammonium Chloride (NH₄Cl)</strong> is a white crystalline salt. It is used in fertilizers, batteries, and cough medicine, and is formed as a by-product in chemical industries.</p>
`,
'NaNO₃': `
<p><strong>Equation:</strong> Na + HNO₃ → NaNO₃ + H₂</p>
<p><strong>Sodium Nitrate (NaNO₃)</strong> is a nitrate salt used in food preservation and fertilizers. Also called Chile saltpeter, it acts as an oxidizing agent in explosives and rocket propellants.</p>
`,
'NaNO₂': `
<p><strong>Equation:</strong> NaNO₃ + Pb → NaNO₂ + PbO</p>
<p><strong>Sodium Nitrite (NaNO₂)</strong> is a white to yellowish crystalline powder. It is used in food preservation and dye production. It can act as a mild oxidizer and is toxic in large amounts.</p>
`,
'KNO₃': `
<p><strong>Equation:</strong> KCl + NaNO₃ → KNO₃ + NaCl</p>
<p><strong>Potassium Nitrate (KNO₃)</strong>, also known as saltpeter, is used in fertilizers, fireworks, and gunpowder. It provides nitrogen for plants.</p>
`,
'CuSO₄': `
<p><strong>Equation:</strong> Cu + H₂SO₄ → CuSO₄ + H₂</p>
<p><strong>Copper(II) Sulfate (CuSO₄)</strong> is a blue crystalline solid used in agriculture, chemistry labs, and electroplating. It is toxic to fungi and algae, making it useful in fungicides.</p>
`,
'FeSO₄': `
<p><strong>Equation:</strong> Fe + H₂SO₄ → FeSO₄ + H₂</p>
<p><strong>Iron(II) Sulfate (FeSO₄)</strong> is a pale green salt. It is used in iron supplements and wastewater treatment and oxidizes easily to form Iron(III) compounds.</p>
`,
'Fe₂O₃': `
<p><strong>Equation:</strong> 4Fe + 3O₂ → 2Fe₂O₃</p>
<p><strong>Iron(III) Oxide (Fe₂O₃)</strong> is a red-brown compound and the main component of rust. It is used in pigments and polishing agents.</p>
`,
'Pb(NO₃)₂': `
<p><strong>Equation:</strong> Pb + 2HNO₃ → Pb(NO₃)₂ + H₂</p>
<p><strong>Lead(II) Nitrate (Pb(NO₃)₂)</strong> is a colorless crystalline compound. It is used in heat-stable pigments and explosives and is toxic and must be handled with care.</p>
`,
'ZnO': `
<p><strong>Equation:</strong> 2Zn + O₂ → 2ZnO</p>
<p><strong>Zinc Oxide (ZnO)</strong> is a white powder insoluble in water. It is used in sunscreens, rubber, and paints, and exhibits semiconductor and antibacterial properties.</p>
`,
'Na₃PO₄': `
<p><strong>Equation:</strong> 3NaOH + H₃PO₄ → Na₃PO₄ + 3H₂O</p>
<p><strong>Sodium Phosphate (Na₃PO₄)</strong> is used in food, water treatment, and cleaning products. It acts as a pH buffer and emulsifier and is also used in detergents and boiler compounds.</p>
`,
'Al(OH)₃': `
<p><strong>Equation:</strong> AlCl₃ + 3NH₄OH → Al(OH)₃ + 3NH₄Cl</p>
<p><strong>Aluminum Hydroxide (Al(OH)₃)</strong> is a white, amorphous powder used as an antacid and flame retardant. It is also used in water purification and paper making.</p>
`,
'H₂': `
<p><strong>Equation:</strong> H + H → H₂</p>
<p><strong>H₂</strong>: Hydrogen gas (H₂) is the lightest and most abundant element in the universe. It exists as a diatomic molecule and is highly flammable. Hydrogen is used extensively in fuel cells for clean energy, in welding processes, and as a key component in rocket fuel.</p>
`,
'H₂O': `
<p><strong>Equation:</strong> H₂ + O → H₂O</p>
<p><strong>H₂O</strong>: Water (H₂O) is a vital compound for all known forms of life. It acts as a universal solvent, supports various biochemical reactions, and helps regulate temperature in living organisms.</p>
`,
'NaCl': `
<p><strong>Equation:</strong> Na + Cl → NaCl</p>
<p><strong>NaCl</strong>: Sodium Chloride (NaCl), commonly known as table salt, is essential for human health. It regulates fluid balance, supports nerve transmission, and muscle function.</p>
`,
'CO₂': `
<p><strong>Equation:</strong> C + O₂ → CO₂</p>
<p><strong>CO₂</strong>: Carbon Dioxide (CO₂) is a colorless gas that plays a critical role in Earth's carbon cycle. It is produced during respiration and combustion and is absorbed by plants during photosynthesis.</p>
`,
'CaCO₃': `
<p><strong>Equation:</strong> CaO + CO₂ → CaCO₃</p>
<p><strong>CaCO₃</strong>: Calcium Carbonate (CaCO₃) is a white, crystalline compound found in rocks such as limestone, chalk, and marble. It is used in construction and as a calcium supplement.</p>
`,
'MgO': `
<p><strong>Equation:</strong> 2Mg + O₂ → 2MgO</p>
<p><strong>MgO</strong>: Magnesium Oxide (MgO) is a white solid used in refractory linings, agriculture, and as an antacid. It has a high melting point and neutralizes acids.</p>
`,
'FeO': `
<p><strong>Equation:</strong> Fe + O → FeO</p>
<p><strong>FeO</strong>: Iron(II) Oxide (FeO) is a black powder used in metallurgy and pigments. It contributes to magnetic properties and rust formation.</p>
`,
'NH₃': `
<p><strong>Equation:</strong> N₂ + 3H₂ → 2NH₃ (Haber Process)</p>
<p><strong>NH₃</strong>: Ammonia (NH₃) is a colorless gas with a pungent smell. It is used in fertilizers, refrigeration, and cleaning agents. It contains nitrogen vital for plant growth.</p>
`,
'CH₄': `
<p><strong>Equation:</strong> C + 2H₂ → CH₄</p>
<p><strong>CH₄</strong>: Methane (CH₄) is a colorless, odorless gas and the simplest hydrocarbon. It is the primary component of natural gas and used as a fuel.</p>
`,
'HCl': `
<p><strong>Equation:</strong> H₂ + Cl₂ → 2HCl</p>
<p><strong>HCl</strong>: Hydrochloric Acid (HCl) is a strong acid found in the stomach where it aids digestion. It is also used industrially in metal cleaning and chemical production.</p>
`,
'CCl': `
<p><strong>Equation:</strong> C + Cl → CCl</p>
<p>Carbon Chloride (CCl) compounds, such as carbon tetrachloride (CCl₄), are created when carbon reacts with chlorine. These are widely used in the industrial sector as solvents, especially for degreasing metal parts.</p>
`,
'O₂': `
<p><strong>Equation:</strong> O + O → O₂</p>
<p>Oxygen (O₂) is a diatomic molecule vital to all aerobic organisms. It is involved in cellular respiration, allowing for the conversion of nutrients into usable energy. In industry, oxygen is used in steelmaking, medical breathing gases, and water treatment.</p>
`,
'N₂': `
<p><strong>Equation:</strong> N + N → N₂</p>
<p>Nitrogen gas (N₂) makes up approximately 78% of Earth’s atmosphere. It is an inert diatomic molecule crucial for the nitrogen cycle, which maintains soil fertility. It's used industrially in creating ammonia (NH₃) via the Haber process and in inert atmospheres for sensitive manufacturing processes.</p>
`,
'Cl₂': `
<p><strong>Equation:</strong> Cl + Cl → Cl₂</p>
<p>Chlorine gas (Cl₂) is a greenish-yellow diatomic gas with a pungent smell. It is highly reactive and used in water purification, the production of plastics like PVC (polyvinyl chloride), and in disinfectants. It is toxic and must be handled under strict safety protocols.</p>
`,
'Na₂O': `
<p><strong>Equation:</strong> Na + O → Na₂O</p>
<p>Sodium Oxide (Na₂O) is a white solid that reacts vigorously with water to form sodium hydroxide (NaOH). It is used in ceramics and glass formulations to improve melting properties and chemical durability. Its high reactivity makes it valuable in controlled chemical environments.</p>
`,
'MgCl₂': `
<p><strong>Equation:</strong> Mg + Cl → MgCl₂</p>
<p>Magnesium Chloride (MgCl₂) is a crystalline salt often extracted from seawater. It is used for road de-icing, as a coagulant in tofu production, and in health supplements to replenish magnesium levels in the body. It also plays a role in industrial metallurgy.</p>
`,
'KCl': `
<p><strong>Equation:</strong> K + Cl → KCl</p>
<p>Potassium Chloride (KCl) is a vital salt used in medical treatments to correct potassium deficiencies, in fertilizers to provide essential nutrients to crops, and in food processing. It is also used as a salt substitute in low-sodium diets.</p>
`,
'CaCl₂': `
<p><strong>Equation:</strong> Ca + Cl → CaCl₂</p>
<p>Calcium Chloride (CaCl₂) is an ionic compound that absorbs moisture from the air. It is commonly used to melt ice on roads, as a desiccant, in concrete mixtures to accelerate setting, and in the food industry to firm canned vegetables and produce.</p>
`,
'FeCl₃': `
<p><strong>Equation:</strong> Fe + Cl → FeCl₃</p>
<p>Ferric Chloride (FeCl₃), also called Iron(III) chloride, is a corrosive brownish-yellow solid used in water and wastewater treatment. It acts as a coagulant, helping to remove impurities. In organic chemistry, it serves as a Lewis acid catalyst in chlorination reactions.</p>
`,
'2HCl': `
<p><strong>Equation:</strong> H₂ + Cl₂ → 2HCl</p>
<p>Hydrogen Chloride (HCl) is a strong acid formed from the direct combination of hydrogen and chlorine gases. It forms hydrochloric acid when dissolved in water. It is essential in industrial processes like PVC production, steel pickling, and pH regulation in various applications.</p>
`,
'CO': `
<p><strong>Equation:</strong> C + O → CO</p>
<p><strong>CO (Carbon Monoxide)</strong>: A colorless, odorless, and highly toxic gas formed when carbon burns in a limited supply of oxygen. It is used in metallurgy for reducing iron ores and in chemical industries as a building block for organic compounds.</p>
`,
'CN': `
<p><strong>Equation:</strong> C + N → CN</p>
<p><strong>CN (Cyanide Ion)</strong>: A highly toxic chemical species formed by combining carbon and nitrogen. It is used in gold mining for leaching and in organic synthesis. It interferes with cellular respiration, making it extremely dangerous.</p>
`,
'H₂S': `
<p><strong>Equation:</strong> H + S → H₂S</p>
<p><strong>H₂S (Hydrogen Sulfide)</strong>: A toxic gas with a characteristic smell of rotten eggs. It forms naturally from decaying organic matter and is found in natural gas, volcanic emissions, and sewers.</p>
`,
'SO₂': `
<p><strong>Equation:</strong> S + O → SO₂</p>
<p><strong>SO₂ (Sulfur Dioxide)</strong>: A pungent, colorless gas released during volcanic eruptions and combustion of fossil fuels. It is used as a preservative in winemaking, a bleaching agent, and in the production of sulfuric acid.</p>
`,
'SO₃': `
<p><strong>Equation:</strong> S + O₂ → SO₃</p>
<p><strong>SO₃ (Sulfur Trioxide)</strong>: A highly reactive and corrosive compound that forms sulfuric acid when dissolved in water. It is a key intermediate in the industrial production of fertilizers and explosives.</p>
`,
'CS₂': `
<p><strong>Equation:</strong> C + S → CS₂</p>
<p><strong>CS₂ (Carbon Disulfide)</strong>: A volatile, flammable liquid formed by the reaction of carbon and sulfur. It is used in the manufacture of viscose rayon, cellophane, and as an industrial solvent.</p>
`,
'NaH': `
<p><strong>Equation:</strong> Na + H → NaH</p>
<p><strong>NaH (Sodium Hydride)</strong>: A strong, reactive base used in organic chemistry as a reducing agent and base. It reacts violently with water to produce hydrogen gas. It is stored under mineral oil to prevent moisture exposure.</p>
`,
'KBr': `
<p><strong>Equation:</strong> K + Br → KBr</p>
<p><strong>KBr (Potassium Bromide)</strong>: A salt used historically as a sedative and anticonvulsant. Today, it's used in infrared spectroscopy, photography, and medical research. It appears as a white crystalline solid and is water-soluble.</p>
`,
'CaBr₂': `
<p><strong>Equation:</strong> Ca + Br → CaBr₂</p>
<p><strong>CaBr₂ (Calcium Bromide)</strong>: A highly soluble salt used in drilling fluids for oil and gas wells, fire retardants, and as a chemical reagent. It is hygroscopic and forms colorless crystals in its hydrated form.</p>
`,
'FeBr₃': `
<p><strong>Equation:</strong> Fe + Br → FeBr₃</p>
<p><strong>FeBr₃ (Iron(III) Bromide)</strong>: A dark red, corrosive solid used as a Lewis acid catalyst in organic synthesis. It is highly reactive with moisture and must be stored in dry, airtight containers.</p>
`,
'CF₄': `
<p><strong>Equation:</strong> C + F → CF₄</p>
<p><strong>CF₄ (Carbon Tetrafluoride)</strong>: A colorless, non-flammable gas used in the semiconductor industry for plasma etching. It is also a potent greenhouse gas with a long atmospheric lifetime. It is chemically inert under normal conditions.</p>
`,
'SiO₂': `
<p><strong>Equation:</strong> Si + O₂ → SiO₂</p>
<p><strong>SiO₂ (Silicon Dioxide)</strong>: Commonly found as sand and quartz, this compound is used to make glass, optical fibers, ceramics, and semiconductors. It is also used as a food additive and an abrasive in toothpaste.</p>
`,
'SiC': `
<p><strong>Equation:</strong> C + Si → SiC</p>
<p><strong>SiC (Silicon Carbide)</strong>: An extremely hard, thermally stable compound used in abrasives, cutting tools, and electronic components. It can withstand high temperatures and is used in applications requiring high performance and durability.</p>
`,
'Fe₃C': `
<p><strong>Equation:</strong> C + Fe → Fe₃C</p>
<p><strong>Fe₃C (Iron Carbide or Cementite)</strong>: A compound found in steel and cast iron, providing strength and hardness. It forms during the cooling of molten iron and plays a key role in metallurgy and materials science.</p>
`,
'NO': `
<p><strong>Equation:</strong> N + O → NO</p>
<p><strong>NO (Nitric Oxide)</strong>: A gas involved in signaling processes in biological systems, particularly in vasodilation. Industrially, it's used in nitric acid production. It is also a pollutant formed in combustion engines.</p>
`,
'NO₂': `
<p><strong>Equation:</strong> N + O₂ → NO₂</p>
<p><strong>NO₂ (Nitrogen Dioxide)</strong>: A reddish-brown toxic gas contributing to photochemical smog and acid rain. It is used in the production of nitric acid and is a byproduct of combustion in engines and industrial facilities.</p>
`,
'CaF₂': `
<p><strong>Equation:</strong> Ca + F → CaF₂</p>
<p><strong>CaF₂ (Calcium Fluoride)</strong>: Occurs naturally as the mineral fluorite. It is used in optics for lenses and prisms due to its transparency to infrared and ultraviolet light. It also plays a role in metallurgy and ceramics.</p>
`,
'AlCl₃': `
<p><strong>Equation:</strong> Al + Cl → AlCl₃</p>
<p><strong>AlCl₃ (Aluminum Chloride)</strong>: A white or yellow solid used as a catalyst in organic chemistry, particularly in Friedel–Crafts reactions. It is highly reactive with water and forms hydrochloric acid upon contact.</p>
`,
'Al₂O₃': `
<p><strong>Equation:</strong> Al + O → Al₂O₃</p>
<p><strong>Al₂O₃ (Aluminum Oxide)</strong>: A hard, crystalline material used in abrasives, refractories, and as an insulating material. It also forms a protective oxide layer on aluminum, preventing corrosion.</p>
`,
'ZnCl₂': `
<p><strong>Equation:</strong> Zn + Cl → ZnCl₂</p>
<p><strong>ZnCl₂ (Zinc Chloride)</strong>: A versatile salt used in fluxes for soldering, textile processing, and chemical synthesis. It is highly hygroscopic and must be stored in moisture-free conditions.</p>
`,
'AgCl': `
<p><strong>Equation:</strong> Ag + Cl → AgCl</p>
<p><strong>AgCl (Silver Chloride)</strong>: A light-sensitive compound used in photography and electrochemistry. It darkens upon exposure to light due to decomposition into silver and chlorine.</p>
`,
'CuCl₂': `
<p><strong>Equation:</strong> Cu + Cl → CuCl₂</p>
<p><strong>CuCl₂ (Copper(II) Chloride)</strong>: A greenish-blue solid used as a catalyst, in textile dyeing, and as a wood preservative. It is soluble in water and forms complexes with ligands.</p>
`,
'CuO': `
<p><strong>Equation:</strong> Cu + O → CuO</p>
<p><strong>CuO (Copper(II) Oxide)</strong>: A black oxide used in ceramics, batteries, and as a catalyst. It is also used in pigments and serves as a precursor in copper chemistry.</p>
`,
'PbO': `
<p><strong>Equation:</strong> Pb + O → PbO</p>
<p><strong>PbO (Lead(II) Oxide)</strong>: Used in the manufacture of leaded glass and batteries. It is toxic and must be handled with care. It exists in yellow and red forms depending on crystal structure.</p>
`,
'PbCl₂': `
<p><strong>Equation:</strong> Pb + Cl → PbCl₂</p>
<p><strong>PbCl₂ (Lead(II) Chloride)</strong>: A white crystalline solid with low water solubility. Used in pigment manufacturing and organic synthesis. Toxic and requires careful disposal.</p>
`,
'SnCl₂': `
<p><strong>Equation:</strong> Sn + Cl → SnCl₂</p>
<p><strong>SnCl₂ (Tin(II) Chloride)</strong>: A white, crystalline solid used as a reducing agent and in electroplating. It is sensitive to air and moisture, often stored in sealed containers.</p>
`,
'BaCl₂': `
<p><strong>Equation:</strong> Ba + Cl → BaCl₂</p>
<p><strong>BaCl₂ (Barium Chloride)</strong>: Used in fireworks to produce green flames, and in chemical analysis. It is highly soluble and toxic if ingested, and must be handled with caution.</p>
`,
'BaO': `
<p><strong>Equation:</strong> Ba + O → BaO</p>
<p><strong>BaO (Barium Oxide)</strong>: Used in ceramics and as a desiccant. It reacts with water to form barium hydroxide. Toxic and reactive with acids and moisture.</p>
`,
'LiCl': `
<p><strong>Equation:</strong> Li + Cl → LiCl</p>
<p><strong>LiCl (Lithium Chloride)</strong>: A white salt highly soluble in water, used in air conditioning systems, drying agents, and metallurgy. It exhibits unique solubility characteristics and is used in research applications.</p>
`,
'Li₂O': `
<p><strong>Equation:</strong> Li + O → Li₂O</p>
<p><strong>Li₂O (Lithium Oxide)</strong>: Used in ceramics, glass production, and lithium-ion batteries. It is a strong base and reacts with water to form lithium hydroxide. Important for future battery technologies.</p>
`
};