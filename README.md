## Projeto: Simulador de Heróis

### Descrição
Este projeto simples em JavaScript simula um grupo de heróis, cada um com suas características únicas. A classe `hero` serve como um modelo para criar diferentes tipos de heróis, como magos, guerreiros, ninjas e monges.

### Conceitos Utilizados
* **Programação Orientada a Objetos (POO):**
    * **Classe:** Define um modelo para criar objetos.
    * **Objeto:** Instância de uma classe, representando um personagem específico.
    * **Atributos:** Características de um objeto (nome, idade, tipo, poder).
    * **Métodos:** Ações que um objeto pode realizar (attack).
* **Construtor:** Método especial que inicializa um objeto quando ele é criado.
* **Instanciação:** Criação de um novo objeto a partir de uma classe.
* **Método:** Função associada a um objeto.
* **`this`:** Referência ao objeto atual dentro de um método.

### Funcionamento
1. **Definição da Classe:** A classe `hero` é definida com os atributos e o método `attack()`.
2. **Criação de Objetos:** São criados objetos (magos, guerreiros, ninjas e monges) a partir da classe `hero`, atribuindo valores aos atributos.
3. **Chamada do Método:** Ao chamar o método `attack()` de cada objeto, é exibido no console uma mensagem personalizada para cada herói, indicando o tipo e o poder utilizado no ataque.

### Exemplo de Uso
```javascript
// Criando um novo herói
let novoHeroi = new hero("Arqueiro", "25 anos", "Arqueiro", "flecha");

// Atacando com o novo herói
novoHeroi.attack(); // Saída: O Arqueiro atacou usando flecha
