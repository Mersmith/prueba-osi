<x-mail::message>
# ¡Bienvenido {{ $name }}!

Gracias por registrarte en **{{ config('app.name') }}**.  
Estamos felices de tenerte con nosotros.

<x-mail::button :url="url('/')">
Ir al sitio
</x-mail::button>

Saludos,<br>
{{ config('app.name') }}
</x-mail::message>
