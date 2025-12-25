// Gerado com o prompt: "Crie testes unitários usando Jest para a função de cálculo de pedidos anterior, cobrindo casos de array vazio e valores normais."
const { calcularValorTotal } = require('./pedidos');

describe('calcularValorTotal', () => {
    test('deve retornar 0 para array vazio', () => {
        expect(calcularValorTotal([])).toBe(0);
    });

    test('deve calcular o valor total corretamente', () => {
        const pedidos = [
            { valor: 100, desconto: 10 },
            { valor: 200, desconto: 20 },
            { valor: 300, desconto: 30 }
        ];
        expect(calcularValorTotal(pedidos)).toBe(540);
    });
});