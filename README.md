Pasos para implementar:
1. Extraer el proyecto:
 git clone https://github.com/Mersmith/prueba-osi.git

2. Crear la base de datos en phpmyadmin:
DB_DATABASE=prueba

3. En el comando:
php artisan serve

php artisan migrate:fresh --seed

4. Entrar al:
http://127.0.0.1:8000/

5. Web
Puedes listar, buscar, crear y enviar correos masivos con job

6. Enviar correos
Para escuchar el job ejecuta:
php artisan queue:work


Con fé :)
