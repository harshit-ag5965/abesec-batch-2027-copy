import { useEffect, useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Calendar } from '../components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Pencil, Trash2, CheckCircle2 } from 'lucide-react';
import type {
  Todo,
  TodoStatus,
  TodoDifficulty,
  TodoPriority,
} from '../types/todo';
import { Label } from '@/components/ui/label';

export function ManageTodos() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();
  const [formData, setFormData] = useState<Omit<Todo, 'id'>>({
    title: '',
    description: '',
    status: 'Todo',
    dueDate: new Date(),
    difficulty: 'Medium',
    priority: 'P2',
  });
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTodo) {
      updateTodo(editingTodo.id, formData);
      setEditingTodo(null);
    } else {
      addTodo(formData);
    }
    setFormData({
      title: '',
      description: '',
      status: 'Todo',
      dueDate: new Date(),
      difficulty: 'Medium',
      priority: 'P2',
    });
  };

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
    setFormData({
      title: todo.title,
      description: todo.description,
      status: todo.status,
      dueDate: todo.dueDate,
      difficulty: todo.difficulty,
      priority: todo.priority,
    });
  };

  const handleMarkComplete = (todo: Todo) => {
    updateTodo(todo.id, { status: 'Completed' });
  };

  const getPriorityColor = (priority: TodoPriority) => {
    switch (priority) {
      case 'P0':
        return 'bg-red-500 hover:bg-red-600';
      case 'P1':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'P2':
        return 'bg-green-500 hover:bg-green-600';
    }
  };

  const getDifficultyColor = (difficulty: TodoDifficulty) => {
    switch (difficulty) {
      case 'Hard':
        return 'bg-red-500 hover:bg-red-600';
      case 'Medium':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Easy':
        return 'bg-green-500 hover:bg-green-600';
    }
  };

  const getStatusColor = (status: TodoStatus) => {
    switch (status) {
      case 'Todo':
        return 'bg-gray-500 hover:bg-gray-600';
      case 'In Progress':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'Blocker':
        return 'bg-red-500 hover:bg-red-600';
      case 'Completed':
        return 'bg-green-500 hover:bg-green-600';
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Form Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                {editingTodo ? 'Edit Todo' : 'Add New Todo'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <Label className='mb-2'>Title</Label>
                  <Input
                    placeholder='Title'
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label className='mb-2'>Description</Label>
                  <Textarea
                    placeholder='Description'
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
                <div className='flex gap-4'>
                  <div className='flex-1'>
                    <Label className='mb-2'>Status</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value: TodoStatus) =>
                        setFormData({ ...formData, status: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select Status' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Todo'>Todo</SelectItem>
                        <SelectItem value='In Progress'>In Progress</SelectItem>
                        <SelectItem value='Blocker'>Blocker</SelectItem>
                        <SelectItem value='Completed'>Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex-1'>
                    <Label className='mb-2'>Priority</Label>
                    <Select
                      value={formData.priority}
                      onValueChange={(value: TodoPriority) =>
                        setFormData({ ...formData, priority: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select Priority' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='P0'>P0</SelectItem>
                        <SelectItem value='P1'>P1</SelectItem>
                        <SelectItem value='P2'>P2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex-1'>
                    <Label className='mb-2'>Difficulty</Label>
                    <Select
                      value={formData.difficulty}
                      onValueChange={(value: TodoDifficulty) =>
                        setFormData({ ...formData, difficulty: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select Difficulty' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Easy'>Easy</SelectItem>
                        <SelectItem value='Medium'>Medium</SelectItem>
                        <SelectItem value='Hard'>Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className='mb-2'>Due Date</Label>
                  <Calendar
                    mode='single'
                    selected={formData.dueDate}
                    onSelect={(date) =>
                      date && setFormData({ ...formData, dueDate: date })
                    }
                  />
                </div>
                <Button type='submit' className='w-full'>
                  {editingTodo ? 'Update Todo' : 'Add Todo'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Todo List Section */}
        <div className='space-y-4'>
          {todos.map((todo) => (
            <Card key={todo.id}>
              <CardContent className='pt-6'>
                <div className='flex justify-between items-start'>
                  <div className='flex-1'>
                    <h3
                      className={`font-semibold text-lg ${
                        todo.status === 'Completed'
                          ? 'line-through text-muted-foreground'
                          : ''
                      }`}
                    >
                      {todo.title}
                    </h3>
                    <p
                      className={`text-muted-foreground ${
                        todo.status === 'Completed' ? 'line-through' : ''
                      }`}
                    >
                      {todo.description}
                    </p>
                    <div className='mt-2 flex flex-wrap gap-2'>
                      <Badge className={getPriorityColor(todo.priority)}>
                        {todo.priority}
                      </Badge>
                      <Badge className={getStatusColor(todo.status)}>
                        {todo.status}
                      </Badge>
                      <Badge className={getDifficultyColor(todo.difficulty)}>
                        {todo.difficulty}
                      </Badge>
                      <Badge
                        variant='outline'
                        className='text-muted-foreground'
                      >
                        Due:
                      </Badge>
                    </div>
                  </div>
                  <div className='flex space-x-2'>
                    {todo.status !== 'Completed' && (
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => handleMarkComplete(todo)}
                        className='text-green-500 hover:text-green-600'
                      >
                        <CheckCircle2 className='h-4 w-4' />
                      </Button>
                    )}
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => handleEdit(todo)}
                    >
                      <Pencil className='h-4 w-4' />
                    </Button>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => deleteTodo(todo.id)}
                    >
                      <Trash2 className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
