document.addEventListener("DOMContentLoaded", function() {
  const container = document.createElement("div");
  container.innerHTML = `<details><summary>Bakken & Oven</summary>

    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.91" data-name="4-in-1 Keukenfolie en Bakpapier - 8m x 38cm">
      <img src="https://cdn.eco-logisch.nl/images/1in4papier.jpg" alt="4-in-1 Keukenfolie en Bakpapier - 8m x 38cm">
      <div>
          <h4>4-in-1 Keukenfolie en Bakpapier - 8m x 38cm</h4>
          <p><strong>€ 4.91</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="5.20" data-name="Bakpapier - 15m - incl. dispenser">
      <img src="https://cdn.eco-logisch.nl/images/bakpapier_doos.jpg" alt="Bakpapier - 15m - incl. dispenser">
      <div>
          <h4>Bakpapier - 15m - incl. dispenser</h4>
          <p><strong>€ 5.20</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.87" data-name="Bakpapier - 15m - navulling">
      <img src="https://cdn.eco-logisch.nl/images/bakpapier_navul.jpg" alt="Bakpapier - 15m - navulling">
      <div>
          <h4>Bakpapier - 15m - navulling</h4>
          <p><strong>€ 3.87</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="5.77" data-name="Bakpapier Rond 24st.">
      <img src="https://cdn.eco-logisch.nl/images/taart-bakapaier%20rond-web.jpg" alt="Bakpapier Rond 24st.">
      <div>
          <h4>Bakpapier Rond 24st.</h4>
          <p><strong>€ 5.77</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.94" data-name="Bakpapier rol ongebleekt - 19,8 M x 33 cm - FSC">
      <img src="https://cdn.eco-logisch.nl/images/bakpapier19,8.jpg" alt="Bakpapier rol ongebleekt - 19,8 M x 33 cm - FSC">
      <div>
          <h4>Bakpapier rol ongebleekt - 19,8 M x 33 cm - FSC</h4>
          <p><strong>€ 4.94</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="2.47" data-name="Bakvormpjes Jumbo - 24st.">
      <img src="https://cdn.eco-logisch.nl/images/jumbo-baking-cups.jpg" alt="Bakvormpjes Jumbo - 24st.">
      <div>
          <h4>Bakvormpjes Jumbo - 24st.</h4>
          <p><strong>€ 2.47</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="1.22" data-name="Bakvormpjes Mini - 90st.">
      <img src="https://cdn.eco-logisch.nl/images/IYC%20mini%20baking%20cups%201.jpg" alt="Bakvormpjes Mini - 90st.">
      <div>
          <h4>Bakvormpjes Mini - 90st.</h4>
          <p><strong>€ 1.22</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.02" data-name="Brood bakvorm - 4 stuks - FSC ongebleekt">
      <img src="https://cdn.eco-logisch.nl/images/papieren-bakform.jpg" alt="Brood bakvorm - 4 stuks - FSC ongebleekt">
      <div>
          <h4>Brood bakvorm - 4 stuks - FSC ongebleekt</h4>
          <p><strong>€ 7.02</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="55.20" data-name="Cakevorm rond - emaille 24cm">
      <img src="https://cdn.eco-logisch.nl/images/taartvorm.jpg" alt="Cakevorm rond - emaille 24cm">
      <div>
          <h4>Cakevorm rond - emaille 24cm</h4>
          <p><strong>€ 55.20</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="12.37" data-name="Siliconen Bakmat (Bakpapier) - 41 x 33 cm">
      <img src="https://cdn.eco-logisch.nl/images/Siliconen%20Bakmat%201.jpg" alt="Siliconen Bakmat (Bakpapier) - 41 x 33 cm">
      <div>
          <h4>Siliconen Bakmat (Bakpapier) - 41 x 33 cm</h4>
          <p><strong>€ 12.37</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.02" data-name="Taartvorm Cake en Pie - 4st - 20cm - FSC ongebleekt">
      <img src="https://cdn.eco-logisch.nl/images/taart%20en%20pie1.jpg" alt="Taartvorm Cake en Pie - 4st - 20cm - FSC ongebleekt">
      <div>
          <h4>Taartvorm Cake en Pie - 4st - 20cm - FSC ongebleekt</h4>
          <p><strong>€ 7.02</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="32.92" data-name="Tulbandvorm - 12 cm - Chocolade Pistache">
      <img src="https://cdn.eco-logisch.nl/images/tulban%20cake%20tin%20SarahWiener%202243ready.jpg" alt="Tulbandvorm - 12 cm - Chocolade Pistache">
      <div>
          <h4>Tulbandvorm - 12 cm - Chocolade Pistache</h4>
          <p><strong>€ 32.92</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="54.37" data-name="Tulbandvorm - 22 cm - Chocolade Vanille">
      <img src="https://cdn.eco-logisch.nl/images/turban%20cake%20tin%20SarahWiener%202242Ready.jpg" alt="Tulbandvorm - 22 cm - Chocolade Vanille">
      <div>
          <h4>Tulbandvorm - 22 cm - Chocolade Vanille</h4>
          <p><strong>€ 54.37</strong></p>
      </div>
    </div>
    
</details>
<details><summary>Drinken</summary>

    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.07" data-name="Metalen Rietjes gebogen - 8 Stuks">
      <img src="https://cdn.eco-logisch.nl/images/ecoluba%20rietjes.jpg" alt="Metalen Rietjes gebogen - 8 Stuks">
      <div>
          <h4>Metalen Rietjes gebogen - 8 Stuks</h4>
          <p><strong>€ 3.07</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.42" data-name="RVS rietjes gebogen - 4st">
      <img src="https://cdn.eco-logisch.nl/images/metalen%20rietjes%20.jpg" alt="RVS rietjes gebogen - 4st">
      <div>
          <h4>RVS rietjes gebogen - 4st</h4>
          <p><strong>€ 7.42</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.02" data-name="RVS rietjes recht - 4st">
      <img src="https://cdn.eco-logisch.nl/images/rietjes%20recht.jpg" alt="RVS rietjes recht - 4st">
      <div>
          <h4>RVS rietjes recht - 4st</h4>
          <p><strong>€ 7.02</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="19.77" data-name="Rebottled Drink glazen - 4-pack - Mix">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-glazen-mix-4pack.jpg" alt="Rebottled Drink glazen - 4-pack - Mix">
      <div>
          <h4>Rebottled Drink glazen - 4-pack - Mix</h4>
          <p><strong>€ 19.77</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="8.55" data-name="Rebottled Fles - 375 ml - Green">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-fles-green.jpg" alt="Rebottled Fles - 375 ml - Green">
      <div>
          <h4>Rebottled Fles - 375 ml - Green</h4>
          <p><strong>€ 8.55</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="10.53" data-name="Rebottled Glazen - Short Drink - 2-pack - Clear">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-shortdrinkglazen.jpg" alt="Rebottled Glazen - Short Drink - 2-pack - Clear">
      <div>
          <h4>Rebottled Glazen - Short Drink - 2-pack - Clear</h4>
          <p><strong>€ 10.53</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="10.53" data-name="Rebottled Glazen - Short Drink - 2-pack - Olive">
      <img src="https://cdn.eco-logisch.nl/images/Rebottled%20Short%20Tumbler%204x%20Mix.jpg" alt="Rebottled Glazen - Short Drink - 2-pack - Olive">
      <div>
          <h4>Rebottled Glazen - Short Drink - 2-pack - Olive</h4>
          <p><strong>€ 10.53</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.95" data-name="Rietjes - Bamboe 4st. met borstel">
      <img src="https://cdn.eco-logisch.nl/images/rietje.jpg" alt="Rietjes - Bamboe 4st. met borstel">
      <div>
          <h4>Rietjes - Bamboe 4st. met borstel</h4>
          <p><strong>€ 3.95</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="8.21" data-name="Rietjes - RVS - Zwart - 2 Stuks met borsteltje">
      <img src="https://cdn.eco-logisch.nl/images/Klean%20Kanteen%20rietjes%20rvs%202%20st.jpg" alt="Rietjes - RVS - Zwart - 2 Stuks met borsteltje">
      <div>
          <h4>Rietjes - RVS - Zwart - 2 Stuks met borsteltje</h4>
          <p><strong>€ 8.21</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="8.54" data-name="Waterfles - 375 ml - Clear">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-fles-clear.jpg" alt="Waterfles - 375 ml - Clear">
      <div>
          <h4>Waterfles - 375 ml - Clear</h4>
          <p><strong>€ 8.54</strong></p>
      </div>
    </div>
    
</details>
<details><summary>Fermentatie & Groei</summary>

    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="30.52" data-name="Kaas Kefir maker 1400ml.">
      <img src="https://cdn.eco-logisch.nl/images/kaasmaker-groot.jpg" alt="Kaas Kefir maker 1400ml.">
      <div>
          <h4>Kaas Kefir maker 1400ml.</h4>
          <p><strong>€ 30.52</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="27.22" data-name="Kaas Kefir maker 848 ml.">
      <img src="https://cdn.eco-logisch.nl/images/kaasmaker-web.jpg" alt="Kaas Kefir maker 848 ml.">
      <div>
          <h4>Kaas Kefir maker 848 ml.</h4>
          <p><strong>€ 27.22</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="29.91" data-name="Melk & Water Kefirmaker - 900 ml - Zwart">
      <img src="https://cdn.eco-logisch.nl/images/Kefirko%20kefirmaker%20zwart%202.jpg" alt="Melk & Water Kefirmaker - 900 ml - Zwart">
      <div>
          <h4>Melk & Water Kefirmaker - 900 ml - Zwart</h4>
          <p><strong>€ 29.91</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="28.04" data-name="Melk en Water Kefir maker 900 ml.">
      <img src="https://cdn.eco-logisch.nl/images/Kefir-blauw-884.jpg" alt="Melk en Water Kefir maker 900 ml.">
      <div>
          <h4>Melk en Water Kefir maker 900 ml.</h4>
          <p><strong>€ 28.04</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="12.36" data-name="Starter Melk Kefir Korrels">
      <img src="https://cdn.eco-logisch.nl/images/melkfefir-korrels-web.jpg" alt="Starter Melk Kefir Korrels">
      <div>
          <h4>Starter Melk Kefir Korrels</h4>
          <p><strong>€ 12.36</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="11.54" data-name="Starter Waterkefir korrels - 5gr.">
      <img src="https://cdn.eco-logisch.nl/images/water-kefir-web.jpg" alt="Starter Waterkefir korrels - 5gr.">
      <div>
          <h4>Starter Waterkefir korrels - 5gr.</h4>
          <p><strong>€ 11.54</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="32.58" data-name="Veggie Fermenter 1400 ml.">
      <img src="https://cdn.eco-logisch.nl/images/Kefirko%20Veggie%20Fermenter-web.jpg" alt="Veggie Fermenter 1400 ml.">
      <div>
          <h4>Veggie Fermenter 1400 ml.</h4>
          <p><strong>€ 32.58</strong></p>
      </div>
    </div>
    
</details>
<details><summary>Keukenhulpen</summary>

    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.11" data-name="Keukentouw ongebleekt katoen - 60m">
      <img src="https://cdn.eco-logisch.nl/images/keuekentouw.jpg" alt="Keukentouw ongebleekt katoen - 60m">
      <div>
          <h4>Keukentouw ongebleekt katoen - 60m</h4>
          <p><strong>€ 4.11</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="10.39" data-name="Kleine spatel - Linkshandig">
      <img src="https://cdn.eco-logisch.nl/images/KleineSpatel_Linkshandig.jpg" alt="Kleine spatel - Linkshandig">
      <div>
          <h4>Kleine spatel - Linkshandig</h4>
          <p><strong>€ 10.39</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.94" data-name="Siliconen Bakkwast - Terracotta - 26 cm">
      <img src="https://cdn.eco-logisch.nl/images/dotz-borstel-terracotta.jpg" alt="Siliconen Bakkwast - Terracotta - 26 cm">
      <div>
          <h4>Siliconen Bakkwast - Terracotta - 26 cm</h4>
          <p><strong>€ 4.94</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="5.98" data-name="Siliconen Garde - Mosterdgeel - 28 cm">
      <img src="https://cdn.eco-logisch.nl/images/dotz-garde.jpg" alt="Siliconen Garde - Mosterdgeel - 28 cm">
      <div>
          <h4>Siliconen Garde - Mosterdgeel - 28 cm</h4>
          <p><strong>€ 5.98</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.94" data-name="Siliconen Spatel - Donkerblauw - 26,5 cm">
      <img src="https://cdn.eco-logisch.nl/images/siliconen-spatel-dotz-donkerblauw.jpg" alt="Siliconen Spatel - Donkerblauw - 26,5 cm">
      <div>
          <h4>Siliconen Spatel - Donkerblauw - 26,5 cm</h4>
          <p><strong>€ 4.94</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.94" data-name="Siliconen Spatel - Grasgroen - 27 cm">
      <img src="https://cdn.eco-logisch.nl/images/siliconen-spatel-dotz-grasgroen.jpg" alt="Siliconen Spatel - Grasgroen - 27 cm">
      <div>
          <h4>Siliconen Spatel - Grasgroen - 27 cm</h4>
          <p><strong>€ 4.94</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.94" data-name="Siliconen Spatel - Lichtblauw - 25 cm">
      <img src="https://cdn.eco-logisch.nl/images/siliconen-spatel-dotz-lichtblauw.jpg" alt="Siliconen Spatel - Lichtblauw - 25 cm">
      <div>
          <h4>Siliconen Spatel - Lichtblauw - 25 cm</h4>
          <p><strong>€ 4.94</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.81" data-name="Spatel - Essenhout">
      <img src="https://cdn.eco-logisch.nl/images/marence-spatel-hout-ecologisch.jpg" alt="Spatel - Essenhout">
      <div>
          <h4>Spatel - Essenhout</h4>
          <p><strong>€ 3.81</strong></p>
      </div>
    </div>
    
</details>
<details><summary>Overig</summary>

    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="5.77" data-name="Aanmaakblokjes FSC en GMO vrij - 72 st">
      <img src="https://cdn.eco-logisch.nl/images/Aanmaakblojes-fsc.jpg" alt="Aanmaakblokjes FSC en GMO vrij - 72 st">
      <div>
          <h4>Aanmaakblokjes FSC en GMO vrij - 72 st</h4>
          <p><strong>€ 5.77</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.81" data-name="Aanmaakblokjes houtwol - 32 stuks">
      <img src="https://cdn.eco-logisch.nl/images/houtwol-aanmaak-web.jpg" alt="Aanmaakblokjes houtwol - 32 stuks">
      <div>
          <h4>Aanmaakblokjes houtwol - 32 stuks</h4>
          <p><strong>€ 3.81</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.69" data-name="Aanmaakwol - Hennep & Was - 32 stuks">
      <img src="https://cdn.eco-logisch.nl/images/Boomex_aanmaakwol_32st_1.png" alt="Aanmaakwol - Hennep & Was - 32 stuks">
      <div>
          <h4>Aanmaakwol - Hennep & Was - 32 stuks</h4>
          <p><strong>€ 3.69</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="17.68" data-name="Afdruiprek - Bamboe opvouwbaar">
      <img src="https://cdn.eco-logisch.nl/images/Afdruiprek%20Bamboe%20Opklapbaar2.jpg" alt="Afdruiprek - Bamboe opvouwbaar">
      <div>
          <h4>Afdruiprek - Bamboe opvouwbaar</h4>
          <p><strong>€ 17.68</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.00" data-name="Bamboe Bord - 20 cm">
      <img src="https://cdn.eco-logisch.nl/images/pandoobord20cmbamboe.jpg" alt="Bamboe Bord - 20 cm">
      <div>
          <h4>Bamboe Bord - 20 cm</h4>
          <p><strong>€ 7.00</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="9.18" data-name="Bamboe Bord - 30 cm">
      <img src="https://cdn.eco-logisch.nl/images/pandoobord30cm.jpg" alt="Bamboe Bord - 30 cm">
      <div>
          <h4>Bamboe Bord - 30 cm</h4>
          <p><strong>€ 9.18</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="14.84" data-name="Bamboe Kom - S -14 cm">
      <img src="https://cdn.eco-logisch.nl/images/Pandoo%20bamboe%20schaal%2014%20centimeter.jpg" alt="Bamboe Kom - S -14 cm">
      <div>
          <h4>Bamboe Kom - S -14 cm</h4>
          <p><strong>€ 14.84</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="19.79" data-name="Bamboe Kom/Schaal - M - 20 cm">
      <img src="https://cdn.eco-logisch.nl/images/Pandoo%20bamboe%20schaal%2020cm%202.png" alt="Bamboe Kom/Schaal - M - 20 cm">
      <div>
          <h4>Bamboe Kom/Schaal - M - 20 cm</h4>
          <p><strong>€ 19.79</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="11.35" data-name="Boterschaal met glazen deksel">
      <img src="https://cdn.eco-logisch.nl/images/Boterschaal%20point.jpg" alt="Boterschaal met glazen deksel">
      <div>
          <h4>Boterschaal met glazen deksel</h4>
          <p><strong>€ 11.35</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="33.08" data-name="Broodplank bamboe FSC 40 x 27,5 x 3,5cm">
      <img src="https://cdn.eco-logisch.nl/images/Ontwerp%20zonder%20titel%20(25).jpg" alt="Broodplank bamboe FSC 40 x 27,5 x 3,5cm">
      <div>
          <h4>Broodplank bamboe FSC 40 x 27,5 x 3,5cm</h4>
          <p><strong>€ 33.08</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.63" data-name="Citrus Pers FSC Hout">
      <img src="https://cdn.eco-logisch.nl/images/citrus-pers.jpg" alt="Citrus Pers FSC Hout">
      <div>
          <h4>Citrus Pers FSC Hout</h4>
          <p><strong>€ 3.63</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="13.08" data-name="Dienblad - Bamboe - 28x19x2cm">
      <img src="https://cdn.eco-logisch.nl/images/Point%20Virgule%20dienblad%20bamboe.jpg" alt="Dienblad - Bamboe - 28x19x2cm">
      <div>
          <h4>Dienblad - Bamboe - 28x19x2cm</h4>
          <p><strong>€ 13.08</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.27" data-name="Eierdopje - Bamboe - FSC">
      <img src="https://cdn.eco-logisch.nl/images/Eierdopje%20Bamboe%20FSC.jpg" alt="Eierdopje - Bamboe - FSC">
      <div>
          <h4>Eierdopje - Bamboe - FSC</h4>
          <p><strong>€ 3.27</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="41.17" data-name="Emaille maatbeker - 0.5 L">
      <img src="https://cdn.eco-logisch.nl/images/measuring%20vessel%20SarahWiener%202247_Ready.jpg" alt="Emaille maatbeker - 0.5 L">
      <div>
          <h4>Emaille maatbeker - 0.5 L</h4>
          <p><strong>€ 41.17</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="50.33" data-name="Emaille maatbeker - 1 L">
      <img src="https://cdn.eco-logisch.nl/images/measuring%20vessel%20SarahWiener%202241ready.jpg" alt="Emaille maatbeker - 1 L">
      <div>
          <h4>Emaille maatbeker - 1 L</h4>
          <p><strong>€ 50.33</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="15.36" data-name="Glazen Deksel - Eco-ok - 20cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Glazen%20Deksel%2020%20cm%201.jpg" alt="Glazen Deksel - Eco-ok - 20cm">
      <div>
          <h4>Glazen Deksel - Eco-ok - 20cm</h4>
          <p><strong>€ 15.36</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="18.47" data-name="Glazen Deksel - Eco-ok - 24cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Glazen%20Deksel%2024cm%201.1.jpg" alt="Glazen Deksel - Eco-ok - 24cm">
      <div>
          <h4>Glazen Deksel - Eco-ok - 24cm</h4>
          <p><strong>€ 18.47</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="23.07" data-name="Glazen Deksel - Eco-ok - 28cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Glazen%20Deksel%2028%20cm%201.jpg" alt="Glazen Deksel - Eco-ok - 28cm">
      <div>
          <h4>Glazen Deksel - Eco-ok - 28cm</h4>
          <p><strong>€ 23.07</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="21.38" data-name="Glazen pot met kraantje 8L">
      <img src="https://cdn.eco-logisch.nl/images/EBBA39FA-1AD1-4B29-9164-0F205F07D748.jpg" alt="Glazen pot met kraantje 8L">
      <div>
          <h4>Glazen pot met kraantje 8L</h4>
          <p><strong>€ 21.38</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="2.66" data-name="Honinglepel - Buxushout">
      <img src="https://cdn.eco-logisch.nl/images/Ahtable_Honinglepel.jpg" alt="Honinglepel - Buxushout">
      <div>
          <h4>Honinglepel - Buxushout</h4>
          <p><strong>€ 2.66</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.46" data-name="Houten Afsluitklem">
      <img src="https://cdn.eco-logisch.nl/images/FoodsaferClip.jpg" alt="Houten Afsluitklem">
      <div>
          <h4>Houten Afsluitklem</h4>
          <p><strong>€ 3.46</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="11.52" data-name="Kruimelveger - Vintage Green">
      <img src="https://cdn.eco-logisch.nl/images/cabanaz-kruimelveger-groen.jpg" alt="Kruimelveger - Vintage Green">
      <div>
          <h4>Kruimelveger - Vintage Green</h4>
          <p><strong>€ 11.52</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="11.52" data-name="Kruimelveger Kruimeldief - Iron Grey">
      <img src="https://cdn.eco-logisch.nl/images/cabanaz-kruimelveger-blauw.jpg" alt="Kruimelveger Kruimeldief - Iron Grey">
      <div>
          <h4>Kruimelveger Kruimeldief - Iron Grey</h4>
          <p><strong>€ 11.52</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.32" data-name="Lampenolie - Bio - 1 Liter">
      <img src="https://cdn.eco-logisch.nl/images/Boomex-lampenolie-1.png" alt="Lampenolie - Bio - 1 Liter">
      <div>
          <h4>Lampenolie - Bio - 1 Liter</h4>
          <p><strong>€ 7.32</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="17.59" data-name="Nanostopper - Voor vacuum trekken van levensmiddelen">
      <img src="https://cdn.eco-logisch.nl/images/Nanostopper_Bags_01.jpg" alt="Nanostopper - Voor vacuum trekken van levensmiddelen">
      <div>
          <h4>Nanostopper - Voor vacuum trekken van levensmiddelen</h4>
          <p><strong>€ 17.59</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.10" data-name="Notenkraker van beukenhout">
      <img src="https://cdn.eco-logisch.nl/images/Ahtable_notenkraker.jpg" alt="Notenkraker van beukenhout">
      <div>
          <h4>Notenkraker van beukenhout</h4>
          <p><strong>€ 4.10</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.10" data-name="Notenmelkzak - set van 2">
      <img src="https://cdn.eco-logisch.nl/images/AH255_sac_lait_vegetal.jpg" alt="Notenmelkzak - set van 2">
      <div>
          <h4>Notenmelkzak - set van 2</h4>
          <p><strong>€ 4.10</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="60.62" data-name="Ongebleekt Carnauba Wax Paper FSC Certified - 23 m">
      <img src="https://cdn.eco-logisch.nl/images/waxpaper-W.jpg" alt="Ongebleekt Carnauba Wax Paper FSC Certified - 23 m">
      <div>
          <h4>Ongebleekt Carnauba Wax Paper FSC Certified - 23 m</h4>
          <p><strong>€ 60.62</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="5.58" data-name="Opscheplepel - Silicone - Bamboe Handvat - Taupe">
      <img src="https://cdn.eco-logisch.nl/images/Silicone%20opscheplepel%20-%20bamboe%20-%20taupe.jpg" alt="Opscheplepel - Silicone - Bamboe Handvat - Taupe">
      <div>
          <h4>Opscheplepel - Silicone - Bamboe Handvat - Taupe</h4>
          <p><strong>€ 5.58</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="47.77" data-name="Ovenschaal - 29 x 18 cm - Chocolade Pistache">
      <img src="https://cdn.eco-logisch.nl/images/ries_braadpan_1.jpg" alt="Ovenschaal - 29 x 18 cm - Chocolade Pistache">
      <div>
          <h4>Ovenschaal - 29 x 18 cm - Chocolade Pistache</h4>
          <p><strong>€ 47.77</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="42.90" data-name="Ovenschaal - emaille - 32 cm">
      <img src="https://cdn.eco-logisch.nl/images/Emaillen-ovenschaal-zwart.jpg" alt="Ovenschaal - emaille - 32 cm">
      <div>
          <h4>Ovenschaal - emaille - 32 cm</h4>
          <p><strong>€ 42.90</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="41.17" data-name="Ovenschaal met handgrepen - emaille - 26 x 17 cm">
      <img src="https://cdn.eco-logisch.nl/images/ovenschaal%20zwart.jpg" alt="Ovenschaal met handgrepen - emaille - 26 x 17 cm">
      <div>
          <h4>Ovenschaal met handgrepen - emaille - 26 x 17 cm</h4>
          <p><strong>€ 41.17</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="52.18" data-name="Ovenschaal met handgrepen - emaille - 33 cm">
      <img src="https://cdn.eco-logisch.nl/images/ovenschaal%20zwart.jpg" alt="Ovenschaal met handgrepen - emaille - 33 cm">
      <div>
          <h4>Ovenschaal met handgrepen - emaille - 33 cm</h4>
          <p><strong>€ 52.18</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="11.19" data-name="Rebottled Glazen - 2-pack - Clear">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-glazen-clear-2pack.jpg" alt="Rebottled Glazen - 2-pack - Clear">
      <div>
          <h4>Rebottled Glazen - 2-pack - Clear</h4>
          <p><strong>€ 11.19</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="11.19" data-name="Rebottled Glazen - 2-pack - Green">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-glazen-green-2pack.jpg" alt="Rebottled Glazen - 2-pack - Green">
      <div>
          <h4>Rebottled Glazen - 2-pack - Green</h4>
          <p><strong>€ 11.19</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="19.77" data-name="Rebottled Glazen - 4-pack - Clear">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-glazen-clear-4pack.jpg" alt="Rebottled Glazen - 4-pack - Clear">
      <div>
          <h4>Rebottled Glazen - 4-pack - Clear</h4>
          <p><strong>€ 19.77</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="19.77" data-name="Rebottled Glazen - 4-pack - Green">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-glazen-green-4pack.jpg" alt="Rebottled Glazen - 4-pack - Green">
      <div>
          <h4>Rebottled Glazen - 4-pack - Green</h4>
          <p><strong>€ 19.77</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="19.77" data-name="Rebottled Glazen - 4-pack - Olive">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-glazen-bruin-4pack.jpg" alt="Rebottled Glazen - 4-pack - Olive">
      <div>
          <h4>Rebottled Glazen - 4-pack - Olive</h4>
          <p><strong>€ 19.77</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="18.45" data-name="Rebottled Glazen - Short Tumbler - 4-pack - Clear">
      <img src="https://cdn.eco-logisch.nl/images/Rebottled%20Short%20Tumbler%204x%20Clear.jpg" alt="Rebottled Glazen - Short Tumbler - 4-pack - Clear">
      <div>
          <h4>Rebottled Glazen - Short Tumbler - 4-pack - Clear</h4>
          <p><strong>€ 18.45</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="18.45" data-name="Rebottled Glazen - Short Tumbler - 4-pack - Mix">
      <img src="https://cdn.eco-logisch.nl/images/Rebottled%20Short%20Tumbler%204x%20Mix.jpg" alt="Rebottled Glazen - Short Tumbler - 4-pack - Mix">
      <div>
          <h4>Rebottled Glazen - Short Tumbler - 4-pack - Mix</h4>
          <p><strong>€ 18.45</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="18.45" data-name="Rebottled Glazen - Short Tumbler - 4-pack - Olive">
      <img src="https://cdn.eco-logisch.nl/images/Rebottled%20Short%20Tumbler%204x%20Olive.jpg" alt="Rebottled Glazen - Short Tumbler - 4-pack - Olive">
      <div>
          <h4>Rebottled Glazen - Short Tumbler - 4-pack - Olive</h4>
          <p><strong>€ 18.45</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="13.16" data-name="Rebottled Karaf - Clear - 600 ml">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-karaf-clear.jpg" alt="Rebottled Karaf - Clear - 600 ml">
      <div>
          <h4>Rebottled Karaf - Clear - 600 ml</h4>
          <p><strong>€ 13.16</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="13.16" data-name="Rebottled Karaf - Olive - 600 ml">
      <img src="https://cdn.eco-logisch.nl/images/rebottled-karaf-olive.jpg" alt="Rebottled Karaf - Olive - 600 ml">
      <div>
          <h4>Rebottled Karaf - Olive - 600 ml</h4>
          <p><strong>€ 13.16</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="26.81" data-name="Ronde slakom uit bamboe ø 25cm H 11cm">
      <img src="https://cdn.eco-logisch.nl/images/bamboewebb.jpg" alt="Ronde slakom uit bamboe ø 25cm H 11cm">
      <div>
          <h4>Ronde slakom uit bamboe ø 25cm H 11cm</h4>
          <p><strong>€ 26.81</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="8.93" data-name="Slabestek - 2-delig - 100% FSC Bamboe">
      <img src="https://cdn.eco-logisch.nl/images/Point%20Virgule%20slabestek%20bamboe.jpg" alt="Slabestek - 2-delig - 100% FSC Bamboe">
      <div>
          <h4>Slabestek - 2-delig - 100% FSC Bamboe</h4>
          <p><strong>€ 8.93</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="42.82" data-name="Taartbodem rond - emaille - 30 cm">
      <img src="https://cdn.eco-logisch.nl/images/riess-taartbodem-zwart.jpg" alt="Taartbodem rond - emaille - 30 cm">
      <div>
          <h4>Taartbodem rond - emaille - 30 cm</h4>
          <p><strong>€ 42.82</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="6.53" data-name="Uitbreidingsset - Extra Nanostoppers - Set van 6">
      <img src="https://cdn.eco-logisch.nl/images/Airtender%20-%20Nanostopper%20-%20Verpakking%206.jpg" alt="Uitbreidingsset - Extra Nanostoppers - Set van 6">
      <div>
          <h4>Uitbreidingsset - Extra Nanostoppers - Set van 6</h4>
          <p><strong>€ 6.53</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="22.99" data-name="Vacuümset Voor Voedsel & Wijn - Giftbox">
      <img src="https://cdn.eco-logisch.nl/images/Airtender%20giftbox%20voedsel%20en%20wijn%20front.jpg" alt="Vacuümset Voor Voedsel & Wijn - Giftbox">
      <div>
          <h4>Vacuümset Voor Voedsel & Wijn - Giftbox</h4>
          <p><strong>€ 22.99</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="17.68" data-name="Vijzel & Stamper - Bamboe - FSC">
      <img src="https://cdn.eco-logisch.nl/images/Vijzel%20Stamper%20Bamboe%20FSC.jpg" alt="Vijzel & Stamper - Bamboe - FSC">
      <div>
          <h4>Vijzel & Stamper - Bamboe - FSC</h4>
          <p><strong>€ 17.68</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="29.03" data-name="Zuurdesembrood Maker - 900ml - Oranje">
      <img src="https://cdn.eco-logisch.nl/images/Kefirko%20Zuurdesembrood%20Maker%20Oranje%20900ml.jpg" alt="Zuurdesembrood Maker - 900ml - Oranje">
      <div>
          <h4>Zuurdesembrood Maker - 900ml - Oranje</h4>
          <p><strong>€ 29.03</strong></p>
      </div>
    </div>
    
</details>
<details><summary>Pannen</summary>

    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="61.21" data-name="Braadpan - Eco-ok - 20cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Braadpan%2020cm%201.jpg" alt="Braadpan - Eco-ok - 20cm">
      <div>
          <h4>Braadpan - Eco-ok - 20cm</h4>
          <p><strong>€ 61.21</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="68.92" data-name="Braadpan - Eco-ok - 24cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Braadpan%2024cm%201.jpg" alt="Braadpan - Eco-ok - 24cm">
      <div>
          <h4>Braadpan - Eco-ok - 24cm</h4>
          <p><strong>€ 68.92</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="29.69" data-name="Eierpan en serveerschaal - Emaille">
      <img src="https://cdn.eco-logisch.nl/images/eierpannetje.jpg" alt="Eierpan en serveerschaal - Emaille">
      <div>
          <h4>Eierpan en serveerschaal - Emaille</h4>
          <p><strong>€ 29.69</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="91.49" data-name="Featherweights Braadpan 22cm">
      <img src="https://cdn.eco-logisch.nl/images/greenpanbraadpan22cm.jpg" alt="Featherweights Braadpan 22cm">
      <div>
          <h4>Featherweights Braadpan 22cm</h4>
          <p><strong>€ 91.49</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="117.67" data-name="Featherweights Braadpan 26cm">
      <img src="https://cdn.eco-logisch.nl/images/braadpan26.jpg" alt="Featherweights Braadpan 26cm">
      <div>
          <h4>Featherweights Braadpan 26cm</h4>
          <p><strong>€ 117.67</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="55.82" data-name="Grillpan - Eco-ok - 26cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Grilpan%2026cm%202.jpg" alt="Grillpan - Eco-ok - 26cm">
      <div>
          <h4>Grillpan - Eco-ok - 26cm</h4>
          <p><strong>€ 55.82</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="59.64" data-name="Hapjespan - Eco-ok - 28cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Hapjespan%2028cm%201.jpg" alt="Hapjespan - Eco-ok - 28cm">
      <div>
          <h4>Hapjespan - Eco-ok - 28cm</h4>
          <p><strong>€ 59.64</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="60.91" data-name="Keramische Antikleef Koekenpannenset 3-delig - Mayflower">
      <img src="https://cdn.eco-logisch.nl/images/3deligset.jpg" alt="Keramische Antikleef Koekenpannenset 3-delig - Mayflower">
      <div>
          <h4>Keramische Antikleef Koekenpannenset 3-delig - Mayflower</h4>
          <p><strong>€ 60.91</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="211.87" data-name="Keramische Antikleef Pannenset 13-delig">
      <img src="https://cdn.eco-logisch.nl/images/10delig.jpg" alt="Keramische Antikleef Pannenset 13-delig">
      <div>
          <h4>Keramische Antikleef Pannenset 13-delig</h4>
          <p><strong>€ 211.87</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="101.86" data-name="Keramische Antikleef Pannenset 5-delig">
      <img src="https://cdn.eco-logisch.nl/images/5deligepannenset.jpg" alt="Keramische Antikleef Pannenset 5-delig">
      <div>
          <h4>Keramische Antikleef Pannenset 5-delig</h4>
          <p><strong>€ 101.86</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="152.08" data-name="Keramische Antikleef Pannenset 9-delig">
      <img src="https://cdn.eco-logisch.nl/images/9deli.jpg" alt="Keramische Antikleef Pannenset 9-delig">
      <div>
          <h4>Keramische Antikleef Pannenset 9-delig</h4>
          <p><strong>€ 152.08</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="43.51" data-name="Koekenpan - Eco-ok - 20cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Koekenpan%2020cm%201.1.jpg" alt="Koekenpan - Eco-ok - 20cm">
      <div>
          <h4>Koekenpan - Eco-ok - 20cm</h4>
          <p><strong>€ 43.51</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="48.90" data-name="Koekenpan - Eco-ok - 24cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Koekenpan%2024cm%201.1.jpg" alt="Koekenpan - Eco-ok - 24cm">
      <div>
          <h4>Koekenpan - Eco-ok - 24cm</h4>
          <p><strong>€ 48.90</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="55.82" data-name="Koekenpan - Eco-ok - 28cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Koekenpan%2028cm%201.1.jpg" alt="Koekenpan - Eco-ok - 28cm">
      <div>
          <h4>Koekenpan - Eco-ok - 28cm</h4>
          <p><strong>€ 55.82</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="59.68" data-name="Koekenpan - Eco-ok - 30cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Koekenpan%2030cm%201.1.jpg" alt="Koekenpan - Eco-ok - 30cm">
      <div>
          <h4>Koekenpan - Eco-ok - 30cm</h4>
          <p><strong>€ 59.68</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="46.71" data-name="Koekenpan Copenhagen - Keramisch - Antikleef - 20 cm">
      <img src="https://cdn.eco-logisch.nl/images/Greenpan%20Copenhagen%20koekenpan%2020%20cm%201.jpg" alt="Koekenpan Copenhagen - Keramisch - Antikleef - 20 cm">
      <div>
          <h4>Koekenpan Copenhagen - Keramisch - Antikleef - 20 cm</h4>
          <p><strong>€ 46.71</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="60.31" data-name="Koekenpan Copenhagen - Keramisch - Antikleef - 24 cm">
      <img src="https://cdn.eco-logisch.nl/images/Greenpan%20Copenhagen%20koekenpan%2024%20cm.jpg" alt="Koekenpan Copenhagen - Keramisch - Antikleef - 24 cm">
      <div>
          <h4>Koekenpan Copenhagen - Keramisch - Antikleef - 24 cm</h4>
          <p><strong>€ 60.31</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="65.40" data-name="Koekenpan Copenhagen - Keramisch - Antikleef - 28 cm">
      <img src="https://cdn.eco-logisch.nl/images/Greenpan%20Copenhagen%20koekenpan%2028%20cm.jpg" alt="Koekenpan Copenhagen - Keramisch - Antikleef - 28 cm">
      <div>
          <h4>Koekenpan Copenhagen - Keramisch - Antikleef - 28 cm</h4>
          <p><strong>€ 65.40</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="70.72" data-name="Koekenpan Copenhagen - Keramisch - Antikleef - 30 cm">
      <img src="https://cdn.eco-logisch.nl/images/Greenpan%20Copenhagen%20koekenpan%2030%20cm.jpg" alt="Koekenpan Copenhagen - Keramisch - Antikleef - 30 cm">
      <div>
          <h4>Koekenpan Copenhagen - Keramisch - Antikleef - 30 cm</h4>
          <p><strong>€ 70.72</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="30.71" data-name="Koekenpan Essence - Keramische Anti-Aanbaklaag - 20 cm">
      <img src="https://cdn.eco-logisch.nl/images/Essence%20koekenpan%2020%20cm%20(1).png" alt="Koekenpan Essence - Keramische Anti-Aanbaklaag - 20 cm">
      <div>
          <h4>Koekenpan Essence - Keramische Anti-Aanbaklaag - 20 cm</h4>
          <p><strong>€ 30.71</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="39.52" data-name="Koekenpan Essence - Keramische Anti-Aanbaklaag - 24 cm">
      <img src="https://cdn.eco-logisch.nl/images/Essence%20koekenpan%2024%20cm.jpg" alt="Koekenpan Essence - Keramische Anti-Aanbaklaag - 24 cm">
      <div>
          <h4>Koekenpan Essence - Keramische Anti-Aanbaklaag - 24 cm</h4>
          <p><strong>€ 39.52</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="43.91" data-name="Koekenpan Essence - Keramische Anti-Aanbaklaag - 26 cm">
      <img src="https://cdn.eco-logisch.nl/images/Essence%20koekenpan%2026%20cm.jpg" alt="Koekenpan Essence - Keramische Anti-Aanbaklaag - 26 cm">
      <div>
          <h4>Koekenpan Essence - Keramische Anti-Aanbaklaag - 26 cm</h4>
          <p><strong>€ 43.91</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="46.56" data-name="Koekenpan Essence - Keramische Anti-Aanbaklaag - 28 cm">
      <img src="https://cdn.eco-logisch.nl/images/Essence%20koekenpan%2028%20cm.jpg" alt="Koekenpan Essence - Keramische Anti-Aanbaklaag - 28 cm">
      <div>
          <h4>Koekenpan Essence - Keramische Anti-Aanbaklaag - 28 cm</h4>
          <p><strong>€ 46.56</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="39.18" data-name="Koekenpan van emaille - 20 cm">
      <img src="https://cdn.eco-logisch.nl/images/riess-koekenpan-30.jpg" alt="Koekenpan van emaille - 20 cm">
      <div>
          <h4>Koekenpan van emaille - 20 cm</h4>
          <p><strong>€ 39.18</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="43.10" data-name="Koekenpan van emaille - 24 cm">
      <img src="https://cdn.eco-logisch.nl/images/riess-koekenpan-30.jpg" alt="Koekenpan van emaille - 24 cm">
      <div>
          <h4>Koekenpan van emaille - 24 cm</h4>
          <p><strong>€ 43.10</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="47.44" data-name="Koekenpan van emaille - 26 cm">
      <img src="https://cdn.eco-logisch.nl/images/riess-koekenpan-30.jpg" alt="Koekenpan van emaille - 26 cm">
      <div>
          <h4>Koekenpan van emaille - 26 cm</h4>
          <p><strong>€ 47.44</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="5.58" data-name="Pannenlikker - Silicone - Bamboe Handvat - Taupe">
      <img src="https://cdn.eco-logisch.nl/images/Silicone%20pannenlikker%20-%20bamboe%20-%20taupe.jpg" alt="Pannenlikker - Silicone - Bamboe Handvat - Taupe">
      <div>
          <h4>Pannenlikker - Silicone - Bamboe Handvat - Taupe</h4>
          <p><strong>€ 5.58</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="81.41" data-name="Snelkookpan RVS glans">
      <img src="https://cdn.eco-logisch.nl/images/bk-snelkookpan-glans-rvs.jpg" alt="Snelkookpan RVS glans">
      <div>
          <h4>Snelkookpan RVS glans</h4>
          <p><strong>€ 81.41</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="81.41" data-name="Snelkookpan RVS mat">
      <img src="https://cdn.eco-logisch.nl/images/bk-mat-snelkookpan-rvs.jpg" alt="Snelkookpan RVS mat">
      <div>
          <h4>Snelkookpan RVS mat</h4>
          <p><strong>€ 81.41</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="38.47" data-name="Steelpan - Eco-ok - 16cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Sauspan%2016cm%201.jpg" alt="Steelpan - Eco-ok - 16cm">
      <div>
          <h4>Steelpan - Eco-ok - 16cm</h4>
          <p><strong>€ 38.47</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="44.18" data-name="Steelpan Copenhagen - Keramisch - Antikleef - 16 cm">
      <img src="https://cdn.eco-logisch.nl/images/Greenpan%20Copenhagen%20steelpan%2016cm%201.jpg" alt="Steelpan Copenhagen - Keramisch - Antikleef - 16 cm">
      <div>
          <h4>Steelpan Copenhagen - Keramisch - Antikleef - 16 cm</h4>
          <p><strong>€ 44.18</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="60.08" data-name="Steelpan Copenhagen - Keramisch - Antikleef - 18 cm">
      <img src="https://cdn.eco-logisch.nl/images/Greenpan%20Copenhagen%20steelpan%2018%20cm%201.jpg" alt="Steelpan Copenhagen - Keramisch - Antikleef - 18 cm">
      <div>
          <h4>Steelpan Copenhagen - Keramisch - Antikleef - 18 cm</h4>
          <p><strong>€ 60.08</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="57.17" data-name="Wokpan - Eco-ok - 28cm">
      <img src="https://cdn.eco-logisch.nl/images/TVS%20Eco-ok%20Wokpan%2028cm%201.jpg" alt="Wokpan - Eco-ok - 28cm">
      <div>
          <h4>Wokpan - Eco-ok - 28cm</h4>
          <p><strong>€ 57.17</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="48.32" data-name="Wokpan Essence - Keramische Anti-Aanbaklaag - 28 cm">
      <img src="https://cdn.eco-logisch.nl/images/Keramische-wok-Cambridge-black.jpg" alt="Wokpan Essence - Keramische Anti-Aanbaklaag - 28 cm">
      <div>
          <h4>Wokpan Essence - Keramische Anti-Aanbaklaag - 28 cm</h4>
          <p><strong>€ 48.32</strong></p>
      </div>
    </div>
    
</details>
<details><summary>Snijden & Grillen</summary>

    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.41" data-name="Bamboe Snijplank - 28x22 cm">
      <img src="https://cdn.eco-logisch.nl/images/pandoo-snijplank22.jpg" alt="Bamboe Snijplank - 28x22 cm">
      <div>
          <h4>Bamboe Snijplank - 28x22 cm</h4>
          <p><strong>€ 7.41</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="9.06" data-name="Bamboe Snijplank - 32x25 cm">
      <img src="https://cdn.eco-logisch.nl/images/snijplank-pandoo-3225.jpg" alt="Bamboe Snijplank - 32x25 cm">
      <div>
          <h4>Bamboe Snijplank - 32x25 cm</h4>
          <p><strong>€ 9.06</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="10.71" data-name="Bamboe Snijplank - 39x28 cm">
      <img src="https://cdn.eco-logisch.nl/images/snijplank-pandoo-3928.jpg" alt="Bamboe Snijplank - 39x28 cm">
      <div>
          <h4>Bamboe Snijplank - 39x28 cm</h4>
          <p><strong>€ 10.71</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="80.59" data-name="Barbecueset - 3-delig">
      <img src="https://cdn.eco-logisch.nl/images/5-in-1-bbq-set-opinel.jpg" alt="Barbecueset - 3-delig">
      <div>
          <h4>Barbecueset - 3-delig</h4>
          <p><strong>€ 80.59</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="34.33" data-name="Kaasset - 2-delig - mes en vork">
      <img src="https://cdn.eco-logisch.nl/images/opinel-kaas-web.jpg" alt="Kaasset - 2-delig - mes en vork">
      <div>
          <h4>Kaasset - 2-delig - mes en vork</h4>
          <p><strong>€ 34.33</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="34.73" data-name="Messenset - Petit Chef">
      <img src="https://cdn.eco-logisch.nl/images/petit-chef-box.jpg" alt="Messenset - Petit Chef">
      <div>
          <h4>Messenset - Petit Chef</h4>
          <p><strong>€ 34.73</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="14.45" data-name="Snijplank Bamboe - M - 28 x 18 x 2,5 cm">
      <img src="https://cdn.eco-logisch.nl/images/Namture%20Bamboe%20Snijplank%20M%201.jpg" alt="Snijplank Bamboe - M - 28 x 18 x 2,5 cm">
      <div>
          <h4>Snijplank Bamboe - M - 28 x 18 x 2,5 cm</h4>
          <p><strong>€ 14.45</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="30.79" data-name="Snijplank Bamboe - XL - 40 x 30 x 2,5 cm">
      <img src="https://cdn.eco-logisch.nl/images/Namture%20Bamboe%20Snijplank%20XL%201.jpg" alt="Snijplank Bamboe - XL - 40 x 30 x 2,5 cm">
      <div>
          <h4>Snijplank Bamboe - XL - 40 x 30 x 2,5 cm</h4>
          <p><strong>€ 30.79</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="19.06" data-name="Snijplank Bamboe FSC 37.5x25x1.6cm">
      <img src="https://cdn.eco-logisch.nl/images/Ontwerp%20zonder%20titel%20(24).jpg" alt="Snijplank Bamboe FSC 37.5x25x1.6cm">
      <div>
          <h4>Snijplank Bamboe FSC 37.5x25x1.6cm</h4>
          <p><strong>€ 19.06</strong></p>
      </div>
    </div>
    
</details>
<details><summary>Thee & Koffie</summary>

    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.84" data-name="Compleet kraanwater filter O-Well">
      <img src="https://cdn.eco-logisch.nl/images/OwellWaterfilter_01.jpg" alt="Compleet kraanwater filter O-Well">
      <div>
          <h4>Compleet kraanwater filter O-Well</h4>
          <p><strong>€ 7.84</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="37.28" data-name="EM X waterfilter cilinders - 500gr">
      <img src="https://cdn.eco-logisch.nl/images/EM%20Bokashi%20Keramiek%20pijpjes%201.jpg" alt="EM X waterfilter cilinders - 500gr">
      <div>
          <h4>EM X waterfilter cilinders - 500gr</h4>
          <p><strong>€ 37.28</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="8.44" data-name="Filters voor O-Well kraanwaterfilter - 3 st.">
      <img src="https://cdn.eco-logisch.nl/images/OwellWaterfilter_04.jpg" alt="Filters voor O-Well kraanwaterfilter - 3 st.">
      <div>
          <h4>Filters voor O-Well kraanwaterfilter - 3 st.</h4>
          <p><strong>€ 8.44</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.45" data-name="Herbruikbaar Theefilter - RVS">
      <img src="https://cdn.eco-logisch.nl/images/ahtable-herbruikbaartheefilter.jpg" alt="Herbruikbaar Theefilter - RVS">
      <div>
          <h4>Herbruikbaar Theefilter - RVS</h4>
          <p><strong>€ 7.45</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="1.89" data-name="Katoenen koffiefilter">
      <img src="https://cdn.eco-logisch.nl/images/Ahtable_koffiefilters.jpg" alt="Katoenen koffiefilter">
      <div>
          <h4>Katoenen koffiefilter</h4>
          <p><strong>€ 1.89</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="10.30" data-name="Koffiefilter - Nr. 4 - Herbruikbaar">
      <img src="https://cdn.eco-logisch.nl/images/herbruikbaar-koffie-filter.jpg" alt="Koffiefilter - Nr. 4 - Herbruikbaar">
      <div>
          <h4>Koffiefilter - Nr. 4 - Herbruikbaar</h4>
          <p><strong>€ 10.30</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.05" data-name="Koffiefilters - No. 2">
      <img src="https://cdn.eco-logisch.nl/images/koffie-filter-zak2.jpg" alt="Koffiefilters - No. 2">
      <div>
          <h4>Koffiefilters - No. 2</h4>
          <p><strong>€ 3.05</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.30" data-name="Koffiefilters - No. 4 - FSC - ongebleekt, chlorine-vrij papier - 100st.">
      <img src="https://cdn.eco-logisch.nl/images/IYC_CoffeeFilters_No4.jpg" alt="Koffiefilters - No. 4 - FSC - ongebleekt, chlorine-vrij papier - 100st.">
      <div>
          <h4>Koffiefilters - No. 4 - FSC - ongebleekt, chlorine-vrij papier - 100st.</h4>
          <p><strong>€ 3.30</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="7.42" data-name="Koffiemachine reiniger en ontkalker">
      <img src="https://cdn.eco-logisch.nl/images/Koffiemachine%20_ontkalker.jpg" alt="Koffiemachine reiniger en ontkalker">
      <div>
          <h4>Koffiemachine reiniger en ontkalker</h4>
          <p><strong>€ 7.42</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="12.38" data-name="Kraanwaterfilter met 3 extra waterfilters">
      <img src="https://cdn.eco-logisch.nl/images/OwellWaterfilter_05.jpg" alt="Kraanwaterfilter met 3 extra waterfilters">
      <div>
          <h4>Kraanwaterfilter met 3 extra waterfilters</h4>
          <p><strong>€ 12.38</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="14.16" data-name="Oesterzwammen kweken op koffiedik">
      <img src="https://cdn.eco-logisch.nl/images/fungi-factory-growkit-ecologisch.jpg" alt="Oesterzwammen kweken op koffiedik">
      <div>
          <h4>Oesterzwammen kweken op koffiedik</h4>
          <p><strong>€ 14.16</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="5.77" data-name="Thee Filters - FSC ongebleekt - Short - 100st.">
      <img src="https://cdn.eco-logisch.nl/images/IYC_TeaFilters_Short.jpg" alt="Thee Filters - FSC ongebleekt - Short - 100st.">
      <div>
          <h4>Thee Filters - FSC ongebleekt - Short - 100st.</h4>
          <p><strong>€ 5.77</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="4.03" data-name="Thee Filters - FSC ongebleekt - Tall - 50st.">
      <img src="https://cdn.eco-logisch.nl/images/IYC_TeaFilters_Tall.jpg" alt="Thee Filters - FSC ongebleekt - Tall - 50st.">
      <div>
          <h4>Thee Filters - FSC ongebleekt - Tall - 50st.</h4>
          <p><strong>€ 4.03</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="2.88" data-name="Thee zakjes - 9 x 9cm - 5st">
      <img src="https://cdn.eco-logisch.nl/images/theezakjes_web.jpg" alt="Thee zakjes - 9 x 9cm - 5st">
      <div>
          <h4>Thee zakjes - 9 x 9cm - 5st</h4>
          <p><strong>€ 2.88</strong></p>
      </div>
    </div>
    
    <div class="product">
      <input type="checkbox" class="product-checkbox" data-price="3.67" data-name="Thee-ei - Infuser">
      <img src="https://cdn.eco-logisch.nl/images/thee_infuser.jpg" alt="Thee-ei - Infuser">
      <div>
          <h4>Thee-ei - Infuser</h4>
          <p><strong>€ 3.67</strong></p>
      </div>
    </div>
    
</details>
`;
  document.body.insertBefore(container, document.querySelector(".totaal"));
});