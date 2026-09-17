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


// ============================================================
// CAR MATERIAL
// ============================================================

const LIGHT_CAR_COLOR = "#8f9193";
const DARK_CAR_COLOR = "#080808";

const CAR_METALNESS = 0.9;
const CAR_ROUGHNESS = 0.25;


// ============================================================
// WIREFRAME
// ============================================================

const LIGHT_WIREFRAME_COLOR = "#333232";
const LIGHT_WIREFRAME_OPACITY = 0.75;

const DARK_WIREFRAME_COLOR = "#000000";
const DARK_WIREFRAME_OPACITY = 0.75;


// ============================================================
// LIGHTING
// ============================================================

const AMBIENT_INTENSITY = 3;

const FRONT_LIGHT_INTENSITY = 5;
const SIDE_LIGHT_INTENSITY = 10;
const BACK_LIGHT_INTENSITY = 2;


// ============================================================
// MOUSE MOVEMENT
// ============================================================

const ENABLE_MOUSE_ROTATION = true;

const MOUSE_ROTATION_AMOUNT = 8;
const MOUSE_SMOOTHNESS = 0.04;


// ============================================================
// IDLE MOVEMENT
// ============================================================

// How many degrees the car travels during each idle sweep
const IDLE_SWEEP_ANGLE = 10;

// Maximum idle rotational speed
const IDLE_SPEED = 0.02;

// Wait after mouse stops before idle begins
const IDLE_WAIT = 1000;

// ACTUAL pause at each end
const IDLE_END_PAUSE = 0.5;

// Begin slowing down this many degrees before endpoint
const IDLE_EASE_DISTANCE = 1;

// How smoothly the car accelerates/decelerates
const IDLE_ACCELERATION = 0.04;

// How close we need to be to count as reaching the end
const IDLE_END_THRESHOLD = 0.03;


// ============================================================
// VISIBLE LIGHT BEAM
// ============================================================

const BEAM_X = 0;
const BEAM_Y = 7.7;
const BEAM_Z = 0;

const BEAM_HEIGHT = 9;
const BEAM_ANGLE = 18;

const LIGHT_BEAM_OPACITY = 0.2;
const DARK_BEAM_OPACITY = 0.05;

const BEAM_COLOR = 0xffffff;


// ============================================================
// COMPONENT
// ============================================================

