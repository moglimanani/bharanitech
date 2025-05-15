<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();

        return response()->json(
            [
                'data' => $contacts,
                'status'=> true
            ],
            200,
        );
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'phone' => 'nullable|string|max:20',
            'occupation' => 'required|string|max:100',
            'dob' => 'required|date|before:18 years ago',
        ]);

        if ($validator->fails()) {
            return response()->json(
                [
                    'errors' => $validator->errors(),
                    'status'=> false
                ],
                422,
            );
        }

        $contact = Contact::create($validator->validated());

        Mail::to('moglimani@gmail.com')->send(new ContactFormMail($contact));

        return response()->json(
            [
                'message' => 'Contact form submitted successfully.',
                'data' => $contact,
                'status'=> true
            ],
            201,
        );
    }
}
