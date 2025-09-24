function header_expand() {
	let header = document.querySelector("header")

	header.classList.add("header-expand")
}

function header_collapse() {
	let header = document.querySelector("header")

	header.classList.remove("header-expand")
}