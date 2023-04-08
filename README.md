<br/>
<p align="center">
  <a href="https://github.com/robertnitu02/accesa-raro-internship-2023">
    <img src="" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Weather Application</h3>

  <p align="center">
    Evaluarea tehnică în cadrul programului de Frontend Internship 2023 Accesa & RaRo
    <br/>
    <br/>
    <a href="https://github.com/robertnitu02/accesa-raro-internship-2023/tree/master/weather-application"><strong>Codul sursă »</strong></a>
    <br/>
    <br/>
    <a href="https://v.b-zone.ro/accesa-internship/">Vizualizează</a>
  </p>
</p>

## Content

* [Despre proiect](#despre-proiect)
* [Temele aplicației](#temele-aplicatiei)
* [Instalarea proiectului](#instalarea-proiectului)
* [Tehnologii folosite](#tehnologii-folosite)
* [Licență](#licenta)

## Despre proiect

<p>
Aplicația folosește un API gratis pentru a oferi date referitoare la vremea dintr-un anumit oraș/regiune. Aceasta oferă posibilitatea de afișare a prognozei până la 7 zile.
Pe lângă aplicația propriu zisă de vreme au fost adăugate și alte funcționalități precum: tema dinamică care se schmbă în timp real în funcție de vremea din orașul căutat (8 teme disponibile), selectarea limbi (română sau engleză) și tab-ul de favorite, unde sunt afișate orașele/regiunile setate ca favorite de către utilizator.
</p>
<p>
La prima interacțiune cu aplicația aceasta va avea nevoie de locația dvs. pentru a vă afișa vremea din locația curentă. În cazul în care refuzați trebuie să introduceți un oraș în input-ul de "Enter city name" / "Introdu numele orașului".
Lista cu orașele adăugate la favorite cât și limba sunt salvate local.
</p>
<p>
Aplicația este responsive atât pentru Desktop cât și pentru Mobile.
</p>

## Temele aplicației

<p>
Așa cum spuneam la tab-ul anterior, aplicația are 8 teme în functie de vremea orașului căutat. Acestea sunt: însorit, nori, praf, ceață, ploaie ușoară, ploaie cu fulgere și tunete, zăpadă și tornadă.
</p>

![theme1](https://i.imgur.com/3vLAFAm.png)

![theme2](https://i.imgur.com/mf7Lg7T.png)

<p>
Un alt aspect al aplicație care se modifică în mod dinamic este în funcție de starea zilei (dacă este zi sau noapte). În secțiunea de introducere a orașului, fundalul se va modifica în funcție de starea zilei din respectivul oraș.
</p>

![day/night](https://i.imgur.com/56Qwfid.png)

## Instalarea proiectului

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
weatherApiMapKey: 'INTRODU AICI CHEIA';
```

## Tehnologii folosite

* Angular, HTML, SCSS, TypeScript, OpenWeather API, NGX Translate, LocalStorage

## Licență

Distributed under the MIT License.
See [LICENSE](https://github.com/robertnitu02/accesa-raro-internship-2023/blob/main/LICENSE.md) for more information.