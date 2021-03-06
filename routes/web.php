<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('api/comment', 'CommentController@store');
Route::get('api/comment/{to}', 'CommentController@show');

Route::get('/{vue_capture?}', 'IndexController@index')->where('vue_capture', '[\/\w\.-]*');
