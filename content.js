function applyFix() {
  const targetElement = document.querySelector('div.flex-1.overflow-hidden.\\@container\\/thread');
  
  if (targetElement) {
    targetElement.className = targetElement.className.replace("overflow-hidden", "overflow-auto");
    console.log("Fix applied.");
  } else {
    console.warn("Target element not found.");
  }
}

const observer = new MutationObserver(() => {
  if (document.readyState === "complete") {
    applyFix();
  }
});

observer.observe(document, {
  childList: true,
  subtree: true
});

if (document.readyState === "complete") {
  applyFix();
}
