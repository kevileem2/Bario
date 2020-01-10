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


    /**
     * User Routes
     */

    Route::group(['middleware' => ['auth:api','checkUser']], function() {

        Route::get('/socialServices','API\SocialServicesController@index');
        Route::get('/socialServices/{id}','API\SocialServicesController@show');
        Route::get('/categories/{id}/tags','API\CategoriesController@categoryTags');
        Route::get('/categories','API\CategoriesController@index');
        Route::get('/categories/{id}','API\CategoriesController@show');
        Route::get('/events','API\EventsController@index');
        Route::get('/events/{id}/creator','API\EventsController@getCreator');
        Route::get('/events/{id}/category','API\EventsController@getCategory');
        Route::get('/events/{id}/tags','API\EventsController@getTags');
        Route::get('/events/{id}','API\EventsController@show');
        Route::get('/tags','API\TagsController@index');
        Route::get('/tags','API\TagsController@index');
        Route::get('/tags/{id}','API\TagsController@show');


    });

    /**
     * Admin routes
     */
    Route::group(['middleware' =>['auth:api','checkModerator']], function() {

        Route::post('/socialServices','API\SocialServicesController@store');
        Route::patch('/socialServices/update/{id}','API\SocialServicesController@update');
        Route::delete('/socialServices/delete/{id}','API\SocialServicesController@destroy');
        Route::post('/categories','API\CategoriesController@store');
        Route::patch('/categories/update/{id}','API\CategoriesController@update');
        Route::delete('/categories/delete/{id}','API\CategoriesController@destroy');
        Route::post('/events','API\EventsController@store');
        Route::patch('/events/update/{id}','API\EventsController@update');
        Route::delete('/events/delete/{id}','API\EventsController@destroy');
        Route::patch('/tags/update/{id}','API\TagsController@update');
        Route::delete('/tags/delete/{id}','API\TagsController@destroy');
        Route::post('file/SocialServicesImage','FileManagementController@SocialServicesImageUpload');
        Route::post('/tags','API\TagsController@store');

    });
