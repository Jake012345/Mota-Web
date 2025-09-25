let header = document.querySelector("header")
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
		if (el.nodeName != "a") {
			el.classList.add('under-cursor');
		};
	});
});

function header_collapse() {
	hide_buttons()
	setTimeout(function () {
		header.classList.remove("header-expand")
		set_arrow_to("down")
	}, 500);
}

function set_arrow_to(direction) {
	header.querySelectorAll("img").forEach(arrow => {
		if (arrow.classList.contains("arrow-up")) {
			if (direction === "down") {
				arrow.classList.add("hidden")
			}
			else {
				arrow.classList.remove("hidden")
			}
		}
		else {
			if (arrow.classList.contains("arrow-down")) {
				if (direction === "down") {
					arrow.classList.remove("hidden")
				}
				else {
					arrow.classList.add("hidden")
				}
			}
		}
	});
}

function show_buttons() {
	header.querySelectorAll("div").forEach(element => {
		if (element.classList.contains("button-container")) {
			element.classList.remove("hidden")
			element.querySelectorAll(':scope > *').forEach(button => {
				console.log(element.tagName)
				if (button.tagName === "a") {
					console.log(element)
					button.firstChild.classList.remove("nano")
				}
				else {
					button.classList.remove("nano")
				}
			});
		}
	});
}

function hide_buttons() {
	header.querySelectorAll("div").forEach(element => {
		if (element.classList.contains("button-container")) {
			setTimeout(function () {
				element.classList.add("hidden")
			}, 0.2);
			element.querySelectorAll(':scope > *').forEach(button => {
				if (button.nodeType === "a") {
					button.firstChild.nodeName.add("nano")
				}
				else {
					button.classList.add("nano")
				}
			});
		}
	});
}