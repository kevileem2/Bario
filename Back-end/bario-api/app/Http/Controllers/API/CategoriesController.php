<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Categories;
use \Validator;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categoriesList = Categories::paginate(4); // Max 4 services per page
        return response()->json($categoriesList,200);
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
        ];

        $validator = Validator::make($request->all(),$rules);

        if($validator->fails())
        {
            return response()->json($validator->errors(),400);
        }



        $category = Categories::create($request->all());

        return response()->json($category,201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Categories::find($id);

        if(is_null($category)){

            return response()->json(["message"=>"Record not Found!"],404);

        }

        return response()->json($category,200);
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
            'name'          =>      'required|min:3'
        ];

        $validator = Validator::make($request->all(),$rules);

        if($validator->fails())
        {
            return response()->json($validator->errors(),400);
        }

        $category = Categories::find($id);

        if(is_null($category))
        {
            return response()->json(["message"=>"Record not Found!"],404);
        }

        $category->update($request->all());

        return response()->json($category,200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Categories::find($id);

        if(is_null($category))
        {
            return response()->json(["message"=>"Record not Found!"],404);
        }

        $category->delete();

        return response()->json('null',204);
    }

    public function categoryTags($id) {
        $tags = Categories::find($id)->categoryTags;
        return response()->json($tags);
    }
}
