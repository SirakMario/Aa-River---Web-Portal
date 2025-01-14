/**
 * Point Cloud Comparison using Three.js
 * Author: Rebeca Nunes Rodrigues (rebeca.n.rod@gmail.com)
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { PCDLoader } from "three/addons/loaders/PCDLoader.js";

// HELPER/UTIL FUNCTIONS
const deg_to_rad = (deg) => (deg * Math.PI) / 180.0;

let container, camera, renderer, controls;
let sceneL, sceneR;
let sliderPos;

export function createComparator(containerId, sliderId, urlLeft, urlRight) {
  init(containerId, sliderId, urlLeft, urlRight);
}

function init(containerId, sliderId, urlLeft, urlRight) {
  container = document.querySelector(containerId);
  sliderPos = container.clientWidth / 2;

  sceneL = new THREE.Scene();
  sceneL.background = new THREE.Color(0xbcd48f);

  sceneR = new THREE.Scene();
  sceneR.background = new THREE.Color(0x8fbcd4);

  camera = initCamera(container);

  renderer = initRenderer(container);

  // TODO: reset button to get control to initial state
  controls = new OrbitControls(camera, renderer.domElement);

  initSlider(sliderId, container, controls);
  initMeshes(urlLeft, sceneL, urlRight, sceneR);

  container.addEventListener("resize", onWindowResize);
  window.addEventListener("resize", onWindowResize);
}

function initCamera(container) {
  let camera = new THREE.PerspectiveCamera(
    50, // fov gives a fish eye effect
    container.clientWidth / container.clientHeight,
    0.1,
    2000
  );
  // sets the camera to Top View and adjust initial zoom
  camera.position.set(0, 0, 300);
  return camera;
}

function initRenderer(container) {
  let renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(container.devicePixelRatio);
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setScissorTest(true);
  renderer.setAnimationLoop(animate);
  container.appendChild(renderer.domElement);
  return renderer;
}

function initSlider(sliderId, container, controls) {
  const slider = document.querySelector(sliderId);

  function onPointerDown() {
    if (event.isPrimary === false) return;

    controls.enabled = false;

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  function onPointerUp() {
    controls.enabled = true;

    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }

  function onPointerMove(e) {
    if (event.isPrimary === false) return;

    // Check if pointer position (pageX) is inside the container
    // sliderPos = Math.max(0, Math.min(window.innerWidth, e.pageX));
    const leftContainer = container.offsetLeft;
    const rightContainer = container.clientWidth + container.offsetLeft;
    sliderPos = Math.max(0, Math.min(rightContainer, e.pageX) - leftContainer);

    slider.style.left = sliderPos - slider.offsetWidth / 2 + "px";
  }

  slider.style.touchAction = "none"; // disable touch scroll
  slider.addEventListener("pointerdown", onPointerDown);
}

function initMeshes(urlLeft, sceneL, urlRight, sceneR) {
  const loader = new PCDLoader();
  loader.load(urlLeft, function (points) {
    points.geometry.center();
    points.name = "river.pcd";

    // Rotation uses Euler angle in rad
    // z rotation: positive is counter-clockwise, negative is clockwise
    points.rotation.z = deg_to_rad(55); // make it horizontal rectangle from top view
    // x rotation: positive rotates towards user view, negative increases the angle away from the user view
    // points.rotation.x = -deg_to_rad(90);
    // y rotation: at this point, like the pitch angle
    // points.rotation.y = deg_to_rad(10);

    // points.translateX(10);
    // points.translateY(-6);

    // let scale = 1.1;
    // points.scale.set(scale, scale, scale);
    // Set static size
    points.material.size = 1.2;

    sceneL.add(points);
  });

  // 'points' is an Object3D
  loader.load(urlRight, function (points) {
    points.geometry.center();
    points.name = "river2024.pcd";

    // Rotation uses Euler angle in rad
    // z rotation: positive is counter-clockwise, negative is clockwise
    points.rotation.z = deg_to_rad(55); // make it horizontal rectangle from top view
    // x rotation: positive rotates towards user view, negative increases the angle away from the user view
    // points.rotation.x = -deg_to_rad(90);
    // y rotation: at this point, like the pitch angle
    // points.rotation.y = deg_to_rad(10);

    // Set static size
    points.material.size = 1.2;

    sceneR.add(points);
  });
}

// Callbacks
function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
  renderer.setScissor(0, 0, sliderPos, container.clientHeight);
  renderer.render(sceneL, camera);

  renderer.setScissor(
    sliderPos,
    0,
    container.clientWidth,
    container.clientHeight
  );
  renderer.render(sceneR, camera);
}
