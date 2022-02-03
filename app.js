let btn = document.querySelector('.burger_nav');
let nav_links = document.querySelector('.nav_links');
let icon = document.querySelector('.fas');
let p = document.querySelector('.p_habilidades');
let html = document.querySelector('.html');
let css = document.querySelector('.css');
let js = document.querySelector('.js');
let whatsapp = document.querySelector('.fa-whatsapp');
let instagram = document.querySelector('.fa-instagram');
let linkedin = document.querySelector('.fa-linkedin');
let github = document.querySelector('.fa-github');
let p_contato = document.querySelector('.p_contato');
let link = document.getElementsByTagName('a');

for (let i of link)
{
    i.addEventListener('click', () => {
        document.body.style.overflowY = 'scroll';
        nav_links.style.display = 'none';
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    })
}

btn.addEventListener('click', () => {
    if (icon.classList.contains('fa-bars'))
    {
        nav_links.style.display = 'flex';
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflowY = 'hidden';
    }
    else
    {
        document.body.style.overflowY = 'scroll';
        nav_links.style.display = 'none';
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

html.addEventListener('click', () => {
    p.innerHTML = 'HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web';
});

css.addEventListener('click', () => {
    p.innerHTML = 'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. ';
});

js.addEventListener('click', () => {
    p.innerHTML = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.';
});

whatsapp.addEventListener('click', () => {
    p_contato.innerHTML = 'Whatsapp';
});

instagram.addEventListener('click', () => {
    p_contato.innerHTML = 'Instagram';
});
linkedin.addEventListener('click', () => {
    p_contato.innerHTML = 'Linkedin';
});
github.addEventListener('click', () => {
    p_contato.innerHTML = 'Github';
});
