let engTranslation = () => {
  $(".menubtn:eq(0)").text("Suggested");
  $(".menubtn:eq(1)").text("Español");
  $("#h1-banner").text("Does one vegan make a difference?");
  $("#h2-banner").html(
    `Calculate how much you have saved or would save as a vegan and <strong>share it</strong>`
  );
  $(".input-side p:eq(0)").text("Your first name:");
  $("#name-field").attr("placeholder", "Optional");
  $(".input-side p:eq(1)").text("How long have you been vegan?");
  $(".input-side label:eq(0)").text("Days");
  $(".input-side label:eq(1)").text("Months");
  $(".input-side label:eq(2)").text("Years");
  $("#vLabelHeader").text("Until now I have saved:");
  $("#vLabeltext p:eq(0) span").text("Land Animals");
  $("#vLabeltext p:eq(1) span").text("Lbs. de animales marinos");
  $("#vLabeltext p:eq(2) span").text("Lbs. of CO₂");
  $("#vLabeltext p:eq(3) span").text("Lts. of water");
  $("#vLabeltext p:eq(4) span").text("Lbs. of grains");
  $("#vLabeltext p:eq(5) span").text("Animal Suffering");
  $("#vLabeltext p:eq(0)").html(
    `<span id="landAnimals">0</span> Land Animals<sup>1</sup>`
  );
  $("#vLabeltext p:eq(1)").html(
    `<span id="seaAnimals">0</span> Lbs. of Sea Animals<sup>2</sup>`
  );
  $("#vLabeltext p:eq(2)").html(
    `<span id="co2">0</span> Lbs. of CO₂<sup>3</sup>`
  );
  $("#vLabeltext p:eq(3)").html(
    `<span id="water">0</span> Lts. of water<sup>3</sup>`
  );
  $("#vLabeltext p:eq(4)").html(
    `<span id="grains">0</span> Lbs. of grains<sup>3</sup>`
  );
  $("#vLabeltext p:eq(5)").html(
    `<span id="animalSuffering">No</span> Animal Suffering`
  );
  $("#sharePanel p:eq(0)").text("Change background image:");
  $("#vLabelPicSelect option:eq(0)").text("Pigglet");
  $("#vLabelPicSelect option:eq(1)").text("Calf");
  $("#vLabelPicSelect option:eq(2)").text("Leaves");
  $("#vLabelPicSelect option:eq(3)").text("Bunny");
  $("#vLabelPicSelect option:eq(4)").text("Chick");
  $("#vLabelPicSelect option:eq(5)").text("Fish");
  $("#sharePanel p:eq(1)").text("Download a photo your VFootprint:");
  $(".external-links p").text("Check these out:");
  $("footer div:eq(0)").html(engFooter);
  $("footer button").html("<strong>Image Attribution ↓</strong>");
  $("#attributions").html(engAttributions);
};
let engFooter = `<strong>Sources & Footnotes: </strong><br>
      <sup>1</sup> Land animals data is dated 2023, estimated at 92.2 billion yearly by: <a href="https://www.humanesociety.org/blog/more-animals-ever-922-billion-are-used-and-killed-each-year-food#:~:text=The%20most%20recent%20data%20about,the%20Food%20and%20Agriculture%20Organization." target="_blank">https://www.humanesociety.org</a>. Data originally by UN - FAO. <br>
      <sup>2</sup> Fish and sea animals data is dated 2020, estimated at 213,916,126 tons a year by: <a href="https://ourworldindata.org/grapher/capture-and-aquaculture-production?tab=table&time=latest" target="_blank">https://ourworldindata.org</a>. Fish and seafood production is measured by weight as the sum of seafood from wild catch and fish farming (aquaculture). Data originally by UN - FAO. <br>
      
      *Land animal calculations are made dividing by a 2023 World population set at 8,045 million by: <a href="https://www.worldometers.info/world-population/#total" target="_blank">https://www.worldometers.info</a>  <br>
      *Sea animal calculations are made dividing by a 2020 World population set at 7,841 million by: <a href="https://www.worldometers.info/world-population/#total" target="_blank">https://www.worldometers.info</a> <br>
      *Calculations are estimates, averaging up world consumption which is skewed in different countries. 
      
      <sup>3</sup> Estimations from: <a href="https://www.cowspiracy.com/facts" target="_blank">https://www.cowspiracy.com</a>
      <em> "Each day, a person who eats a vegan diet saves 1,100 gallons of water, 45 pounds of grain, 30 sq ft of forested land, 20 lbs CO2 equivalent, and one animal's life.   [xiv]"<br>
      </em>
      <hr>
      `;