function Car({ darkMode }) {

    const containerRef = useRef(null);

    const darkModeRef = useRef(darkMode);

    const carRef = useRef(null);
    const wireframeCarRef = useRef(null);
    const beamMaterialRef = useRef(null);


    // ============================================================
    // UPDATE DARK / LIGHT MODE
    // ============================================================

    useEffect(function () {

        darkModeRef.current = darkMode;


        // ========================================================
        // SOLID CAR
        // ========================================================

        const car = carRef.current;

        if (car) {

            car.traverse(function (object) {

                if (!object.isMesh) {
                    return;
                }


                if (darkMode) {

                    object.material.color.set(
                        DARK_CAR_COLOR
                    );

                } else {

                    object.material.color.set(
                        LIGHT_CAR_COLOR
                    );

                }

            });

        }


        // ========================================================
        // WIREFRAME CAR
        // ========================================================

        const wireframeCar =
            wireframeCarRef.current;


        if (wireframeCar) {

            wireframeCar.traverse(function (object) {

                if (!object.isMesh) {
                    return;
                }


                if (darkMode) {

                    object.material.color.set(
                        DARK_WIREFRAME_COLOR
                    );

                    object.material.opacity =
                        DARK_WIREFRAME_OPACITY;

                } else {

                    object.material.color.set(
                        LIGHT_WIREFRAME_COLOR
                    );

                    object.material.opacity =
                        LIGHT_WIREFRAME_OPACITY;

                }

            });

        }


        // ========================================================
        // LIGHT BEAM
        // ========================================================

        const beamMaterial =
            beamMaterialRef.current;


        if (beamMaterial) {

            beamMaterial.opacity =
                darkMode
                    ? DARK_BEAM_OPACITY
                    : LIGHT_BEAM_OPACITY;

        }

    }, [darkMode]);


    // ============================================================
    // THREE.JS SETUP
    // ============================================================

    useEffect(function () {

        const container =
            containerRef.current;


        const highlightElement =
            document.querySelector(
                ".highlight"
            );


        // ========================================================
        // SCENE
        // ========================================================

        const scene =
            new THREE.Scene();


        // ========================================================
        // CAMERA
        // ========================================================

        const camera =
            new THREE.PerspectiveCamera(
                35,
                container.clientWidth / container.clientHeight,
                0.1,
                1000
            );


        camera.setFocalLength(
            CAMERA_FOCAL_LENGTH
        );


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


        // ========================================================
        // GRID
        // ========================================================

        const grid =
            new THREE.GridHelper(
                50,
                50,
                0x666666,
                0x555555
            );


        grid.position.y =
            -0.5;


        grid.material.transparent =
            true;


        grid.material.opacity =
            0.35;


        scene.add(
            grid
        );


        // ========================================================
        // RENDERER
        // ========================================================

        const renderer =
            new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });


        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                2
            )
        );


        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );


        renderer.outputColorSpace =
            THREE.SRGBColorSpace;


        renderer.toneMapping =
            THREE.ACESFilmicToneMapping;


        renderer.toneMappingExposure =
            1.1;


        container.appendChild(
            renderer.domElement
        );


        // ========================================================
        // LIGHTS
        // ========================================================


        // ---------- AMBIENT ----------

        const ambientLight =
            new THREE.AmbientLight(
                0xffffff,
                AMBIENT_INTENSITY
            );


        scene.add(
            ambientLight
        );


        // ---------- FRONT ----------

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


        scene.add(
            frontLight
        );


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


        scene.add(
            sideLight
        );


        // ---------- BACK ----------

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


        scene.add(
            backLight
        );


        // ========================================================
        // VISIBLE LIGHT BEAM
        // ========================================================

        const beamRadius =
            Math.tan(
                THREE.MathUtils.degToRad(
                    BEAM_ANGLE
                )
            ) *
            BEAM_HEIGHT;


        const beamGeometry =
            new THREE.ConeGeometry(
                beamRadius,
                BEAM_HEIGHT,
                64,
                1,
                true
            );


        const beamMaterial =
            new THREE.MeshBasicMaterial({

                color:
                    BEAM_COLOR,

                transparent:
                    true,

                opacity:
                    LIGHT_BEAM_OPACITY,

                side:
                    THREE.DoubleSide,

                depthWrite:
                    false,

                blending:
                    THREE.AdditiveBlending

            });


        beamMaterialRef.current =
            beamMaterial;


        const lightBeam =
            new THREE.Mesh(
                beamGeometry,
                beamMaterial
            );


        lightBeam.position.set(
            BEAM_X,
            BEAM_Y -
                BEAM_HEIGHT / 2,
            BEAM_Z
        );


        scene.add(
            lightBeam
        );


        // ========================================================
        // MATERIALS
        // ========================================================


        // ---------- SOLID ----------

        const carMaterial =
            new THREE.MeshStandardMaterial({

                color:
                    new THREE.Color(
                        LIGHT_CAR_COLOR
                    ),

                metalness:
                    CAR_METALNESS,

                roughness:
                    CAR_ROUGHNESS

            });


        // ---------- WIREFRAME ----------

        const wireframeMaterial =
            new THREE.MeshBasicMaterial({

                color:
                    LIGHT_WIREFRAME_COLOR,

                wireframe:
                    true,

                transparent:
                    true,

                opacity:
                    LIGHT_WIREFRAME_OPACITY

            });


        // ========================================================
        // CAR VARIABLES
        // ========================================================

        let car =
            null;


        let wireframeCar =
            null;


        // ========================================================
        // LOAD CAR
        // ========================================================

        const loader =
            new GLTFLoader();


        loader.load(

            `${import.meta.env.BASE_URL}models/car.glb`,


            function (gltf) {

                car =
                    gltf.scene;


                carRef.current =
                    car;


                scene.add(
                    car
                );


                // =================================================
                // FIND MODEL SIZE
                // =================================================

                const box =
                    new THREE.Box3()
                        .setFromObject(
                            car
                        );


                const center =
                    box.getCenter(
                        new THREE.Vector3()
                    );


                const size =
                    box.getSize(
                        new THREE.Vector3()
                    );


                // =================================================
                // CENTER MODEL
                // =================================================

                car.position.x -=
                    center.x;


                car.position.y -=
                    center.y;


                car.position.z -=
                    center.z;


                // =================================================
                // SCALE
                // =================================================

                const maxDimension =
                    Math.max(
                        size.x,
                        size.y,
                        size.z
                    );


                const scale =
                    CAR_SCALE /
                    maxDimension;


                car.scale.setScalar(
                    scale
                );


                // =================================================
                // POSITION
                // =================================================

                car.position.x +=
                    CAR_POSITION_X;


                car.position.y +=
                    CAR_POSITION_Y;


                car.position.z +=
                    CAR_POSITION_Z;


                // =================================================
                // ROTATION
                // =================================================

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


                // =================================================
                // SOLID MATERIAL
                // =================================================

                car.traverse(
                    function (object) {

                        if (
                            object.isMesh
                        ) {

                            object.material =
                                carMaterial.clone();

                        }

                    }
                );


                // =================================================
                // WIREFRAME COPY
                // =================================================

                wireframeCar =
                    car.clone(
                        true
                    );


                wireframeCar.traverse(
                    function (object) {

                        if (
                            object.isMesh
                        ) {

                            object.material =
                                wireframeMaterial.clone();

                        }

                    }
                );


                wireframeCar.visible =
                    false;


                wireframeCarRef.current =
                    wireframeCar;


                scene.add(
                    wireframeCar
                );


                // =================================================
                // CURRENT THEME
                // =================================================

                if (
                    darkModeRef.current
                ) {

                    car.traverse(
                        function (object) {

                            if (
                                object.isMesh
                            ) {

                                object.material.color.set(
                                    DARK_CAR_COLOR
                                );

                            }

                        }
                    );


                    wireframeCar.traverse(
                        function (object) {

                            if (
                                object.isMesh
                            ) {

                                object.material.color.set(
                                    DARK_WIREFRAME_COLOR
                                );


                                object.material.opacity =
                                    DARK_WIREFRAME_OPACITY;

                            }

                        }
                    );


                    beamMaterial.opacity =
                        DARK_BEAM_OPACITY;

                } else {

                    car.traverse(
                        function (object) {

                            if (
                                object.isMesh
                            ) {

                                object.material.color.set(
                                    LIGHT_CAR_COLOR
                                );

                            }

                        }
                    );


                    wireframeCar.traverse(
                        function (object) {

                            if (
                                object.isMesh
                            ) {

                                object.material.color.set(
                                    LIGHT_WIREFRAME_COLOR
                                );


                                object.material.opacity =
                                    LIGHT_WIREFRAME_OPACITY;

                            }

                        }
                    );


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


        // ========================================================
        // MOUSE + IDLE VARIABLES
        // ========================================================

        let mouseX =
            0;


        let lastMouseMoveTime =
            performance.now();


        let idleActive =
            false;


        /*
            1  = rotating right
            -1 = rotating left
        */

        let idleDirection =
            1;


        /*
            Exact angle we're currently
            travelling toward.
        */

        let idleTargetRotation =
            0;


        /*
            "moving"
            "paused"
        */

        let idleState =
            "moving";


        /*
            Timestamp when endpoint
            pause started.
        */

        let idlePauseStart =
            0;


        /*
            Current rotational velocity.
            Starts at zero so movement
            can accelerate smoothly.
        */

        let idleVelocity =
            0;


        /*
            Used so movement behaves
            consistently at different FPS.
        */

        let previousTime =
            performance.now();


        // ========================================================
        // MOUSE
        // ========================================================

        function handleMouseMove(
            event
        ) {

            mouseX =
                (
                    event.clientX /
                    window.innerWidth
                )
                *
                2 -
                1;


            lastMouseMoveTime =
                performance.now();


            /*
                Immediately cancel idle.

                IMPORTANT:
                We DON'T change car.rotation.y.

                That means the mouse takes over
                from exactly wherever the car is.
            */

            idleActive =
                false;


            idleState =
                "moving";


            idleVelocity =
                0;

        }


        window.addEventListener(
            "mousemove",
            handleMouseMove
        );


        // ========================================================
        // HIGHLIGHT SCISSOR
        // ========================================================

        function getHighlightScissor() {

            if (
                !highlightElement
            ) {

                return null;

            }


            const rect =
                highlightElement
                    .getBoundingClientRect();


            const canvasRect =
                renderer.domElement
                    .getBoundingClientRect();


            const x =
                rect.left -
                canvasRect.left;


            const y =
                canvasRect.bottom -
                rect.bottom;


            return {

                x:
                    Math.round(
                        x
                    ),

                y:
                    Math.round(
                        y
                    ),

                width:
                    Math.round(
                        rect.width
                    ),

                height:
                    Math.round(
                        rect.height
                    )

            };

        }


        // ========================================================
        // ANIMATION
        // ========================================================

        let animationFrameId;


        function animate() {

            animationFrameId =
                requestAnimationFrame(
                    animate
                );


            const currentTime =
                performance.now();


            // ====================================================
            // DELTA TIME
            // ====================================================

            const deltaTime =
                Math.min(
                    (
                        currentTime -
                        previousTime
                    ) /
                    1000,
                    0.05
                );


            previousTime =
                currentTime;


            // ====================================================
            // CAR ROTATION
            // ====================================================

            if (car) {

                const baseRotation =
                    THREE.MathUtils.degToRad(
                        CAR_ROTATION_Y
                    );


                const timeSinceMouseMove =
                    currentTime -
                    lastMouseMoveTime;


                // =================================================
                // MOUSE CONTROL
                // =================================================

                if (
                    ENABLE_MOUSE_ROTATION &&
                    timeSinceMouseMove <
                        IDLE_WAIT
                ) {

                    /*
                        Mouse has COMPLETE control.

                        Idle isn't calculated at all
                        while we're in here.
                    */

                    idleActive =
                        false;


                    idleState =
                        "moving";


                    idleVelocity =
                        0;


                    const mouseRotation =
                        THREE.MathUtils.degToRad(
                            mouseX *
                            MOUSE_ROTATION_AMOUNT
                        );


                    const targetRotation =
                        baseRotation +
                        mouseRotation;


                    car.rotation.y +=
                        (
                            targetRotation -
                            car.rotation.y
                        )
                        *
                        MOUSE_SMOOTHNESS;

                }


                // =================================================
                // IDLE CONTROL
                // =================================================

                else {

                    // =============================================
                    // IDLE JUST STARTED
                    // =============================================

                    if (
                        !idleActive
                    ) {

                        idleActive =
                            true;


                        idleState =
                            "moving";


                        idleVelocity =
                            0;


                        /*
                            VERY IMPORTANT:

                            car.rotation.y is NOT changed here.

                            So if the mouse left the car at:

                                57.8 degrees

                            idle starts at:

                                57.8 degrees

                            No clipping.
                            No snapping.
                            No teleport.
                        */


                        /*
                            Choose which direction to
                            initially move.

                            If mouse left us to the
                            right of center, move left.

                            If mouse left us to the
                            left of center, move right.
                        */

                        if (
                            car.rotation.y >=
                            baseRotation
                        ) {

                            idleDirection =
                                -1;

                        } else {

                            idleDirection =
                                1;

                        }


                        /*
                            The first target is relative
                            to WHERE WE CURRENTLY ARE.

                            Not relative to the base angle.
                        */

                        idleTargetRotation =
                            car.rotation.y +
                            THREE.MathUtils.degToRad(
                                IDLE_SWEEP_ANGLE *
                                idleDirection
                            );

                    }


                    // =============================================
                    // PAUSED AT END
                    // =============================================

                    if (
                        idleState ===
                        "paused"
                    ) {

                        /*
                            DO NOT MODIFY ROTATION.

                            The car literally stays
                            completely stationary here.
                        */


                        const pauseTime =
                            currentTime -
                            idlePauseStart;


                        if (
                            pauseTime >=
                            IDLE_END_PAUSE
                        ) {

                            /*
                                Pause is over.

                                Reverse direction.
                            */

                            idleDirection *=
                                -1;


                            /*
                                Start the NEXT sweep from
                                exactly where we're currently
                                sitting.
                            */

                            idleTargetRotation =
                                car.rotation.y +
                                THREE.MathUtils.degToRad(
                                    IDLE_SWEEP_ANGLE *
                                    idleDirection
                                );


                            /*
                                Start from zero velocity.

                                This means it smoothly
                                accelerates away from
                                the endpoint.
                            */

                            idleVelocity =
                                0;


                            idleState =
                                "moving";

                        }

                    }


                    // =============================================
                    // MOVING
                    // =============================================

                    else if (
                        idleState ===
                        "moving"
                    ) {

                        const distance =
                            idleTargetRotation -
                            car.rotation.y;


                        const absoluteDistance =
                            Math.abs(
                                distance
                            );


                        const threshold =
                            THREE.MathUtils.degToRad(
                                IDLE_END_THRESHOLD
                            );


                        // =========================================
                        // WE REACHED THE END
                        // =========================================

                        if (
                            absoluteDistance <=
                            threshold
                        ) {

                            /*
                                Finish the tiny remaining
                                distance exactly.
                            */

                            car.rotation.y =
                                idleTargetRotation;


                            idleVelocity =
                                0;


                            /*
                                ENTER PAUSED STATE.
                            */

                            idleState =
                                "paused";


                            /*
                                Start the pause clock NOW.
                            */

                            idlePauseStart =
                                currentTime;

                        }


                        // =========================================
                        // STILL MOVING
                        // =========================================

                        else {

                            const easeDistance =
                                THREE.MathUtils.degToRad(
                                    IDLE_EASE_DISTANCE
                                );


                            /*
                                1 when far from endpoint.

                                Approaches 0 as we get
                                close to endpoint.
                            */

                            let speedMultiplier =
                                THREE.MathUtils.clamp(
                                    absoluteDistance /
                                    easeDistance,
                                    0,
                                    1
                                );


                            /*
                                Smoothstep curve.

                                Makes the slowdown less
                                mechanical.
                            */

                            speedMultiplier =
                                speedMultiplier *
                                speedMultiplier *
                                (
                                    3 -
                                    2 *
                                    speedMultiplier
                                );


                            const maxSpeed =
                                THREE.MathUtils.degToRad(
                                    IDLE_SPEED
                                );


                            /*
                                Tiny minimum speed prevents
                                us from asymptotically never
                                reaching the endpoint.
                            */

                            const minimumSpeed =
                                maxSpeed *
                                0.08;


                            const desiredSpeed =
                                THREE.MathUtils.lerp(
                                    minimumSpeed,
                                    maxSpeed,
                                    speedMultiplier
                                );


                            const desiredVelocity =
                                desiredSpeed *
                                Math.sign(
                                    distance
                                );


                            // =====================================
                            // SMOOTH ACCELERATION
                            // =====================================

                            idleVelocity =
                                THREE.MathUtils.lerp(
                                    idleVelocity,
                                    desiredVelocity,
                                    IDLE_ACCELERATION
                                );


                            // =====================================
                            // CALCULATE THIS FRAME'S MOVEMENT
                            // =====================================

                            const movement =
                                idleVelocity *
                                deltaTime *
                                60;


                            // =====================================
                            // PREVENT OVERSHOOT
                            // =====================================

                            if (
                                Math.abs(
                                    movement
                                ) >=
                                absoluteDistance
                            ) {

                                car.rotation.y =
                                    idleTargetRotation;


                                idleVelocity =
                                    0;


                                idleState =
                                    "paused";


                                idlePauseStart =
                                    currentTime;

                            } else {

                                car.rotation.y +=
                                    movement;

                            }

                        }

                    }

                }


                // =================================================
                // WIREFRAME FOLLOWS SOLID CAR
                // =================================================

                if (
                    wireframeCar
                ) {

                    wireframeCar.rotation.copy(
                        car.rotation
                    );

                }

            }


            // ====================================================
            // PASS 1
            // SOLID CAR
            // ====================================================

            if (car) {

                car.visible =
                    true;

            }


            if (
                wireframeCar
            ) {

                wireframeCar.visible =
                    false;

            }


            renderer.setScissorTest(
                false
            );


            renderer.render(
                scene,
                camera
            );


            // ====================================================
            // WAIT UNTIL EVERYTHING EXISTS
            // ====================================================

            if (
                !car ||
                !wireframeCar ||
                !highlightElement
            ) {

                return;

            }


            // ====================================================
            // HIGHLIGHT
            // ====================================================

            const scissor =
                getHighlightScissor();


            if (
                !scissor
            ) {

                return;

            }


            // ====================================================
            // PASS 2
            // WIREFRAME INSIDE HIGHLIGHT
            // ====================================================

            car.visible =
                false;


            wireframeCar.visible =
                true;


            renderer.setScissorTest(
                true
            );


            renderer.setScissor(
                scissor.x,
                scissor.y,
                scissor.width,
                scissor.height
            );


            renderer.autoClear =
                false;


            renderer.clearDepth();


            renderer.render(
                scene,
                camera
            );


            // ====================================================
            // RESET
            // ====================================================

            renderer.autoClear =
                true;


            renderer.setScissorTest(
                false
            );


            car.visible =
                true;


            wireframeCar.visible =
                false;

        }


        animate();


        // ========================================================
        // RESIZE
        // ========================================================

        function handleResize() {

            camera.aspect =
                container.clientWidth /
                container.clientHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(
                container.clientWidth,
                container.clientHeight
            );
        }


        window.addEventListener(
            "resize",
            handleResize
        );


        // ========================================================
        // CLEANUP
        // ========================================================

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


            carRef.current =
                null;


            wireframeCarRef.current =
                null;


            beamMaterialRef.current =
                null;


            if (
                renderer.domElement
                    .parentNode
            ) {

                renderer.domElement
                    .parentNode
                    .removeChild(
                        renderer.domElement
                    );

            }

        };

    }, []);


    // ============================================================
    // JSX
    // ============================================================

    return (
        <div
            ref={containerRef}
            id="car-container"
        ></div>
    );

}


export default Car;