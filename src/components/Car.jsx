import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import "./Car.css";


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

const CAR_METALNESS = 0.9;
const CAR_ROUGHNESS = 0.25;


// ---------- LIGHTING ----------

const AMBIENT_INTENSITY = 3;

const FRONT_LIGHT_INTENSITY = 5;
const SIDE_LIGHT_INTENSITY = 10;
const BACK_LIGHT_INTENSITY = 2;


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


// ---------- WIREFRAME ----------

const DARK_WIREFRAME_COLOR = "#000000";
const DARK_WIREFRAME_OPACITY = 0.75;


// ============================================================
// COMPONENT
// ============================================================

function Car({ darkMode }) {

    const containerRef = useRef(null);

    const darkModeRef = useRef(darkMode);

    const carRef = useRef(null);
    const beamMaterialRef = useRef(null);


    // ============================================================
    // UPDATE THREE.JS WHEN REACT DARK MODE CHANGES
    // ============================================================

    useEffect(function () {

        darkModeRef.current = darkMode;


        // ---------- CAR COLOR ----------

        const car = carRef.current;

        if (car) {

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

        }


        // ---------- BEAM OPACITY ----------

        const beamMaterial = beamMaterialRef.current;

        if (beamMaterial) {

            if (darkMode) {
                beamMaterial.opacity = DARK_BEAM_OPACITY;
            } else {
                beamMaterial.opacity = LIGHT_BEAM_OPACITY;
            }

        }

    }, [darkMode]);


    // ============================================================
    // THREE.JS SETUP
    // ============================================================

    useEffect(function () {

        const container = containerRef.current;

        const highlightElement =
            document.querySelector(".highlight");


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
        // GRID
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

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        renderer.outputColorSpace = THREE.SRGBColorSpace;

        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;

        container.appendChild(renderer.domElement);


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


        // ---------- BACK ----------

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
        // VISIBLE LIGHT BEAM
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

        beamMaterialRef.current = beamMaterial;

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
        // MATERIALS
        // ============================================================

        const carMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color(CAR_COLOR),
            metalness: CAR_METALNESS,
            roughness: CAR_ROUGHNESS
        });

        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: DARK_WIREFRAME_COLOR,
            wireframe: true,
            transparent: true,
            opacity: DARK_WIREFRAME_OPACITY
        });


        // ============================================================
        // LOAD CAR
        // ============================================================

        let car = null;
        let wireframeCar = null;

        const loader = new GLTFLoader();

        loader.load(
            `${import.meta.env.BASE_URL}models/car.glb`,

            function (gltf) {

                car = gltf.scene;

                carRef.current = car;

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

                const scale =
                    CAR_SCALE / maxDimension;

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
                // APPLY SOLID MATERIAL
                // ----------------------------------------------------

                car.traverse(function (object) {

                    if (object.isMesh) {
                        object.material =
                            carMaterial.clone();
                    }

                });


                // ----------------------------------------------------
                // CREATE WIREFRAME COPY
                // ----------------------------------------------------

                wireframeCar = car.clone(true);

                wireframeCar.traverse(function (object) {

                    if (object.isMesh) {
                        object.material =
                            wireframeMaterial.clone();
                    }

                });

                wireframeCar.visible = false;

                scene.add(wireframeCar);


                // ----------------------------------------------------
                // APPLY CURRENT DARK MODE
                // ----------------------------------------------------

                if (darkModeRef.current) {

                    car.traverse(function (object) {

                        if (object.isMesh) {
                            object.material.color.set(
                                DARK_CAR_COLOR
                            );
                        }

                    });

                    beamMaterial.opacity =
                        DARK_BEAM_OPACITY;

                } else {

                    beamMaterial.opacity =
                        LIGHT_BEAM_OPACITY;

                }

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
        // MOUSE MOVEMENT
        // ============================================================

        let mouseX = 0;

        function handleMouseMove(event) {

            mouseX =
                (event.clientX / window.innerWidth)
                * 2 - 1;

        }

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );


        // ============================================================
        // ANIMATION
        // ============================================================

        let animationFrameId;

        function animate() {

            animationFrameId =
                requestAnimationFrame(animate);


            // --------------------------------------------------------
            // MOUSE ROTATION
            // --------------------------------------------------------

            if (car) {

                const baseRotation =
                    THREE.MathUtils.degToRad(
                        CAR_ROTATION_Y
                    );

                if (ENABLE_MOUSE_ROTATION) {

                    const mouseRotation =
                        THREE.MathUtils.degToRad(
                            mouseX
                            * MOUSE_ROTATION_AMOUNT
                        );

                    const targetRotation =
                        baseRotation + mouseRotation;

                    car.rotation.y +=
                        (
                            targetRotation
                            - car.rotation.y
                        )
                        * MOUSE_SMOOTHNESS;

                }


                // ----------------------------------------------------
                // KEEP WIREFRAME MATCHED TO CAR
                // ----------------------------------------------------

                if (wireframeCar) {

                    wireframeCar.rotation.x =
                        car.rotation.x;

                    wireframeCar.rotation.y =
                        car.rotation.y;

                    wireframeCar.rotation.z =
                        car.rotation.z;

                }

            }


            // ========================================================
            // LIGHT MODE
            // ========================================================

            const isDarkMode =
                darkModeRef.current;

            if (!isDarkMode) {

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


            // ========================================================
            // DARK MODE - NORMAL CAR PASS
            // ========================================================

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
            // IF WIREFRAME ISN'T READY YET, STOP HERE
            // --------------------------------------------------------

            if (
                !car ||
                !wireframeCar ||
                !highlightElement
            ) {
                return;
            }


            // ========================================================
            // FIND HIGHLIGHT RECTANGLE
            // ========================================================

            const rect =
                highlightElement.getBoundingClientRect();

            const canvasRect =
                renderer.domElement.getBoundingClientRect();

            const x =
                rect.left - canvasRect.left;

            const y =
                canvasRect.bottom - rect.bottom;

            const width =
                rect.width;

            const height =
                rect.height;


            // ========================================================
            // DARK MODE - WIREFRAME PASS
            // ========================================================

            car.visible = false;
            wireframeCar.visible = true;

            renderer.setScissorTest(true);

            renderer.setScissor(
                Math.round(x),
                Math.round(y),
                Math.round(width),
                Math.round(height)
            );

            renderer.autoClear = false;

            renderer.clearDepth();

            renderer.render(
                scene,
                camera
            );


            // --------------------------------------------------------
            // RESET
            // --------------------------------------------------------

            renderer.autoClear = true;

            renderer.setScissorTest(false);

            car.visible = true;
            wireframeCar.visible = false;

        }

        animate();


        // ============================================================
        // RESIZE
        // ============================================================

        function handleResize() {

            camera.aspect =
                window.innerWidth
                / window.innerHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );

        }

        window.addEventListener(
            "resize",
            handleResize
        );


        // ============================================================
        // CLEANUP
        // ============================================================

        return function () {

            cancelAnimationFrame(
                animationFrameId
            );

            window.removeEventListener(
                "resize",
                handleResize
            );

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            beamGeometry.dispose();
            beamMaterial.dispose();

            carMaterial.dispose();
            wireframeMaterial.dispose();

            renderer.dispose();

            carRef.current = null;
            beamMaterialRef.current = null;

            if (renderer.domElement.parentNode) {

                renderer.domElement.parentNode.removeChild(
                    renderer.domElement
                );

            }

        };

    }, []);


    return (
        <div
            ref={containerRef}
            id="car-container"
        ></div>
    );

}

export default Car;