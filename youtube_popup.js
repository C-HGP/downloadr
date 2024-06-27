document.getElementById("downloadMp3Btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const videoUrl = tab.url;
    const newUrl = videoUrl.replace("youtube.com", "youtubepi.com");
    chrome.tabs.create({ url: newUrl });
  });
});
