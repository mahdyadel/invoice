<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;

class GeneralController extends Controller
{
    public function changeLanguage($local){

        try{
            if(array_key_exists($local , config('local.languages'))){
                Session::put('local' , $local);
                \App::setLocale($local);
                return redirect()->back();
            }
            
        }catch(\Exception $exception){
            return redirect()->back();
        }

    }
}
