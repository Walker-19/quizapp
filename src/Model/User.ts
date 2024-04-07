export class User  {
    private id: number;
    private firstname: string;
    private lastname: string;
    private email: string;
    private password: string;
    constructor({id, firstname, lastname, email, password} : {id: number, firstname: string, lastname: string, email: string, password: string}) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
    }

        

    getFullname(): string{
        return `${this.firstname} ${this.lastname}`;
    }

    getId(): number {
    
        return this.id;
    }

    getEmail(): string {
        return this.email;
    }

}

