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

        var scene = document.querySelector('a-scene');
        if (scene.hasLoaded) {
            showStartBtn();
            //run();
        } else {
            scene.addEventListener('loaded', showStartBtn);
        }

        var sound = document.getElementById('audio');

        function showStartBtn() {
            document.getElementById("startBtn").style.visibility = "visible";
            document.getElementById("startBtn").onclick = function() { PlayDing(); };
        }

        function PlayDing(DingType) {
            //Get a reference to the audio element
            //var sound = document.getElementById(DingType);
            //Play it
            run();
        }

        function audioIsPlaying(audioElem) {
            return !audioElem.paused;
        }

        function run() {
            var image1 = document.querySelector("#image1");
            var narration = document.querySelector("#narration");

            image1.addEventListener("stateremoved", function(evt) {
                //console.log(sound.components);
                //image1.setAttribute('scale', "0.2 0.2 0.2"); //scale="0.2 0.2 0.2"
                if (evt.detail.state === "cursor-hovered" && !audioIsPlaying(narration)) {

                    //narration.play();
                    console.log(narration.currentTime);
                }
            });

            image1.addEventListener("stateadded", function(evt) {
                //console.log(sound.components);
                //image1.setAttribute('scale', "1 1 1"); //scale="1 1 1"
                if (evt.detail.state === "cursor-hovered" && audioIsPlaying(narration)) {
                   // narration.pause();
                    console.log(narration.currentTime);
                }
            });

            var timer = document.querySelector("#timer");
            var camera = document.querySelector("#camera");


            ///TIMINGS


            var cameraPositions;
            var cameraPath;
            var startFrame;
            var duration = 10000;

            var bookcaseFrame;
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;


            var totalSeconds = 0;
            setTime();
            setInterval(setTime, 1000);

            function cameraPan(t) {
                if (!startFrame) startFrame = t;
                bookcaseFrame = requestAnimationFrame(cameraPan);
                t = t - startFrame;
                var i = t / duration;

                try {
                    var p = cameraPath.getPoint(i);
                    camera.setAttribute('position', p);
                    //console.log(p);
                } catch (ex) {}
            }



            function setTime() {
                timer.setAttribute('text', { text: totalSeconds });

                switch (totalSeconds) {
                    case 0:
                        //Start zoom out from book case
                        cameraPositions = [new THREE.Vector3(2.5, 4, -8), new THREE.Vector3(2.5, 4, 0)];
                        cameraPath = new THREE.SplineCurve3(cameraPositions);
                        duration = 36000;
                        bookcaseFrame = requestAnimationFrame(cameraPan);
                        break;
                    case 12:
                        //Marianne dreams
                        document.querySelector('#movingBookDreams').emit('bookDreams');
                        var walls = document.querySelectorAll(".walls");
                        [].forEach.call(walls, function(div) {
                          div.emit('fadein');
                        });
                        
                        break;
                    case 20:
                    	document.querySelector('#movingBookRufus').emit('bookRufus');
                        //Rufus
                        break;
                    case 26:
                    	document.querySelector('#movingBookMirror').emit('bookMirror');
                        //mirror
                        break;
                    case 32:
                    	document.querySelector('#movingBookKey').emit('bookKey');
                        //Keys
                        break;
                    case 36:
                        document.querySelector('#scene-1').emit('lightOn');
                    	cancelAnimationFrame(bookcaseFrame);
                        //Stop Zoom out from book case
                        break;
                    case 37:
                        document.querySelector('#scene-1').emit('fogfadeout');
                        //Fade out room
                        break;
                    case 40:
                        //flash in bedside
                        document.querySelector('#scene-1').emit('fogfadein');
                        document.querySelector('#image1').emit('fadein');
                        camera.setAttribute('position', { x: 8, y: 4, z: 0 });
                        //camera.lookAt( new THREE.Vector3(0,0,0));
                        break;
                    case 41:
                        //Catherine appears
                        break;
                    case 48:
                        addOpenBook();
                        //Marianne appears
                        break;
                    case 52:
                        //book appears
                        //flip through book pages
                        break;
                    case 63:
                         //document.querySelector('#scene-1').emit('fogfadeout');
                    case 68:
                        //book appears
                        
                        break;
                    case 71:
                        //World spins to look down bed
                        document.querySelector('#room').setAttribute('position', { x: 3.5, y: 1.5, z: -11 });
                        document.querySelector('#room').setAttribute('rotation', { x: 0, y: -90, z: 0});
                        //document.querySelector('#scene-1').emit('fogfadeout');
                        //position="3.5 1.5 -11"  rotation="0 -90 0"
                        break;
                    case 72:
                        //Marianne draws a book
                        break;
                    case 75:
                        //House pops up and room fades out a bit
                        break;
                    case 77:
                        //House backin book and room fades in a bit
                        break;
                    case 78:
                        //House pops up and room fades out a bit, but a bit closer
                        break;
                    case 79:
                        //Marianne in window and closer to house with other things around (but as an illustration)
                        break;
                    case 89:
                        //fade out (2 seconds)
                        break;
                    case 92:
                        //remove old room
                        // var elem = document.getElementById("room");
                        // elem.parentNode.removeChild(elem);
                        break;
                    case 93:
                        //House front (no door handle - looking up, big and close)
                        break;
                    case 99:
                        // remove House front
                        break;
                    case 100:
                        //fae into bedroom (3 Sec) B&W and cold
                        break;
                    case 104:
                        // mark appears
                        break;
                    case 114:
                        // Marianne appears next to Mark
                        break;
                    case 116:
                        //Food -> Toys -> Furniture fade in
                        break;
                    case 118:
                        // becomes more colourfull
                        break;
                    case 124:
                        //Marianne and Mark become engulfed in aura ball
                        break;
                    case 127:
                        //Aura ball fades out revealing larger Marianne
                        break;
                    case 128:
                        // zoom in on Marianne
                        break;
                    case 131:
                        //room starts to spin (Marianne stays still)
                        break;
                    case 134:
                        // starts getting dark
                        break;
                    case 141:
                        //play bang and Marianne dissapears
                        break;


                    case 179:
                        //show portrate
                        break;
                }

                totalSeconds++;
            }

            //remove loader
            var cover = document.getElementById("cover");
            setTimeout(cover.remove(), 1000);
            narration.play();
        }
    })();
