# About Me

I am a young and dynamic full-stack developer based in London, UK.

I had a 10-month work placement with the Sage Foundation as a full-stack web developer with HTML, CSS, JavaScript, Git CLI, Django, PostgreSQL and Heroku.

Technologies:

-   HTML
-   CSS
-   JavaScript
-   Node.js
-   React
-   Next.js
-   Prisma
-   Git
-   Docker
-   Dokku
-   Kubernetes

Portfolio: https://aryanbeezadhur.com

# How I Built My Site

I built my site using [React](https://reactjs.org), a JavaScript library for building user interfaces, because of its convenient componentization and massive ecosystem.

I used React in conjunction with [Next.js](https://nextjs.org), a React framework, as it provides code splitting and server-side rendering for React components, improving user experience and search engine optimisation (SEO). Next.js also supports client-side routing, which makes page transitions faster.

For the [`/snippets` page](https://aryanbeezadhur.com/snippets), data is fetched from the [GitHub Gists REST API](https://docs.github.com/en/rest/reference/gists) using Next.js [incremental static regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration), which generates a static version of the page at build time, and regenerates the page in the background after a certain amount of time ([in my case I've set it to every 60 seconds](https://github.com/AryanBeezadhur/AryanBeezadhur/blob/master/pages/snippets.js#L54)). This means that the page is always blazing fast because it is static HTML, but still has accurate data.
