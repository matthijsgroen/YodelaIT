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
    thumbnail: require("./quotes/christopher-chedeau.jpg"),
    name: "Ricky Vetter",
    title: translate({
      id: "homepage.quotes.risky-vetter.title",
      message: "ReasonReact Developer",
      description: "Title of quote of Ricky Vetter on the home page",
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page"
      >
        Docusaurus has been a great choice for the ReasonML family of projects.
        It makes our documentation consistent, i18n-friendly, easy to maintain,
        and friendly for new contributors.
      </Translate>
    ),
  },
];

export default QUOTES;
