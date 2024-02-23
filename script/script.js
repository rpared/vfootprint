$(document).ready(function () {
  function populateDays() {
    const select = document.getElementById("dayList");

    // Loop from 0 to 29 (inclusive)
    for (let i = 0; i <= 29; i++) {
      // Create an option element
      const option = document.createElement("option");

      // Set the option value and text
      option.value = i;
      option.text = i;

      // Add the option to the select element
      select.appendChild(option);
    }
  }
  // Call the function to populate the list
  populateDays();

  function populateMonths() {
    const select = document.getElementById("monthList");

    // Loop from 0 to 11 (inclusive)
    for (let i = 0; i <= 11; i++) {
      // Create an option element
      const option = document.createElement("option");

      // Set the option value and text
      option.value = i;
      option.text = i;

      // Add the option to the select element
      select.appendChild(option);
    }
  }
  // Call the function to populate the list
  populateMonths();

  function populateYears() {
    const select = document.getElementById("yearList");

    // Loop from 0 to 100 (inclusive)
    for (let i = 0; i <= 100; i++) {
      // Create an option element
      const option = document.createElement("option");

      // Set the option value and text
      option.value = i;
      option.text = i;

      // Add the option to the select element
      select.appendChild(option);
    }
  }
  // Call the function to populate the list
  populateYears();

  // const selectOptions = document.querySelectorAll("#yearList option");
  // selectOptions.forEach((item) => {
  //   item.style.fontFamily = "Kumbh Sans";
  //   item.style.fontSize = "0.8em";
  // });

  let vLabelHeader = document.querySelector("#vLabelHeader");

  const addFirstName = () => {
    if ($("#name-field").val()) {
      vLabelHeader.innerHTML =
        "Until now " + $("#name-field").val() + " has saved:";
    } else {
      vLabelHeader.innerHTML = "Until now I have saved:";
    }
  };

  let calculateVFootprint = () => {
    console.log($("#dayList"));
    console.log(vLabelHeader);
    addFirstName();

    if (
      $("#name-field").val() &&
      $("#dayList").val() == 1 &&
      $("#monthList").val() == 0 &&
      $("#yearList").val() == 0
    ) {
      vLabelHeader.innerHTML =
        "Every day " + $("#name-field").val() + " saves:";
    } else if (
      $("#name-field").val() === null ||
      ($("#name-field").val() === "" &&
        $("#dayList").val() == 1 &&
        $("#monthList").val() == 0 &&
        $("#yearList").val() == 0)
    ) {
      vLabelHeader.innerHTML = "Every day I save:";
    }

    let landAnimals =
      $("#dayList").val() * 0.0314 +
      $("#monthList").val() * 0.955 +
      $("#yearList").val() * 11.4605;
    $("#vLabeltext #landAnimals").text(landAnimals.toFixed(2));

    let seaAnimals =
      $("#dayList").val() * 0.1494 +
      $("#monthList").val() * 4.5469 +
      $("#yearList").val() * 54.5634;
    $("#vLabeltext #seaAnimals").text(seaAnimals.toFixed(2));

    let co2 =
      $("#dayList").val() * 20 +
      $("#monthList").val() * 600 +
      $("#yearList").val() * 7300;
    $("#vLabeltext #co2").text(co2.toFixed());

    let water =
      $("#dayList").val() * 1100 +
      $("#monthList").val() * 33458.33 +
      $("#yearList").val() * 401500;
    $("#vLabeltext #water").text(water.toFixed());

    let grains =
      $("#dayList").val() * 45 +
      $("#monthList").val() * 1216.66 +
      $("#yearList").val() * 14600;

    $("#vLabeltext #grains").text(grains.toFixed());

    // Loading the infinite symbol
    if (
      $("#dayList").val() == 0 &&
      $("#monthList").val() == 0 &&
      $("#yearList").val() == 0
    ) {
      $("#animalSuffering").text("No");
    } else {
      $("#animalSuffering").text("∞");
    }
  };

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
    let imageUrl = screenshotURL(vLabelDiv);
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

  //BACKGROUND IMAGE CHANGE
  let changePic = () => {
    if ($("#vLabelPicSelect").val() === "calf") {
      $("#vLabelPic").attr("src", "assets/vlabel-calf.png");
    } else if ($("#vLabelPicSelect").val() === "leaves") {
      $("#vLabelPic").attr("src", "assets/vlabel-leaves.png");
    } else if ($("#vLabelPicSelect").val() === "bunny") {
      $("#vLabelPic").attr("src", "assets/vlabel-bunny.png");
    } else if ($("#vLabelPicSelect").val() === "pigglet") {
      $("#vLabelPic").attr("src", "assets/vlabel-pigglet.png");
    }
  };

  // EVENT LISTENERS
  $("#name-field").on("change", addFirstName);
  $("#dayList").on("change", calculateVFootprint);
  $("#monthList").on("change", calculateVFootprint);
  $("#yearList").on("change", calculateVFootprint);
  $("#vLabelPicSelect").on("change", changePic);

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
