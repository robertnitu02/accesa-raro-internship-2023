<br/>
<p align="center">
  <a href="https://github.com/robertnitu02/accesa-raro-internship-2023">
    <img src="https://i.imgur.com/0ZpDNat.png" alt="Logo" width="80" height="80" style="border-radius: 50%">
  </a>

<h3 align="center">Weather Application</h3>

  <p align="center">
    Internship 2023 @ Accesa & RaRo
    <br/>
    <br/>
    <a href="https://github.com/robertnitu02/accesa-raro-internship-2023/tree/master/weather-application"><strong>Codul sursă »</strong></a>
    <br/>
    <br/>
    <a href="https://v.b-zone.ro/accesa-internship/">versiune live</a>
    .
    <a href="https://www.accesa.eu/">accesa.eu</a>
  </p>
</p>

## Conținut

* [Despre proiect](#despre-proiect)
* [Temele aplicatiei](#temele-aplicatiei)
* [Notite](#notite)
* [Instalare](#instalare)
  * [Clonare si folosirea aplicatiei cu API Key propriu](#clonare-si-folosirea-aplicatiei-cu-API-Key-propriu)
  * [Rularea aplicatiei pe calculatorul proriu](#rularea-aplicatiei-pe-calculatorul-proriu)
* [Tehnologii folosite](#tehnologii-folosite)
* [Licenta](#licenta)

## Despre proiect

<p>
Aplicația folosește un API gratuit pentru a oferi date referitoare la vremea dintr-un anumit oraș/regiune. 
Aceasta mai oferă și posibilitatea de afișare a prognozei până la 7 zile.
</p>
<p>
Pe lângă aplicația propriu-zisă de vreme au fost adăugate și alte funcționalități precum: tema dinamică care se schimbă în
funcție de vremea din orașul căutat (în total sunt 8 teme disponibile, vezi următoarea secțiune), alegerea în ce limbă să fie afișate 
informațiile (română sau engleză) și tab-ul de favorite
unde sunt afișate orașele/regiunile adăugate la favorite de către utilizator.
</p>
<p>
La prima interacțiune aplicația va cere permisiunea de a accesa locația utilizatorului, iar în funcție de răspuns i se va afișa date 
despre vremea din locația sa, respectiv va avea posibilitatea să caute un oraș/regiune.
</p>
<p>
Aplicația este responsive atât pentru Desktop cât și pentru Mobile.
</p>

## Temele aplicatiei

<p>
Aplicația are 8 teme în functie de vremea orașului căutat. Acestea sunt: însorit, înnorat, praf, ceață, ploaie ușoară, ploaie cu fulgere și tunete, zăpadă și vreme extremă (tornadă).
</p>

![gif](https://i.imgur.com/JUzxY1Q.gif)

<details>
<summary>Poze cu toate temele în pralelel</summary>

![theme1](https://i.imgur.com/3vLAFAm.png)

![theme2](https://i.imgur.com/mf7Lg7T.png)
</details>
<p>
Un alt feature al aplicației este că se modifică în mod dinamic în funcție de starea zilei (dacă este zi sau noapte).
În căsuța de introducere a orașului, fundalul se va modifica în funcție de starea zilei din respectivul oraș.
</p>

![gif](https://i.imgur.com/tOi12AL.gif)

<details>
<summary>Poze cu fiecare în parte</summary>

![day](https://i.imgur.com/y4Kd4lH.png)

![night](https://i.imgur.com/hAegRIg.png)
</details>

## Notite

Pentru a vedea notițele versiunii vizualizează pagina de [Releases](https://github.com/robertnitu02/accesa-raro-internship-2023/releases).

## Instalare

### Clonare si folosirea aplicatiei cu API Key propriu

1. Creează-ți un cont pe [OpenWeatherAPI](https://openweathermap.org/) și obține un API Key 

2. Clonează repository-ul

```sh
git clone https://github.com/robertnitu02/accesa-raro-internship-2023
```

3. Instalează pachetele NPM

```sh
npm install
```

4. Introdu cheia în fișierul `constants/constants.js`

```JS
weatherApiMapKey: 'API KEY';
```

### Rularea aplicatiei pe calculatorul proriu

1. Clonează repository-ul

```sh
git clone https://github.com/robertnitu02/accesa-raro-internship-2023
```

2. Instalează pachetul http-server

```sh
npm install http-server
```

3. Rulează aplicația (asigură-te că ești în `../dist/weather-application/`)

```
npm start
```
4. *Se poate folosi orice altă integrare (live server etc)

## Tehnologii folosite

* Angular, HTML, SCSS, TypeScript, Angular Material, OpenWeather API, NGX Translate, LocalStorage.

## Licenta

MIT License.
Vizualizează [LICENSE](https://github.com/robertnitu02/accesa-raro-internship-2023/blob/master/LICENSE) pentru informații.
