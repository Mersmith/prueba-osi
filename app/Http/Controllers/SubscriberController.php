<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscriber;

class SubscriberController extends Controller
{
    public function index()
    {
        return Subscriber::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'  => 'required|string|max:120',
            'email' => 'required|email|unique:subscribers,email',
        ]);

        return Subscriber::create($data);
    }
}
