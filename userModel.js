 class userModel{
    name;
    surname;
    phone;
    email;
    address;
    

    constructor(){}

    setName(name){
        this.name = name;
    };

    setSurname(surnname){
        this.surname = surnname
    };

    setPhone(phone){
        this.phone = phone
    };

    setEmail(email){
        this.email = email
    };

    setAddress(address){
        this.address = address
    };

    setImage(image){
        this.image = image
    };

   
}

const globaluserModel = new userModel();
export default globaluserModel;