'use client';
import { useRouter } from "next/navigation";

const AddRoomPage = () => {
  const router = useRouter();

  const handleAddRoom = async(e) => {
    e.preventDefault();

    // Extract form values
    const roomName = e.target.roomName.value;
    const roomImage = e.target.roomImage.value;
    const roomSize = e.target.roomSize.value;
    const roomRent = e.target.roomRent.value;

    const formData = {
      name: roomName,
      size: roomSize,
      rent: roomRent,
      image: roomImage,
    };

    const res = await fetch('/api/rooms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({formData}),
    });

    if (!res.ok) {
      throw new Error('Failed to add room');
    }
    router.refresh();
    router.push('/');
}

  return (
    <div className='flex flex-col justify-center items-center space-y-8 border min-h-screen'>
      <h3 className='text-2xl lg:text-3xl font-semibold text-center'>
        Add New Room
      </h3>
      <form
        onSubmit={handleAddRoom}
        className='flex w-full lg:w-1/2 mx-auto flex-col space-y-4 px-4'
      >
        {/* room name and image */}
        <div className='flex flex-col md:flex-row justify-between gap-x-8 gap-y-4'>
          <div className='flex flex-col w-full space-y-1'>
            <label htmlFor='roomName'>Room Name:</label>
            <input
              type='text'
              name='roomName'
              id='roomName'
              className='border'
              placeholder='Enter room name'
            />
          </div>
          <div className='flex flex-col w-full space-y-1'>
            <label htmlFor='roomImage'>Room Image URL:</label>
            <input
              type='text'
              name='roomImage'
              id='roomImage'
              className='border'
              placeholder='Enter room image URL'
            />
          </div>
        </div>

        {/* room size and rent */}
        <div className='flex flex-col md:flex-row justify-between gap-x-8 gap-y-4'>
          <div className='flex flex-col w-full space-y-1'>
            <label htmlFor='roomSize'>Size:</label>
            <input
              type='number'
              name='roomSize'
              id='roomSize'
              className='border'
              step={100}
              placeholder='Enter room size'
            />
          </div>
          <div className='flex flex-col w-full space-y-1'>
            <label htmlFor='roomRent'>Rent:</label>
            <input
              type='number'
              name='roomRent'
              id='roomRent'
              className='border'
              step={50}
              placeholder='Enter room rent'
            />
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='bg-slate-600 mt-8 rounded-md hover:bg-slate-400 py-2 w-full'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoomPage;
