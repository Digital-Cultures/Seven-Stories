var totalSeconds = pauseTime = 0;
var camera = document.querySelector("#camera");
var cameraPositions;
var cameraPath;
var startFrame;
var duration = 10000;

var listener, audioLoader, music, narration, extras, bang;
var noSleep = new NoSleep();

var bookcaseFrame;
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

function startTimeLine(){
    timeLine();
    setInterval(timeLine, 1000);
}

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

function timeLine() {


    switch (totalSeconds) {
        case 0:
            music.play();
            //Start zoom out from book case
            cameraPositions = [new THREE.Vector3(2.5, 3.9, -8), new THREE.Vector3(2.5, 3.9, 0)];
            cameraPath = new THREE.SplineCurve3(cameraPositions);
            duration = 36000;
            bookcaseFrame = requestAnimationFrame(cameraPan);
            break;

        case 2:
            narration.play('firstHalf');
           // totalSeconds = 76;
            document.querySelector('#lightSpot').emit('lightOn');
        
            break;
        case 14:
            //Marianne dreams
            document.querySelector('#movingBookDreams').emit('bookDreams');
            //addBookMarianne();
            
            break;
        case 22:
            //addBookRufus();
            document.querySelector('#movingBookRufus').emit('bookRufus');
            //Rufus
            break;

        case 29:
            //mirror
            //addBookMirror();
            document.querySelector('#movingBookMirror').emit('bookMirror');
            //addMirror();
            break;
        case 37:
            //mirror book move
        //Keys
            //addBookKey();
            document.querySelector('#movingBookKey').emit('bookKey');
            
            break;

        case 40:
            //document.querySelector('#scene-1').emit('lightOn');
        	cancelAnimationFrame(bookcaseFrame);
            break;
        case 42:
            document.querySelector('#scene-1').emit('fogfadeout');
            copyRoom();
            //Fade out room
            break;
        case 44:
            //flash in bedside
            camera.setAttribute('position', { x: 8, y: 4, z: 0 });
            startFrame = null;
            cameraPositions = [new THREE.Vector3(8, 4, 0), new THREE.Vector3(6, 3, 0)];
            cameraPath = new THREE.SplineCurve3(cameraPositions);
            duration = 20000;
            bookcaseFrame = requestAnimationFrame(cameraPan);
            document.querySelector('#scene-1').emit('fogfadein');
            document.querySelector('#marrianneInBed').emit('fadein');
            addSheet();
            document.querySelector('#lightMain').emit('lightOn');
            document.querySelector('#windowSun').setAttribute('position', { x: 11, y: 2, z: -1 });
            document.querySelector('#windowSun').setAttribute('position', { x: 11, y: 2, z: -1 });
            
            //camera.lookAt( new THREE.Vector3(0,0,0));
            break;
        case 46:
            // pause to look around
            if (!extras.playing()){
                pauseTime ++;
                //timer.setAttribute('text', { text: "Look around for "+(15-pauseTime)+" sec to hear more about items in the room" });
           }
            
            if (pauseTime>15){
                var x = document.querySelectorAll(".speakerIcon");
                for(var i=0; i<x.length; i++){
                    x[i].setAttribute('visible','false');
                }
                narration.play('secondHalf');
                document.querySelector('#lightMain').emit('lightOff');
               // document.querySelector('#pauseTimeBar').setAttribute('scale', { x: 0, y: 0.01, z: 0.01 });
                //hide crosshairs
                timer.setAttribute('visible',false);
                document.querySelector('#crosshair').setAttribute('material',{visible:false});

            } else if (narration.playing()){
                narration.pause();
                //show speaker icons
                var x = document.querySelectorAll(".speakerIcon");
                for(var i=0; i<x.length; i++){
                    x[i].setAttribute('visible','true');
                }
                //show crosshairs
                document.querySelector('#crosshair').setAttribute('material',{visible:true});
                timer.setAttribute('visible',true);
            }
            
            break;
        case 47:
            //Catherine appears
            document.querySelector('#Catherine1').emit('fadein');
            break;
        case 52:
            //Marianne appears
            break;
        case 70:
             document.querySelector('#scene-1').emit('fogfadeout');
             break;
        case 72:
            cancelAnimationFrame(bookcaseFrame);
            document.querySelector('#marrianneInBed').emit('fadeout');
            document.querySelector('#Catherine1').emit('fadeOut');
             //World spins to look down bed
            camera.setAttribute('position', { x: 8, y: 3.5, z: 0 });
            document.querySelector('#room').setAttribute('position', { x: 3.5, y: 1.5, z: -11 });
            document.querySelector('#room').setAttribute('rotation', { x: 0, y: -90, z: 0});
            document.querySelector('#scene-1').emit('fogfadein');
            removeSheet();
            break;

        case 78:
            addOpenBook();
            //document.querySelector('#scene-1').emit('fogfadeout');
            //position="3.5 1.5 -11"  rotation="0 -90 0"
            break;
        case 76:
            //Marianne draws a book
            break;
        case 79:
            //House pops up and room fades out a bit
            break;
        case 81:
            //House backin book and room fades in a bit
            break;
        case 82:
            //House pops up and room fades out a bit, but a bit closer 
            document.querySelector('#room').setAttribute('position', { x: 3.5, y: 2, z: -10.8 });
            break;
        case 85:
            document.querySelector('#room').setAttribute('position', { x: 3.5, y: 2.5, z: -10.6 });
            //Marianne in window and closer to house with other things around (but as an illustration)
            break;
        case 86:
            document.querySelector('#windowSun').emit('lightOff');
            break;
        case 92:
            //fade out (2 seconds)
            //document.querySelector('#scene-1').emit('fogfadeout');
            break;
        case 93:
            //fade out (2 seconds)
            //remove old room
            removeRoom();
            document.querySelector('#scene-1').emit('fogLittleIn');
            break;
        case 94:
            //House front (no door handle - looking up, big and close)
            document.querySelector('#lightMain').emit('lightOnHigh');
            addHouse();
            startFrame = null;
            cameraPositions = [new THREE.Vector3(8, 4, 8), new THREE.Vector3(8, 3.5, 1.5)];
            cameraPath = new THREE.SplineCurve3(cameraPositions);
            duration = 12000;
            bookcaseFrame = requestAnimationFrame(cameraPan);
            break;
        case 107:
            cancelAnimationFrame(bookcaseFrame);
            // remove House front
            removeHouse();
            document.querySelector('#scene-1').emit('fogLittleOut');
            break;
        case 108:
            addHouseRoom();
            //fae into bedroom (3 Sec) B&W and cold
            break;
        case 115:
            pauseTime=0;
            break;
        case 118:
            // becomes more colourfull
            if (!extras.playing()){
                pauseTime ++;
                //timer.setAttribute('text', { text: "Look around for "+(10-pauseTime)+" sec to hear more about items in the room" });
            }
            
            if (pauseTime>10){

                var x = document.querySelectorAll(".speakerIcon");
                for(var i=0; i<x.length; i++){
                    x[i].setAttribute('visible','false');
                }

                narration.play('secondHalf');
                //document.querySelector('#pauseTimeBar').setAttribute('scale', { x: 0, y: 0.01, z: 0.01 });
                //hide crosshairs
                timer.setAttribute('visible',false);
                document.querySelector('#crosshair').setAttribute('material',{visible:false});

            } else if (narration.playing()){
                narration.pause();

                //show speaker icons
                var x = document.querySelectorAll(".speakerIcon");
                for(var i=0; i<x.length; i++){
                    x[i].setAttribute('visible','true');
                }
                //show crosshairs
                timer.setAttribute('visible',true);
                document.querySelector('#crosshair').setAttribute('material',{visible:true});
            }
            break;
         case 119:
            //Marianne and Mark become engulfed in aura ball
            
            break;
        case 120:
            removeMarianneAndMark();
            //Marianne and Mark become engulfed in aura ball
             addMandM();
            break;
        case 122:
            //Marianne and Mark become engulfed in aura ball
             addFoodToRoom();
            break;
         case 123:
            //Marianne and Mark become engulfed in aura ball
             addGames();
            break;
        case 124:
            //Marianne and Mark become engulfed in aura ball
             addFurnitureToRoom();
            break;
        case 127:
            //Aura ball fades out revealing larger Marianne
            break;
        case 128:
            // pause to look around
            // zoom in on Marianne
            break;
        case 131:
            //room starts to spin (Marianne stays still)
            break;
        case 136:
            // starts getting dark
            document.querySelector('#lightMain').emit('lightOffSlow');
            break;
        case 149:
            //play bang and Marianne dissapears
            bang.play();
            removeHouseRoom();
            document.querySelector('#scene-1').emit('fogfadeout');
            break;
        case 150:
            document.getElementById("room").setAttribute("visible","true");
            //document.querySelector("a-scene").appendChild(roomHTML);
            camera.setAttribute('position', { x: 8, y: 3.5, z: 0 });
            document.querySelector('#room').setAttribute('position', { x: 3.5, y: 1.5, z: -11 });
            document.querySelector('#room').setAttribute('rotation', { x: 0, y: -90, z: 0});
            document.querySelector('#scene-1').emit('fogfadein');
            break;
        case 152:
            document.querySelector('#windowSun').emit('lightOn');
            break;
        case 165:
            //show portrate
            
            startFrame = null;
            cameraPositions = [new THREE.Vector3(8, 3.5, 0), new THREE.Vector3(4, 22, 180)];
            cameraPath = new THREE.SplineCurve3(cameraPositions);
            duration = 30000;
            bookcaseFrame = requestAnimationFrame(cameraPan);
            break;
        case 173:
            addHeadShot();
            break;
        case 200:
            document.getElementById("credits").style.display = "block";
            noSleep.disable();
            break;
    }

    if (narration.playing()||totalSeconds<3){
        totalSeconds++;
        //timer.setAttribute('text', { text: totalSeconds });
    }
    
    }