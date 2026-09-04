import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";


// ============================================================
// EASY SETTINGS
// ============================================================


// ---------- CAR ----------

const CAR_ROTATION_X = 0;
const CAR_ROTATION_Y = 50;
const CAR_ROTATION_Z = 0;

const CAR_SCALE = 8;

const CAR_POSITION_X = -0.7;
const CAR_POSITION_Y = -0.15;
const CAR_POSITION_Z = 0;


// ---------- CAMERA ----------

const CAMERA_FOCAL_LENGTH = 25;

const CAMERA_X = 4.5;
const CAMERA_Y = 0;
const CAMERA_Z = 7.5;

const CAMERA_LOOK_X = 0;
const CAMERA_LOOK_Y = 0.1;
const CAMERA_LOOK_Z = 0;


// ---------- CAR MATERIAL ----------

const CAR_COLOR = "#8f9193";
const DARK_CAR_COLOR = "#000000";

const CAR_METALNESS = 0.85;
const CAR_ROUGHNESS = 0.2;


// ---------- WIREFRAME ----------

const DARK_WIREFRAME_COLOR = "#000000";
const DARK_WIREFRAME_OPACITY = 0.75;


// ---------- LIGHTING ----------

const AMBIENT_INTENSITY = 3;

const FRONT_LIGHT_INTENSITY = 2;
const SIDE_LIGHT_INTENSITY = 7;
const BACK_LIGHT_INTENSITY = 10;


// ---------- MOUSE MOVEMENT ----------

const ENABLE_MOUSE_ROTATION = true;

const MOUSE_ROTATION_AMOUNT = 8;
const MOUSE_SMOOTHNESS = 0.04;


// ---------- VISIBLE LIGHT BEAM ----------

const BEAM_X = 0;
const BEAM_Y = 7.7;
const BEAM_Z = 0;

const BEAM_HEIGHT = 9;
const BEAM_ANGLE = 18;

const LIGHT_BEAM_OPACITY = 0.2;
const DARK_BEAM_OPACITY = 0.05;

const BEAM_COLOR = 0xffffff;


// ============================================================
// SCENE
// ============================================================

const scene = new THREE.Scene();


// ============================================================
// CAMERA
// ============================================================

const camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.setFocalLength(CAMERA_FOCAL_LENGTH);

camera.position.set(
    CAMERA_X,
    CAMERA_Y,
    CAMERA_Z
);

camera.lookAt(
    CAMERA_LOOK_X,
    CAMERA_LOOK_Y,
    CAMERA_LOOK_Z
);


// ============================================================
// BLENDER-STYLE GRID
// ============================================================

const grid = new THREE.GridHelper(
    50,
    50,
    0x666666,
    0x555555
);

grid.position.y = -0.5;

grid.material.transparent = true;
grid.material.opacity = 0.35;

scene.add(grid);


// ============================================================
// RENDERER
// ============================================================

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

const container = document.getElementById("car-container");

container.appendChild(renderer.domElement);


// ============================================================
// HIGHLIGHT BOX
// ============================================================

const highlightElement = document.querySelector(".highlight");


// ============================================================
// LIGHTS
// ============================================================


// ---------- AMBIENT ----------

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    AMBIENT_INTENSITY
);

scene.add(ambientLight);


// ---------- FRONT ----------

const frontLight = new THREE.DirectionalLight(
    0xffffff,
    FRONT_LIGHT_INTENSITY
);

frontLight.position.set(
    -4,
    6,
    7
);

scene.add(frontLight);


// ---------- SIDE ----------

const sideLight = new THREE.DirectionalLight(
    0xffffff,
    SIDE_LIGHT_INTENSITY
);

sideLight.position.set(
    6,
    3,
    3
);

scene.add(sideLight);


// ---------- BACK / RIM ----------

const backLight = new THREE.DirectionalLight(
    0xffffff,
    BACK_LIGHT_INTENSITY
);

backLight.position.set(
    -3,
    4,
    -6
);

scene.add(backLight);


// ============================================================
// VISIBLE ATMOSPHERIC BEAM
// ============================================================

