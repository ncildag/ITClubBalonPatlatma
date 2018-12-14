class Balon {
    constructor(pAlan, pCopculer, Pbalonlar) {
        this.alan = pAlan;
        this.copculer = pCopculer;
        this.balonlar = Pbalonlar;
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