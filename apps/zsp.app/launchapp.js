function loadingScript(currentpath) {
    let zsp = AliceWM.create("ZSP interpreter")

    let iframe = document.createElement("iframe")
    iframe.style = "top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0;"
    iframe.setAttribute("src", "zsp.app/playground.html")

    zsp.content.appendChild(iframe)
}