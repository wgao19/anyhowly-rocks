# Anyhowly Rocks

This repo contains a sample site built for a Gatsby workshop, README and links to materials we prepared for this workshop.

Held in:

- [Developer's Gym](https://www.meetup.com/Junior-Developers-Singapore/events/260595440/) of [JuniorDev.SG](http://juniordev.sg/)

## Content

### Design intention

The audience of our workshop is mainly _junior developers_ (see reference above). The workshop does not assume extensive knowledge about React nor GraphQL. We hope to get people's hands on starting to their blog site.

The design intention is to lead by task instead of by chapters of Gatsby's official documentation. For example, "build a blog site", "add a night theme toggle to my blog", "introduce time to read to my blog posts", "load static asset with GraphQL", etc. Although eventually a lot of the flow align.

We hope to build each chunk of the material in forms of lightning talks. Then we'd pause, check everyone's progress, and move on to the next. Each chunk shall be self-inclusive.

### Materials

The whole slides and workshop content are composed and revised in public. You may view the slides, press S for speaker notes. However, later on I put more of the notes in the following Dropbox Paper files.

- [Slides](https://speak.wgao19.cc/slides/1904-gatsby-developers-gym/)
- Preparation materials
  - [Preface](https://paper.dropbox.com/doc/0-Preface-v0jdJCn9wOCRd5t2CK7r1) This one is rather personal, but you may use it anyway
  - [Introduction](https://paper.dropbox.com/doc/1-Intro-lKrNqMpV6PTg3nkfxM54K) Covers what is Gatsby, static site generators, JAMStack concept, Gatsby Starters, Gatsby Plugins, and a peak into Gatsby Themes.
  - [Up and Running](https://paper.dropbox.com/doc/2-Up-and-Running-oLi0QWOcOZWE4oFDfZaO3) Setting up environment, get site running with Gatsby Advanced Starter. Introduces Gatsby CLI, Gatsby Config, Gatsby Node APIs.
  - [Layouts](https://paper.dropbox.com/doc/3-Layouts-BEGMcrHWBK2gWH2yXKOHT) Writing and using a Layout. Introduces React's mindset if people are not familiar.
    - Organization of src/
    - Building layouts with React
  - [Queries](https://paper.dropbox.com/doc/5-Source-Plugins-Querying-Data--Ab2fVQd~_Ie8YArFDfchk2tNAg-ForaftoXNcolI1GJT7qCR) Introduces GraphQL, how Gatsby handles queries for data and static assets.
    - Intro to GraphQL
    - Customizing queries
    - Querying static assets, optimization by Gatsby with Sharp
    - (Optional) Adding a util field for posts
  - [Styling](https://paper.dropbox.com/doc/6-Styling-EsJA2ivqkXpQK1nAnIpbj) Go over choices of styling. But for this workshop we use SASS with CSS modules.
    - Options for styling
    - Styling with SASS and CSS Modules
    - Basic typesetting for the site
    - Building a night theme
    - (Optional) Building the night theme with React hooks
  - Typography (shared link as above) Introduces styling the site using a TypographyJS theme and customizing it.
    - Using a TypographyJS theme
    - Customizing the TypographyJS theme
    - (Optional) Writing your own TypographyJS theme
    - (Optional) Vertical rhythm
  - [APIs](https://paper.dropbox.com/doc/7-Plugging-In-Third-Party-Services--Ab3uzISdkbt3IL5uKNbVg2b2Ag-4m0smdgjiMo2ds4HleEFR) Introduces a few third party libraries.
    - OEMBED
  - [Reaches](https://paper.dropbox.com/doc/8-Reaches--Ab1A0DzsH_I6go1RBBS~oLgDAg-TPVbRpQw4Wzc3RnwntnEx) Materials (reference) and demos about reaching audience
    - SEO
    - Google Analytics
    - Deployment with Netlify
  - [Community](https://paper.dropbox.com/doc/9-Beyond-uS1naclfctO26V0ICpwyE) Refer people to communities and future contributions
    - Where to get help
    - Encouraging people to contribute
    - Pair programming
- List of extra things remember to do
  - Demo the site we created, introduce people to more possibilities

## Source code

The site includes one branch for each step / feature we want people to build in this workshop. We'll roughly follow this:

- 0-initial-commit
- 1-up-and-running
- 2-1-add-a-custom-page
- 2-2-add-header-to-layout
- 2-3-post-listing
- 2-3-use-layout-in-custom-page
- 2-4-add-intro-to-layout
- 2-layout
- 3-queries
- 4-1-use-sass-and-css-module
- 4-2-styling-with-sass-and-css-modules
- 4-3-basic-typesetting
- 4-4-typography
- 4-5-customize-typography-theme
- 4-styling

## Contributing

Contributions to this repo in any form (content, site, workshop material) are welcome and much appreciated!

## Other Nonsense

### Personal story behind this site

So I've been busy preparing for this Gatsby workshop, and I've been slacking on climbing recently. But I still want to stay spiritually connected with climbing. And this year's world cup has started also and I'm lacking behind. My favorite YouTube channel Niklas has a few technique analysis videos already that I haven't watch.

How do I fix thissssss?

I suppose, since I am always happy about anything related with climbing, why not take this chance to create this Gatsby site for climbing. It fits this theme so nicely.

I'm gonna call it anyhowly rocks. That's the born style of my community. And the domain is cheap so why not ¯\_(ツ)\_/¯

### "Anyhowly" comes from...

Basically my friend [@huijing](https://github.com/huijing) anyhowly inspires me with a bunch of keywords and hashtags of life. And `anyhowly` is a classic.

I anyhowly climb lah.

### Anyhowly Rocks v.s. Anyhowly Rox

Thought it'd be fun to build a night theme. Furthermore, since guys and girls climb very differently, this supplies a semantic meaning for two themes to have. And I took the liberty to making the night theme the more girlish one and call it Anyhowly Rox :]
