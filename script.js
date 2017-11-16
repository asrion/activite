 var canvas, ctx;
    var myobject;
            
	function Object()
	{
		this.x = Math.random() * 200;
		this.y = Math.random() * 300;
		this.dx = 1;
		this.dy = 1;
	}
	
	Object.prototype.update = function()
	{
		this.x += this.dx*4;
		this.y += this.dy*4;
		
		if (this.x + 70 > canvas.width || this.x < -5)
		{
			this.dx = -this.dx;
		}
		
		if (this.y + 50 > canvas.height || this.y < 0)
		{
			this.dy = -this.dy;
		}
	}
	
	function loop()
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		myobject.update();
		x = myobject.x;
		y = myobject.y;

		//Pif début - la crête
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x+15,y+3);
		ctx.lineTo(x+22,y+5);
		ctx.lineTo(x+30,y+15);
		ctx.lineTo(x+36,y+0);
		ctx.lineTo(x+37,y+3);
		ctx.lineTo(x+37,y+5);
		ctx.lineTo(x+38,y+10);
		ctx.lineTo(x+39,y+12);
		ctx.lineTo(x+40,y+16);
		ctx.lineTo(x+44,y+12);
		ctx.lineTo(x+46,y+9);
		ctx.lineTo(x+49,y+5);
		ctx.lineTo(x+56,y+2);
		ctx.lineTo(x+59,y+0);
		ctx.lineTo(x+63,y+0);
		ctx.lineTo(x+57,y+4);
		ctx.lineTo(x+54,y+7);
		ctx.lineTo(x+52,y+10);
		ctx.lineTo(x+50,y+16);
		
		
		// Oreille gauche
		ctx.lineTo(x+54,y+15);
		ctx.lineTo(x+58,y+12);
		ctx.lineTo(x+64,y+12);
		ctx.lineTo(x+67,y+13);
		ctx.lineTo(x+70,y+14);
		ctx.lineTo(x+72,y+17);
		ctx.lineTo(x+76,y+20);
		ctx.lineTo(x+78,y+22);
		ctx.lineTo(x+80,y+24);
		ctx.lineTo(x+82,y+27);
		ctx.lineTo(x+82,y+31);
		ctx.lineTo(x+84,y+33);
		ctx.lineTo(x+85,y+34);
		ctx.lineTo(x+85,y+40);
		ctx.lineTo(x+87,y+43);
		ctx.lineTo(x+89,y+45);
		ctx.lineTo(x+90,y+46);
		ctx.lineTo(x+95,y+48);
		ctx.lineTo(x+92,y+50);
		ctx.lineTo(x+90,y+53);
		ctx.lineTo(x+88,y+56);
		ctx.lineTo(x+86,y+58);
		ctx.lineTo(x+82,y+59);
		ctx.lineTo(x+77,y+60);

		ctx.lineTo(x+75,y+63);
		ctx.lineTo(x+76,y+66);
		ctx.lineTo(x+77,y+69);
		ctx.lineTo(x+74,y+78);
		ctx.lineTo(x+73,y+82);
		ctx.lineTo(x+70,y+84);
		ctx.lineTo(x+68,y+85);
		ctx.lineTo(x+62,y+86);
		
		ctx.lineTo(x+60,y+88);
		ctx.lineTo(x+55,y+89);
		ctx.lineTo(x+47,y+90);
		ctx.lineTo(x+44,y+91);
		ctx.lineTo(x+42,y+92);
		ctx.lineTo(x+40,y+93);
		ctx.lineTo(x+37,y+92);
		ctx.lineTo(x+32,y+91);
		ctx.lineTo(x+30,y+90);
		ctx.lineTo(x+27,y+89);
		ctx.lineTo(x+23,y+88);
		ctx.lineTo(x+20,y+86);
		ctx.lineTo(x+19,y+84);
		ctx.lineTo(x+17,y+82);
		ctx.lineTo(x+15,y+78);
		ctx.lineTo(x+13,y+74);
		ctx.lineTo(x+13,y+72);
		ctx.lineTo(x+13,y+70);
		ctx.lineTo(x+14,y+69);
		
		//point joue droite
		ctx.lineTo(x+15,y+66);
		
		//Oreille droite
		ctx.lineTo(x+14,y+67);
		ctx.lineTo(x+3,y+67);
		ctx.lineTo(x-2,y+63);
		ctx.lineTo(x-4,y+60);
		ctx.lineTo(x-6,y+58);
		ctx.lineTo(x-4,y+58);
		ctx.lineTo(x-7,y+54);
		ctx.lineTo(x-4,y+52);
		ctx.lineTo(x-2,y+50);
		ctx.lineTo(x-0,y+47);
		ctx.lineTo(x+2,y+45);
		ctx.lineTo(x+3,y+43);
		ctx.lineTo(x+3,y+40);
		ctx.lineTo(x+3,y+38);
		ctx.lineTo(x+3,y+36);
		ctx.lineTo(x+2,y+34);
		ctx.lineTo(x+4,y+32);
		ctx.lineTo(x+4,y+29);
		ctx.lineTo(x+5,y+25);
		ctx.lineTo(x+7,y+24);
		ctx.lineTo(x+8,y+23);
		ctx.lineTo(x+11,y+21);
		ctx.lineTo(x+13,y+18);
		ctx.lineTo(x+14,y+17);
		ctx.lineTo(x+17,y+17);
		ctx.lineTo(x+19,y+17);
		ctx.lineTo(x+21,y+18);
		ctx.lineTo(x+20,y+17);
		ctx.lineTo(x+19,y+16);
		ctx.lineTo(x+19,y+15);
		ctx.lineTo(x+19,y+13);
		ctx.lineTo(x+16,y+12);
		ctx.lineTo(x+15,y+11);
		ctx.lineTo(x+15,y+10);
		ctx.lineTo(x+14,y+08);
		ctx.lineTo(x+4,y+0);
		
		//visage - Nez
		ctx.moveTo(x+40,y+52);
		ctx.lineTo(x+39,y+50);
		ctx.lineTo(x+40,y+49);
		ctx.lineTo(x+46,y+49);
		ctx.lineTo(x+49,y+49);
		ctx.lineTo(x+53,y+53);
		ctx.lineTo(x+54,y+56);
		ctx.lineTo(x+53,y+58);
		ctx.lineTo(x+52,y+60);
		ctx.lineTo(x+50,y+60);
		ctx.lineTo(x+48,y+60);
		ctx.lineTo(x+42,y+60);
		ctx.lineTo(x+41,y+59);
		ctx.lineTo(x+38,y+56);
		ctx.lineTo(x+38,y+54);
		ctx.lineTo(x+39,y+51);
		
		//remplir le nez
		ctx.lineTo(x+40,y+51);
		ctx.lineTo(x+49,y+51);
		ctx.lineTo(x+50,y+52);
		ctx.lineTo(x+40,y+52);
		ctx.lineTo(x+39,y+53);
		ctx.lineTo(x+52,y+54);
		ctx.lineTo(x+52,y+55);
		ctx.lineTo(x+40,y+55);
		ctx.lineTo(x+40,y+56);
		ctx.lineTo(x+51,y+56);
		ctx.lineTo(x+51,y+57);
		ctx.lineTo(x+40,y+57);


		// fin du nez et début œil droit ;)
		ctx.moveTo(x+44,y+50);
		ctx.lineTo(x+43,y+37);
		ctx.lineTo(x+40,y+36);
		ctx.lineTo(x+35,y+36);
		ctx.lineTo(x+33,y+38);
		ctx.lineTo(x+32,y+48);
		ctx.lineTo(x+32,y+53);

		// intérieur œil droi
		ctx.moveTo(x+38,y+50);
		ctx.lineTo(x+38,y+44);
		ctx.moveTo(x+37,y+50);
		ctx.lineTo(x+37,y+44);
		ctx.lineTo(x+37,y+51);

		//joue droite collée au nez
		ctx.moveTo(x+38,y+54);
		ctx.lineTo(x+34,y+53);
		ctx.lineTo(x+32,y+53);
		ctx.lineTo(x+24,y+54);
		ctx.lineTo(x+22,y+57);
		ctx.lineTo(x+20,y+60);
		ctx.lineTo(x+17,y+64);

		//Joue gauche collée au nez
		ctx.moveTo(x+52,y+54);
		ctx.lineTo(x+59,y+52);
		ctx.lineTo(x+63,y+52);
		ctx.lineTo(x+67,y+54);
		ctx.lineTo(x+70,y+56);
		ctx.lineTo(x+74,y+58);
		ctx.lineTo(x+75,y+62);

		// Début œil gauche ;)
		ctx.moveTo(x+50,y+50);
		ctx.lineTo(x+50,y+38);
		ctx.lineTo(x+51,y+36);
		ctx.lineTo(x+57,y+36);
		ctx.lineTo(x+59,y+38);
		ctx.lineTo(x+61,y+42);
		ctx.lineTo(x+61,y+52);
		
		//intérieur œil gauche
		ctx.lineTo(x+56,y+52);
		ctx.lineTo(x+56,y+45);
		ctx.lineTo(x+55,y+45);
		ctx.lineTo(x+55,y+52);

		//Bouche - droite
		ctx.moveTo(x+20,y+68);
		ctx.lineTo(x+26,y+64);
		ctx.lineTo(x+29,y+60);
		ctx.lineTo(x+30,y+58);

		//Bouche - gauche
		ctx.moveTo(x+70,y+70);
		ctx.lineTo(x+66,y+66);
		ctx.lineTo(x+63,y+62);
		ctx.lineTo(x+63,y+58);

		//Lèvre supérieure
		ctx.moveTo(x+66,y+66);
		ctx.lineTo(x+54,y+69);
		ctx.lineTo(x+48,y+70);
		ctx.lineTo(x+40,y+71);
		ctx.lineTo(x+32,y+69);
		ctx.lineTo(x+25,y+63);

		//Lèvre inférieure
		ctx.moveTo(x+66,y+66);
		ctx.lineTo(x+54,y+82);
		ctx.lineTo(x+52,y+82);
		ctx.lineTo(x+40,y+84);
		ctx.lineTo(x+30,y+80);
		ctx.lineTo(x+25,y+65);

		//Langue
		ctx.moveTo(x+32,y+68);
		ctx.lineTo(x+40,y+82);
		ctx.lineTo(x+48,y+82);
		ctx.lineTo(x+55,y+70);
		ctx.lineTo(x+50,y+71);
		ctx.lineTo(x+48,y+72);
		ctx.lineTo(x+47,y+73);
		ctx.lineTo(x+40,y+73);
		ctx.lineTo(x+36,y+73);
		ctx.lineTo(x+40,y+75);
		ctx.lineTo(x+53,y+74);
		ctx.lineTo(x+52,y+75);
		ctx.lineTo(x+40,y+75);
		ctx.lineTo(x+48,y+77);
		ctx.lineTo(x+43,y+78);
		ctx.lineTo(x+40,y+79);
		ctx.lineTo(x+44,y+80);
		ctx.lineTo(x+40,y+83);

		ctx.stroke();            
		ctx.font = "20px 'Monaco'";
		ctx.fillStyle = "yellow";
		ctx.fillText("Auteur : Asri LABBACI", 20, 25);
		ctx.fillText("Dessin : Pif", 20, 45);

		ctx.closePath();
		setTimeout( loop,500);// ici vous pouvez vous ausez à changer la durée (1000 = 1 seconde) essayez 0 ;)
	}
	
	function load()
	{
		canvas = document.getElementById("cv");
		ctx = canvas.getContext("2d");
		myobject = new Object();
		
		ctx.lineWidth = "1.2";
		ctx.strokeStyle = "rgb(250, 250, 255)";

		loop();
	}