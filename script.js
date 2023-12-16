var cliques=0;
var preço_auto=20;
var preço_ad=50;
let tempo=2000;
var plus=0;
var c;
var a;
var add=1;
document.getElementById("botao");
function clicado(){
  var audio=new Audio("clique.mp3");
  audio.play();
  cliques=cliques+add;
  document.getElementById("teste").innerHTML=cliques;
}
let rept;
function repeat_sec(){
  clearInterval(rept);
  rept=setInterval(sempre,tempo)}
function sempre(){
  document.getElementById("ms").innerHTML=plus/tempo*1000+" cliques por segundo";
  cliques=cliques+plus;
  document.getElementById("teste").innerHTML=cliques;
  if(cliques>=preço_auto){
    document.getElementById("teste2").setAttribute("aria-disabled", "false");
    c=1;
  }
  if(cliques>=preço_ad){
    document.getElementById("teste3").setAttribute("aria-disabled", "false");
    a=1;
  }
  repeat_sec();
}
function clicado_auto(){
  if(c==1){
  var audio=new Audio("clique.mp3");
  cliques=cliques-preço_auto;
  document.getElementById("teste").innerHTML=cliques;
  audio.play();
  preço_auto=preço_auto**2;
  tempo=tempo/1.2;
  if(plus==0){
    plus=1;
  }
  else{
     plus=add; 
    }
  document.getElementById("teste2").setAttribute("aria-disabled", "true");
  document.getElementById("teste3").setAttribute("aria-disabled", "true");
  document.getElementById("custo_auto").innerHTML=preço_auto;
  c=0;
  a=0;
}}
function clicado_ad(){
  if(a==1){
  var audio=new Audio("clique.mp3");
  cliques=cliques-preço_ad;
  document.getElementById("teste").innerHTML=cliques;
  audio.play();
  preço_ad=preço_ad*2;
  add=add*2;
  if(plus>=1){
    plus=add;
  }
  document.getElementById("teste2").setAttribute("aria-disabled", "true");
  document.getElementById("teste3").setAttribute("aria-disabled", "true");
  document.getElementById("custo_add").innerHTML=preço_ad;
  a=0;
  c=0;
}}
