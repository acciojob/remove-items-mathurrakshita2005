//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const removeBtn = document.querySelector('input[type="button"]');

removeBtn.addEventListner("click",()=> {
	colorSelect.remove(colorSelect.selectedIndex);
}
	)
