<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\LoginResource;
use App\Models\LoginUser;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class LoginUserController extends Controller
{
    public function index()
    {
        $loginUsers = LoginUser::get();
        if ($loginUsers->count() > 0) {
            return LoginResource::collection($loginUsers);
        } else {
            return response()->json(['data' => [], 'message' => 'No records available'], 200);
        }
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'username' => 'required|string|max:30|min:4|unique:login_users',
                'email' => 'required|min:8|unique:login_users',
                'phone' => 'required|integer',
                'password' => 'required|min:8|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|regex:/[@$!%*#?&]/',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->messages(), 'status' => false, 'message' => 'All fields are mandatory'], 422);
            }

            $data = LoginUser::create([
                'username' => $request->username,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make($request->password),
            ]);

            return response()->json(['data' => new LoginResource($data), 'message' => 'User added successfully'], 200);
        } catch (Exception $e) {
            return response()->json(
                [
                    'status' => false,
                    'error' => 'Something went wrong',
                    'message' => $e->getMessage(),
                ],
                500,
            );
        }
    }

    public function show($id)
    {
        try {
            $login = LoginUser::find($id);
            if (!$login) {
                return response()->json(
                    [
                        'status' => true,
                        'data' => null,
                    ],
                    200,
                );
            }
            return response()->json(['status' => true, 'data' => new LoginResource($login)], 200);
        } catch (Exception $e) {
            return response()->json(
                [
                    'status' => false,
                    'error' => 'Something went wrong',
                    'message' => $e->getMessage(),
                ],
                500,
            );
        }
    }

    public function checkLogin(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|min:8|unique:logins',
                'password' => 'required|min:8|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|regex:/[@$!%*#?&]/',
            ]);
            $user = LoginUser::where('email', $request->email)->first();
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json(
                    [
                        'status' => false,
                        'message' => 'Invalid username or password',
                    ],
                    401,
                );
            }
            $result = new LoginResource($user);
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Login successful',
                    'data' => [
                        'id' => $result->id,
                        'email' => $result->email,
                        'username' => $result->username,
                        'phone' => $result->phone,
                        'created_at' => $result->created_at,
                        'updated_at' => $result->updated_at,
                    ],
                ],
                200,
            );

            return response()->json(['status' => true, 'data' => new LoginResource($login)], 200);
        } catch (Exception $e) {
            return response()->json(
                [
                    'status' => false,
                    'error' => 'Something went wrong',
                    'message' => $e->getMessage(),
                ],
                500,
            );
        }
    }
    public function update() {}
    public function destroy() {}
}
