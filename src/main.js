import { betterImageViewer } from "./betterImageViewer.js";
async function main() {
  if (location.hash === "#/blank") {
    navigation.addEventListener("navigatesuccess", updateHash, { once: true });
  } else {
    updateHash();
  }
  /**
   * 根据页面哈希值决定加载页面模块
   * @returns {void}
   */
  function updateHash() {
    let hash = location.hash;
    if (hash === "#/blank") {
      return;
    }
    if (hash.includes("#/image-viewer")) {
      app.classList.add("lite-tools-image-viewer");
      betterImageViewer();
    }
  }
}

main();
