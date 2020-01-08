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


    Route::apiResource('/socialServices','API\SocialServicesController')->middleware('auth:api');;
    Route::apiResource('/categories','API\CategoriesController');
    Route::apiResource('/events','API\EventsController');
    Route::apiResource('/tags','API\TagsController');
    Route::post('file/SocialServicesImage','FileManagementController@SocialServicesImageUpload');


