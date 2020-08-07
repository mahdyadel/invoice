<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ __('frontend/frontend.invoice_system') }}</title>

  

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="{{asset('frontend/css/fontawesom/all.min.css')}}" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @if(config('app.locale') == 'ar')
    <link href="{{asset('frontend/css/bootstrap-rtl.css')}}" rel="stylesheet">
    @endif
@yield('style')
</head>
<body>
    <div id="app">
       

        <main class="py-4">
        <div class="container">
        @include('partial.flash')
            @yield('content')
        </div>
        </main>
    </div>

      <!-- Scripts -->
      <script src="{{ asset('js/app.js') }}" ></script>
      <script src="{{ asset('frontend/js/all.min.js') }}" ></script>

      <script>
      $(function(){
        $('#session-alert').fadeTo(2000 , 500).slideUp(500 , function(){
            $('#session-alert').slideUp(500);
        });
      });
      </script>
      @yield('script')


</body>
</html>
