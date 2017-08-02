var nav_bar = document.getElementsByClassName('nav_bar')[0];
var menu = document.querySelector('.top_header > ul');
function nav() {
	if (menu.style.display === 'none') {
		menu.style.display='flex'
	}
	else {
		menu.style.display = 'none'
	};
	console.log('hi');
};
nav_bar.onclick = nav;



 