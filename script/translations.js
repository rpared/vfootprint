let engTranslation = () => {
  $("h1.maintitle").text("Vegan Footprint Calculator");
  $(".menubtn:eq(0)").text("About");
  $(".menubtn:eq(1)").text("Suggested🎬");
  $(".menubtn:eq(2)").text("Español");
  $("#h1-banner").text("Does one vegan make a difference?");
  $("#h2-banner").html(
    `Calculate how much you have saved or would save as a vegan and <strong>share it</strong>`
  );
  $("h3").html("After you calculate your estimated footprint you can <strong>download</strong> a cute image formatted to share on social media.");
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
  $("#vLabelFooter").html(
    `Every <span style="color: #7EB85A;">vegan</span> makes <br> a difference!`
  );
  $("#sharePanel p:eq(0)").text("Change background image:");
  $("#vLabelPicSelect option:eq(0)").text("Pigglet");
  $("#vLabelPicSelect option:eq(1)").text("Calf");
  $("#vLabelPicSelect option:eq(2)").text("Leaves");
  $("#vLabelPicSelect option:eq(3)").text("Bunny");
  $("#vLabelPicSelect option:eq(4)").text("Chick");
  $("#vLabelPicSelect option:eq(5)").text("Fish");
  $("#sharePanel p:eq(1)").text("Download a photo your VFootprint:");
  $(".final-quote").html(engQuote);
  $("article").html(engArticle);
  $(".external-links p").text("Check these out:");
  $("footer div:eq(0)").html(engFooter);
  $("#att-btn").html("<strong>Image Attribution ↓</strong>");
  $("#priv-btn").html("<strong>Privacy ↓</strong>");
  $("#attributions").html(engAttributions);
  $("#privacy").html(engPrivacy);
};

let engQuote = `<p>"Rapidly reducing animal agriculture and shifting humanity to a<strong> plant-based diet</strong> is one of the best, easiest, and fastest things we can do to save the planet...
It will also buffer food security in a time of increasing crop failures due to global heating. The world needs a <a href="https://plantbasedtreaty.org/position-papers/" target = "blanc" style="color:#D9D9D9;">Plant-Based Treaty</a>."<br>
<a href="https://www.usatoday.com/story/news/nation/2023/12/31/plant-based-treaty-wants-globe-to-go-vegan-to-fight-climate-change/71972312007/" target = "blanc">Peter Kalmus</a>  <span>Climate Scientist</span></p>`;

let engFooter = `<strong>Sources & Footnotes: </strong><br>
      <sup>1</sup> Land animals data is dated 2023, estimated at 92.2 billion yearly by: <a href="https://www.humanesociety.org/blog/more-animals-ever-922-billion-are-used-and-killed-each-year-food#:~:text=The%20most%20recent%20data%20about,the%20Food%20and%20Agriculture%20Organization." target="_blank">https://www.humanesociety.org</a>. Data originally by UN - FAO. <br>
      <sup>2</sup> Fish and sea animals data is dated 2020, estimated at 213,916,126 tons a year by: <a href="https://ourworldindata.org/grapher/capture-and-aquaculture-production?tab=table&time=latest" target="_blank">https://ourworldindata.org</a>. Fish and seafood production is measured by weight as the sum of seafood from wild catch and fish farming (aquaculture). Data originally by UN - FAO. <br>
      
      *Land animal calculations are made dividing by a 2023 World population set at 8,045 million by: <a href="https://www.worldometers.info/world-population/#total" target="_blank">https://www.worldometers.info</a>  <br>
      *Sea animal calculations are made dividing by a 2020 World population set at 7,841 million by: <a href="https://www.worldometers.info/world-population/#total" target="_blank">https://www.worldometers.info</a> <br>
      *Calculations are estimates, averaging up world consumption which is skewed in different countries. 
      <br>
      <sup>3</sup> Estimations from: <a href="https://www.cowspiracy.com/facts" target="_blank">https://www.cowspiracy.com</a>
      <em> "Each day, a person who eats a vegan diet saves 1,100 gallons of water, 45 pounds of grain, 30 sq ft of forested land, 20 lbs CO2 equivalent, and one animal's life.   [xiv]"<br>
      </em>
      <hr>
      `;
