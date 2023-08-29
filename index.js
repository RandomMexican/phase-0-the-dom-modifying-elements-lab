main.remove();
const element = document.getElementsByName("head");
const newHeader = document.createElement("h1");
newHeader.innerHTML = `<h1>Mario is the champion</h>`
newHeader.id = "victory"
element.append(newHeader);

