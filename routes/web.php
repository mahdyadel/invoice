<?php

use Illuminate\Support\Facades\Route;


Route::get('change-language/{local}' , ['as' =>'frontend_change_local' , 'uses' =>'GeneralController@changeLanguage']);

Route::get('invoice/print/{id}' , ['as' => 'invoice.print' , 'uses'  => 'Invoice\InvoiceController@print']);
Route::get('invoice/pdf/{id}' , ['as' => 'invoice.pdf' , 'uses'  => 'Invoice\InvoiceController@pdf']);
Route::get('invoice/send_to_mail/{id}' , ['as' => 'invoice.send_to_mail' , 'uses'  => 'Invoice\InvoiceController@send_to_mail']);

Route::resource('invoice' , 'Invoice\InvoiceController');