//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const removeBtn = document.querySelector('input[type="button"]');

removeBtn.addEventListner("click",function ()=> {
	const selectedOption = color.Select.options[colorSelect.selectedIndex];

	if(selectedOption){
		colorSelect.removeChild(selectedOption);
	}
}
	)
