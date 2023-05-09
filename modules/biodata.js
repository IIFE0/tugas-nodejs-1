module.exports = class Biodata {
  constructor(name, birthPlace, birthDay, address) {
    this.name = name
    this.birthPlace = birthPlace
    this.birthDay = birthDay
    this.address = address
  }

  printBiodata() {
    return `
    Nama: ${this.name}
    Tempat Lahir: ${this.birthPlace}
    Tanggal Lahir: ${this.birthDay}
    Alamat: ${this.address}
    `
  }
}
