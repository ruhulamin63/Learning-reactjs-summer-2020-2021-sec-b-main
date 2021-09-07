<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|max:30|alpha',
            'email' => 'email:rfc,dns|required|min:10|max:50|',
            'password'=> 'required|min:8|max:20',
            'password_confirmation'=> 'required|min:8|max:20',
            'phone' => 'required|min:11|numeric',
            'nid' => 'required|min:10|numeric',
            'dob' => 'required',
            'type' => 'required',
        ];
    }
}
