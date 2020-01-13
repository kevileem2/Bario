<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\SocialServices;
use \Validator;


class SocialServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $socialServicesList = SocialServices::paginate(8); // Max 4 services per page
        return response()->json($socialServicesList, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $rules = [
            'name'          =>      'required|min:3',
            'description'   =>      'required|min:3',
            'link'          =>      'min:3',
            'phone'         =>      'required|min:3',
            'address'       =>      'required|min:3',
            'email'         =>      'required|min:3',
            'image.*'       =>      'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'hours'         =>      'min:3'
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        if ($request->hasFile('image')) {
            $fileNameWithExtension = $request->file('image')->getClientOriginalName();
            $fileName = pathinfo($fileNameWithExtension, PATHINFO_FILENAME);
            $extension = $request->file('image')->getClientOriginalExtension();
            $fileNameToStore = $fileName . '_' . time() . '.' . $extension;

            $request->file('image')->storeAs('public/socialServices', $fileNameToStore);
        } else {
            $fileNameToStore = 'noImage.jpg';
        }

        $socialService = SocialServices::create($request->all());

        return response()->json($socialService, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $socialService = SocialServices::find($id);

        if (is_null($socialService)) {

            return response()->json(["message" => "Record not Found!"], 404);
        }

        return response()->json($socialService, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $rules = [
            'name'          =>      'required|min:3',
            'description'   =>      'required|min:3',
            'link'          =>      'min:3',
            'phone'         =>      'required|min:3',
            'address'       =>      'required|min:3',
            'email'         =>      'required|min:3',
            'image.*'       =>      'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'hours'         =>      'min:3'
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $socialService = SocialServices::find($id);

        if (is_null($socialService)) {
            return response()->json(["message" => "Record not Found!"], 404);
        }

        $socialService->update($request->all());

        return response()->json($socialService, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $socialService = SocialServices::find($id);

        if (is_null($socialService)) {
            return response()->json(["message" => "Record not Found!"], 404);
        }

        $socialService->delete();

        return respone()->json('null', 204);
    }
}
