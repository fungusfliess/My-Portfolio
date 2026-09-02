import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";


// ============================================================
//                    EASY SETTINGS
// ============================================================

// ---------- CAR ----------
const CAR_ROTATION_X = 0;
const CAR_ROTATION_Y = 45;   // ← MAIN CAR ROTATION
const CAR_ROTATION_Z = 0;

const CAR_SCALE = 7.7;

const CAR_POSITION_X = -0.42;
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


// ---------- MATERIAL ----------
const CAR_COLOR = "#8f9193";

const CAR_METALNESS = 0.85;

// LOWER = shinier
// HIGHER = more matte
const CAR_ROUGHNESS = 0.2;


// ---------- LIGHTING ----------
const AMBIENT_INTENSITY = 1.3;

const FRONT_LIGHT_INTENSITY = 5;
const SIDE_LIGHT_INTENSITY = 3;
const BACK_LIGHT_INTENSITY = 3;


// ---------- MOUSE MOVEMENT ----------
const ENABLE_MOUSE_ROTATION = true;

// How far the car can rotate when moving mouse
const MOUSE_ROTATION_AMOUNT = 8;

// Higher = faster/snappier
const MOUSE_SMOOTHNESS = 0.04;


// ============================================================
//                         SCENE
// ============================================================

const scene = new THREE.Scene();


// ============================================================
//                         CAMERA
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

// --------------------------------
// BLENDER-STYLE GRID
// --------------------------------

const grid = new THREE.GridHelper(
    50,         // Overall grid size
    50,         // Number of squares
    0x666666,   // Center lines
    0x555555    // Normal grid lines
);

// Move grid vertically
grid.position.y = -0.5;

// Make it subtle
grid.material.transparent = true;
grid.material.opacity = 0.35;

scene.add(grid);


// ============================================================
//                        RENDERER
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

renderer.outputColorSpace =
    THREE.SRGBColorSpace;

renderer.toneMapping =
    THREE.ACESFilmicToneMapping;

renderer.toneMappingExposure = 1.1;


const container =
    document.getElementById("car-container");

container.appendChild(
    renderer.domElement
);


// ============================================================
//                         LIGHTS
// ============================================================

// ---------- AMBIENT ----------

const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        AMBIENT_INTENSITY
    );

scene.add(ambientLight);


// ---------- FRONT / TOP ----------

const frontLight =
    new THREE.DirectionalLight(
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

const sideLight =
    new THREE.DirectionalLight(
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

const backLight =
    new THREE.DirectionalLight(
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
//                         MATERIAL
// ============================================================

const carMaterial =
    new THREE.MeshStandardMaterial({

        color:
            new THREE.Color(CAR_COLOR),

        metalness:
            CAR_METALNESS,

        roughness:
            CAR_ROUGHNESS

    });


// ============================================================
//                        LOAD CAR
// ============================================================

let car;

const loader =
    new GLTFLoader();


loader.load(

    "models/car.glb",

    function (gltf) {

        car = gltf.scene;

        scene.add(car);


        // ----------------------------------------------------
        // FIND MODEL SIZE
        // ----------------------------------------------------

        const box =
            new THREE.Box3()
                .setFromObject(car);


        const center =
            box.getCenter(
                new THREE.Vector3()
            );


        const size =
            box.getSize(
                new THREE.Vector3()
            );


        // ----------------------------------------------------
        // CENTER MODEL
        // ----------------------------------------------------

        car.position.x -= center.x;
        car.position.y -= center.y;
        car.position.z -= center.z;


        // ----------------------------------------------------
        // AUTOMATIC SCALE
        // ----------------------------------------------------

        const maxDimension =
            Math.max(
                size.x,
                size.y,
                size.z
            );


        const scale =
            CAR_SCALE / maxDimension;


        car.scale.setScalar(scale);


        // ----------------------------------------------------
        // CAR POSITION
        // ----------------------------------------------------

        car.position.x +=
            CAR_POSITION_X;

        car.position.y +=
            CAR_POSITION_Y;

        car.position.z +=
            CAR_POSITION_Z;


        // ----------------------------------------------------
        // CAR ROTATION
        // ----------------------------------------------------

        car.rotation.x =
            THREE.MathUtils.degToRad(
                CAR_ROTATION_X
            );

        car.rotation.y =
            THREE.MathUtils.degToRad(
                CAR_ROTATION_Y
            );

        car.rotation.z =
            THREE.MathUtils.degToRad(
                CAR_ROTATION_Z
            );


        // ----------------------------------------------------
        // APPLY MATERIAL
        // ----------------------------------------------------

        car.traverse(function (object) {

            if (object.isMesh) {

                object.material =
                    carMaterial.clone();

            }

        });


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
//                    MOUSE MOVEMENT
// ============================================================

let mouseX = 0;


window.addEventListener(
    "mousemove",
    function (event) {

        mouseX =
            (event.clientX /
                window.innerWidth)
            * 2 - 1;

    }
);


// ============================================================
//                       ANIMATION
// ============================================================

function animate() {

    requestAnimationFrame(animate);


    if (car) {

        // Base rotation from settings
        const baseRotation =
            THREE.MathUtils.degToRad(
                CAR_ROTATION_Y
            );


        if (ENABLE_MOUSE_ROTATION) {

            const mouseRotation =
                THREE.MathUtils.degToRad(
                    mouseX *
                    MOUSE_ROTATION_AMOUNT
                );


            const targetRotation =
                baseRotation +
                mouseRotation;


            // Smoothly rotate toward target
            car.rotation.y +=
                (
                    targetRotation -
                    car.rotation.y
                )
                * MOUSE_SMOOTHNESS;

        }

    }


    renderer.render(
        scene,
        camera
    );

}

animate();


// ============================================================
//                         RESIZE
// ============================================================

window.addEventListener(
    "resize",
    function () {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);