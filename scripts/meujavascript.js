//alert("Funcionou!!!");
/*let t1 = document.getElementById("titulo");
t1.innerHTML = "Futsal";
t1.style.border = "2px solid blue";
t1.style.fontSize = "50px";
t1.style.textAlign = "center";*/

//segunda forma
if(descricao.innerHTML.length > 100){
let desc = document.getElementById('descricao')
   descricao.style.color = "purple"
}
alert("Você tem muitos caracteres!!!!")
//terceira forma
let l1 = document.getElementById("linha1");
l1.style.backgroundColor = 'bisque';

let itens = document.getElementsByTagName("li");
console.log(itens[8]);

let itens_acoes = document.querySelectorAll("#lista_acoes li");
console.log(itens_acoes);

let mensagem = ""
for(let i=0; i<itens.length; i++){
    mensagem += itens[i].innerHTML + "\n";
}
alert(mensagem);

mensagem = ""
itens_acoes.forEach(function(l,i){
    mensagem += i + "-" + l.innerHTML + "\n";
});
alert(mensagem);

let t1 = document.getElementById("titulo");
texto_anterior = t1.innerHTML;
tamanho_fonte = t1.style.fontSize;
alinhamento = t1.style.textAlign;

t1.onmouseover = function(){
    t1.innerHTML = "Futsal";
    t1.style.border = "2px solid blue";
    t1.style.fontSize = "50px";
    t1.style.textAlign = "center";
}
t1.onmouseout = function(){
    t1.innerHTML = texto_anterior;
    t1.style.border = "none";
    t1.style.fontSize = tamanho_fonte;
    t1.style.textAlign = alinhamento;
}
itens_acoes.forEach(function(it){
    it.ondblclick = function(e){
        e.preventDefault();
        let v1 = Math.floor(Math.random()*255);
        let v2 = Math.floor(Math.random()*255);
        let v3 = Math.floor(Math.random()*255);
        it.style.backgroundColor = "rgb(" + v1 + "," + v2 + "," + v3 + ")";
    }
});
