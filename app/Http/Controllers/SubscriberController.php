<?php

namespace App\Http\Controllers;

use App\Jobs\EnviarBienvenidaEmailJob;
use App\Models\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    public function index(Request $request)
    {
        $query = Subscriber::query();

        if ($request->has('buscador') && $request->buscador != '') {
            $buscador = $request->buscador;
            $query->where('nombre', 'like', "%$buscador%")
                ->orWhere('correo', 'like', "%$buscador%");
        }

        $query->orderBy('id', 'desc');

        $perPage = $request->get('per_page', 5);
        return $query->paginate($perPage);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required|string|max:120',
            'correo' => 'required|email|unique:subscribers,correo',
        ]);

        return Subscriber::create($data);
    }

    public function sendWelcomeEmails()
    {
        $subscribers = Subscriber::all();

        foreach ($subscribers as $subscriber) {
            EnviarBienvenidaEmailJob::dispatch($subscriber->id);
        }

        return response()->json(['message' => 'Los correos se están enviando en segundo plano']);
    }
}
