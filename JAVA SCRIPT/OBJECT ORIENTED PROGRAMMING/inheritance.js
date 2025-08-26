class person{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log('eating');
    }

    sleep(){
        console.log('sleeping');
    }
 
   work(){
    console.log('nothing!!!');
   }
}

class engineer extends person {
    constructor(name){
        super(name)
    }
    work(){
        super.sleep()
        console.log('building programs');
    }
}
class youtuber extends person {
    work(){
        console.log('making video');
    }
}
class doctor extends person {
    work(){
        console.log('treating patients');
    }
}
let eng1 = new engineer("zubair")
