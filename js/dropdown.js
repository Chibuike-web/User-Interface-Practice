const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const options = document.querySelectorAll(".select");
const paragraphs = document.querySelectorAll(".dropdown-menu p");
const buttonParagraph = document.querySelector(".wrapper p");

dropdownToggle.addEventListener("click", handleDropdownToggle);
options.forEach((option, index) => {
	option.addEventListener("click", handleSelect);

	function handleSelect(e) {
		e.preventDefault();
		buttonParagraph.textContent = paragraphs[index].textContent;
		// dropdownMenu.classList.remove("visible");
	}
});

function handleDropdownToggle(e) {
	e.preventDefault();
	dropdownMenu.classList.toggle("visible");
}

document.addEventListener("click", handleOutsideClick);

function handleOutsideClick(e) {
	e.preventDefault();
	if (!dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
		dropdownMenu.classList.remove("visible");
	}
}
