<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{

    public function signup(Request $request) 
    {

        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|unique:users',
                'password' => 'required|string|min:6'
            ]);
    
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
    
            $token = JWTAuth::fromUser($user);
    
            return response()->json(['message' => 'user created successfully', 'token' => $token], 201);

        } catch (ValidationException $error) {
            return (new HttpResponseHelper(
                'ValidationException', $error->getMessage(), 422
            ))->toResponseLog();
        } catch (\Exception $error) {
            return (new HttpResponseHelper(
                'Exception', $error->getMessage(), 500
            ))->toResponseLog();
        }
    }

    public function signin(Request $request) 
    {
        try {
            $request->validate([
                'email' => 'required|string|email',
                'password' => 'required|string'
            ]);
            $credentials = $request->only('email', 'password');
            
            $token = Auth::guard('api')->attempt($credentials);

            if (!$token) {
                return response()->json(['message' => 'not authorized'], 401);
            }

            return response()->json(['message' => 'user logged successfully', 'token' => $token], 200);

        } catch (ValidationException $error) {
            return (new HttpResponseHelper(
                'ValidationException', $error->getMessage(), 422
            ))->toResponseLog();
        } catch (\Exception $error) {
            return (new HttpResponseHelper(
                'Exception', $error->getMessage(), 500
            ))->toResponseLog();
        }
    }
}
