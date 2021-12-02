const bcrypt = require('bcrypt');


const password = "MySecretPassword*c";


for(let saltRounds = 10; saltRounds < 21; saltRounds++){
    console.time(`bcrypt | cost: ${saltRounds}, time required:`);
    let hash = bcrypt.hashSync(password, saltRounds);
    console.timeEnd(`bcrypt | cost: ${saltRounds}, time required:`);
    console.log(hash);
    console.log("_______________________________________________________");
}