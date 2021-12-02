const bcrypt = require('bcrypt');

/**
 * Function to has a password
 */
const hashPassword = async () => {
      
      const salt = await bcrypt.genSalt(10);
      //the values are the same
      const hashedPassword = await bcrypt.hash("MySecretPassword", salt); 

      console.log("The first hashed value is: ", hashedPassword);
      //the values are the same 
      const hashedPassword2 = await bcrypt.hash("MySecretPassword", salt); 

      console.log("The second hashed value is ", hashedPassword2);

}

const generateSaltAndHashedPassword = async() => {
    //using salt to take a look at it in the console
    const salt = await bcrypt.genSalt(10);
    console.log("The salt is ", salt);
    //generate password using generated salt
    const hashedPassword = await bcrypt.hash("MySecretPassword", 10);
    console.log("the hashed value is here: ", hashedPassword)
}

//Password: MySecretPassword
//hash:$2b$10$AoizX0Q14qklE5cZWjdmie2RxdLHbtU7g3qgAeNVLG7B7roTyTfdS 
const comparePassword = async(password, hash) => {
    const checkPassword = await bcrypt.compare(password, hash);

    console.log("These are matching yes or no? ", checkPassword)
}

hashPassword();
generateSalt();
//comparePassword("MySecretPassword", "$2b$10$AoizX0Q14qklE5cZWjdmie2RxdLHbtU7g3qgAeNVLG7B7roTyTfdS")
