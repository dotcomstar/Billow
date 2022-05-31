// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
    // document.body.innerHTML = "Hello";  // Modify whole page
    document.getElementsByClassName("sc-jJoQJp bhImaV") = "Test";  // Try to remove element on Zillow
  });
}

// When the button is hovered, inject change color of the button to the color variable for the page
changeColor.addEventListener("mouseenter", async () => {
  chrome.storage.sync.get("color", ({ color }) => {
    var sheet = document.createElement('style');
    sheet.innerHTML = `button:hover {background: ${color};}`;
    document.body.appendChild(sheet);
  });
});