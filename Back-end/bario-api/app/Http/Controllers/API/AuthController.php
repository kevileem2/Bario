<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register (Request $request)
    {

        $request-> validate([
        'name' => 'required|max:55',
        'email'=> 'email|required|unique:users',
        'address' => 'max:150',
        'phone' => 'max:150',
        'password' => 'required|confirmed',

        ]);

        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'address' => $request['address'],
            'phone' => $request['phone'],
            'password' => Hash::make($request['password']),
            'remember_token' => Str::random(10)
        ]);

        $accessToken = $user->createToken('authToken')->accessToken;

        return response(['user' => $user, 'acces_token' => $accessToken]);

    }

    public function login(Request $request)
    {
        $credentials = $request-> validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if(!auth()->attempt($credentials))
        {
            return response(['message'=> 'Invalidad credentials']);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return response(['user' => auth()->user(), 'access_token' => $accessToken] );
    }

}
