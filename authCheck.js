let connecté = prompt("es-tu connecté ? (oui/non)");
let role = prompt("Quel est ton rôle ? (admin/user/guest)");
if (connecté === "oui") {
    if (role ==="admin") {
console.log("Bienvenue Admin !");
 } else if (role ==="user") {
    console.log(" Bienvenue utilisateur !");
 } else {
        console.log("Accès restreint");
    }
} else if (connecté === "non") {
    console.log("Veuillez vous connecter");
} else {
    console.log("Réponse incorrecte");
}