let engAttributions = `
          <li><a href="https://www.pexels.com/photo/uncertain-black-man-in-hoodie-in-studio-6974936/">Photo</a> by SHVETS</li>
          <li><a href="https://www.pexels.com/photo/piglet-on-brown-grass-4813937/">Photo</a> by Brett Sayles</li>
          <li><a href="https://www.pexels.com/photo/a-cute-calf-in-the-farmland-8024491/">Photo</a> by Tuğba Altunbaş</li>
          <li><a href="https://www.pexels.com/photo/close-up-photo-of-a-yellow-chick-on-the-grass-7440694/">Photo</a> by CRIATORIO NEVES</li>
          <li><a href="https://www.pexels.com/photo/close-up-photography-of-leaves-with-droplets-807598/">Photo</a> by sohail nachiti</li>
          <li><a href="https://www.pexels.com/photo/white-rabbit-on-green-grass-4001296/">Photo</a> by Satyabratasm</li>
          <li><a href="https://www.pexels.com/photo/clown-fish-on-white-corals-4781926/">Photo</a> by Ben Phillips</li>
        
        </ul>
        <hr>
        <a href="https://roger.costra.ec" target="_blank">- © Roger Paredes 2024 -</a>
      `;

let spaTranslation = () => {
  $(".menubtn:eq(0)").text("Sugeridos");
  $(".menubtn:eq(1)").text("English");
  $("#h1-banner").text("Hace diferencia un individuo vegano?");
  $("#h2-banner").html(
    `Calcula cuánto salvas o cuánto ahorrarías siendo vegan@ y <strong>compártelo.</strong>`
  );
  $(".input-side p:eq(0)").text("Tu primer nombre:");
  $("#name-field").attr("placeholder", "Opcional");
  $(".input-side p:eq(1)").text("¿Cuánto tiempo has sido vegan@?");
  $(".input-side label:eq(0)").text("Días");
  $(".input-side label:eq(1)").text("Meses");
  $(".input-side label:eq(2)").text("Años");
  $("#vLabelHeader").text("Hasta hoy he ahorrado:");
  $("#vLabeltext p:eq(0)").html(
    `<span id="landAnimals">0</span> Animales terrestres<sup>1</sup>`
  );
  $("#vLabeltext p:eq(1)").html(
    `<span id="seaAnimals">0</span> Lbs. de animales marinos<sup>2</sup>`
  );
  $("#vLabeltext p:eq(2)").html(
    `<span id="co2">0</span> Lbs. de CO₂<sup>3</sup>`
  );
  $("#vLabeltext p:eq(3)").html(
    `<span id="water">0</span> Lts. de agua<sup>3</sup>`
  );
  $("#vLabeltext p:eq(4)").html(
    `<span id="grains">0</span> Lbs. de granos<sup>3</sup>`
  );
  $("#vLabeltext p:eq(5)").html(
    `<span id="animalSuffering">0</span> Sufrimiento animal`
  );
  $("#sharePanel p:eq(0)").text("Cambia la imagen de fondo:");
  $("#vLabelPicSelect option:eq(0)").text("Cerdito");
  $("#vLabelPicSelect option:eq(1)").text("Ternero");
  $("#vLabelPicSelect option:eq(2)").text("Hojas");
  $("#vLabelPicSelect option:eq(3)").text("Conejito");
  $("#vLabelPicSelect option:eq(4)").text("Pollito");
  $("#vLabelPicSelect option:eq(5)").text("Pez");
  $("#sharePanel p:eq(1)").text("Descarga una foto de tu VFootprint:");
  $(".external-links p").text("Revisa estos proyectos:");
  $("footer div:eq(0)").html(spaFooter);
  $("footer button").html("<strong>Atribución de Imágenes ↓</strong>");
  $("#attributions").html(spaAttributions);
};

