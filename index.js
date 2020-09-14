//https://www.youtube.com/watch?v=PxphXQmtHLo PokemonLugia_24
//Link de video para ver envio de mensajes de what a traves de twilio

const accountSid = "AC55783b81338cd6aa6e56557bc9cfc98a";
const authToken = "81673b7a15cdff6f5f55293f0518ebd1";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: "whatsapp:+14155238886",
    body:
      "Este mensaje ha sido autogenerado por node Js! el autor de este mensaje es Juan Carlos Izaguirre Lopez; favor confirmarme a mi numero, en caso de leer este mensaje",
    to: "whatsapp:+504 9591-6062",
  })
  .then((message) => console.log(message.sid));
