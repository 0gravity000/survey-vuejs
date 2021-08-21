@extends('layouts.appvue')

@section('content')
<div class="container pt-1">
    <div class="row">
        <div class="col">
            <main-header htitle="Main"></main-header>
        </div>  <!-- col -->
    </div>  <!-- row -->
    <div class="row">
        <div class="col-3">
            <main-left-sidebar></main-left-sidebar>
        </div>  <!-- col -->
        <div class="col">
            <main-content></main-content>
        </div>  <!-- col -->
    </div>  <!-- row -->
</div>
@endsection
