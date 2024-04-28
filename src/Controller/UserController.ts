import { User } from "../Model/User";

export class UserController {
    constructor() {
        
    }

    async register(data: FormData): Promise<[User | null, string]> {
        let message = ""
        let user : User | null = null;
        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                body: data // Utiliser formData pour envoyer les données
                
            })

            if (!response) {
                    console.log("la requête a échoué");
                    message = "La requête a échouer"
            }
            else { 
                const v : string = (await response.text()).valueOf()
                if (v == "champs vide") {
                    message = "Champs vide"
                     // Affiche le message d'alerte lors de l'inscription
                }
                else if ((v == "OK")) {
                    message = "Utilisateur enregistrer"
                    user = await response.json() as User;
                        console.log(response.json());
                }
                
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de la requête:', error);
            message = 'Erreur lors de l\'envoi de la requête:'
        }
        return [user, message];
    }
}