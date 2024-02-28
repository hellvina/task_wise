<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Validation\ValidationException;
use App\Helper\HttpResponseHelper;

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
            return (new HttpResponseHelper(
                'ValidationException', $error->getMessage(), 422
            ))->toResponseLog();
        } catch (\Exception $error) {
            return (new HttpResponseHelper(
                'Exception', $error->getMessage(), 500
            ))->toResponseLog();
        }
    }

    public function index() 
    {
        try {
            $tasks = Task::all();
            return response()->json($tasks, 200);

        } catch (ValidationException $error) {
            return (new HttpResponseHelper(
                'ValidationException', $error->getMessage(), 422
            ))->toResponseLog();
        } catch (\Exception $error) {
            return (new HttpResponseHelper(
                'Exception', $error->getMessage(), 500
            ))->toResponseLog();
        }

    }

    public function show(string $id) 
    {
        try {
            $task = Task::find($id);
            return response()->json($task, 200);
        } catch (ValidationException $error) {
            return (new HttpResponseHelper(
                'ValidationException', $error->getMessage(), 422
            ))->toResponseLog();
            
        } catch (\Exception $error) {
            return (new HttpResponseHelper(
                'Exception', $error->getMessage(), 500
            ))->toResponseLog();
        }

    }

    public function update(Request $request, string $id) 
    {
        try {
            $task = Task::find($id);
            $task->update($request->all());
            return response()->json(['message' => 'task updated successfully'], 200);

        } catch (ValidationException $error) {
            return (new HttpResponseHelper(
                'ValidationErrorClass', $error->getMessage(), 422
            ))->toResponseLog();

        } catch (\Exception $error) {
            return (new HttpResponseHelper(
                'Exception', $error->getMessage(), 500
            ))->toResponseLog();
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
            return (new HttpResponseHelper(
                'ValidationErrorClass', $error->getMessage(), 422
            ))->toResponseLog();

        } catch (\Exception $error) {
            return (new HttpResponseHelper(
                'Exception', $error->getMessage(), 500
            ))->toResponseLog();
        }
    }
}
