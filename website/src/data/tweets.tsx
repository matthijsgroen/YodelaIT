/* eslint-disable @docusaurus/no-untranslated-text */

import React from "react";

import type { Props as Tweet } from "../components/Tweet";

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};

const TWEETS: TweetItem[] = [
  {
    url: "https://twitter.com/kabisasoftware",
    handle: "matthijsgroen",
    name: "Matthijs Groen",
    date: "Apr 1, 2024",
    content: (
      <>
        In code reviews kijk ik nu vooral of het rijmt en een diepere betekenis
        heeft! Veel beter dan logica nalopen. Dank <b>#levenslied</b>
      </>
    ),
    showOnHomepage: true,
    githubUsername: "matthijsgroen",
  },
  {
    url: "https://twitter.com/kabisasoftware",
    handle: "joostevilghost",
    name: "Joost Saanen",
    date: "Apr 1, 2024",
    content: (
      <>
        Eindelijk een taal waarin ik mijn passie voor software ontwikkeling in
        kwijt kan. Eenvoudig op te zetten, in te zetten en aan te zetten. Wat
        wil je nog meer!?? <b>#levenslied</b>
      </>
    ),
    showOnHomepage: true,
    githubUsername: "JoostSaanen",
  },
  {
    url: "https://twitter.com/kabisasoftware",
    handle: "sander-van-maurik",
    name: "Sander van Maurik",
    date: "Apr 1, 2024",
    content: (
      <>
        🚿 Onder de douche tekende ik altijd al software diagrammen, maar nu kan
        ik de code ook gewoon zingen! 🤯 Dit is DE <b>#innovatie</b> van 2024,
        vergeet AI! <b>#levenslied</b>
      </>
    ),
    showOnHomepage: true,
    githubUsername: "Sandervanmaurik",
  },
  {
    url: "https://twitter.com/kabisasoftware",
    handle: "david_-_weng",
    name: "David Weng",
    date: "Apr 1, 2024",
    content: (
      <>
        Ik heb nu al twee projecten gedaan met <b>#levenslied</b>. Ons team is
        er dol op! 👏
        <br />
        <br />
        Dit is de programmeertaal waar we op hebben gewacht!
      </>
    ),
    showOnHomepage: true,
    githubUsername: "testdrivendavid",
  },
  {
    url: "https://twitter.com/kabisasoftware",
    handle: "MarcianoSRS",
    name: "Marciano",
    date: "Apr 1, 2024",
    content: (
      <>
        Stiekem sinds de eerste alpha testen me al aan het verheugen op dit
        moment! Binnenkort mag de hele wereld hier mee aan de slag!{" "}
        <b>#excited</b> <b>#levenslied</b>. Zo trots op deze software revolutie!
      </>
    ),
    showOnHomepage: true,
    githubUsername: "marcianosr",
  },
  {
    url: "https://twitter.com/kabisasoftware",
    handle: "kabisasoftware",
    name: "Kabisa - Software Artisans",
    date: "Apr 1, 2024",
    content: (
      <>
        Zeer onder de indruk hoe productief onze ontwikkelaars nu zijn geworden!
        Dank aan <b>#levenslied</b> voor de productiviteits boost!
      </>
    ),
    showOnHomepage: true,
    githubUsername: "kabisa",
  },
  {
    url: "https://twitter.com/kabisasoftware",
    handle: "TetzAdam",
    name: "Adam Tetz",
    date: "Apr 1, 2024",
    content: (
      <>
        Weinig talen werken net zo goed op mobiel, front-end, backend, cloud en
        in de terminal als deze! <b>#levenslied</b> 🔥🔥🔥
      </>
    ),
    showOnHomepage: true,
    githubUsername: "atetz",
  },
  {
    url: "https://twitter.com/kabisasoftware",
    handle: "patjoshuisman",
    name: "Pat-Jos Huisman",
    date: "Apr 1, 2024",
    content: (
      <>
        Trots op <b>@kabisasoftware</b> ❤️
        <br />
        <br />
        <b>#trots</b> <b>#levenslied</b>
      </>
    ),
    showOnHomepage: true,
    githubUsername: "patjos",
  },
  {
    url: "https://twitter.com/kabisasoftware",
    handle: "DominicBisschop",
    name: "Dr. Dominic",
    date: "Apr 1, 2024",
    content: (
      <>
        This is by far THE innovation we needed! The excitement for this is
        through the roof! I will write all future software now with{" "}
        <b>#levenslied</b>
      </>
    ),
    showOnHomepage: true,
    githubUsername: "DominicBisschop",
  },
  //   {
  //     url: "https://twitter.com/kentcdodds/status/1323806816019468288",
  //     handle: "kentcdodds",
  //     name: "Kent C. Dodds",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         http://testing-library.com just got a nice update! We&apos;re now on the
  //         latest version of <b>@docusaurus</b> thanks to @matanbobi, @TensorNo,
  //         and @nickemccurdy 💙
  //         <br />
  //         <br />
  //         My favorite new feature: dark mode!! 🌑/☀️
  //       </>
  //     ),
  //     showOnHomepage: true,
  //     githubUsername: "kentcdodds",
  //   },
  //   {
  //     url: "https://twitter.com/bantg/status/1463608561368457225",
  //     handle: "bantg",
  //     name: "banteg",
  //     date: "Apr 1, 2024",
  //     content: <>I like docusaurus much more, it&apos;s so snappy.</>,
  //     showOnHomepage: false,
  //     githubUsername: "banteg",
  //   },
  //   {
  //     url: "https://twitter.com/swyx/status/1418405515684581378",
  //     handle: "swyx",
  //     name: "swyx",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         Happy to share Temporal&apos;s first open source sponsorship — of{" "}
  //         <b>@docusaurus</b>!
  //         <br />
  //         <br />
  //         @temporalio uses it for http://docs.temporal.io, and it has been a huge
  //         boon to our docs team. @sebastienlorber is an incredible steward of the
  //         project, support it if you can!
  //       </>
  //     ),
  //     showOnHomepage: true,
  //     githubUsername: "sw-yx",
  //   },
  //   {
  //     url: "https://twitter.com/rachelnabors/status/1478490902037467137",
  //     handle: "rachelnabors",
  //     name: "R 'Nearest' Nabors 💙",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         I hear <b>@docusaurus</b> is a good tool for that!
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "rachelnabors",
  //   },
  //   {
  //     url: "https://twitter.com/dabit3/status/1394685348375052295",
  //     handle: "dabit3",
  //     name: "Nader Dabit",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         I did try Docusaurus, and I really liked it! Still investigating various
  //         options but it&apos;s probably at the top of my list for sure
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "dabit3",
  //   },
  //   {
  //     url: "https://twitter.com/johnny_reilly/status/1469238609266028545",
  //     handle: "johnny_reilly",
  //     name: "John Reilly",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         I ❤️ <b>@docusaurus</b> - it makes it so easy to spin up docs, blogs and
  //         simple websites. I&apos;ve used it to:
  //         <br />
  //         <br /> ✅ Replatform my blog with GitHub pages <br />
  //         ✅ Build a website for a local business <br />✅ Build internal facing
  //         blog/docs sites with @AzureStaticApps
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "johnnyreilly",
  //   },
  //   {
  //     url: "https://twitter.com/tinkertim/status/1423358665726304260",
  //     handle: "tinkertim",
  //     name: "Tim Post 💉💉💉",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         Docusaurus is mind-bendingly flexible. <br />
  //         <br />
  //         &quot;Wait! We need to have two products documented on the same site and
  //         both need to be translated into multiple languages!&quot;
  //         <br />
  //         <br /> ... and that&apos;s actually easy. Loving it!
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "tinkertim",
  //   },
  //   {
  //     url: "https://twitter.com/sebastienlorber/status/1321784071815680000",
  //     handle: "sebastienlorber",
  //     name: "Sebastien Lorber",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         🥳🎊🥳🎊🥳🎊🥳🎊 The @reactnative website just migrated to{" "}
  //         <b>@docusaurus</b>
  //         v2
  //         <br />
  //         Some obvious changes: <br />
  //         🌔 Dark mode <br />
  //         ⚡️ SPA navigation / prefetching <br />
  //         🧐 @algolia DocSearch v3 <br />
  //         💥 @mdx_js enable many new possibilities <br />
  //         <br />
  //         Check it out: http://reactnative.dev
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "slorber",
  //   },
  //   {
  //     url: "https://twitter.com/iansu/status/1184149586048245760",
  //     handle: "iansu",
  //     name: "Ian Sutherland",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         We just updated the Create React App docs to Docusaurus v2. Now with
  //         dark mode! 😎
  //         <br />
  //         <br />
  //         Thanks to the <b>@docusaurus</b> team for their help! ❤️
  //         <br />
  //         <br />
  //         https://create-react-app.dev
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "iansu",
  //   },
  //   {
  //     url: "https://twitter.com/mweststrate/status/1181276252293853186",
  //     handle: "mweststrate",
  //     name: "Michel Weststrate",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         New #mobx docs are online! More modern, fixing many UI issues.
  //         <br />
  //         <br />
  //         👏 @cloverich did the awesome job of migrating from ancient gitbook
  //         -&gt; <b>@docusaurus</b>! 👏 <br />
  //         <br />
  //         No real content updates yet, but contributing and publishing has become
  //         way easier
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "mweststrate",
  //   },
  //   {
  //     url: "https://twitter.com/verdaccio_npm/status/1420187249145118722",
  //     handle: "verdaccio_npm",
  //     name: "verdaccio",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         The new website has landed 🚀 powered by <b>@docusaurus</b> v2 and made
  //         by @_semoal kudos to him 👏 #verdaccio #nodejs awesome contribution ❤️‍🔥
  //         (video made with react remotion @JNYBGR ) all Open Source and hosted on
  //         @Netlify https://verdaccio.org
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "verdaccio",
  //   },

  //   {
  //     url: "https://twitter.com/yangshunz/status/1284536949718478848",
  //     handle: "yangshunz",
  //     name: "Yangshun Tay",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         I made a <b>@docusaurus</b> website for answers to the H5BP Front End
  //         Interview Questions! Hopefully it makes the browsing experience easier -
  //         https://frontendinterviewhandbook.com
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "yangshun",
  //   },

  //   {
  //     url: "https://twitter.com/pierregillesl/status/1372839188698001408",
  //     handle: "pierregillesl",
  //     name: "Pierre-Gilles Leymarie",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         Just upgraded our website to <b>@docusaurus</b> latest with
  //         internationalization support 🥳
  //         <br />
  //         <br />
  //         Before that, we had to build 2 separate versions of the website to get
  //         it in English + French.
  //         <br />
  //         <br />
  //         Now, it&apos;s working out of the box, with proper meta tags for SEO 👌
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "Pierre-Gilles",
  //   },
  //   {
  //     url: "https://twitter.com/biantris_/status/1480259279487741953",
  //     handle: "biantris_",
  //     name: "biazita",
  //     date: "Apr 1, 2024",
  //     content: (
  //       <>
  //         Today I tried <b>@docusaurus</b> in a project, I really like the ease
  //         and speed of developing with it \o/
  //       </>
  //     ),
  //     showOnHomepage: false,
  //     githubUsername: "biantris",
  //   },
];

export default TWEETS;
