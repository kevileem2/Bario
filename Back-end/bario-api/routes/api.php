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
    // Route::apiResource('/socialServices','API\SocialServicesController')->middleware('checkAdmin');
    Route::get('/socialServices','API\SocialServicesController@index')->middleware('checkUser');
    Route::post('/socialServices','API\SocialServicesController@store')->middleware('checkModerator');
    Route::get('/socialServices/{id}','API\SocialServicesController@show')->middleware('checkUser');
    Route::patch('/socialServices/update/{id}','API\SocialServicesController@update')->middleware('checkModerator');
    Route::delete('/socialServices/delete/{id}','API\SocialServicesController@destroy')->middleware('checkModerator');
    
    // Middleware for categories
    // Route::apiResource('/categories','API\CategoriesController');
    Route::get('/categories','API\CategoriesController@index')->middleware('checkUser');
    Route::post('/categories','API\CategoriesController@store')->middleware('checkModerator');
    Route::get('/categories/{id}','API\CategoriesController@show')->middleware('checkUser');
    Route::patch('/categories/update/{id}','API\CategoriesController@update')->middleware('checkModerator');
    Route::delete('/categories/delete/{id}','API\CategoriesController@destroy')->middleware('checkModerator');
    
    // Middleware for events
    // Route::apiResource('/events','API\EventsController');
    Route::get('/events','API\EventsController@index')->middleware('checkUser');
    Route::post('/events','API\EventsController@store')->middleware('checkModerator');
    Route::get('/events/{id}','API\EventsController@show')->middleware('checkUser');
    Route::patch('/events/update/{id}','API\EventsController@update')->middleware('checkModerator');
    Route::delete('/events/delete/{id}','API\EventsController@destroy')->middleware('checkModerator');
    
    // Middleware for tags
    // Route::apiResource('/tags','API\TagsController');
    Route::get('/tags','API\TagsController@index')->middleware('checkUser');
    Route::post('/tags','API\TagsController@store')->middleware('checkModerator');
    Route::get('/tags/{id}','API\TagsController@show')->middleware('checkUser');
    Route::patch('/tags/update/{id}','API\TagsController@update')->middleware('checkModerator');
    Route::delete('/tags/delete/{id}','API\TagsController@destroy')->middleware('checkModerator');


    Route::post('file/SocialServicesImage','FileManagementController@SocialServicesImageUpload')->middleware('checkModerator');


