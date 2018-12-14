const ebat= {
    S :50,
    M : 100,
    L : 200,
    XL : 400,
};



class Balon {
    constructor(ebat, pRenk, pLocation) {
        this.ebat = ebat;
        this.renk = pRenk;
        this.location = pLocation;
        this.durum = "DOKUNULMAMIS";
    }

    toString() {
        return this.ebat + "," + this.renk + "," + this.location + "," + this.durum;
    }
    getEbat() {
        return this.ebat;
    }
    getRenk() {
        return this.renk;
    }
    getLocation() {
        return this.location;
    }
    getDurum() {
        return this.durum;
    }

 patla(){
     this.durum= "PATLAMIS"
 }
 sis(){
    this.durum= "SISIRILMIS"
}
hareketEt(pLocation){
    this.location = pLocation;
}


}