const beamRadius =
    Math.tan(
        THREE.MathUtils.degToRad(BEAM_ANGLE)
    ) * BEAM_HEIGHT;

const beamGeometry = new THREE.ConeGeometry(
    beamRadius,
    BEAM_HEIGHT,
    64,
    1,
    true
);

const beamMaterial = new THREE.MeshBasicMaterial({
    color: BEAM_COLOR,
    transparent: true,
    opacity: LIGHT_BEAM_OPACITY,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending
});

const lightBeam = new THREE.Mesh(
    beamGeometry,
    beamMaterial
);

lightBeam.position.set(
    BEAM_X,
    BEAM_Y - BEAM_HEIGHT / 2,
    BEAM_Z
);

scene.add(lightBeam);


// ============================================================
// CAR MATERIAL
// ============================================================

const carMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(CAR_COLOR),
    metalness: CAR_METALNESS,
    roughness: CAR_ROUGHNESS
});


// ============================================================
// WIREFRAME MATERIAL
// ============================================================

const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: DARK_WIREFRAME_COLOR,
    wireframe: true,
    transparent: true,
    opacity: DARK_WIREFRAME_OPACITY
});


// ============================================================
// LOAD CAR
// ============================================================

let car;
let wireframeCar;

const loader = new GLTFLoader();

loader.load(
    "models/car.glb",

    function (gltf) {

        car = gltf.scene;

        scene.add(car);


        // ----------------------------------------------------
        // FIND MODEL SIZE
        // ----------------------------------------------------

        const box = new THREE.Box3().setFromObject(car);

        const center = box.getCenter(
            new THREE.Vector3()
        );

        const size = box.getSize(
            new THREE.Vector3()
        );


        // ----------------------------------------------------
        // CENTER MODEL
        // ----------------------------------------------------

        car.position.x -= center.x;
        car.position.y -= center.y;
        car.position.z -= center.z;


        // ----------------------------------------------------
        // SCALE MODEL
        // ----------------------------------------------------

        const maxDimension = Math.max(
            size.x,
            size.y,
            size.z
        );

        const scale = CAR_SCALE / maxDimension;

        car.scale.setScalar(scale);


        // ----------------------------------------------------
        // POSITION MODEL
        // ----------------------------------------------------

        car.position.x += CAR_POSITION_X;
        car.position.y += CAR_POSITION_Y;
        car.position.z += CAR_POSITION_Z;


        // ----------------------------------------------------
        // ROTATE MODEL
        // ----------------------------------------------------

        car.rotation.x = THREE.MathUtils.degToRad(
            CAR_ROTATION_X
        );

        car.rotation.y = THREE.MathUtils.degToRad(
            CAR_ROTATION_Y
        );

        car.rotation.z = THREE.MathUtils.degToRad(
            CAR_ROTATION_Z
        );


        // ----------------------------------------------------
        // APPLY SOLID MATERIAL
        // ----------------------------------------------------

        car.traverse(function (object) {

            if (object.isMesh) {
                object.material = carMaterial.clone();
            }

        });


        // ----------------------------------------------------
        // CREATE WIREFRAME COPY
        // ----------------------------------------------------

        wireframeCar = car.clone(true);

        wireframeCar.traverse(function (object) {

            if (object.isMesh) {
                object.material = wireframeMaterial.clone();
            }

        });

        wireframeCar.visible = false;

        scene.add(wireframeCar);


        // Apply correct theme if page is already dark
        const darkMode =
            document.body.classList.contains("dark-mode");

        setCarDarkMode(darkMode);
        setBeamDarkMode(darkMode);

        console.log("Car loaded!");

    },

    undefined,

    function (error) {

        console.error(
            "Error loading car:",
            error
        );

    }
);


// ============================================================
// DARK MODE CAR FUNCTION
// ============================================================

function setCarDarkMode(darkMode) {

    if (!car) {
        return;
    }

    car.traverse(function (object) {

        if (!object.isMesh) {
            return;
        }

        if (darkMode) {
            object.material.color.set(DARK_CAR_COLOR);
        } else {
            object.material.color.set(CAR_COLOR);
        }

    });

    if (wireframeCar) {

        wireframeCar.traverse(function (object) {

            if (object.isMesh) {
                object.material.color.set(DARK_WIREFRAME_COLOR);
            }

        });

    }

}

