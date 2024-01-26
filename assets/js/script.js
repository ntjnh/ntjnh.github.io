const skills = document.querySelectorAll('#skills ul li')
const skillModal = document.getElementById('definition')
const skillModalHeading = document.getElementById('skill-title')
const skillModalDiv = document.getElementById('skill-definition')
const skillModalClose = document.getElementById('close')

const definitions = {
    html5: [`HTML5`, `<p>HTML stands for Hypertext Markup Language. Think of it as the scaffolding or skeleton of a web page. It tells the browser what goes where, like paragraphs, images, headings, and links. It defines the basic structure for everything you see on the web!</p><p>HTML5 is basically the super upgraded version of your basic HTML. Think of it as the next level of web building, bringing websites to life with more engaging features and smoother experiences.</p>`],
    css3: [`CSS3`, `<p>Imagine you're building a website and want to make it look amazing. CSS is like your paintbrush and palette, letting you choose colors, fonts, sizes, and layouts for everything on the page. It's the magic behind making your website visually appealing and organized.</p><p>Thinking of CSS as a basic paint set, CSS3 is the upgraded version with all the fancy brushes and special effects! It's like taking your website design to the next level, making it more interactive and visually stunning.</p>`],
    sass: [`Sass`, `<p>Sass makes designing websites faster, cleaner, and more powerful!</p><p>Imagine having superpowers for your website styles. Sass/Scss is like that! It takes regular CSS and gives it extra abilities like variables, mixins and nesting.</p>`],
    js: [`JavaScript`, `<p>Imagine web pages that just sit there, staring back at you. JavaScript brings them to life!</p><p>It's like adding a brain and muscles to your website, making it interactive, dynamic and fun.</p>`],
    react: [`React`, `<p>React is like the ultimate Lego set for building web pages. Instead of clunky blocks, it lets you snap together reusable pieces called "components" to create dynamic and interactive interfaces. Each component has its own purpose, making coding organized and efficient.</p><p>React updates things smoothly when data changes, so your web page feels smooth and alive. It's a powerful tool for developers to build modern and engaging websites!</p>`],
    php: [`PHP`, `<p>PHP, or Hypertext Preprocessor, is like the invisible chef in the back of your favorite online restaurant. It's the scripting language that powers many dynamic websites, making them interactive and personalized.</p><p>So, while you see the pretty website and interact with its features, PHP is working tirelessly behind the scenes, making sure everything runs smoothly and efficiently. It's a powerful tool for developers to create dynamic and engaging web experiences.</p>`],
    gulp: [`Gulp`, `<p>Gulp is like a tireless assistant for web developers, automating all the repetitive tasks that take up their time. Think of it as a robot that sorts laundry, washes dishes, and takes out the trash - but for code!</p><p>So, while you're designing fancy features or writing clever code, Gulp is quietly chugging away in the background, keeping your project tidy and optimized. It's like having an extra pair of hands (or rather, lines of code) working for you!</p>`],
    npm: [`npm`, `<p>npm, or Node Package Manager, is like a giant supermarket for web developers. Instead of groceries, it sells ready-made code blocks called "packages" for websites built with Node.js. These packages can do anything from adding a fancy login form to making your website chat with other computers.</p><p>There are over a million packages available, making it a one-stop shop for all your Node.js development needs. So next time you need a specific feature for your website, skip the long cooking process and head to the "npm supermarket" - you'll find everything you need (and probably a few things you didn't!).</p>`]
}

for (let i = 0; i < skills.length; i++) {
    let skill = skills[i]
    let id = skill.getAttribute('id')
    
    skill.addEventListener('mouseenter', function(e) {
        this.classList.add(id)
    })

    skill.addEventListener('mouseleave', function(e) {
        this.classList.remove(id)
    })

    skill.addEventListener('click', e => {
        let clicked = e.target
        let id = clicked.id

        if (clicked.tagName === 'path') {
            id = clicked.parentElement.parentElement.id
        } else if (clicked.tagName === 'svg') {
            id = clicked.parentElement.id
        }

        skillModalHeading.textContent = definitions[id][0]
        skillModalDiv.innerHTML = definitions[id][1]
        skillModal.style.display = 'flex'
    })

    skillModalClose.addEventListener('click', e => {
        skillModal.style.display = 'none'
    })
}
