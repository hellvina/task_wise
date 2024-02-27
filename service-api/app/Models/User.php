<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
// use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Model implements Authenticatable
{
    protected $fillable = [
        'email', 'password',
    ];

    protected $guarded = [
        'id', 'created_at', 'updated_at'
    ];

    public function getAuthIdentifierName() {
        return 'id'; 
    }

    public function getAuthIdentifier() {
        return $this->getKey();
    }

    public function getAuthPassword() {
        return $this->password;
    }

    public function getRememberToken() {
        return $this->remember_token;
    }

    public function setRememberToken($value) {
        $this->remember_token = $value;
    }

    public function getRememberTokenName() {
        return 'remember_token';
    }


    // public function getJWTIdentifier() {
    //     return $this->getKey();
    // }

    // public function getJWTCustomClaims() {
    //     return [];
    // }
}
