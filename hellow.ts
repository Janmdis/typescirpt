//public 公共
//protected 肥肉
//private 私有
//readonly
class lady{
    public sex:string
    protected name:string
    private age:number
    public constructor(sex:string,name:string,age:number){
        this.sex = sex
        this.name = name
        this.age = age
    }
    public say(){
        console.log("hellow")
    }
    protected wang(){
        console.log("love me")
    }
}
let yjj:lady = new lady("女","杨晶晶",18)
console.log(yjj)
yjj.say()