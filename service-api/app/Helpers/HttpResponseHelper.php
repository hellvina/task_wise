<?php

namespace App\Helper;

use Illuminate\Support\Facades\Log;

class HttpResponseHelper
{
    public function __construct($error_class, $message, $code)
    {
        $this->errorClass = $errorClass;
        $this->message = $message;
        $this->code = $code;
    }

    private function toResponseLog() {
        Log::error($this->errorClass . ' :' . $this->message);
        return response()->json(['message' => $this->message], $this->code);
    }

}
?>
