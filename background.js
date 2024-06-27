chrome.action.onClicked.addListener((tab) => {
  const youtubeRegex = /https:\/\/www\.youtube\.com\/watch\?v=.+/;
  const isYoutubeVideo = youtubeRegex.test(tab.url);

  if (isYoutubeVideo) {
    const videoUrl = tab.url;
    const newUrl = videoUrl.replace("youtube.com", "youtubepi.com");
    chrome.tabs.create({ url: newUrl });
  } else {
    chrome.action.setPopup({ popup: "popup.html" });
    chrome.action.openPopup(); // Programmatically open the popup
  }
});
