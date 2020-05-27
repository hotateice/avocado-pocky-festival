window.onload = ()=>{
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");

	const hoya1 = new Image();
	hoya1.src ="img/po_5.png";
	hoya1.onload =()=>{
		ctx.drawImage(hoya1,7,100);
	}

	const avo = new Image();
	avo.src ="img/avo.png";
	avo.onload = ()=>{
		ctx.drawImage(avo,300,200);
	}

	const say = new Image();
	say.src="img/say.png"
	var word = ['チョコ','ココナッツ','いちご','抹茶','チョコミント'];

	var random = Math.floor(Math.random()*word.length);
	say.onload = ()=>{
		ctx.drawImage(say,300,60);
		ctx.font = '10pt Arial';
		ctx.fillText(word[random]+'くれ',330,130);

	}	
};		