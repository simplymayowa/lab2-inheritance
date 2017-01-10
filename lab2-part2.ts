class SavingsAccount{
    //fields
    private myBalance:number; 
    private myOwner:string;
    private myWithdrawals:number;  

    //constructor
    constructor(theInitialBalance:number, theOwner:string){
        this.myBalance = theInitialBalance; 
        this.myOwner = theOwner;
        this.myWithdrawals = 0;  
    }

    public deposit(theAmount:number) {
        this.myBalance += theAmount; 
    }

    public withdraw(theAmount:number) {
        this.myWithdrawals++; 
        if(this.myWithdrawals > 3) {
            console.log("Error: Account has reached withdrawal limit.")
        }else{
            this.myBalance = this.myBalance - theAmount;  
        }
    }

    public checkBalance() {
        console.log(`Owner: ${this.myOwner}`);
        console.log(`Savings Account Balance: ${this.myBalance}`); 
    }
}
