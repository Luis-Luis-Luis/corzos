<?php 

  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $texto = $_POST['texto'];

  $destinatario = "corzos@corzos.es";
  $asunto = "Correo de la web corzos.es";
  $mensaje = "Nombre: " . $nombre . "\n\n" . "Email: " . $email . "\n\n" . $texto;

  mail($destinatario, $asunto, $mensaje);

  echo "

    <h1 style='font-size: 4rem; font-family: sans-serif;'>¡Enviado con éxito!</h1>
    <p style='font-size: 2rem; font-family: sans-serif;'>Hola $nombre, el mensaje ha sido enviado con éxito, gracias por contactar con nosotros.</p>
    <a href='index.html' style='font-size: 2rem; font-family: sans-serif;'>Volver</a>

  ";

?>