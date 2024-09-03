// Mostrar a seção correta de acordo com o botão clicado
document.getElementById('calcularBtn').addEventListener('click', function() {
    document.getElementById('calcularSection').classList.remove('hidden');
    document.getElementById('calcularAreaSection').classList.add('hidden');
});

document.getElementById('calcularAreaBtn').addEventListener('click', function() {
    document.getElementById('calcularSection').classList.add('hidden');
    document.getElementById('calcularAreaSection').classList.remove('hidden');
});

// Mostrar ou ocultar o campo de Valor 2 dependendo da operação selecionada
document.getElementById('operacao').addEventListener('change', function() {
    const operacaoSelecionada = document.getElementById('operacao').value;
    const num2 = document.getElementById('num2');
    const num2Label = document.getElementById('num2Label');

    if (operacaoSelecionada === '√') {
        num2.classList.add('hidden');
        num2Label.classList.add('hidden');
    } else {
        num2.classList.remove('hidden');
        num2Label.classList.remove('hidden');
    }
});

document.getElementById('forma').addEventListener('change', function() {
    const formaSelecionada = document.getElementById('forma').value;
    const valor2 = document.getElementById('valor2');
    if (formaSelecionada === 'triangulo' || formaSelecionada === 'retangulo') {
        valor2.classList.remove('hidden');
    } else {
        valor2.classList.add('hidden');
    }
});

// Função para calcular operações matemáticas
document.getElementById('executarCalculoBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = document.getElementById('num2').value;
    let operacao = document.getElementById('operacao').value;

    if (isNaN(num1) || (operacao !== '√' && isNaN(num2))) {
        document.getElementById('output').innerText = "Por favor, insira valores válidos.";
        return;
    }

    num2 = operacao !== '√' ? parseFloat(num2) : null;
    let resultado;

    if (operacao === '/' && num2 === 0) {
        resultado = "Impossível dividir por 0";
    } else {
        switch (operacao) {
            case '+':
                resultado = (num1 + num2).toFixed(2);
                break;
            case '-':
                resultado = (num1 - num2).toFixed(2);
                break;
            case '*':
                resultado = (num1 * num2).toFixed(2);
                break;
            case '/':
                resultado = (num1 / num2).toFixed(2);
                break;
            case '^':
                resultado = Math.pow(num1, num2).toFixed(2);
                break;
            case '√':
                resultado = Math.sqrt(num1).toFixed(2);
                break;
            default:
                resultado = "Operação inválida";
        }
    }

    document.getElementById('output').innerText = `Resultado: ${resultado}`;
});

// Função para calcular área de formas geométricas
document.getElementById('executarCalculoAreaBtn').addEventListener('click', function() {
    let forma = document.getElementById('forma').value;
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || (forma === 'retangulo' && isNaN(valor2))) {
        document.getElementById('output').innerText = "Por favor, insira valores válidos.";
        return;
    }

    let resultado;
    switch (forma) {
        case 'circulo':
            resultado = (Math.PI * Math.pow(valor1, 2)).toFixed(2);
            break;
        case 'quadrado':
            resultado = (valor1 * valor1).toFixed(2);
            break;
        case 'retangulo':
            resultado = (valor1 * valor2).toFixed(2);
            break;
        case 'triangulo':
            resultado = ((valor1 * valor2)/2).toFixed(2);
            break;
        default:
            resultado = "Forma inválida";
    }

    document.getElementById('output').innerText = `Área: ${resultado}`;
});

