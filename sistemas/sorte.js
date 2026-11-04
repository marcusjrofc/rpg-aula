function sorte(chance) {
    const TESTE = false;  // constante de teste do mecanismo de sorte
    let sorte = Math.random();
    if (TESTE) {
        sorte = 0.2;
    }
    return sorte < chance
}
module.exports = sorte;