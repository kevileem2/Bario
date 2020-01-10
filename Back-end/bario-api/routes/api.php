<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

    /**
     * Access Token Authentication
     */
    Route::post('/register', 'Api\AuthController@register' );
    Route::post('/login', 'Api\AuthController@login' );

    // Middleware for social services
    Route::get('/socialServices','API\SocialServicesController@index')->middleware('checkUser');
    Route::post('/socialServices','API\SocialServicesController@store')->middleware('checkModerator');
    Route::get('/socialServices/{id}','API\SocialServicesController@show')->middleware('checkUser');
    Route::patch('/socialServices/update/{id}','API\SocialServicesController@update')->middleware('checkModerator');
    Route::delete('/socialServices/delete/{id}','API\SocialServicesController@destroy')->middleware('checkModerator');
    
    // Middleware for categories
    // Get all tags from a category
    Route::get('/categories/{id}/tags','API\CategoriesController@categoryTags')->middleware('checkUser');
    
    Route::get('/categories','API\CategoriesController@index')->middleware('checkUser');
    Route::post('/categories','API\CategoriesController@store')->middleware('checkModerator');
    Route::get('/categories/{id}','API\CategoriesController@show')->middleware('checkUser');
    Route::patch('/categories/update/{id}','API\CategoriesController@update')->middleware('checkModerator');
    Route::delete('/categories/delete/{id}','API\CategoriesController@destroy')->middleware('checkModerator');
    
    // Middleware for events
    // Get event creator 
    Route::get('/events/{id}/creator','API\EventsController@getCreator')->middleware('checkUser');
    Route::get('/events/{id}/category','API\EventsController@getCategory')->middleware('checkUser');
    Route::get('/events/{id}/tags','API\EventsController@getTags')->middleware('checkUser');

    Route::get('/events','API\EventsController@index')->middleware('checkUser');
    Route::post('/events','API\EventsController@store')->middleware('checkModerator');
    Route::get('/events/{id}','API\EventsController@show')->middleware('checkUser');
    Route::patch('/events/update/{id}','API\EventsController@update')->middleware('checkModerator');
    Route::delete('/events/delete/{id}','API\EventsController@destroy')->middleware('checkModerator');
    
    // Middleware for tags
    Route::get('/tags','API\TagsController@index')->middleware('checkUser');
    Route::get('/tags','API\TagsController@index')->middleware('checkUser');
    Route::post('/tags','API\TagsController@store')->middleware('checkModerator');
    Route::get('/tags/{id}','API\TagsController@show')->middleware('checkUser');
    Route::patch('/tags/update/{id}','API\TagsController@update')->middleware('checkModerator');
    Route::delete('/tags/delete/{id}','API\TagsController@destroy')->middleware('checkModerator');


    Route::post('file/SocialServicesImage','FileManagementController@SocialServicesImageUpload')->middleware('checkModerator');


