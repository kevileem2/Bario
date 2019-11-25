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
 * users
 * 
 */
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
/*


/*

OAuth

Route::group(['middleware' => 'auth:api'], function(){

    Route::apiResource('/socialServices','API\SocialServicesController');
    
});
*/

/**
 * Basic auth 
 */

Route::apiResource('/socialServices','API\SocialServicesController');

Route::post('file/SocialServicesImage','FileManagementController@SocialServicesImageUpload');