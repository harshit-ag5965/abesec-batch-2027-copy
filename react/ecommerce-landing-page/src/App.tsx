import { useState } from 'react';
import { Button } from './components/ui/button';
import { Calendar } from './components/ui/calendar';
import { DatePickerDemo } from './components/mycomponents/DatePickerDemo';
import { NavigationMenuDemo } from './components/mycomponents/NavigationMenuDemo';

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      {/* <div className='flex justify-evenly'>
        <h1 className='text-6xl'>Hello</h1>
        <h1 className='justify-center text-9xl font-bold'>Hello world!</h1>
      </div>
      <div className='flex justify-evenly'>
        <Button>Go to courses</Button>
        <Button>My Dashboard</Button>
      </div>
      <div className='flex flex-col flex-wrap items-start gap-2 @md:flex-row'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          className='rounded-md border shadow-sm'
        />
      </div>
      <DatePickerDemo /> */}
      <div className='flex justify-evenly bg-gray-400'>
        <img className='p-10' src='/vite.svg' />
        <NavigationMenuDemo />
      </div>
    </>
  );
}

export default App;
