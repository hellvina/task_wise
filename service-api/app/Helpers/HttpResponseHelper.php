<?php

namespace App\Helper;

use Illuminate\Support\Facades\Log;

class HttpResponseHelper
{
    public function __construct($error_class, $message, $code)
    {
        $this->error_class = $error_class;
        $this->message = $message;
        $this->code = $code;
    }

    private function toResponseLog() {
        Log::error($this->error_class . ' :' . $this->message);
        return response()->json(['message' => $this->message], $this->code);
    }

}
?>
