export class User{
    constructor(private name:string, private age:number,private height:number,private weight:number,private activity:number,private sex:string,private diabets:boolean){}
    get Name():string{
        return this.name;
    }
    set Name(name:string){
        this.name=name;
    }
    get Age():number{
        return this.age;
    }
    set Age(age:number){
        this.age=age;
    }
    get Height():number{
        return this.height;
    }
    set Height(height:number){
        this.height=height;
    }
    get Weight():number{
        return this.weight;
    }
    set Weight(weight:number){
        this.weight=weight;
    }
    get Activity():number{
        return this.activity;
    }
    set Activity(activity:number){
        this.activity=activity;
    }
    get Sex():string{
        return this.sex;
    }
    set Sex(sex:string){
        this.sex=sex;
    }
    get Diabets():boolean{
        return this.diabets;
    }
    set Diabets(diabets){
        this.diabets=diabets;
    }
}