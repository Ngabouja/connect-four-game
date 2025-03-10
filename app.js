function createContainer(classContainer = "", id = "", type) {
	const element = document.createElement(type);

	if (classContainer) element.classList.add(classContainer);
	if (id) element.id = id;

	return element;
}

function createText(classText = "", id = "", text = "", type) {
	const element = document.createElement(type);

	if (classText) element.classList.add(classText);
	if (id) element.id = id;
	element.textContent = text;

	return element;
}

function creatImg(classImg = "", id = "", src, alt) {
	const img = document.createElement("img");

	if (classImg) img.classList.add(classImg);
	if (id) img.id = id;
	img.src = src;
	img.alt = alt;

	return img;
}

function creatplay() {
	const playerGamer = createContainer("player_gamer") ;
}
