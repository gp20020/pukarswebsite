
// **************************** Portfolio **************************************

import { addId } from "../utility/hooks/helper/addId"


// FIRST TAB is to show all the avaiable project, 
// if there is no no type add to a project than it will be shown in all tab
export const FIRST_TAB = "All"

// Use max 3 TAB for Best Looks
//                       0 ,       1,        2
export const TABS = ["Websites", "Apps", "Designs"]

// Portfolio project
export const PROJECTS = addId([
    {
        "name": "Project name",
        // User Exact same value as tabs,
        // I will recommond to use TABS variable with given index, like show below
        // if no TYPE is specify or any other type is specify than it will be Shown in ALL (FIRST TAB) 
        "type": "Custom Type",
        "thumbNail": "/portfolio/project-1/portfolio-img.png",
        "des": "Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum. Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica,",
        "images": ["/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png"],
        "tags": {
            "Technology": ['React', "Typescript", "Redux", "Redux Thunk"],
            "Mention": ["Rax", "Jhon", "Nick"],
            "Custom": ["Any", "Value", "needed"]
        },
        "button1": {
            "name": "View Demo",
            "link": "#",
        },
        "button2": {
            "name": "Github",
            "link": "#",
        }
    },

    {
        "name": "Project name",
        "type": TABS[0],
        "thumbNail": "/portfolio/project-1/portfolio-img.png",
        "des": "Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum. Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica,",
        "images": ["/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png"],
        "tags": {
            "Technology": ['React', "Typescript", "Redux", "Redux Thunk"],
            "Mention": ["Rax", "Jhon", "Nick"],
            "Custom": ["Any", "Value", "needed"]
        },
        "button1": {
            "name": "View Demo",
            "link": "#",
        },
        "button2": {
            "name": "Github",
            "link": "#",
        }


    }, {
        "name": "Project name",
        "type": TABS[0],
        "thumbNail": "/portfolio/project-1/portfolio-img.png",
        "des": "Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum. Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica,",
        "images": ["/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png"],
        "tags": {
            "Technology": ['React', "Typescript", "Redux", "Redux Thunk"],
            "Mention": ["Rax", "Jhon", "Nick"],
            "Custom": ["Any", "Value", "needed"]
        },
        "button1": {
            "name": "View Demo",
            "link": "#",
        },
        "button2": {
            "name": "Github",
            "link": "#",
        }


    }, {
        "name": "Project name",
        "thumbNail": "/portfolio/project-1/portfolio-img.png",
        "des": "Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum. Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica,",
        "images": ["/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png"],
        "tags": {
            "Technology": ['React', "Typescript", "Redux", "Redux Thunk"],
            "Mention": ["Rax", "Jhon", "Nick"],
            "Custom": ["Any", "Value", "needed"]
        },
        "button1": {
            "name": "View Demo",
            "link": "#",
        },
        "button2": {
            "name": "Github",
            "link": "#",
        }


    },
    {
        "name": "Project name",
        "type": TABS[2],
        "thumbNail": "/portfolio/project-1/portfolio-img.png",
        "des": "Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum. Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica,",
        "images": ["/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png"],
        "tags": {
            "Technology": ['React', "Typescript", "Redux", "Redux Thunk"],
            "Mention": ["Rax", "Jhon", "Nick"],
            "Custom": ["Any", "Value", "needed"]
        },
        "button1": {
            "name": "View Demo",
            "link": "#",
        },
        "button2": {
            "name": "Github",
            "link": "#",
        }


    },
    {
        "name": "Project name",
        "type": TABS[2],
        "thumbNail": "/portfolio/project-1/portfolio-img.png",
        "des": "Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum. Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica,",
        "images": ["/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png"],
        "tags": {
            "Technology": ['React', "Typescript", "Redux", "Redux Thunk"],
            "Mention": ["Rax", "Jhon", "Nick"],
            "Custom": ["Any", "Value", "needed"]
        },
        "button1": {
            "name": "View Demo",
            "link": "#",
        },
        "button2": {
            "name": "Github",
            "link": "#",
        }


    },
    {
        "name": "Project name",
        "type": TABS[1],
        "thumbNail": "/portfolio/project-1/portfolio-img.png",
        "des": "Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum. Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica,",
        "images": ["/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png"],
        "tags": {
            "Technology": ['React', "Typescript", "Redux", "Redux Thunk"],
            "Mention": ["Rax", "Jhon", "Nick"],
            "Custom": ["Any", "Value", "needed"]
        },
        "button1": {
            "name": "View Demo",
            "link": "#",
        },
        "button2": {
            "name": "Github",
            "link": "#",
        }


    },
    {
        "name": "Project name",
        "type": TABS[2],
        "thumbNail": "/portfolio/project-1/portfolio-img.png",
        "des": "Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum. Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica,",
        "images": ["/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png"],
        "tags": {
            "Technology": ['React', "Typescript", "Redux", "Redux Thunk"],
            "Mention": ["Rax", "Jhon", "Nick"],
            "Custom": ["Any", "Value", "needed"]
        },
        "button1": {
            "name": "View Demo",
            "link": "#",
        },
        "button2": {
            "name": "Github",
            "link": "#",
        }


    },
    {
        "name": "Project name",
        "type": TABS[1],
        "thumbNail": "/portfolio/project-1/portfolio-img.png",
        "des": "Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum. Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica,",
        "images": ["/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png", "/portfolio/project-1/portfolio-img.png"],
        "tags": {
            "Technology": ['React', "Typescript", "Redux", "Redux Thunk"],
            "Mention": ["Rax", "Jhon", "Nick"],
            "Custom": ["Any", "Value", "needed"]
        },
        "button1": {
            "name": "View Demo",
            "link": "#",
        },
        "button2": {
            "name": "Github",
            "link": "#",
        }


    },
]);
