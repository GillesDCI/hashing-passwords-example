const bcrypt = require('bcrypt');

const password = "MySecretPassword*c";

function comparePassword(){
    console.time(`RESPONSE TIME`)
    const isChecked = bcrypt.compareSync(password, "$2b$19$bRt8QAG1e3Rluqv4zGNALOSTLH4DNy4m0tOxoezOXGv3kWkk37sv2")
    console.timeEnd(`RESPONSE TIME`)

    console.log("the password is correct: ", isChecked);
}

comparePassword();