import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Image from "@theme/IdealImage";

const FeatureList = [
  {
    title: "Leesbaar en begrijpelijk",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    image: require("@site/static/img/source-code2.png"),
    description: (
      <>
        Kabisa Levenslied was vanaf de grond af ontworpen voor maximale
        begrijpelijkheid. Onze passie voor software development heeft dus ook
        zeker een bijdrage gedaan om het maximale uit deze taal te halen.
        Allemaal om het maximale eruit te halen voor voor onze klanten!
      </>
    ),
  },
  {
    title: "Doelgericht",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    image: require("@site/static/img/logo-large.png"),
    description: (
      <>
        Veel software slaat de plank mis. Het weet je niet te raken. Dat is
        verleden tijd! Levenslied raakt je recht in het hart. Daar kan je
        emotioneel van worden. Maar het maakt je sterker. 💪🏼
      </>
    ),
  },
  {
    title: "Gedreven door Passie",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    image: require("@site/static/img/singing-developers2.png"),
    description: (
      <>
        Ons doel om Software Ontwikkeling nog beter te maken begint bij het
        begrijpen van de wensen van de klant en eindgebruiker. Wat drijft ze,
        waar ligt hun passie? Onze taal voed zich op deze passie tot waanzinnige
        eindresultaten.
      </>
    ),
  },
];

function Feature({ Svg, image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Image
          img={image}
          style={{ overflow: "hidden" }}
          className={styles.featureImage}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
