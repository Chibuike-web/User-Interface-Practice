const data = [
	{
		id: 0,
		heading: "HTML",
		content:
			"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
	},
	{
		id: 1,
		heading: "CSS",
		content:
			"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML",
	},
	{
		id: 2,
		heading: "JavaScript",
		content:
			"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
	},
];

const tabs = document.querySelectorAll(".tab");
const paragraph = document.querySelector(".content p");

tabs.forEach((tab, index) => {
	tab.addEventListener("click", (event) => {
		event.preventDefault();

		// tabs.forEach((t) => {
		// 	if (t.classList.contains("tab-active")) {
		// 		t.classList.remove("tab-active");
		// 	}
		// });

		// Deactivate all tabs
		tabs.forEach((t) => t.classList.remove("tab-active"));

		tab.classList.add("tab-active");

		// data.forEach((datum) => {
		// 	if (tab.classList.contains("tab-active") && index === datum.id) {
		// 		paragraph.textContent = datum.content;
		// 	}
		// });

		// Update the paragraph content
		paragraph.textContent = data[index].content;
	});
});
