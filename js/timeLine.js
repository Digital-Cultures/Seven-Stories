var totalSeconds = 0;
var camera = document.querySelector("#camera");
var cameraPositions;
var cameraPath;
var startFrame;
var duration = 10000;

var listener;
var audioLoader;
var music;
var narration;
var bang;

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
    timer.setAttribute('text', { text: totalSeconds });


    switch (totalSeconds) {
        case 0:

                music.play();


            // var music = document.querySelector("#music");
            // music.play();
            //Start zoom out from book case
            cameraPositions = [new THREE.Vector3(2.5, 4, -8), new THREE.Vector3(2.5, 4, 0)];
            cameraPath = new THREE.SplineCurve3(cameraPositions);
            duration = 36000;
            bookcaseFrame = requestAnimationFrame(cameraPan);
            break;

        case 2:
            narration.play();
            // var narration = document.querySelector("#narration");
            // narration.play();
            break;
        case 15:
            //Marianne dreams
            document.querySelector('#movingBookDreams').emit('bookDreams');
            var walls = document.querySelectorAll(".walls");
            [].forEach.call(walls, function(div) {
              div.emit('fadein');
            });
            
            break;
        case 24:
        	document.querySelector('#movingBookRufus').emit('bookRufus');
            //Rufus
            break;
        case 30:
        	document.querySelector('#movingBookMirror').emit('bookMirror');
            //mirror
            break;
        case 36:
        	document.querySelector('#movingBookKey').emit('bookKey');
            //Keys
            break;
        case 40:
            document.querySelector('#scene-1').emit('lightOn');
        	cancelAnimationFrame(bookcaseFrame);
            //Stop Zoom out from book case
            break;
        case 41:
            document.querySelector('#scene-1').emit('fogfadeout');
            //Fade out room
            break;
        case 44:
            //flash in bedside
            document.querySelector('#scene-1').emit('fogfadein');
            document.querySelector('#image1').emit('fadein');
            camera.setAttribute('position', { x: 8, y: 4, z: 0 });
            startFrame = null;
            cameraPositions = [new THREE.Vector3(8, 4, 0), new THREE.Vector3(9, 3, -1.5)];
            cameraPath = new THREE.SplineCurve3(cameraPositions);
            duration = 20000;
            bookcaseFrame = requestAnimationFrame(cameraPan);
            //camera.lookAt( new THREE.Vector3(0,0,0));
            break;
        case 45:
            //Catherine appears
            break;
        case 52:
            //Marianne appears
            break;
        case 56:
            //book appears
            //flip through book pages
            break;
        case 67:
             //document.querySelector('#scene-1').emit('fogfadeout');
        case 72:
            cancelAnimationFrame(bookcaseFrame);
             //World spins to look down bed
            camera.setAttribute('position', { x: 8, y: 3.5, z: 0 });
            document.querySelector('#room').setAttribute('position', { x: 3.5, y: 1.5, z: -11 });
            document.querySelector('#room').setAttribute('rotation', { x: 0, y: -90, z: 0});

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
            document.querySelector('#room').setAttribute('position', { x: 3.5, y: 2, z: -10.6 });
            //Marianne in window and closer to house with other things around (but as an illustration)
            break;
        case 93:
            //fade out (2 seconds)
            //document.querySelector('#scene-1').emit('fogfadeout');
            break;
        case 94:
            //remove old room
            var elem = document.getElementById("room");
            elem.parentNode.removeChild(elem);
            //House front (no door handle - looking up, big and close)
            addHouse();
            startFrame = null;
            cameraPositions = [new THREE.Vector3(8, 4, 8), new THREE.Vector3(8, 3.5, 1.5)];
            cameraPath = new THREE.SplineCurve3(cameraPositions);
            duration = 12000;
            bookcaseFrame = requestAnimationFrame(cameraPan);
            
            break;
        case 106:
            cancelAnimationFrame(bookcaseFrame);
            // remove House front
            removeHouse();
            break;
        case 107:
            addHouseRoom();
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
        case 149:
            //play bang and Marianne dissapears
            bang.play();
            break;


        case 179:
            //show portrate
            break;
        case 190:
            document.getElementById("credits").style.display = "block";
            break;
    }

    totalSeconds++;
    }