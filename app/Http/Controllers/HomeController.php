<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $responsedata = "";
        for ($i=1; $i <= 100; $i++) { 
            if($i % 3 == 0 && $i % 5 == 0) {
                $responsedata .= "FizzBuzz";
            } else if($i % 3 == 0) {
                $responsedata .= "Fizz";
            } else if($i % 5 == 0) {
                $responsedata .= "Buzz";
            } else {
                $responsedata .= $i;
            }
            if($i != 100) {
                $responsedata .= ", ";
            }
        }
        return response()->json([
            'data' => $responsedata,
            'status' => true,
        ], 200);
    }
}
?>