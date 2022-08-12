import * as THREE from '/node_modules/three/build/three.module.js';
// import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls';

if (typeof window !== 'undefined') {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 200;
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(innerWidth, innerHeight);
  document.body.appendChild(renderer.domElement);

  // new OrbitControls(camera, renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  const sphereGeometry = new THREE.SphereGeometry(200, 200, 200);
  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0xf3f490,
    side: THREE.DoubleSide,
  });
  const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphereMesh.position.z = -350;
  sphereMesh.position.y = 150;

  scene.add(sphereMesh);

  for (let i = 0; i < 100; i++) {
    const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0xf030c2,
      side: THREE.DoubleSide,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);

    scene.add(torus);
    torus.position.x = Math.random() * 1000 - 400;
    torus.position.y = Math.random() * 1000 - 400;
    torus.position.z = Math.random() * 1000 - 400;
    torus.rotation.x = Math.random() * 500;
    torus.rotation.y = Math.random() * 200;
    torus.rotation.z = Math.random() * 400;

    function animateTorus() {
      requestAnimationFrame(animateTorus);
      torus.rotation.x += 0.003;
      torus.rotation.y += 0.003;
      torus.rotation.z += 0.003;
    }

    animateTorus();
  }

  for (let i = 0; i < 50; i++) {
    const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 20, 20);
    const cylinderMaterial = new THREE.MeshPhongMaterial({
      color: 0x31d7fa,
      side: THREE.DoubleSide,
    });
    const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    scene.add(cylinderMesh);

    cylinderMesh.position.x = Math.random() * 1000 - 400;
    cylinderMesh.position.y = Math.random() * 1000 - 400;
    cylinderMesh.position.z = Math.random() * 1000 - 400;
    cylinderMesh.rotation.x = Math.random() * 500;
    cylinderMesh.rotation.y = Math.random() * 200;
    cylinderMesh.rotation.z = Math.random() * 400;

    function animateCylinder() {
      requestAnimationFrame(animateCylinder);
      cylinderMesh.rotation.x += 0.004;
      cylinderMesh.rotation.y += 0.001;
      cylinderMesh.rotation.z += 0.0035;
    }

    animateCylinder();
  }

  for (let i = 0; i < 100; i++) {
    const pyramidGeometry = new THREE.TetrahedronGeometry(10, 0);
    const pyramidMaterial = new THREE.MeshPhongMaterial({
      color: 0xfeba6a,
      side: THREE.DoubleSide,
    });
    const pyramidMesh = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    scene.add(pyramidMesh);

    pyramidMesh.position.x = Math.random() * 1000 - 400;
    pyramidMesh.position.y = Math.random() * 1000 - 400;
    pyramidMesh.position.z = Math.random() * 1000 - 400;
    pyramidMesh.rotation.x = Math.random() * 500;
    pyramidMesh.rotation.y = Math.random() * 200;
    pyramidMesh.rotation.z = Math.random() * 400;

    function animatePyramid() {
      requestAnimationFrame(animatePyramid);
      pyramidMesh.rotation.x += 0.005;
      pyramidMesh.rotation.y += 0.002;
      pyramidMesh.rotation.z += 0.004;
    }

    animatePyramid();
  }

  const planeGeometry = new THREE.PlaneGeometry(500, 500, 20, 20);
  const planeMaterial = new THREE.MeshPhongMaterial({
    color: 0x6300bd,
    side: THREE.DoubleSide,
    wireframe: true,
  });
  const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(planeMesh);
  planeMesh.rotation.x = 250;

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 1, 1);
  scene.add(light);

  const lightSecondary = new THREE.DirectionalLight(0xffffff, 0.3);
  lightSecondary.position.set(1, 1, 1);
  scene.add(lightSecondary);

  const lightTertiary = new THREE.HemisphereLight(0x5e2387, 0.3);
  lightTertiary.position.set(0, 10, 1);
  scene.add(lightTertiary);

  const backLight = new THREE.AmbientLight(0x0f0f0f, 1);
  backLight.position.set(0, -10, 1);
  scene.add(backLight);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}
