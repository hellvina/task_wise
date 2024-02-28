<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Model implements Authenticatable, JWTSubject
{
    protected $fillable = [
        'name', 'email', 'password',
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

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [
            'email'=>$this->email,
            'name'=>$this->name
        ];
    }
}