let engAttributions = `
          <li><a href="https://www.pexels.com/photo/uncertain-black-man-in-hoodie-in-studio-6974936/" target = "_blanc">Photo</a> by SHVETS</li>
          <li><a href="https://www.pexels.com/photo/black-man-covering-mouth-with-heart-on-stick-6974947/" target = "_blanc">Photo</a> by SHVETS</li>
          <li><a href="https://www.pexels.com/photo/piglet-on-brown-grass-4813937/" target = "_blanc">Photo</a> by Brett Sayles</li>
          <li><a href="https://www.pexels.com/photo/a-cute-calf-in-the-farmland-8024491/" target = "_blanc">Photo</a> by Tuğba Altunbaş</li>
          <li><a href="https://www.pexels.com/photo/close-up-photo-of-a-yellow-chick-on-the-grass-7440694/" target = "_blanc">Photo</a> by CRIATORIO NEVES</li>
          <li><a href="https://www.pexels.com/photo/close-up-photography-of-leaves-with-droplets-807598/" target = "_blanc">Photo</a> by sohail nachiti</li>
          <li><a href="https://www.pexels.com/photo/white-rabbit-on-green-grass-4001296/" target = "_blanc">Photo</a> by Satyabratasm</li>
          <li><a href="https://www.pexels.com/photo/clown-fish-on-white-corals-4781926/" target = "_blanc">Photo</a> by Ben Phillips</li>
        
        </ul>
        <hr>
        <a href="https://roger.costra.ec" target="_blank">- © Roger Paredes 2024 -</a>
      `;
let engArticle = `
      <h2>How much does a vegan save per day?</h2>
          Numbers vary significantly depending on the country the size and diet of the individual. The following estimates are an average of the world's consumption. On average, a vegan saves per day:
          <ul>
            <li>0.03 Land Animals<sup>1</sup></li>
            <li>0.15 Lbs. of Sea Animals<sup>2</sup></li>
            <li>20 Lbs. of C02<sup>3</sup></li>
            <li>1100 Lts. of water<sup>3</sup></li>
            <li>45 Lbs. of grains<sup>3</sup></li>
          </ul>
          <p>
          There are no biases, by choosing a plant-based diet, individuals contribute to environmental sustainability and animal welfare daily.
          Sources are listed at the bottom of the page.
          </p>
          <br />
      `;

let spaTranslation = () => {
  $("h1.maintitle").text("Calculadora de Huella Vegana");
  $(".menubtn:eq(0)").text("Acerca");
  $(".menubtn:eq(1)").text("🎬Sugeridos");
  $(".menubtn:eq(2)").text("English");
  $("#h1-banner").text("Hace diferencia un individuo vegano?");
  $("#h2-banner").html(
    `Calcula cuánto salvas o cuánto ahorrarías siendo vegan@ y <strong>compártelo.</strong>`
  );
  $("h3").html("Después de calcular tu huella estimada puedes <strong>descargar</strong> una adorable imagen para compartir en redes sociales.");
  $(".input-side p:eq(0)").text("Tu primer nombre:");
  $("#name-field").attr("placeholder", "Opcional");
  $(".input-side p:eq(1)").text("¿Cuánto tiempo has sido vegan@?");
  $(".input-side label:eq(0)").text("Días");
  $(".input-side label:eq(1)").text("Meses");
  $(".input-side label:eq(2)").text("Años");
  $("#vLabelHeader").text("Hasta hoy he salvado/ahorrado:");
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
  $("#vLabelFooter").html(
    `¡Cada <span style="color: #7EB85A;">vegan@</span> hace <br> la diferencia!`
  );

  $("#sharePanel p:eq(0)").text("Cambia la imagen de fondo:");
  $("#vLabelPicSelect option:eq(0)").text("Cerdito");
  $("#vLabelPicSelect option:eq(1)").text("Ternero");
  $("#vLabelPicSelect option:eq(2)").text("Hojas");
  $("#vLabelPicSelect option:eq(3)").text("Conejito");
  $("#vLabelPicSelect option:eq(4)").text("Pollito");
  $("#vLabelPicSelect option:eq(5)").text("Pez");
  $("#sharePanel p:eq(1)").text("Descarga una foto de tu VFootprint:");
  $(".final-quote").html(spaQuote);
  $("article").html(espArticle);
  $(".external-links p").text("Revisa estos proyectos:");
  $("footer div:eq(0)").html(spaFooter);
  $("#att-btn").html("<strong>Atribución de Imágenes ↓</strong>");
  $("#priv-btn").html("<strong>Privacidad ↓</strong>");
  $("#attributions").html(spaAttributions);
  $("#privacy").html(spaPrivacy);
};

