<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function create(Request $request) 
    {
        $item = Item::create($request->all());
        return response()->json($item, 201);
    }

    public function index() 
    {
        $items = Item::all();
        return response()->json($itens, 200);
    }

    public function show(string $id) 
    {
        $item = Item::find($id);
        return response()->json($item, 200);
    }

    public function update(Request $request, string $id) 
    {
        $item = Item::find($id);
        $item->update($request->all());
        return response()->json($item, 200);
    }

    public function destroy(string $id) 
    {
        Item::destroy($id);
        return response()->json(null, 204);
    }
}
