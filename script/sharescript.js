$(document).ready(function () {
  //Attempts to share the image directly in social media, it seems node.js is required to share a dnamically created image
  //which implies a cloud server

  // const shareInstagram = () => {
  //   // Replace 'your-image-url' with the URL of the image you want to share
  //   var imageUrl = $("#vLabelBckgrnd");

  //   // Replace 'your-caption' with the desired caption for the image
  //   var caption = "We all can make a difference!";

  //   // Construct the Instagram share URL
  //   var instagramUrl =
  //     "https://www.instagram.com/share?url=" +
  //     encodeURIComponent(imageUrl) +
  //     "&caption=" +
  //     encodeURIComponent(caption);

  //   // Open a new window or redirect the current window to the Instagram share URL
  //   window.open(instagramUrl, "_blank");
  // };

  // //FACEBOOK
  // const shareFacebook = (target) => {
  //   // Replace 'your-image-url' with the URL of the image you want to share
  //   function screenshotURL(target) {
  //     html2canvas(target).then((canvas) => {
  //       const base64image = canvas.toDataURL("image/png");
  //       const img = new Image();
  //       img.src = base64image;
  //       console.log("Screenshot URL:", img.src);
  //       return img.src; // Return the base64 encoded image data
  //     });
  //   }
  //   console.log(screenshotURL(vLabelDiv));
  //   let imageUrl = url + "vlabels/my-vlabel.png";
  //   // "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png";

  //   // Replace 'your-caption' with the desired caption for the image
  //   var caption = "my_vegan_footprint";

  //   // Construct the Facebook share URL
  //   var facebookUrl = "https://www.facebook.com/share.php?u=" + imageUrl;

  //   // Open a new window or redirect the current window to the Facebook share URL
  //   window.open(facebookUrl, "_blank");
  // };

  // //LINKEDIN
  // const shareLinkedIn = (target) => {
  //   // Replace 'your-image-url' with the URL of the image you want to share
  //   function screenshotURL(target) {
  //     html2canvas(target).then((canvas) => {
  //       const base64image = canvas.toDataURL("image/png");
  //       const img = new Image();
  //       img.src = base64image;
  //       console.log("Screenshot URL:", img.src);
  //       return img.src; // Return the base64 encoded image data
  //     });
  //   }

  //   let imageUrl = screenshotURL(vLabelDiv);

  //   // Replace 'your-caption' with the desired caption for the image
  //   var caption = "my_vegan_footprint";

  //   // Construct the LinkedIn share URL
  //   var linkedInUrl =
  //     "https://www.linkedin.com/sharing/share-offsite/?url=" +
  //     encodeURIComponent(imageUrl);

  //   // Open a new window or redirect the current window to the LinkedIn share URL
  //   window.open(linkedInUrl, "_blank");
  // };

  // SCREEN CAPTURE
  const vLabelDiv = document.querySelector("#vLabel");
  const canvasContainer = document.querySelector("#canvasContainer");
  let hasShownPopup = false;

  // const getScreenshotOfElement = async (element) => {
  //   const canvas = await html2canvas(element);
  //   canvasContainer.innerHTML = "";
  //   canvasContainer.appendChild(canvas);
  // };

  function downloadScreenshot(target) {
    const scale = window.devicePixelRatio * 2 || 1;

    // Get the dimensions of the target div
    const targetRect = target.getBoundingClientRect();

    // Create a canvas with the same dimensions as the target div
    const canvas = document.createElement("canvas");
    canvas.width = targetRect.width * scale;
    canvas.height = targetRect.height * scale;

    const context = canvas.getContext("2d");
    context.scale(scale, scale);

    html2canvas(target, {
      canvas: canvas, // Pass the custom canvas
    }).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      let anchor = document.createElement("a");
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "my-vfootprint.png");
      anchor.click();
      anchor.remove();
      alert(
        `The photo will be stored in your Downloads Folder.
        On mobile find it with the Files app.`
      );
    });
  }

  //PBT PopUp
  let pbtPopup = () => {
    let pbt = document.createElement("div");
    pbt.innerHTML = `
              <div class="pbt-popup-container"><button class="pbt-close-btn">x</button><a href="https://plantbasedtreaty.org/" target="_blanc"><img style="border-radius:16px; box-shadow: 0 0 10px #000" src="assets/PBT_PopUp.gif" alt="Sign the Plant Based Treaty"></a></div>
            `;
    pbt.classList.add("pbt-popup");

    const imgPBT = pbt.querySelector("img");
    imgPBT.onload = function () {
      if (!hasShownPopup) {
        setTimeout(pbtDisplayPopup, 1000);
      }
    };

    function pbtDisplayPopup() {
      console.log("popup triggerred");

      hasShownPopup = true;
      console.log(hasShownPopup);
      // Close button functionality
      pbt
        .querySelector(".pbt-close-btn")
        .addEventListener("click", function () {
          document.body.removeChild(pbt);
        });

      // Detect all clicks on the document
      document.addEventListener("click", function (event) {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".pbt-popup-container")) return;
        // If user clicks outside the element, hide it!
        document.body.removeChild(pbt);
      });

      document.body.appendChild(pbt); // Append the element to the body
    }
  };

  // EVENT LISTENERS

  $("#downloadBtn").on("click", function () {
    downloadScreenshot(vLabelDiv);
    pbtPopup();
  });
  // $("#instagramBtn").on("click", function () {
  //   getScreenshotOfElement(vLabelDiv);
  // });
  // $("#facebookBtn").on("click", function () {
  //   shareFacebook(vLabelDiv);
  // });
  // $("#linkedInBtn").on("click", function () {
  //   shareLinkedIn(vLabelDiv);
  // });
});