let spaQuote = `<p>"Reducir rápidamente la agricultura animal y cambiar a la humanidad a una <strong>dieta basada en plantas</strong> es una de las mejores, más fáciles y más rápidas cosas que podemos hacer para salvar el planeta... También amortiguará la seguridad alimentaria en una época de aumento de pérdidas de cosechas debido al calentamiento global. El mundo necesita un <a href="https://plantbasedtreaty.org/position-papers/" target = "_blanc" style="color:#D9D9D9;">Tratado Basado en Plantas</a>."<br>
<a href="https://www.usatoday.com/story/news/nation/2023/12/31/plant-based-treaty-wants-globe-to-go-vegan-to-fight-climate-change/71972312007/" target = "_blanc"> Peter Kalmus </a>  <span>Científico Climático</span></p>`;

let spaFooter = `
<strong>Fuentes y Notas al pie: </strong><br>
      <sup>1</sup> Los datos de animales terrestres están fechados en 2023, estimándose en 92,2 mil millones anuales por: <a href="https://www.humanesociety.org/blog/more-animals-ever-922-billion-are-used-and-killed-each-year-food#:~:text=The%20most%20recent%20data%20about,the%20Food%20and%20Agriculture%20Organization." target="_blank">https://www.humanesociety.org</a>. Datos originalmente de la ONU - FAO. <br>
      <sup>2</sup> Los datos de peces y animales marinos están fechados en 2020, estimándose en 213.916.126 toneladas al año por: <a href="https://ourworldindata.org/grapher/capture-and-aquaculture-production?tab=table&time=latest" target="_blank">https://ourworldindata.org</a>. La producción de pescado y marisco se mide por peso como la suma de los mariscos de la captura silvestre y la piscicultura (acuicultura). Datos originalmente de la ONU - FAO. <br>
      
      *Los cálculos de animales terrestres se realizan dividiendo por una población mundial establecida en 2023 en 8.045 millones por: <a href="https://www.worldometers.info/world-population/#total" target="_blank">https://www.worldometers.info</a>  <br>
      *Los cálculos de animales marinos se realizan dividiendo por una población mundial establecida en 2020 en 7.841 millones por: <a href="https://www.worldometers.info/world-population/#total" target="_blank">https://www.worldometers.info</a> <br>
      *Los cálculos son estimaciones, promediando el consumo mundial que está sesgado en diferentes países. 
      <br>
      <sup>3</sup> Estimaciones de: <a href="https://www.cowspiracy.com/facts" target="_blank">https://www.cowspiracy.com</a>
      <em> "Cada día, una persona que lleva una dieta vegana ahorra 1,100 galones de agua, 45 libras de grano, 30 pies cuadrados de tierra forestal, 20 libras de equivalente de CO2 y la vida de un animal. [xiv].   [xiv]"<br>
      </em>
      <hr>
      `;
