/* eslint-disable global-require */

import React from "react";
import Translate, { translate } from "@docusaurus/Translate";

const QUOTES = [
  {
    thumbnail: require("./quotes/niels.png"),
    name: "Niels Scheurleer",
    title: translate({
      id: "homepage.quotes.niels.title",
      message: "Groepsleider bij Kabisa",
      description: "Title of quote of Niels on the home page",
    }),
    text: (
      <Translate
        id="homepage.quotes.niels"
        description="Quote of Niels on the home page"
      >
        Ik werk hard aan de persoonlijke ontwikkeling van mijn ontwikkelaars.
        Door het gebruik van Levenslied raken de ontwikkelaars veel meer in
        verbinding met hun innerlijke zelf en emoties. Dit creëert een unieke
        groei van mijn ontwikkelaars op profesioneel vlak, maar vooral ook als
        mens.
      </Translate>
    ),
  },
  {
    thumbnail: require("./quotes/pascal.png"),
    name: "Pascal Widdershoven",
    title: translate({
      id: "homepage.quotes.pascal.title",
      message: "Chief Experimental Technologies",
      description: "Title of quote of Hector Ramos on the home page",
    }),
    text: (
      <Translate
        id="homepage.quotes.pascal"
        description="Quote of Pascal on the home page"
      >
        Wij meten de prestaties van onze ontwikkelaars strict op de hoeveelheid
        regels code. Sinds onze volledige overstap op Levenslied zijn de
        hoeveelheid regels zo hard toegenomen, ik heb nog nooit zulke
        productieve ontwikkelaars gehad! Dank Levenslied!
      </Translate>
    ),
  },
  {
    thumbnail: require("./quotes/harm.png"),
    name: "Harm de Laat",
    title: translate({
      id: "homepage.quotes.harm.title",
      message: "Trainer Levenslied Certificeringen",
      description: "Title of quote of Harm on the home page",
    }),
    text: (
      <Translate
        id="homepage.quotes.harm"
        description="Quote of Harm on the home page"
      >
        Ik geef nu ruim 3 maanden training in Levenslied. Het is een pittige
        training vol emotie. Het helpt in het bepalen van je 'Why'.
        Ontwikkelaars komen geroerd door de cursus. Meestal ontvang ik nog
        maandenlang bedankjes in mijn email hoe het iedereen heeft geraakt.
      </Translate>
    ),
  },
];

export default QUOTES;
