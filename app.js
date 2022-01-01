const btnhtml = document.getElementById('btn-html');
const btncss = document.getElementById('btn-css');
const btnjavascript = document.getElementById('btn-javascript');
var paragraph = document.getElementById('paragraph');

btnhtml.addEventListener('mouseover', () =>
{
    paragraph.innerHTML = "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.";
});
btnhtml.addEventListener('mouseout', () => 
{
    paragraph.innerHTML = "*passe o cursor no card para ler*";
});
btncss.addEventListener('mouseover', () =>
{
    paragraph.innerHTML = "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.";
});
btncss.addEventListener('mouseout', () => 
{
    paragraph.innerHTML = "*passe o cursor no card para ler*";
});
btnjavascript.addEventListener('mouseover', () =>
{
    paragraph.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.";
});
btnjavascript.addEventListener('mouseout', () => 
{
    paragraph.innerHTML = "*passe o cursor no card para ler*";
});


btnhtml.addEventListener('click', () =>
{
    paragraph.innerHTML = "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.";
});

btncss.addEventListener('click', () =>
{
    paragraph.innerHTML = "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.";
});

btnjavascript.addEventListener('click', () =>
{
    paragraph.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.";
});