let spaAttributions = `
<br>
      <li><a href="https://www.pexels.com/photo/uncertain-black-man-in-hoodie-in-studio-6974936/" target = "_blanc">Foto</a> de SHVETS</li>
      <li><a href="https://www.pexels.com/photo/black-man-covering-mouth-with-heart-on-stick-6974947/" target = "_blanc">Foto</a> de SHVETS</li>
      <li><a href="https://www.pexels.com/photo/piglet-on-brown-grass-4813937/" target = "_blanc">Foto</a> de Brett Sayles</li>
      <li><a href="https://www.pexels.com/photo/a-cute-calf-in-the-farmland-8024491/" target = "_blanc">Foto</a> de Tuğba Altunbaş</li>
      <li><a href="https://www.pexels.com/photo/close-up-photo-of-a-yellow-chick-on-the-grass-7440694/" target = "_blanc">Foto</a> de CRIATORIO NEVES</li>
      <li><a href="https://www.pexels.com/photo/close-up-photography-of-leaves-with-droplets-807598/" target = "_blanc">Foto</a> de sohail nachiti</li>
      <li><a href="https://www.pexels.com/photo/white-rabbit-on-green-grass-4001296/" target = "_blanc">Foto</a> de Satyabratasm</li>
      <li><a href="https://www.pexels.com/photo/clown-fish-on-white-corals-4781926/" target = "_blanc">Foto</a> de Ben Phillips</li>
  `;
  let espArticle = `
      <h2>¿Cuánto ahorra un vegano por día?</h2>
          Los números varían significativamente dependiendo del país, el tamaño y la dieta del individuo. Las siguientes estimaciones son un promedio del consumo mundial. En promedio, un vegano ahorra por día:
          <ul>
            <li>0.03 Animales terrestres<sup>1</sup></li>
            <li>0.15 Lbs. de animales marinos<sup>2</sup></li>
            <li>20 Lbs. de CO₂<sup>3</sup></li>
            <li>1100 Lts. de agua<sup>3</sup></li>
            <li>45 Lbs. de granos<sup>3</sup></li>
          </ul>
          Las fuentes están listadas al final de la página.
          <br />
  `;
  let engPrivacy = `
  <br>
   Effective Date: March 19, 2025 <br>
  This Privacy Policy explains how vfootprint.com collects, uses, and protects your information when you visit the website.
  <br>
  1. Information Collected
  Personal information is not collected directly. However, Google Analytics are used to gather anonymous data about website traffic and user behavior.
  Google Analytics may collect information such as:
  Your IP address (anonymized where applicable)
  Browser type and device information
  Pages visited and time spent on the site
  Referring websites and links clicked
  <br>
  2. How This Information Is Used
  The data collected via Google Analytics helps to:
  Understand website traffic and improve user experience
  Monitor and analyze website performance
  Identify trends and enhance content
  <br>
  3. Cookies and Tracking Technologies
  Google Analytics uses cookies to track interactions on this site. You can manage or disable cookies through your browser settings. To opt out of Google Analytics tracking, you can install the Google Analytics Opt-out Browser Add-on: https://tools.google.com/dlpage/gaoptout.
  <br>
  4. Third-Party Sharing
  We do not sell, trade, or share your personal data. However, Google may process the collected data under its own privacy policies. Learn more here: https://policies.google.com/privacy.
  <br>
  5. Your Rights & Choices
  You can disable cookies in your browser settings.
  You can opt out of Google Analytics tracking as described above.
  <br>
  6. Updates to This Privacy Policy
  This policy may be updated from time to time. Changes will be posted on this page with an updated Effective Date.
  <br>
  7. Contact
  If you have any questions about this Privacy Policy, please contact at paredes.roger@gmail.com.
  `;
  let spaPrivacy = `
  <br>
   Fecha de Vigencia: 19 de marzo de 2025 <br>
  Esta Política de Privacidad explica cómo vfootprint.com recopila, utiliza y protege su información cuando visita el sitio web.
  <br>
  1. Información Recopilada
  No se recopila información personal directamente. Sin embargo, se utiliza Google Analytics para recopilar datos anónimos sobre el tráfico del sitio web y el comportamiento de los usuarios.
  Google Analytics puede recopilar información como:
  Su dirección IP (anonimizada cuando sea aplicable)
  Tipo de navegador e información del dispositivo
  Páginas visitadas y tiempo pasado en el sitio
  Sitios web de referencia y enlaces clicados
  <br>
  2. Cómo Se Utiliza Esta Información
  Los datos recopilados a través de Google Analytics ayudan a:
  Comprender el tráfico del sitio web y mejorar la experiencia del usuario
  Monitorear y analizar el rendimiento del sitio web
  Identificar tendencias y mejorar el contenido
  <br>
  3. Cookies y Tecnologías de Seguimiento
  Google Analytics utiliza cookies para rastrear interacciones en este sitio. Puede gestionar o desactivar las cookies a través de la configuración de su navegador. Para optar por no participar en el seguimiento de Google Analytics, puede instalar el complemento de inhabilitación para navegadores de Google Analytics: https://tools.google.com/dlpage/gaoptout.
  <br>
  4. Compartir con Terceros
  No vendemos, intercambiamos ni compartimos sus datos personales. Sin embargo, Google puede procesar los datos recopilados bajo sus propias políticas de privacidad. Obtenga más información aquí: https://policies.google.com/privacy.
  <br>
  5. Sus Derechos y Opciones
  Puede desactivar las cookies en la configuración de su navegador.
  Puede optar por no participar en el seguimiento de Google Analytics como se describe anteriormente.
  <br>
  6. Actualizaciones de Esta Política de Privacidad
  Esta política puede actualizarse de vez en cuando. Los cambios se publicarán en esta página con una Fecha de Vigencia actualizada.
  <br>
  7. Contacto
  Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contacte a paredes.roger@gmail.com.
  `;
  

export {
  spaTranslation,
  engTranslation,
  spaQuote,
  engQuote,
  engFooter,
  spaFooter,
  spaAttributions,
  engAttributions,
  spaPrivacy,
  engPrivacy,
};
