//SISTEMA SAVE POINT V2
//
//DOCUMENTAÇÃO DE CÓDIGO
//

//----------------------------------------------------------------
//Organização: BlueGrape Systems Inc.
//Cliente: Save Point Santos SP

//SETORES:

//----------------------------------------------------------------
//FRONT-END LEAD: Henrique Tenório
//BACK-END LEAD: Gian Carlo
//PRODUCT MANAGER: Renan Antunes
//DESIGN LEAD: Tauã Pereira
//----------------------------------------------------------------

/*
    Este sistema copia a ideia de um sistema de comanda simples que armazena pedidos em um
    banco de dados para enviar a solicitação de um pedido para a cozinha em forma de comanda.

    Este sistema possui janelas e funções client-side, staff-side (caixa, funcionário, estoque),
    API para comunicação com o front e banco de dados.
*/

//----------------------------------------------------------------

/*
    As seções abaixo são referentes ao carregamento e comportamento das páginas do app mobile
    Save Point, como normalmente são acessados atualmente.
*/

//----------------------------------------------------------------

/*
    JANELAS:
    - Loading
    - Login ou Cadastro
    - Menu
    - Cozinhas
    - Pedido-prep-1
    - Pedido-prep-2
    - Carrinho
    - Confirma-pedido-envio
    - Meus-Pedidos
    */

//----------------------------------------------------------------

/*
AVISO - O SISTEMA AINDA NÃO POSSUI BANCO DE DADOS, APIS OU BACKEND. ESTA É UMA VERSÃO
DE VISUALIZAÇÃO E CRIAÇÃO DO FRONTEND PARA PROPÓSITOS DE PRÁTICA, PORTFÓLIO E ADIANTAMENTO PARA
ME POUPAR TEMPO FURUTAMENTE. ;)
*/

//----------------------------------------------------------------
let childBox = $(".child");
let menuWindow = $(".menuChild");

//PRE PROCESSING DATA
let btnLogin = $("#buttonLogin");
let msgHelp = $(".msgHelp");
let table = $("#inputTable");
let phone = $("#inputPhone");
let name = $("#inputName");

$(document).ready(() => {
    childBox.hide();
    menuWindow.hide();

    setTimeout(() => {
        $("#mainLogoLoad").fadeOut();

        setTimeout(() => {
            childBox.eq(0).fadeIn(100);
        }, 400);
    }, 1000);
});

// Limita o inputTable para somente 2 caracteres
$("#inputTable").on("input", () => {
    let inputValue = $("#inputTable").val();
    if (inputValue.length > 2) {
        inputValue = inputValue.slice(0, 2);
        $("#inputTable").val(inputValue);
    }
});

// Limita o inputPhone para somente 11 caracteres
$("#inputPhone").on("input", () => {
    let inputValue = $("#inputPhone").val();

    //filtro de caracteres - apenas números
    let value = event.target.value;
    let numericValue = value.replace(/\D/g, "");
    event.target.value = numericValue;

    if (inputValue.length > 11) {
        inputValue = inputValue.slice(0, 11);
        $("#inputPhone").val(inputValue);
    }
});

// Limita o inputName para somente 32 caracteres
$("#inputName").on("input", () => {
    let inputValue = $("#inputName").val();
    if (inputValue.length > 32) {
        inputValue = inputValue.slice(0, 32);
        $("#inputName").val(inputValue);
    }
});

//verificador de dados no login
let counter = 0;

btnLogin.click(() => {
    counter++;
    if (table.val() == "" || phone.val() == "") {
        btnLogin.effect("shake");
        $("label").css("color", "#FF0000");
        $("label").css("transform", "scale(1.15)");

        setTimeout(() => {
            $("label").css("color", "#FFeeee");
            $("label").css("transform", "scale(1)");
        }, 1000);
        msgHelp.html("Preencha os campos adequadamente.");

        if (counter > 6) {
            msgHelp.html("Sem easter eggs aqui...");
        }

        else if (counter > 15) {
            msgHelp.html("Pessoa, você tá bem?");
        }

        else if (counter > 41) {
            msgHelp.html("42, A resposta para a vida, o universo, e tudo mais");
        }

        else if (counter > 50) {
            msgHelp.html("Você para com essa brincadeira, ou eu vou reiniciar");
        }

        else if (counter > 69) {
            location.reload();
        }
    }

    else {
        $("#nameClient").html("Olá, " + name.val());
        $("#tableNumber").html(table.val());
        let loginForm = $("#firstLoginForm");
        loginForm.hide();
        msgHelp.hide();

        btnLogin.css("border-style", "none");
        $(".indicatorLbl").html("Carregando...");
        $("#buttonLoginText").html("LOADING");

        setTimeout(() => {
            openMenu();
        }, 1200);
    }
});

let navItem = $(".footerNavItem");

//--//
function openMenu() {
    childBox.fadeOut(200);
    navItem.hide();

    setTimeout(() => {
        childBox.eq(1).fadeIn();
        
        setTimeout(() => {
            $("header").css("height", "4em"); 
            $("header").css("border-bottom-left-radius", "0em");
            $("header").css("border-bottom-right-radius", "0em");
        }, 400);

        setTimeout(() => {
            $("footer").css("height", "6em");
            navItem.show();
            menuWindow.eq(0).fadeIn();
        }, 1000);
    }, 500);
};
//--//


//--//

//MENU KITCHEN OBJETO
//objeto declarado
let menuKitchen = {
    menuButtonBox: $(".sliderItem"),
    Burger: $("#btnBurger"),
    Portions: $("#btnPortions"),
    Dessert: $("#btnDessert"),
    Drinks: $("#btnDrinks"),

    toggleMenuButtonBox: function() {
        this.menuButtonBox.click(function() { //funcionando
            //implementar funções aqui
            console.log("Clique no menuButtonBox");
        });
    },
}

//declara o funcionamento do método
menuKitchen.toggleMenuButtonBox();
