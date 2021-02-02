<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{

    public $timestamps = false;
    protected $fillablae = ['name', 'email', 'website', 'phone'];

    static public function addUser($request)
    {

        $user = new self();
        $user->name = $request['name']
        $user->email = $request['email'];
        $user->website = $request['website'];
        $user->phone = $request['phone'];
        $user->save();

         return $user;

      }

    static public function updateUser($request, $id)
    {
        $user = self::find($id);
        if (is_null($user)) {
            return response()->json(['msg' => 'User Not Found'], 404);
        }
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->website = $request['website'];
        $user->phone = $request['phone'];
        $user->save();

    }

    static public function deleteUser($request, $id)
    {
        $user = self::find($id);
        if (is_null($user)) {
            return response()->json(['msg' => 'User Not Found'], 404);
        }

        $user->delete();
    }
}
