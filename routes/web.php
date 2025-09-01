<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{any}', function () {
    return response()->file(public_path('frontend/index.html'));
})->where('any', '^(?!.*\.(js|css|png|jpg|jpeg|gif|svg|map|json)$).*');
