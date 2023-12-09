<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @include('layout.head')
    <body x-cloak x-data="application" :class="{'dark': app_mode === 'dark' }" class="antialiased">
      @include('layout.header')

      @yield('content')

      @include('layout.footer')

      @if (config('app.env') === 'production')
        @php
          $strKeyfileJs = 'resources/js/app.js';
          $objManifest = json_decode(file_get_contents('./build/manifest.json'));
        @endphp
        <script type="module" src="/build/{{ $objManifest->{$strKeyfileJs}->file }}" ></script>
      @else
        @vite(['resources/js/app.js'])
      @endif

      @yield('scripts')
    </body>
</html>
