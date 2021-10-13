//TODO

Crea els fitxers de dades json estàtics corresponents a les entrades del blog de viatges (específica als fitxers 3 entrades de prova). 
Una entrada ha de tenir com a mínim les següents dades id (numèric), títol, descripció (màxim 200 caràcters), data de publicació (format dd/mm/aaaa) i autor. La propietat “foto” també serà necessària per carregar les imatges de cada entrada.


Carrega dinàmicament les entrades de l’arxiu json amb peticions asíncrones fent servir la funció fetch. Per tant, el codi HTML que representa cada entrada s’ha de crear a la primera càrrega de la pàgina.


L’usuari que navega pel blog ha de poder marcar una entrada com a favorita. Les entrades favorites es guarden al localStorage en format json.


Les entrades favorites s’han de poder gestionar des d’un panell que aparegui a la columna dreta de la pantalla. També hauries d’implementar la funcionalitat esborrar totes.

