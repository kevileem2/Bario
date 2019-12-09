<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Http\Resources\UserCollection as UserResource;

class UserController extends Controller
{
    public function getUsers() {
        return new UserResource(User::all());
    }

    public function getUserById($id) {
        return new UserResource(User::where('id', '=', $id)->get());
    }

    public function createUser(Request $request) {
        $user = User::create($request->all());

        return response()->json($article, 201);
    }
}
