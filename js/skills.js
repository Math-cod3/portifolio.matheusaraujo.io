const techs = [{
        title: 'HTML',
        image: {
            src: 'fa-brands fa-html5',
            alt: '',
        },
        description: 'HTML é a base da web então todo desenvolvedor web que se preze tem domínio amplo na linguagem de marcação de texto, comigo não é diferente.',
        param: 'html'
    },
    {
        title: 'CSS',
        image: {
            src: 'fa-brands fa-css3-alt',
            alt: '',
        },
        description: 'Conhecimento consolidado em CSS. Não há mistério ao dominar CSS Grid e Flexbox, um design elegante e responsivo é garantido.',
        param: 'css'
    },
    {
        title: 'Javascript',
        image: {
            src: 'fa-brands fa-square-js',
            alt: '',
        },
        description: 'Possuo bons conhecimentos na versão ES6 de modo a lidar bem tanto com paradigma procedural e orientado a objetos. Conheço também alguns padrões de projetos como MVC, Factory e Observer.',
        param: 'javascript'
    },
    {
        title: 'React JS',
        image: {
            src: 'fa-brands fa-react',
            alt: '',
        },
        description: 'Após obter uma boa base de javascript chega a hora de aprender uma biblioteca para dar um passo além, e o React JS tem me sido formidável o aprendizado que pretendo ampliar cada vez mais. ',
        param: 'react'
    },
    {
        title: 'Node JS',
        image: {
            src: 'fa-brands fa-node-js',
            alt: 'Node js',
        },
        description: 'Apesar de me considerar um desenvolvedor front-end, possuo conhecimento em node js de forma a fazer conexões com banco de dados e fazer autentincações de rotas.',
        param: 'node'
    }
];
const mainSkillContainer = document.querySelector('.main-content-skill')
const subSkillsContainer = document.querySelector('.sub-content-skill ul')

const list = techs.map(function (item) {
    let html = `<li>
    <div class="sub-content-skill-card" onclick="setCard('${item.param}')">
               <i class="${item.image.src} " alt="${item.image.alt}"></i>        
    </div>
    </li>`
    return html
}).join('')


subSkillsContainer.innerHTML = list

function setCard(card) {
    const paragraph = document.querySelector('.main-content-skill p')
    const icon = document.querySelector('.main-content-skill span')
    const title = document.querySelector('.main-content-skill h2')
 
    setHtml()
    switch (card) {
        case 'html': setHtml()
        break;
        case 'css': setCss()
            break;
        case 'javascript': setJavaScript()
            break;
        case 'react': setReact()
        break;
        case 'node': setNode()
            break;
        default: 

    }

    function setHtml() {
        title.textContent = techs[0].title
        paragraph.textContent = techs[0].description
        icon.innerHTML = `<i  class="fa-brands fa-html5"></i>`
    }
    function setCss() {
        title.textContent = techs[1].title
        paragraph.textContent = techs[1].description
        icon.innerHTML = `<i class="fa-brands fa-css3-alt"></i>`
    }
    function setJavaScript(){
        title.textContent = techs[2].title
        paragraph.textContent = techs[2].description
        icon.innerHTML = `<i  class="fa-brands fa-square-js"></i>`
    }
    function setReact(){
        title.textContent = techs[3].title
        paragraph.textContent = techs[3].description
        icon.innerHTML = `<i class="fa-brands fa-react"></i>`
    }
    function setNode(){
        title.textContent = techs[4].title
        paragraph.textContent = techs[4].description
        icon.innerHTML = `<i class="fa-brands fa-node-js"></i>`
    }

}
setCard()
