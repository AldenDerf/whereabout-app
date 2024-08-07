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

        // Add the authenticated user's ID
        $data = $request->all();
        $data['user_id'] = auth()->user()->id;


        Whereabout::create($data);
        return response()->json(['message' => 'Whereabout logged']);
    }

    public function back()
    {
        // Handle the logic for when the user comes back
        return response()->json(['message' => 'Welcome back']);
    }
}
