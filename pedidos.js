// Gerado com o prompt: "Crie uma função em Node.js que recebe um array de objetos de pedidos (com valor e desconto) e retorna o valor total com os descontos aplicados."

function calcularValorTotal(pedidos) {
    return pedidos.reduce((total, pedido) => {
        return total + (pedido.valor - pedido.desconto);
    }, 0);
}