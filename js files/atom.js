const popup = document.getElementById('progressPopup');
popup.style.display = 'block';


const container = document.getElementById('atomContainer');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  const point = new THREE.PointLight(0xffffff, 1.2);
  point.position.set(10, 10, 10);
  scene.add(ambient, point);

  // Nucleus
  const nucleusGroup = new THREE.Group();
  for (let i = 0; i < 10; i++) {
    const color = i % 2 === 0 ? 0xff3333 : 0x004aad;
    const mat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6 });
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), mat);
    sphere.position.set(
      (Math.random() - 0.5) * 1.2,
      (Math.random() - 0.5) * 1.2,
      (Math.random() - 0.5) * 1.2
    );
    nucleusGroup.add(sphere);
  }
  scene.add(nucleusGroup);

  // Orbits and Electrons
  const electrons = [];
  const orbitSettings = [
    { radius: 2.5, count: 3, speed: 0.02 },
    { radius: 3.5, count: 4, speed: 0.015 },
    { radius: 4.5, count: 5, speed: 0.01 }
  ];

  orbitSettings.forEach((orbit, i) => {
    const ring = new THREE.RingGeometry(orbit.radius - 0.01, orbit.radius + 0.01, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, side: THREE.DoubleSide, transparent: true, opacity: 0.2 });
    const ringMesh = new THREE.Mesh(ring, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.rotation.y = i * 0.4;
    scene.add(ringMesh);

    for (let j = 0; j < orbit.count; j++) {
      const mat = new THREE.MeshStandardMaterial({ color: 0x8B8000, emissive: 0x8B8000, emissiveIntensity: 0.9 });
      const electron = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), mat);
      scene.add(electron);
      electrons.push({
        mesh: electron,
        angle: (Math.PI * 2 * j) / orbit.count,
        speed: orbit.speed,
        radius: orbit.radius,
        axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize()
      });
    }
  });

  // Animation
  function animate() {
    requestAnimationFrame(animate);
    nucleusGroup.rotation.y += 0.01;

    electrons.forEach(e => {
      e.angle += e.speed;
      const x = Math.cos(e.angle) * e.radius;
      const y = Math.sin(e.angle) * e.radius;
      const z = Math.sin(e.angle * 1.5) * e.radius;
      const pos = new THREE.Vector3(x, y, z).applyAxisAngle(e.axis, e.angle);
      e.mesh.position.set(pos.x, pos.y, pos.z);
    });

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });


  popup.style.display = 'none';