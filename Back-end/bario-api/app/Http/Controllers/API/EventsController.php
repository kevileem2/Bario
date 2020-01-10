<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Categories;
use App\Models\Events;
use \Validator;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $eventsList = Events::paginate(4); // Max 4 services per page
        return response()->json($eventsList,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'name'         =>      'required|min:3',
            'user_id'      =>      'required|numeric',
            'date'         =>      'required|date',
            'location'     =>      'required|min:3',
            'description'  =>      'required|min:3',
            'price'        =>      'required|numeric',
            'slug'         =>      'required|min:3',
            'image.*'      =>      'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_id'  =>      'required|numeric', 
            'tag_id'        =>     'required|numeric',  
        ];

        // TODO
        // User_id should be the creators id, user_id added to fillable in events modal 

        $validator = Validator::make($request->all(),$rules); 

        if($validator->fails())
        {
            return response()->json($validator->errors(),400);
        }

        if ($request->hasFile('image'))
        {
            $fileNameWithExtension = $request->file('image')->getClientOriginalName();
            $fileName = pathinfo($fileNameWithExtension, PATHINFO_FILENAME);
            $extension = $request->file('image')->getClientOriginalExtension();
            $fileNameToStore = $fileName .'_'.time().'.'.$extension;

            $path = $request->file('image')->storeAs('public/events',$fileNameToStore);
        }
        else {
            $fileNameToStore= 'noImage.jpg';
         
        }

        $events = Events::create($request->all());

        return response()->json($events,201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $event = Events::find($id);

        if(is_null($event)){

            return response()->json(["message"=>"Record not Found!"],404);

        }

        return response()->json($event,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
            'name'         =>      'required|min:3',
            'user_id'      =>      'required|numeric',
            'date'         =>      'required|date',
            'location'     =>      'required|min:3',
            'description'  =>      'required|min:3',
            'price'        =>      'required|numeric',
            'slug'         =>      'required|min:3',
            'image.*'      =>      'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_id'  =>      'required|numeric', 
            'tag_id'        =>     'required|numeric',  
        ];

        $validator = Validator::make($request->all(),$rules); 

        if($validator->fails())
        {
            return response()->json($validator->errors(),400);
        }
        
        $event = Events::find($id);

        if(is_null($event))
        {
            return response()->json(["message"=>"Record not Found!"],404);
        }

        $event->update($request->all());

        return response()->json($event,200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event = events::find($id);

        if(is_null($event))
        {
            return response()->json(["message"=>"Record not Found!"],404);
        }

        $event->delete();

        return respone()->json('null',204);
    }


    // Custom functions

    public function getCreator($id) {
        $creator = events::find($id)->creator;
        return response()->json($creator);
        
    }

    public function getCategory($id) {
        $category = events::find($id)->eventCategory;
        return response()->json($category);
    }

    public function getTags($id) {
        $category = events::find($id)->eventCategory;
        $tags = categories::find($category->id)->categoryTags;

        return response()->json($tags);
    }
}
