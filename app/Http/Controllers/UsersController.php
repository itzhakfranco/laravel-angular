<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

class UsersController extends Controller
{
    public function getUsers()
    {
        return response()->json(Users::all());
    }

    public function addUser(Request $request)
    {
        $user = Users::addUser($request);
        return response($user);
    }

    public function updateUser(Request $request, $id)
    {

        $user = Users::updateUser($request, $id);
        return response($user);


    }

    public function deleteUser(Request $request, $id)
    {

        Users::deleteUser($request, $id);
        return response()->json(null, 204);


    }
}
