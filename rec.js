class Regtangle{
    constructor(hauteur,largeur){
    this.hauteur=hauteur;
    this.largeur=largeur;
	redaaaaaaaaaaa
}
    showrec(){
        console.log('heuteur :' +this.hauteur+'cm')
    }
}
let r1=new Regtangle(3,5)
let r2=new Regtangle(4)
let r3=new Regtangle()
// r1.showrec();
// r3.showrec();
class BabkAccount{
    constructor(proprietaire,solde){
    this.proprietaire=proprietaire;
    this.solde=solde;
}
    showsolde(){
        console.log('le nom est'+ this.proprietaire ,'le solde est :' +this.solde+'DH');
    }
    deposer(amount){
        console.log('depot de ' + amount + 'Dh' )
        this.solde+=amount;
        this.showsolde()

    }
    retirer(amount){
        if(amount>this.solde){
            console.log('retrait refuse');
        }else{
            console.log('retrait de ' + amount +'DH');
            this.solde-=amount;
            this.showsolde()
        }
    }
}
let s1=new BabkAccount('reda',1000);
// s1.showsolde();
// s1.deposer(1000)     
// s1.retirer(500)
// s1.retirer(1200)


class Vehicle{
    constructor(name){
        this.name = name;

    }
    describe(){
        console.log(`car named ${this.name}`) ; 
    }

}
// let v1= new Vehicle('dacia');
// v1.describe();

class car extends Vehicle {
    constructor(name , color ){
        super(name);
        this.color=color;
    }
    describe1(){
        console.log(`${super.describe()}(${this.color})`)
    }

}
let car1 = new car('dacia','rouge');
car1.describe1();



