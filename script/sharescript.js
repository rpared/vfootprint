// import { spanish } from "./script.js";

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

  let facebookAppVerify = () => {
    if (
      navigator.userAgent.match(/FBAN|FBAV/i) ||
      typeof FB_IAB !== "undefined" ||
      document.documentElement.classList.contains("in-app-browser")
    ) {
      let fbookWarning = document.createElement("div");
      console.log("fbook verify launched");
      fbookWarning.innerHTML = `<div class="pbt-popup-container fbook"><button class="pbt-close-btn">x</button><p>Facebook's in-app web view has limited functionality. To download open vfootprint.com in a browser like Chrome or Safari.</p></div>`;
      fbookWarning.classList.add("pbt-popup");

      // Close button functionality
      fbookWarning
        .querySelector(".pbt-close-btn")
        .addEventListener("click", function () {
          document.body.removeChild(fbookWarning);
        });

      document.body.appendChild(fbookWarning); // Append the element to the body

      // // Detect all clicks on the document
      // document.addEventListener("click", function (event) {
      //   // If user clicks inside the element, do nothing
      //   if (event.target.closest(".fbook")) return;
      //   // If user clicks outside the element, hide it!
      //   document.body.removeChild(fbookWarning);
      // });
    }
  };

  function downloadScreenshot(target) {
    const scalea = window.devicePixelRatio || 1; // Handle potential undefined value
    html2canvas(target, {
      scale: 2,
      allowTaint: true, // Handle cross-origin images
      imageTimeout: 15000, // Adjust for slow-loading images
      logging: true, // Enable logging for debugging
      removeContainer: true, // Remove the target element after rendering
      backgroundColor: null, // Transparent background
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      useCORS: true, // Handle cross-origin images
      proxy: "https://cors-anywhere.herokuapp.com/", // Proxy for cross-origin images
    }).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      let anchor = document.createElement("a");
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "my-vfootprint.png");
      anchor.click();
      anchor.remove();

      if (!spaLanguage) {
        alert(
          `The photo will be stored in your Downloads Folder.
On mobile find it with the Files app in Downloads or Chrome folder.`
        );
      } else if (spaLanguage) {
        alert(
          `La foto se guardará en la carpeta de Descargas.
En móvil puede encontrarse con la app Files en Descargas o la carpeta de Chrome.`
        );
      }
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
  let spaLanguage = false;
  let toggleSpanishDumbRepeatedFunction = () => {
    if (spaLanguage == false) {
      spaLanguage = true;
    } else {
      spaLanguage = false;
    }
  };

  // EVENT LISTENERS

  $("#downloadBtn").on("click", function () {
    facebookAppVerify();
    downloadScreenshot(vLabelDiv);
    pbtPopup();
  });
  $(".menubtn:eq(1)").on("click", toggleSpanishDumbRepeatedFunction);
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
