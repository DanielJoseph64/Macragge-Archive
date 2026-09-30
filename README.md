**The Macragge Archive**
Fan site about Roboute Guilliman and the Ultramarines. Plain HTML/CSS/JS,
no framework, no build step. Just open index.html in a browser.

**Pages**
- index.html: home / table of contents
- guilliman.html: Guilliman's full bio (origins, Great Crusade, Calth, Codex Astartes, death & return)
- emperor.html: the Emperor of Mankind
- ultramar.html: the Five Hundred Worlds
- tyranids.html: the Tyranid invasion / Battle for Macragge
- heroes.html: Calgar, Titus, Sicarius, Ventris, Tigurius, Telion
- dreadnoughts.html: what Dreadnoughts are and the different patterns
- successors.html: successor Chapters
- resources.html: further reading / sources

css/style.css has all the styling and js/script.js handles the
active nav link, the mobile menu, and fading in real images over the
placeholder boxes.

**Running it**
No server needed, just open index.html.

**Purpose**
This project was created as a personal project to explore and develop my skills in web design and front-end development as a Computer Science student. Rather than following a tutorial or building a generic example website, I wanted to learn by creating something around a subject I am genuinely passionate about.

The site is an information archive focused on the Ultramarines and the wider world of Warhammer 40,000. I chose this subject because I have a strong interest in the books and lore of Warhammer 40,000, which gave me a topic I would actually enjoy researching and organizing into a website.

The project gave me an opportunity to practice building a multi-page website from scratch using HTML, CSS, and JavaScript, while experimenting with responsive layouts, navigation, typography, visual design, reusable components, and accessibility considerations. I also wanted to learn how to take a large amount of information and organize it into a website that is easy to navigate and visually consistent.

This is primarily a learning project. The goal was not to create an official Warhammer resource, but to use a subject I enjoy as a way to experiment with web development and gradually improve my ability to design and build websites.


**Notes to self**
- Colors/fonts are all CSS variables at the top of style.css.
- New page = copy the closest existing page, swap out the main content,
  add the link to the .navlinks block on every page.
- Only using one accent color gold for links/active states. The blue only
  shows up where it's actually accurate to the Ultramarines' own colors,
  never as a button or gradient.
- Added the Emperor, Dreadnoughts and Tyranids pages afterwards,
  and made heroes look nicer with Sicarius/Ventris/Tigurius/Telion. First
  version only had Calgar and Titus.

