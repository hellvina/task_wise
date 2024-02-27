<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{
    public function singup(Request $request) {

        try {
            $request->validate([
                'email' => 'required|string',
                'password' => 'required|string|min:6'
            ]);
    
            $user = new User();
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
    
            $token = JWTAuth::fromUser($user);
    
            return response()->json(['message' => 'user created successfully', 'token' => $token], 201);

        } catch (ValidationException $error) {
            Log::error(['error' => $error]);
            return response()->json(['message' => $error->getMessage()], 422);
        } catch (\Exception $error) {
            Log::error(['error' => $error]);
            return response()->json(['message' => 'Failed to create user'], 500);
        }
    }
}
