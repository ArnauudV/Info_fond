<?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "ifchapitre5";

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 

            $nom = $_POST["nom"];
            $prenom = $_POST["prenom"];
            $email = $_POST["email"];
            $telephone = $_POST["telephone"];
            $message = $_POST["message"];

            $sql = "INSERT INTO formulaire (nom, prenom, email, telephone, message)
            VALUES ('$nom', '$prenom', '$email', '$telephone', '$message')";

            if ($conn->query($sql) === TRUE) {
                echo "Nouvel enregistrement créé avec succès";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $conn->close();
            ?>