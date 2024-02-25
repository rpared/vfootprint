const url = "https://rpared.github.io/vfootprint/";
function launchPupeeteer() {
  const puppeteer = require("puppeteer");

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Find the div with the ID "vLabel"
    const vLabelDiv = await page.waitForSelector("#vLabel");

    const { x, y, width, height } = await vLabelDiv.boundingBox();

    await page.setViewport({
      width: 700,
      height: 1000,
      deviceScaleFactor: 2, // Include deviceScaleFactor here
    });

    await vLabelDiv.screenshot({
      path: "vlabels/my-vlabel.png",
      clip: { x: x, y: y - 2, width: 530, height: 500 }, // Adjust as needed
      deviceScaleFactor: 2,
    });
    await browser.close();
  })();
}

$(document).ready(function () {
  const shareInstagram = () => {
    // Replace 'your-image-url' with the URL of the image you want to share
    var imageUrl = $("#vLabelBckgrnd");

    // Replace 'your-caption' with the desired caption for the image
    var caption = "We all can make a difference!";

    // Construct the Instagram share URL
    var instagramUrl =
      "https://www.instagram.com/share?url=" +
      encodeURIComponent(imageUrl) +
      "&caption=" +
      encodeURIComponent(caption);

    // Open a new window or redirect the current window to the Instagram share URL
    window.open(instagramUrl, "_blank");
  };

  //FACEBOOK
  launchPupeeteer();
  const shareFacebook = (target) => {
    // Replace 'your-image-url' with the URL of the image you want to share
    function screenshotURL(target) {
      html2canvas(target).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        const img = new Image();
        img.src = base64image;
        console.log("Screenshot URL:", img.src);
        return img.src; // Return the base64 encoded image data
      });
    }
    console.log(screenshotURL(vLabelDiv));
    let imageUrl = url + "vlabels/my-vlabel.png";
    // "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png";

    // Replace 'your-caption' with the desired caption for the image
    var caption = "my_vegan_footprint";

    // Construct the Facebook share URL
    var facebookUrl = "https://www.facebook.com/share.php?u=" + imageUrl;

    // Open a new window or redirect the current window to the Facebook share URL
    window.open(facebookUrl, "_blank");
  };

  //LINKEDIN
  const shareLinkedIn = (target) => {
    // Replace 'your-image-url' with the URL of the image you want to share
    function screenshotURL(target) {
      html2canvas(target).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        const img = new Image();
        img.src = base64image;
        console.log("Screenshot URL:", img.src);
        return img.src; // Return the base64 encoded image data
      });
    }

    let imageUrl = screenshotURL(vLabelDiv);

    // Replace 'your-caption' with the desired caption for the image
    var caption = "my_vegan_footprint";

    // Construct the LinkedIn share URL
    var linkedInUrl =
      "https://www.linkedin.com/sharing/share-offsite/?url=" +
      encodeURIComponent(imageUrl);

    // Open a new window or redirect the current window to the LinkedIn share URL
    window.open(linkedInUrl, "_blank");
  };

  // SCREEN CAPTURE
  const vLabelDiv = document.querySelector("#vLabel");
  const canvasContainer = document.querySelector("#canvasContainer");

  const getScreenshotOfElement = async (element) => {
    const canvas = await html2canvas(element);
    canvasContainer.innerHTML = "";
    canvasContainer.appendChild(canvas);
  };

  function downloadScreenshot(target) {
    html2canvas(target).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      let anchor = document.createElement("a");
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "my-vfootprint.png");
      anchor.click();
      anchor.remove();
    });
  }

  // EVENT LISTENERS

  $("#instagramBtn").on("click", function () {
    getScreenshotOfElement(vLabelDiv);
  });
  $("#downloadBtn").on("click", function () {
    downloadScreenshot(vLabelDiv);
  });
  $("#facebookBtn").on("click", function () {
    shareFacebook(vLabelDiv);
  });
  $("#linkedInBtn").on("click", function () {
    shareLinkedIn(vLabelDiv);
  });
});
