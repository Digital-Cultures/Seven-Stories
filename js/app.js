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
                    var el = document.querySelector('#scene1');
                    el.setAttribute('visible', false);
                });
            }
        });
        /*
        			AFRAME.registerComponent('trigger-hit', {
        				schema: {
        					type  : 'string'
        				},

        				init: function () {
        					var eventName = this.data;
        					this.el.addEventListener('componentchanged', function (evt) {
        						var entity = document.querySelector('[narration]');
        						entity.stop();
        						console.log('Entity', evt);
        						// if (evt.name !== 'rotation') { return; }
        						// if (evt.newData.y < 180) {
        						//   this.emit(eventName);
        						// }
        					});
        				}
        			});
        */

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
            sound.components.sound.sound.play();
            run();
        }

        function run() {
            //remove loader
            var cover = document.getElementById("cover");
            cover.parentNode.removeChild(cover);

            var image1 = document.querySelector("#image1");
            var audio = document.querySelector("#audio");
            var narration = document.querySelector("#narration");

            image1.addEventListener("stateremoved", function(evt) {

                console.log(audio.components);
                if (evt.detail.state === "cursor-hovered" && !audio.components.sound.isPlaying) {
                    //image1.setAttribute('scale', { x: 1, y: 1, z: 1 });//scale="1 1 1"

                    narration.play();
                    console.log(audio.components.sound.sound.context.currentTime);
                }
            });

            image1.addEventListener("stateadded", function(evt) {
                console.log(audio.components);
                if (evt.detail.state === "cursor-hovered" && audio.components.sound.isPlaying) {
                    //scale="0.2 0.2 0.2"
                    narration.pause();
                    console.log(audio.components.sound.sound.context.currentTime);
                }
            });

            var timer = document.querySelector("#timer");
            var camera = document.querySelector("#camera");


            ///TIMINGS
            var totalSeconds = 0;
            setInterval(setTime, 1000);


            var cameraPositions;
            var cameraPath;
            var startFrame;

            var bookcaseFrame;
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

            function cameraPan(t) {
                if (!startFrame) startFrame = t;
                bookcaseFrame = requestAnimationFrame(cameraPan);
                t = t - startFrame;
                var i = t / 10000;

                try {
                    var p = cameraPath.getPoint(i);
                    camera.setAttribute('position', p);
                    //console.log(p);
                } catch (ex) {}
            }



            function setTime() {
                totalSeconds++;
                timer.setAttribute('text', { text: totalSeconds });

                switch (totalSeconds) {
                    case 1:
                        //Start zoom out from book case
                        cameraPositions = [new THREE.Vector3(0, 0, -8), new THREE.Vector3(0, 0, 0)];
                        cameraPath = new THREE.SplineCurve3(cameraPositions);
                        bookcaseFrame = requestAnimationFrame(cameraPan);
                        break;
                    case 10:
                        cancelAnimationFrame(bookcaseFrame);
                        //Marianne dreams
                        break;
                    case 16:
                        //Rufus
                        break;
                    case 23:
                        //mirror
                        break;
                    case 28:
                        //Keys
                        break;
                    case 36:
                        //Stop Zoom out from book case
                        break;
                    case 38:
                        //Fade out room
                        break;
                    case 40:
                        //flash in bedside
                        camera.setAttribute('position', { x: 4, y: 4, z: 0 });
                        break;
                    case 48:
                        //Marianne appears
                        break;
                    case 52:
                        //book appears
                        break;
                }
            }

        }
    })();
