<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Request;



use Carbon\Carbon;
use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;


class Local
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(config('local.status')){

            if (Session::has('local') && array_key_exists(Session::get('local') , config('local.languages'))){

                App::setLocale(Session::get('local'));

            }else{

                $userLanguages = preg_split('/[,;]/' , $request->server('HTTP_ACCEPT_LANGUAGE'));
                foreach($userLanguages as $language){

                    if(array_key_exists($language , config('local.languages'))){

                        App::setLocale($language);

                        setlocale(LC_TIME , config('local.languages')[$language][2]);

                        Carbon::setLocale(config('local.languages')[$language][0]);

                        if(config('local.languages')[$language][2]){
                            \session(['lang-rtl' =>true]);
                        }else{
                            Session::forget('lang-rtl');
                        }

                    break;
                    }
                }

            }


        }

        return $next($request);
    }
}
