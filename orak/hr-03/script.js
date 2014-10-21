function loadImage(src)
{
	var image = new Image();
	image.src = src;
	return image;
}

function keyup(e){
	if(e.keyCode == 37){
		leftkeydown = false;
	} else if(e.keyCode == 39){
		rightkeydown = false;
	} else if(e.keyCode == 40){
		downkeydown = false;
	}
}
function keydown(e){
	if(e.keyCode == 37){
		leftkeydown = true;
	} else if(e.keyCode == 39){
		rightkeydown = true;
	} else if(e.keyCode == 40){
		downkeydown = true;
	}
}

function initialize ()
{
	canvas = document.getElementById('mycanvas');
	context = canvas.getContext('2d');

	background = loadImage("http://rizsi.github.io/szakkor2014/orak/hr-02/background.png");

	cloud = {
		x: 310,
		y: 90,
	};

	player = {
		x: 30,
		y: 240-64,
		velocity_x: 0,
		velocity_y: 0,
	};

	cim = {
		x: 600/2-40,
		y: 20,
		text: "Szig szakkör jétáka!",
	};
	
	rightkeydown = false;
	leftkeydown = false;
	downkeydown = false;
	
	background = loadImage("http://rizsi.github.io/szakkor2014/orak/hr-02/background.png");
	player.img = loadImage("http://rizsi.github.io/szakkor2014/orak/hr-02/stickman.png");
	player.crouch = loadImage("http://rizsi.github.io/szakkor2014/orak/hr-03/guggol.png");
	cloud.img = loadImage("http://rizsi.github.io/szakkor2014/orak/hr-02/mistic_cloud.png");
	
	document.body.addEventListener("keydown", keydown);
	document.body.addEventListener("keyup", keyup);
}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	context.drawImage(background, 0, 0);
	context.fillText(cim.text, cim.x, cim.y);
	context.drawImage(cloud.img, cloud.x, cloud.y);
	
	if(rightkeydown){
		player.velocity_x++;
	}
	if(leftkeydown){
		player.velocity_x--;
	}
	if(!rightkeydown && !leftkeydown){
		if(player.velocity_x > 0){
			player.velocity_x--;
		}else if(player.velocity_x < 0){
			player.velocity_x++;
		}
	}
	
	player.x += player.velocity_x;


	if(downkeydown){
		context.drawImage(player.crouch, player.x, player.y);
	}else{
		context.drawImage(player.img, player.x, player.y);
	}

	
	window.requestAnimationFrame(animate);
}

window.addEventListener("load", function()
{
	initialize();
	animate();
});