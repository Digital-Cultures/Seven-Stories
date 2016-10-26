    (function() {
        'use strict';
        AFRAME.registerComponent('alongpath', {
            schema: {
                path: { default: '' },
                closed: { default: false },
                dur: { default: 1000 }
            },

            init: function() {
                var ent = this.el;
                var d = this.data;
                var points = d.path.split(' ').map(function(p) {
                    p = p.split(',');
                    return new THREE.Vector3(
                        parseFloat(p[0]),
                        parseFloat(p[1]),
                        parseFloat(p[2])
                    );
                });
                var ctor = d.closed ? 'ClosedSplineCurve3' : 'SplineCurve3';
                var curve = new THREE[ctor](points);

                var onFrame = function onFrame(t) {
                    window.requestAnimationFrame(onFrame);
                    t = t % d.dur;
                    var i = t / d.dur;

                    try {
                        var p = curve.getPoint(i);
                        ent.setAttribute('position', p);
                        //console.log(p);
                    } catch (ex) {}
                };

                onFrame();
            },

            update: function(oldData) {

            },

            remove: function() {}
        });

        AFRAME.registerComponent('cursor-listener', {
            init: function() {
                this.el.addEventListener('click', function() {
                    console.log(this);
                    var el = document.querySelector('#movingBook');
                    el.setAttribute('visible', false);
                });
            }
        });


        var musicLoaded, narrationLoaded, bangLoaded = false;

        var narrationPaused = false;

        function loadAudio(){
            var camera = document.querySelector("#camera");
            listener = new THREE.AudioListener();
            camera.components.camera.camera.add( listener );
            audioLoader = new THREE.AudioLoader();

            music = new Howl({
              src: ['sounds/Wounded.mp3'],
              volume: 0.5
            });

            // = new THREE.Audio( listener );
            // audioLoader.load( 'sounds/Wounded.mp3', function( buffer ) {
            //     music.setBuffer( buffer );
            //     music.setVolume(0.5);
            //     musicLoaded = true;
            //     showStartBtn();
            // });

            narration = new Howl({
              src: ['sounds/narration.mp3'],
              volume: 0.8,
              onload: showStartBtn
            });

           // narration = new THREE.Audio( listener );
           //  audioLoader.load( 'sounds/narration.mp3', function( buffer ) {
           //      narration.setBuffer( buffer );
           //      narration.setVolume(0.8);
           //      narrationLoaded = true;
                
           //  });

            bang = new Howl({
              src: ['sounds/Exploding-Sound.mp3'],
              volume: 0.2,
              loop: false
            });

            extras = new Howl({
              src: ['sounds/extras.mp3'],
              volume: 1,
              sprite: {
                dolls: [0, 7237],
                portraitChild: [7623, 9376],
                piggyback: [17369, 12255],
                darkRoom: [30010, 11387],
                handMadeBooks: [42072, 7527],
                cleverPolly: [50468, 7912],
                giant: [59635, 13606],
                mirror: [74399, 13895],
                robin: [88777, 12255],
                marrianne: [102093, 9166]
              }
            });
            extras.on('end',function(){
                timer.setAttribute('text', { text: "Look at items to hear more about them" });
                document.querySelector("#mirrorText").setAttribute('material',{visible:false});
                document.querySelector("#doublesText").setAttribute('material',{visible:false});
                document.querySelector("#portraitChildText").setAttribute('material',{visible:false});
                document.querySelector("#dollsClothsText").setAttribute('material',{visible:false});
                document.querySelector("#dolls2Text").setAttribute('material',{visible:false});
                document.querySelector("#booksText").setAttribute('material',{visible:false});
                document.querySelector('#lightMain').emit('lightOn');
            });

            // = new THREE.Audio( listener );
            // audioLoader.load( 'sounds/Exploding-Sound.mp3', function( buffer ) {
            //     bang.setBuffer( buffer );
            //     bang.setVolume(0.2);
            //     bangLoaded = true;
            //     showStartBtn();
            // });

        }

        function showStartBtn() {
            document.getElementById("startBtn").style.display = "block";
            document.getElementById("loading").style.display = "none";
            document.getElementById("startBtn").onclick = function() { run(); };
        }


        function audioIsPlaying(audioElem) {
            return !audioElem.paused;
        }

        function run() {
            var mirrorModel = document.querySelector("#mirrorModel");
            var doubles = document.querySelector("#doubles");
            var portraitChild = document.querySelector("#portraitChild");
            var dollsCloths = document.querySelector("#dollsCloths");
            var marrianneInBed = document.querySelector("#marrianneInBed");
            //var narration = document.querySelector("#narration");

            mirrorModel.addEventListener("stateadded", function(evt) {
                if (!narration.playing() && !extras.playing()){
                    //mirrorModel.setAttribute('scale', "4 4.1 4"); //scale="1 1 1"
                    if (evt.detail.state === "cursor-hovered") {
                        extras.play('mirror');
                        timer.setAttribute('text', { text: "" });
                        document.querySelector("#mirrorText").setAttribute('material',{visible:true});
                        document.querySelector('#lightMain').emit('lightOff');
                    }
                }
            });

            mirrorModel.addEventListener("stateremoved", function(evt) {
                mirrorModel.setAttribute('scale', "3 4 3"); //scale="0.2 0.2 0.2"
                if (evt.detail.state === "cursor-hovered") {
                    //narration.play();
                }
            });

            doubles.addEventListener("stateadded", function(evt) {
                if (!narration.playing() && !extras.playing()){
                    if (evt.detail.state === "cursor-hovered") {
                        extras.play('darkRoom');
                        timer.setAttribute('text', { text: "" });
                        document.querySelector("#doublesText").setAttribute('material',{visible:true});
                        document.querySelector('#lightMain').emit('lightOff');
                    }
                }
            });


            doubles.addEventListener("stateremoved", function(evt) {
                if (evt.detail.state === "cursor-hovered") {
                    //narration.play();
                }
            });

            portraitChild.addEventListener("stateadded", function(evt) {
                if (!narration.playing() && !extras.playing()){
                    if (evt.detail.state === "cursor-hovered") {
                        extras.play('portraitChild');
                        timer.setAttribute('text', { text: "" });
                        document.querySelector("#portraitChildText").setAttribute('material',{visible:true});
                        document.querySelector('#lightMain').emit('lightOff');
                    }
                }
            });

            portraitChild.addEventListener("stateremoved", function(evt) {
                if (evt.detail.state === "cursor-hovered") {
                    //narration.play();
                }
            });

            dollsCloths.addEventListener("stateadded", function(evt) {
                if (!narration.playing() && !extras.playing()){
                    if (evt.detail.state === "cursor-hovered") {
                        extras.play('dolls');
                        timer.setAttribute('text', { text: "" });
                        document.querySelector("#dollsClothsText").setAttribute('material',{visible:true});
                        document.querySelector('#lightMain').emit('lightOff');
                    }
                }
            });

            dollsCloths.addEventListener("stateremoved", function(evt) {
                if (evt.detail.state === "cursor-hovered") {
                    //narration.play();
                }
            });

            dolls2.addEventListener("stateadded", function(evt) {
                if (!narration.playing() && !extras.playing()){
                    if (evt.detail.state === "cursor-hovered") {
                        extras.play('dolls');
                        timer.setAttribute('text', { text: "" });
                        document.querySelector("#dolls2Text").setAttribute('material',{visible:true});
                        document.querySelector('#lightMain').emit('lightOff');
                    }
                }
            });

            marrianneInBed.addEventListener("stateadded", function(evt) {
                if (!narration.playing() && !extras.playing()){
                    mirrorModel.setAttribute('scale', "4 4.1 4"); //scale="1 1 1"
                    if (evt.detail.state === "cursor-hovered") {
                        extras.play('marrianne');
                        timer.setAttribute('text', { text: "marrianneInBed" });
                    }
                }
            });

            marrianneInBed.addEventListener("stateremoved", function(evt) {
                mirrorModel.setAttribute('scale', "3 4 3"); //scale="0.2 0.2 0.2"
                if (evt.detail.state === "cursor-hovered") {
                    //narration.play();
                }
            });

            // bookcaseModel.addEventListener("stateadded", function(evt) {
            //     if (!narration.playing() && !extras.playing()){
            //         if (evt.detail.state === "cursor-hovered") {
            //             extras.play('handMadeBooks');
            //             document.querySelector("#booksText").setAttribute('material',{visible:true});
            //             timer.setAttribute('text', { text: "" });
            //         }
            //     }
            // });

            // bookcaseModel.addEventListener("stateremoved", function(evt) {
            //     if (evt.detail.state === "cursor-hovered") {
            //         //narration.play();
            //     }
            // });

             mother.addEventListener("stateadded", function(evt) {
                if (!narration.playing() && !extras.playing()){
                    if (evt.detail.state === "cursor-hovered") {
                        extras.play('piggyback');
                        document.querySelector("#motherText").setAttribute('material',{visible:true});
                        timer.setAttribute('text', { text: "" });
                    }
                }
            });

            mother.addEventListener("stateremoved", function(evt) {
                if (evt.detail.state === "cursor-hovered") {
                    //narration.play();
                }
            });
            //var timer = document.querySelector("#timer");
            startTimeLine();

            //remove loader
            var cover = document.getElementById("cover2");
            cover.style.opacity = '0';
            setTimeout(function(){cover.remove();}, 1000);
            noSleep.enable();
            //narration delay
            //setTimeout(narration.play(), 3000);
        }


        var scene = document.querySelector('a-scene');
        if (scene.hasLoaded) {
            showStartBtn();
            //run();
        } else {
            scene.addEventListener('loaded', loadAudio);
        }
        
    })();
