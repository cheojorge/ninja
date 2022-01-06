class Ninja{
	constructor(nombre,salud){
		this.nombre = nombre ;
		this.salud = salud || 10;
		this.velocidad = 3;
		this.fuerza = 3;
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
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();