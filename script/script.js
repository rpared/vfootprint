import {
  engTranslation,
  spaTranslation,
  engQuote,
  spaQuote,
} from "./translations.js";

let spanish = false;

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
  // Calling the function to populate the list
  populateYears();

  //CALCULATIONS
  let vLabelHeader = document.querySelector("#vLabelHeader");

  const addFirstName = () => {
    if (!spanish) {
      if ($("#name-field").val()) {
        vLabelHeader.innerHTML =
          "Until now " + $("#name-field").val() + " has saved:";
      } else {
        vLabelHeader.innerHTML = "Until now I have saved:";
      }
    }
    if (spanish) {
      if ($("#name-field").val()) {
        vLabelHeader.innerHTML =
          $("#name-field").val() + " ha salvado/ahorrado:";
      } else {
        vLabelHeader.innerHTML = "Hasta hoy he salvado/ahorrado:";
      }
    }
  };

  let finalquoteShow = false;

  let calculateVFootprint = () => {
    console.log($("#dayList"));
    console.log(vLabelHeader);
    addFirstName();
    //Text For just one day Vegan:
    if (
      !spanish &&
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

    if (
      spanish &&
      $("#name-field").val() &&
      $("#dayList").val() == 1 &&
      $("#monthList").val() == 0 &&
      $("#yearList").val() == 0
    ) {
      vLabelHeader.innerHTML =
        "Cada día " + $("#name-field").val() + " salva/ahorra:";
    } else if (
      $("#name-field").val() === null ||
      ($("#name-field").val() === "" &&
        $("#dayList").val() == 1 &&
        $("#monthList").val() == 0 &&
        $("#yearList").val() == 0)
    ) {
      vLabelHeader.innerHTML = "Cada día salvo/ahorro:";
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

    // Loading the infinite symbol, Hero section Guy & the footer Quote
    if (
      $("#dayList").val() == 0 &&
      $("#monthList").val() == 0 &&
      $("#yearList").val() == 0
    ) {
      $("#animalSuffering").text("No");
      $("#vLabelFooter").css("display", "none");
      $("#guy").attr("src", "assets/DoubtfulGuy2-Banner.png");
    } else {
      $("#animalSuffering").text("∞");
      $("#vLabelFooter").css("display", "block");
      $("#guy").attr("src", "assets/LovingGuy2-Banner.png");
    }

    //Final Quote
    if (!finalquoteShow) {
      let finalQuote = document.createElement("div");
      if (!spanish) {
        finalQuote.innerHTML = engQuote;
      } else if (spanish) {
        finalQuote.innerHTML = spaQuote;
      }
      finalquoteShow = true;
      finalQuote.classList.add("final-quote");
      $("main").append(finalQuote);
    }
  };

  // BACKGROUND IMAGE CHANGE
  let changePic = () => {
    if ($("#vLabelPicSelect").val() === "calf") {
      $("#vLabelPic").attr("src", "assets/vlabel-calf.png");
    } else if ($("#vLabelPicSelect").val() === "leaves") {
      $("#vLabelPic").attr("src", "assets/vlabel-leaves.png");
    } else if ($("#vLabelPicSelect").val() === "bunny") {
      $("#vLabelPic").attr("src", "assets/vlabel-bunny.png");
    } else if ($("#vLabelPicSelect").val() === "chick") {
      $("#vLabelPic").attr("src", "assets/vlabel-chick.png");
    } else if ($("#vLabelPicSelect").val() === "fish") {
      $("#vLabelPic").attr("src", "assets/vlabel-fish.png");
    } else if ($("#vLabelPicSelect").val() === "pigglet") {
      $("#vLabelPic").attr("src", "assets/vlabel-pigglet.png");
    }
  };

  // IMAGE ATTRIBUTIONS
  let toggleAttributions = () => {
    if (!spanish) {
      $("#attributions").toggle("style", "display: inline");
      const buttonText = $("#attributions").is(":visible")
        ? "<strong>Image Attribution ↑</strong>"
        : "<strong>Image Attribution ↓</strong>";
      $("footer button").html(buttonText);
    }
    if (spanish) {
      $("#attributions").toggle("style", "display: inline");
      const buttonText = $("#attributions").is(":visible")
        ? "<strong>Atribución de Imágenes ↑</strong>"
        : "<strong>Atribución de Imágenes ↓</strong>";
      $("footer button").html(buttonText);
    }
  };

  // ESPAÑOL - ENGLISH

  let toggleSpanish = () => {
    if (spanish == false) {
      spanish = true;
    } else {
      spanish = false;
    }

    if (spanish) {
      spaTranslation();
      $("#name-field").val(null);
      $("#dayList").val(0);
      $("#monthList").val(0);
      $("#yearList").val(0);
      $("#guy").attr("src", "assets/DoubtfulGuy2-Banner.png");
    }
    if (spanish == false) {
      engTranslation();
      $("#name-field").val(null);
      $("#dayList").val(0);
      $("#monthList").val(0);
      $("#yearList").val(0);
      $("#guy").attr("src", "assets/DoubtfulGuy2-Banner.png");
    }
  };

  // EVENT LISTENERS
  $(".menubtn:eq(1)").on("click", toggleSpanish);
  $("#name-field").on("change", addFirstName);
  $("#dayList").on("change", calculateVFootprint);
  $("#monthList").on("change", calculateVFootprint);
  $("#yearList").on("change", calculateVFootprint);
  $("#vLabelPicSelect").on("change", changePic);
  $("footer button").on("click", toggleAttributions);
});

export { spanish };
