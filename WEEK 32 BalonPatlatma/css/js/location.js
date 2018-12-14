class Location{
    constructor(pLeft, pTop){
        this.left = pLeft;
        this.top=pTop;
    }

    toString(){return this.left+","+this.top;}
    getLeft(){
        return this.left;
    }
    getTop(){
        return this.top;
    }
}