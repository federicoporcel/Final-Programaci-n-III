function clr(){
    document.getElementById('result').value="";

}
function dis(value){
document.getElementById('result').value+=value;
}
function solve(){
    var textAreaElement= document.getElementById('history');
    var x= document.getElementById('result').value;
    var y = eval(x);
    clr();
    textAreaElement.value = textAreaElement.value+x+'='+y+'\n';
}