window.setCarDarkMode = setCarDarkMode;


// ============================================================
// DARK MODE BEAM FUNCTION
// ============================================================

function setBeamDarkMode(darkMode) {

    if (darkMode) {
        beamMaterial.opacity = DARK_BEAM_OPACITY;
    } else {
        beamMaterial.opacity = LIGHT_BEAM_OPACITY;
    }

}

window.setBeamDarkMode = setBeamDarkMode;


// ============================================================
// MOUSE MOVEMENT
// ============================================================

let mouseX = 0;

window.addEventListener("mousemove", function (event) {

    mouseX =
        (event.clientX / window.innerWidth) * 2 - 1;

});


// ============================================================
// ANIMATION
// ============================================================

function animate() {

    requestAnimationFrame(animate);


    // --------------------------------------------------------
    // ROTATE CAR
    // --------------------------------------------------------

    if (car) {

        const baseRotation =
            THREE.MathUtils.degToRad(CAR_ROTATION_Y);

        if (ENABLE_MOUSE_ROTATION) {

            const mouseRotation =
                THREE.MathUtils.degToRad(
                    mouseX * MOUSE_ROTATION_AMOUNT
                );

            const targetRotation =
                baseRotation + mouseRotation;

            car.rotation.y +=
                (targetRotation - car.rotation.y)
                * MOUSE_SMOOTHNESS;

        }


        // Keep wireframe aligned with solid car
        if (wireframeCar) {

            wireframeCar.rotation.x = car.rotation.x;
            wireframeCar.rotation.y = car.rotation.y;
            wireframeCar.rotation.z = car.rotation.z;

        }

    }


    // --------------------------------------------------------
    // CHECK CURRENT THEME
    // --------------------------------------------------------

    const darkMode =
        document.body.classList.contains("dark-mode");


    // --------------------------------------------------------
    // LIGHT MODE
    // --------------------------------------------------------

    if (!darkMode) {

        if (car) {
            car.visible = true;
        }

        if (wireframeCar) {
            wireframeCar.visible = false;
        }

        renderer.setScissorTest(false);

        renderer.render(
            scene,
            camera
        );

        return;
    }


    // --------------------------------------------------------
    // DARK MODE - FIRST PASS
    // --------------------------------------------------------

    if (car) {
        car.visible = true;
    }

    if (wireframeCar) {
        wireframeCar.visible = false;
    }

    renderer.setScissorTest(false);

    renderer.render(
        scene,
        camera
    );


    // --------------------------------------------------------
    // DARK MODE - WIREFRAME INSIDE HIGHLIGHT
    // --------------------------------------------------------

    if (
        !car ||
        !wireframeCar ||
        !highlightElement
    ) {
        return;
    }


    const rect =
        highlightElement.getBoundingClientRect();

    const canvasRect =
        renderer.domElement.getBoundingClientRect();


    const scaleX =
        renderer.domElement.width /
        canvasRect.width;

    const scaleY =
        renderer.domElement.height /
        canvasRect.height;


    const x =
        (rect.left - canvasRect.left)
        * scaleX;

    const y =
        (canvasRect.bottom - rect.bottom)
        * scaleY;

    const width =
        rect.width * scaleX;

    const height =
        rect.height * scaleY;


    // Hide solid car
    car.visible = false;

    // Show wireframe car
    wireframeCar.visible = true;


    // Only allow drawing inside highlight
    renderer.setScissorTest(true);

    renderer.setScissor(
        Math.round(x),
        Math.round(y),
        Math.round(width),
        Math.round(height)
    );


    // Keep first render visible
    renderer.autoClear = false;

    renderer.clearDepth();

    renderer.render(
        scene,
        camera
    );


    // Reset renderer
    renderer.autoClear = true;

    renderer.setScissorTest(false);

    car.visible = true;
    wireframeCar.visible = false;

}

animate();


// ============================================================
// RESIZE
// ============================================================

window.addEventListener("resize", function () {

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});