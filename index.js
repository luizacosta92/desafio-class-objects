//criando a classe hero
class hero {
  constructor(name, age, type, power){
    this.name = name;
    this.age = age;
    this.type = type;
    this.power = power;
  }

  //criando o método atacar
  attack(){
    console.log(`O ${this.type} atacou usando ${this.power}`)
  }
}

//criando os objetos da classe
let mago = new hero("Dumbledore", "300 anos", "Mago", "magia");
let guerreiro = new hero("Sofia", "9 anos", "Guerreira", "espada")
let ninja = new hero("Dana", "5 anos", "Ninja", "shuriken")
let monge = new hero("Rinpoche", "80 anos", "Monge", "artes marciais")


//retornando o ataque de cada personagem
mago.attack()
ninja.attack()
guerreiro.attack()
monge.attack()