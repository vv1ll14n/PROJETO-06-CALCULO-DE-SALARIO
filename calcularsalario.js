var botao = document.querySelector('#btncalcular')//selecionei o botão
botao.addEventListener('click', function (e) {
    event.preventDefault()
    var formulario = document.querySelector('#form')

    var salarioBruto = formulario.salario.value
    console.log(salarioBruto)





    //bloco inicial do codigo, tendo em vista as possibilidades é necessário alterar o fluxo do codigo, por conta que: caso o usuario inpute um valor maior que 1905 ele tem que descontar o imposto de renda, caso o valor seja menor não necessita calcaular o imposto de renda apenas o inss

    if (salarioBruto > 1905) {
        //irrf e inss

        //inss

        if (salarioBruto > 1905 & salarioBruto < 2427) {

            var valorDesconto = salarioBruto * 0.09

            var salarioLiquidoInss = salarioBruto - valorDesconto

            console.log(salarioLiquidoInss)

        } else if (salarioBruto > 2428 & salarioBruto < 3641) {

            var valorDesconto = salarioBruto * 0.12

            var salarioLiquidoInss = salarioBruto - valorDesconto

            console.log(salarioLiquidoInss)
        } else if (salarioBruto > 3642 & salarioBruto < 7087) {

            var valorDesconto = salarioBruto * 0.14

            var salarioLiquidoInss = salarioBruto - valorDesconto

            console.log(salarioLiquidoInss)

        } else if (salarioBruto > 7088) {
            var valorDesconto = salarioBruto * 0.14

            var salarioLiquidoInss = salarioBruto - valorDesconto

            console.log(salarioLiquidoInss)

        } else {
            console.log('error')
        }

        // antes de calcular o irrf tem que pegar o valor descontado do inss

        //irrf

        if (salarioBruto <= 1904) {

            console.log('isento')

        } else if (salarioBruto > 1905 & salarioBruto < 2827) {

            var valorDesconto = salarioBruto * 0.075

            var salarioLiquidoIrrf = salarioBruto - valorDesconto

            console.log(salarioLiquidoIrrf)

        } else if (salarioBruto > 2828 & salarioBruto < 3751) {

            var valorDesconto = salarioBruto * 0.15

            var salarioLiquidoIrrf = salarioBruto - valorDesconto

            console.log(salarioLiquidoIrrf)

        } else if (salarioBruto > 3752 & salarioBruto < 4664) {

            var valorDesconto = salarioBruto * 0.225

            var salarioLiquidoIrrf = salarioBruto - valorDesconto

            console.log(salarioLiquidoIrrf)

        } else if (salarioBruto > 4665) {

            var valorDesconto = salarioBruto * 0.275

            var salarioLiquidoIrrf = salarioBruto - valorDesconto

            console.log(salarioLiquidoIrrf)

        }


        var valorDescInss = salarioBruto - salarioLiquidoInss
        var valorDescIrff = salarioBruto - salarioLiquidoIrrf


        var totalDesc = valorDescInss + valorDescIrff

        var resultado = salarioBruto - totalDesc

        var boxResultado = document.querySelector('#resultado')
        boxResultado.innerHTML = 'o salario liquido foi de: ' + resultado + ' O total em desconto foi de: ' + totalDesc + ' INSS ' + '(' + valorDescInss + ')' + ' IRRF ' + '(' + valorDescIrff + ')'

        console.log('o salario liquido foi de: ' + resultado + ' O total em desconto foi de: ' + totalDesc + ' INSS ' + '(' + valorDescInss + ')' + ' IRRF ' + '(' + valorDescIrff + ')')


    } else if (salarioBruto < 1905) {
        //não entra no irrf apenas inss

        //inss
        if(salarioBruto <= 1200){
            
            var valorDesconto = salarioBruto * 0.075

            var salarioLiquidoInss = salarioBruto - valorDesconto

            var boxResultado = document.querySelector('#resultado')
            boxResultado.innerHTML = 'seu salario liquido é de: ' + salarioLiquidoInss

            console.log(salarioLiquidoInss)

        }else if (salarioBruto > 1212 & salarioBruto < 1905) {

            var valorDesconto = salarioBruto * 0.075

            var salarioLiquidoInss = salarioBruto - valorDesconto

            var boxResultado = document.querySelector('#resultado')
            boxResultado.innerHTML = 'seu salario liquido é de: ' + salarioLiquidoInss

            console.log(salarioLiquidoInss)

        } else {

            var boxResultado = document.querySelector('#resultado')
            boxResultado.innerHTML = salarioBruto + ' isento (a) do inss e irrf'



            console.log(salarioBruto + ' isento (a) do inss e irrf')
        }


    } else {
        console.log('error')
    }

})
