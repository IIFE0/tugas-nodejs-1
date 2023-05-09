const Biodata = require("./modules/biodata")

let profile = new Biodata(
  "Virlo Mahrian",
  "Purwakarta",
  "8 Oktober 2003",
  "Jl. Sukasuka No.112"
)

console.log(profile.printBiodata())
