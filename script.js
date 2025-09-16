function funcao() {
let populacaoNA = parseFloat(document.getElementById("popna").value)
let fraseNA = `Nova Andradina tem a população de ${populacaoNA}`
let populacaoIV = parseFloat(document.getElementById("popiv").value)
let poptotal = populacaoNA + populacaoIV
let frasetotal = `Nova Andradina tem a população de ${populacaoNA}, Ivinhema a população de ${populacaoIV} e o total de ${poptotal}`
document.getElementById("resul").innerHTML = fraseNA
document.getElementById("result").innerHTML = frasetotal
}