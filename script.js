var c = document.getElementById("myCanvas");
c.width = window.innerWidth - 20;
c.height = window.innerHeight - 10;
var context = c.getContext('2d');
charX = 0
charY = 0
map = []
setTimeout(function(){
	document.getElementById("logo").innerHTML="";
}, 2000)
var deerkill = 0;
var deer = new Image();
deer.src = '/deer.png';
var person = new Image();
person.src = '/person.png';
var tree = new Image();
tree.src = '/tree.png';
var block = new Image();
block.src = '/block.png';
bricks = [];
for (i = 0; i < 100; i++) {
	setTimeout(function(){
		map.push(["deer", (Math.random()*1000-500), (Math.random()*1000-500), (Math.random() * 20), (Math.random() * 20)]);
	}, i*100)
}
for (i = 0; i < 400; i++) {
	map.push(["bush", (Math.random() * 4000) - 2000, (Math.random() * 4000) - 2000]);
	console.log("bush");
}
left = 37
right = 39
up = 38
down = 40
seconds = 0;
space = 32
secondsInterval = setInterval(function(){
	seconds++;
}, 1000)
window.onkeydown = function (key) { 
	if (key.keyCode == left) {
		charX = charX - 30;
	}
	if (key.keyCode == right) {
		charX = charX + 30;
	}
	if (key.keyCode == up) {
		charY = charY - 30;
	}
	if (key.keyCode == down) {
		charY = charY + 30;
	}
	if (key.keyCode == space) {
		map.push(["block", charX + c.width / 2, charY + c.height / 2 - 20]);
		bricks.push([charX + c.width / 2, charY + c.height / 2 - 20]);
	}

};
setInterval(update, 100);
function update() {
	context.clearRect(0, 0, 10000, 10000);
	context.font = "30px Consolas"; 
	context.fillText(deerkill+"/60  "+seconds+" seconds", 40 ,40)
	if(deerkill >= 60){
		document.body.innerHTML = `
		<h1>
		You won in ${seconds} seconds🦌<br>
		by Anish
		<h1>
		<a href = "https://youtu.be/dQw4w9WgXcQ?t=42">More info</a>
		`
		clearInterval(secondsInterval);
	}
	for (i in map) {
		if (map[i][0] == "deer") {
			if(Math.round(Math.abs(charX+ c.width / 2-map[i][1]) + Math.abs(charY+c.height / 2-map[i][2]))<80){
				map[i][0]="dead";	
				deerkill++;
			};
			context.drawImage(deer, map[i][1] - charX, map[i][2] - charY);
			if (Math.random() < 0.5) {
				map[i][3] += (Math.random() - 0.5) * 2;
				map[i][4] += (Math.random() - 0.5) * 2;
			}
			map[i][1] += map[i][3];
			map[i][2] += map[i][4];

			if (Math.abs(map[i][1]) > 1500) {
				map[i][3] *= -1;
			}
			if (Math.abs(map[i][2]) > 1500) {
				map[i][4] *= -1;
			}
			for (b in bricks) {
				console.log(
					Math.abs(map[i][1] - bricks[b])
					+
					Math.abs(map[i][2] - bricks[b])
				)
				if (Math.abs(map[i][2] - bricks[b][1]) < 50 && Math.abs(map[i][1] - bricks[b][0]) < 50) {
					map[i][4] *= -1;
					map[i][3] *= -1;
					map[i][4] /= 3;
					map[i][3] /= 3;
					break;
				}

			}
		}
		if (map[i][0] == "bush") {
			context.drawImage(tree, map[i][1] - charX, map[i][2] - charY);
		}
		if (map[i][0] == "block") {
			context.drawImage(block, map[i][1] - charX, map[i][2] - charY);
		}
	}
	context.drawImage(person, c.width / 2, c.height / 2);
}