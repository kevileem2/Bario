<?php

namespace App\Http\Middleware;

use Closure;

class CheckModerator
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
        if(auth('api')->user()->user_role < 1) {
            return response('Unauthorized.', 401);
        } else {
            return $next($request);

        }
    }
}
