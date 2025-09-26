let header = document.querySelector("header")

document.querySelectorAll(".header-scaleable").forEach(element => {
	element.classList.add("header-descaled")
})

function header_expand() {
	header.classList.add("header-expand")
	set_arrow_to("up")
	setTimeout(function() {
		show_buttons()
	}, 1000);

}

document.addEventListener('mousemove', (e) => {
	// Remove previous highlights
	document.querySelectorAll('.under-cursor').forEach(el => {
		el.classList.remove('under-cursor');
	});

	// Get all elements at current mouse position
	const elements = document.elementsFromPoint(e.clientX, e.clientY);

	// Add highlight class to all elements
	elements.forEach(el => {
		if (el.nodeType != "A") {
			el.classList.add('under-cursor');
		};
	});
});

function header_collapse() {
	hide_buttons()
	setTimeout(function () {
		header.classList.remove("header-expand")
		set_arrow_to("down")
	}, 100);
}

function set_arrow_to(direction) {
	let arrow_up = header.querySelector(".arrow-up")
	let arrow_down = header.querySelector(".arrow-down")
	if (direction === "down") {
		arrow_up.classList.add("hidden")
		arrow_down.classList.remove("hidden")
	}
	else {
		arrow_up.classList.remove("hidden")
		arrow_down.classList.add("hidden")
	}
}

function show_buttons() {
	header.querySelector(".button-container").classList.remove("hidden")
	header.querySelectorAll(".header-scaleable").forEach(element => {
		element.classList.remove("header-descaled")
	})
}

function hide_buttons() {
	//		setTimeout(function () {
	//			header.querySelector(".button-container").classList.add("hidden")
	//		}, 1000);
	header.querySelectorAll(".header-scaleable").forEach(element => {
		element.classList.add("header-descaled")
	})
}