let spaFooter = `
<strong>Fuentes y Notas al pie: </strong><br>
      <sup>1</sup> Los datos de animales terrestres están fechados en 2023, estimándose en 92,2 mil millones anuales por: <a href="https://www.humanesociety.org/blog/more-animals-ever-922-billion-are-used-and-killed-each-year-food#:~:text=The%20most%20recent%20data%20about,the%20Food%20and%20Agriculture%20Organization." target="_blank">https://www.humanesociety.org</a>. Datos originalmente de la ONU - FAO. <br>
      <sup>2</sup> Los datos de peces y animales marinos están fechados en 2020, estimándose en 213.916.126 toneladas al año por: <a href="https://ourworldindata.org/grapher/capture-and-aquaculture-production?tab=table&time=latest" target="_blank">https://ourworldindata.org</a>. La producción de pescado y marisco se mide por peso como la suma de los mariscos de la captura silvestre y la piscicultura (acuicultura). Datos originalmente de la ONU - FAO. <br>
      
      *Los cálculos de animales terrestres se realizan dividiendo por una población mundial establecida en 2023 en 8.045 millones por: <a href="https://www.worldometers.info/world-population/#total" target="_blank">https://www.worldometers.info</a>  <br>
      *Los cálculos de animales marinos se realizan dividiendo por una población mundial establecida en 2020 en 7.841 millones por: <a href="https://www.worldometers.info/world-population/#total" target="_blank">https://www.worldometers.info</a> <br>
      *Los cálculos son estimaciones, promediando el consumo mundial que está sesgado en diferentes países. 
      
      <sup>3</sup> Estimaciones de: <a href="https://www.cowspiracy.com/facts" target="_blank">https://www.cowspiracy.com</a>
      <em> "Cada día, una persona que lleva una dieta vegana ahorra 1,100 galones de agua, 45 libras de grano, 30 pies cuadrados de tierra forestal, 20 libras de equivalente de CO2 y la vida de un animal. [xiv].   [xiv]"<br>
      </em>
      <hr>
      `;
let spaAttributions = `
      <li><a href="https://www.pexels.com/photo/uncertain-black-man-in-hoodie-in-studio-6974936/">Foto</a> de SHVETS</li>
      <li><a href="https://www.pexels.com/photo/piglet-on-brown-grass-4813937/">Foto</a> de Brett Sayles</li>
      <li><a href="https://www.pexels.com/photo/a-cute-calf-in-the-farmland-8024491/">Foto</a> de Tuğba Altunbaş</li>
      <li><a href="https://www.pexels.com/photo/close-up-photo-of-a-yellow-chick-on-the-grass-7440694/">Foto</a> de CRIATORIO NEVES</li>
      <li><a href="https://www.pexels.com/photo/close-up-photography-of-leaves-with-droplets-807598/">Foto</a> de sohail nachiti</li>
      <li><a href="https://www.pexels.com/photo/white-rabbit-on-green-grass-4001296/">Foto</a> de Satyabratasm</li>
      <li><a href="https://www.pexels.com/photo/clown-fish-on-white-corals-4781926/">Foto</a> de Ben Phillips</li>
  `;

export {
  spaTranslation,
  engTranslation,
  engFooter,
  spaFooter,
  spaAttributions,
  engAttributions,
};
