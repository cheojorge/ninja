class Ninja{
	constructor(nombre,salud,velocidad,fuerza){
		this.nombre = nombre ;
		this.salud = salud || 10;
		this.velocidad = velocidad || 3;
		this.fuerza = fuerza || 3;
	}
	sayName(){
		console.log(`El nombre del ninja es ${ this.nombre }`)
	}
	showStats(){
		console.log(`El nombre del ninja es ${ this.nombre }`)
		console.log(`La fuerza del ninja es ${ this.fuerza }`)
		console.log(`La velocidad del ninja es ${this.velocidad}`)
		console.log(`La salud del ninja es ${ this.salud}`) 
	}
	drinkSake(){
		this.salud += 10;
	}

}

class Sensei extends Ninja{
	constructor(nombre){
		super(nombre,200,10,10);
		this.sabiduria = 10;
	}
	speakWisdom(){
		super.drinkSake();
		console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
	}
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"