/* =====================================================
   PREMIUM BIRTHDAY EXPERIENCE
   FOR OM ❤️
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const scenes = document.querySelectorAll(".scene");

const nextButton = document.getElementById("nextButton");

const music = document.getElementById("music");

const currentNumber =
    document.getElementById("currentNumber");

const progressFill =
    document.getElementById("progressFill");

const musicIndicator =
    document.getElementById("musicIndicator");


/* =====================================================
   STATE
===================================================== */

let currentScene = 0;

const totalScenes = scenes.length;

let musicStarted = false;


/* =====================================================
   MUSIC
===================================================== */

function startMusic() {

    if (!music || musicStarted) {
        return;
    }

    music.volume = 0.65;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise
            .then(function () {

                musicStarted = true;

                if (musicIndicator) {
                    musicIndicator.classList.add("playing");
                }

            })
            .catch(function () {

                console.log(
                    "Music will start after user interaction."
                );

            });

    }

}


/* =====================================================
   UPDATE UI
===================================================== */

function updateUI() {

    const number =
        String(currentScene + 1).padStart(2, "0");

    if (currentNumber) {

        currentNumber.textContent = number;

    }


    if (progressFill) {

        const percentage =
            ((currentScene + 1) / totalScenes) * 100;

        progressFill.style.width =
            percentage + "%";

    }

}


/* =====================================================
   CHANGE SCENE
===================================================== */

function goToScene(newScene) {

    if (
        newScene < 0 ||
        newScene >= totalScenes
    ) {
        return;
    }


    scenes.forEach(function (scene) {

        scene.classList.remove("active");

    });


    currentScene = newScene;


    scenes[currentScene]
        .classList
        .add("active");


    updateUI();


    runSceneEffect(currentScene);

}


/* =====================================================
   NEXT
===================================================== */

function nextScene() {

    startMusic();


    if (currentScene < totalScenes - 1) {

        goToScene(currentScene + 1);

    }

    else {

        /*
         * Final scene:
         * restart from beginning if clicked again
         */

        goToScene(0);

    }

}


/* =====================================================
   BUTTON
===================================================== */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextScene
    );

}


/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "ArrowRight" ||
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            nextScene();

        }

    }
);


/* =====================================================
   TOUCH SWIPE
===================================================== */

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "touchstart",
    function (event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    function (event) {

        touchEndX =
            event.changedTouches[0].screenX;

        const difference =
            touchStartX - touchEndX;


        /*
         * Swipe left = next scene
         */

        if (difference > 60) {

            nextScene();

        }

    },
    {
        passive: true
    }
);


/* =====================================================
   SCENE EFFECTS
===================================================== */

function runSceneEffect(sceneNumber) {

    switch (sceneNumber) {

        case 0:

            introEffect();

            break;


        case 1:

            djEffect();

            break;


        case 2:

            lightningEffect();

            break;


        case 3:

            laserEffect();

            break;


        case 4:

            bassEffect();

            break;


        case 5:

            memoryEffect(
                scenes[5]
            );

            break;


        case 6:

            memoryEffect(
                scenes[6]
            );

            break;


        case 7:

            finalEffect();

            break;

    }

}


/* =====================================================
   INTRO EFFECT
===================================================== */

function introEffect() {

    const title =
        document.querySelector(
            ".scene-1 .hero-title"
        );


    if (!title) {
        return;
    }


    title.animate(
        [
            {
                opacity: 0,
                transform:
                    "translateY(30px)"
            },

            {
                opacity: 1,
                transform:
                    "translateY(0)"
            }
        ],
        {
            duration: 1200,
            easing:
                "cubic-bezier(.2,.8,.2,1)"
        }
    );

}


/* =====================================================
   DJ EFFECT
===================================================== */

function djEffect() {

    const machine =
        document.querySelector(
            ".scene-2 .dj-machine"
        );


    if (!machine) {
        return;
    }


    machine.animate(
        [
            {
                transform:
                    "scale(.92)"
            },

            {
                transform:
                    "scale(1.02)"
            },

            {
                transform:
                    "scale(1)"
            }

        ],
        {
            duration: 700,
            easing: "ease-out"
        }
    );

}


/* =====================================================
   LIGHTNING EFFECT
===================================================== */

function lightningEffect() {

    const scene =
        document.querySelector(
            ".scene-3"
        );


    if (!scene) {
        return;
    }


    let flashes = 0;


    const lightningTimer =
        setInterval(
            function () {

                if (
                    !scene.classList.contains(
                        "active"
                    )
                ) {

                    clearInterval(
                        lightningTimer
                    );

                    return;

                }


                scene.animate(
                    [
                        {
                            filter:
                                "brightness(1)"
                        },

                        {
                            filter:
                                "brightness(2.5)"
                        },

                        {
                            filter:
                                "brightness(1)"
                        }
                    ],
                    {
                        duration: 180
                    }
                );


                flashes++;


                if (flashes >= 8) {

                    clearInterval(
                        lightningTimer
                    );

                }

            },
            650
        );

}


/* =====================================================
   LASER EFFECT
===================================================== */

function laserEffect() {

    const beams =
        document.querySelectorAll(
            ".scene-4 .laser-beam"
        );


    beams.forEach(
        function (beam, index) {

            beam.animate(
                [
                    {
                        opacity: .25
                    },

                    {
                        opacity: 1
                    },

                    {
                        opacity: .5
                    }
                ],
                {
                    duration: 700,
                    delay:
                        index * 70,
                    iterations: 4
                }
            );

        }
    );

}


/* =====================================================
   BASS EFFECT
===================================================== */

function bassEffect() {

    const scene =
        document.querySelector(
            ".scene-5"
        );


    if (!scene) {
        return;
    }


    scene.animate(
        [
            {
                transform:
                    "scale(1)"
            },

            {
                transform:
                    "scale(1.025)"
            },

            {
                transform:
                    "scale(1)"
            }
        ],
        {
            duration: 450,
            iterations: 5
        }
    );

}


/* =====================================================
   MEMORY EFFECT
===================================================== */

function memoryEffect(scene) {

    if (!scene) {
        return;
    }


    const photos =
        scene.querySelectorAll(
            ".photo-frame"
        );


    photos.forEach(
        function (photo, index) {

            photo.animate(
                [
                    {
                        opacity: 0,

                        transform:
                            "translateY(80px) scale(.94)"
                    },

                    {
                        opacity: 1,

                        transform:
                            "translateY(0) scale(1)"
                    }
                ],
                {
                    duration: 900,
                    delay:
                        index * 180,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)",

                    fill: "forwards"
                }
            );

        }
    );

}


/* =====================================================
   FINAL EFFECT
===================================================== */

function finalEffect() {

    const finalScene =
        document.querySelector(
            ".scene-8"
        );


    if (!finalScene) {
        return;
    }


    finalScene.animate(
        [
            {
                filter:
                    "brightness(.7)"
            },

            {
                filter:
                    "brightness(1.5)"
            },

            {
                filter:
                    "brightness(1)"
            }
        ],
        {
            duration: 1300,
            iterations: 2
        }
    );

}


/* =====================================================
   INITIALIZE
===================================================== */

goToScene(0);