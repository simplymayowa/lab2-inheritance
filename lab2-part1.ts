class CheckingsAccount{
    //fields
    private myBalance:number; 
    private myOwner:string; 

    //constructor
    constructor(theInitialBalance:number, theOwner:string){
        this.myBalance = theInitialBalance; 
        this.myOwner = theOwner; 
    }

    public deposit(theAmount:number) {
        this.myBalance += theAmount; 
    }

    public withdraw(theAmount:number) {
        this.myBalance = this.myBalance - theAmount;  
    }

    public checkBalance() {
        console.log(`Owner: ${this.myOwner}`);
        console.log(`Checking Account Balance: ${this.myBalance}`); 
    }
}