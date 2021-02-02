<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

Route::prefix('api')->group(function () {
    Route::get('users', [UsersController::class, 'getUsers']);
    Route::post('addUser', [UsersController::class, 'addUser']);
    Route::put('updateUser/{id}', [UsersController::class, 'updateUser']);
    Route::delete('deleteUser/{id}', [UsersController::class, 'deleteUser']);
});
