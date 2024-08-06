<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Whereabout;

class WhereaboutController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'location' => 'required|string|max:255',
            'time' => 'required|date',
        ]);

        Whereabout::create($request->all)();
        return response()->json(['message' => 'Whereabout logged']);
    }

    public function back()
    {
        // Handle the logic for when the user comes back
        return response()->json(['message' => 'Welcome back']);
    }
}
