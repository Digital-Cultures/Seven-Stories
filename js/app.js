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
              run();
          } else {
              scene.addEventListener('loaded', run);
          }

          function run() {
              var soundEntity = document.querySelector("#soundEntity");
              var image1 = document.querySelector("#image1");
              image1.addEventListener("stateremoved", function(evt) {
                  if (evt.detail.state === "cursor-hovered" && soundEntity.components.sound.isPlaying) {
                      //soundEntity.components.sound.pause();
                      soundEntity.components.sound.sound.context.suspend();
                      soundEntity.components.sound.isPlaying = false;
                      console.log(soundEntity.components.sound.sound.context.currentTime);
                  }
              });
              image1.addEventListener("stateadded", function(evt) {
                  if (evt.detail.state === "cursor-hovered" && !soundEntity.components.sound.isPlaying) {
                      //soundEntity.components.sound.play();
                      soundEntity.components.sound.sound.context.resume();
                      soundEntity.components.sound.isPlaying = true;
                      console.log(soundEntity.components.sound.sound.context.currentTime);
                  }
              });
          }
      })();
