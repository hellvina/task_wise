<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class TaskController extends Controller
{

    public function create(Request $request) 
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'description' => 'required|string',
                'user_id' => 'required|integer',
                'status' => 'required|string'
            ]);
            $user_id = $request->input('user_id');

            if (!$user_id) {
                return response()->json(['message' => 'user not found'], 401);
            }

            $task = Task::create([
                'name' => $request->name,
                'description' => $request->description,
                'user_id' => $user_id,
                'status' => $request->status,
            ]);
            return response()->json(['message' => 'task created successfully'], 201);

        } catch (ValidationException $error) {
            Log::error('ValidationException: ' . $error->getMessage());
            return response()->json(['message' => $error->getMessage()], 422);
        } catch (\Exception $error) {
            Log::error('Exception: ' . $error->getMessage());
            return response()->json(['message' => 'Failed to create task'], 500);
        }
    }

    public function index() 
    {
        try {
            $tasks = Task::all();
            return response()->json($tasks, 200);

        } catch (ValidationException $error) {
            Log::error('ValidationException: ' . $error->getMessage());
            return response()->json(['message' => $error->getMessage()], 422);
        } catch (\Exception $error) {
            Log::error('Exception: ' . $error->getMessage());
            return response()->json(['message' => 'Failed to list tasks'], 500);
        }

    }

    public function show(string $id) 
    {
        try {
            $task = Task::find($id);
            return response()->json($task, 200);
        } catch (ValidationException $error) {
            Log::error('ValidationException: ' . $error->getMessage());
            return response()->json(['message' => $error->getMessage()], 422);
        } catch (\Exception $error) {
            Log::error('Exception: ' . $error->getMessage());
            return response()->json(['message' => 'Failed to update task'], 500);
        }

    }

    public function update(Request $request, string $id) 
    {
        try {
            $task = Task::find($id);
            $task->update($request->all());
            return response()->json(['message' => 'task updated successfully'], 200);

        } catch (ValidationException $error) {
            Log::error('ValidationException: ' . $error->getMessage());
            return response()->json(['message' => $error->getMessage()], 422);
        } catch (\Exception $error) {
            Log::error('Exception: ' . $error->getMessage());
            return response()->json(['message' => 'Failed to update task'], 500);
        }
    }

    public function destroy(string $id) 
    {
        try {
            $task = Task::find($id);
            if (!$task) {
                return response()->json(['message' => 'Task not found'], 404);
            }
            Task::destroy($id);
            return response()->json(['message' => 'task deleted successfully'], 204);

        } catch (ValidationException $error) {
            Log::error('ValidationException: ' . $error->getMessage());
            return response()->json(['message' => $error->getMessage()], 422);
        } catch (\Exception $error) {
            Log::error('Exception: ' . $error->getMessage());
            return response()->json(['message' => 'Failed to update task'], 500);
        }
    }
}
