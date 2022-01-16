document.addEventListener('click', event => {
  const elementMouseIsOver = document.querySelectorAll(":hover");
  const element = elementMouseIsOver[elementMouseIsOver.length - 1];
  const type = element.nodeName;

  //let textEntry = document.querySelector(".slateTextArea-27tjG0 > div:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)");

  if (type == "BUTTON" && element.getAttribute("data-type") == "emoji")
  {
    const emoji = element.firstChild.src;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(emoji);
    }

    document.querySelector(".premiumPromo-1eKAIB").remove();
  }
  else if (type == "IMG" && element.getAttribute("data-type") == "sticker")
  {
    const sticker = element.src.replace("size=80", "size=160");
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(sticker);
    }

    document.querySelector(".upsellWrapper-3KE9GX").remove();
  }
});