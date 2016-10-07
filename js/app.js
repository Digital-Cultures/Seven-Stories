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


        function showStartBtn() {
            document.getElementById("startBtn").style.display = "block";
            document.getElementById("loading").style.display = "none";
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

            //var timer = document.querySelector("#timer");
            startTimeLine();

            //remove loader
            var cover = document.getElementById("cover2");
            setTimeout(cover.remove(), 1000);
        }

    })();
