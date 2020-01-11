<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tags;
use \Validator;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tagsList = Tags::paginate(4); // Max 4 services per page
        return response()->json($tagsList,200);
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
            'name'  =>  'required|min:3',
            'category_id' => 'required|numeric'
        ];

        $validator = Validator::make($request->all(),$rules);

        if($validator->fails())
        {
            return response()->json($validator->errors(),400);
        }

        $tag = Tags::create($request->all());

        return response()->json($tag,201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tag = Tags::find($id);

        if(is_null($tag)){

            return response()->json(["message"=>"Record not Found!"],404);

        }

        return response()->json($tag,200);
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
            'name'  =>  'required|min:3',
            'category_id' => 'required|numeric'
        ];

        $validator = Validator::make($request->all(),$rules);

        if($validator->fails())
        {
            return response()->json($validator->errors(),400);
        }

        $tag = Tags::find($id);

        if(is_null($tag))
        {
            return response()->json(["message"=>"Record not Found!"],404);
        }

        $tag->update($request->all());

        return response()->json($tag,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tag = Tags::find($id);

        if(is_null($tag))
        {
            return response()->json(["message"=>"Record not Found!"],404);
        }

        $tag->delete();

        return respone()->json('null',204);
    }
}
