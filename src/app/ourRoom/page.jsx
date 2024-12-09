
  const fetchRooms = async () => {
    try {
      const res = await fetch(`https://suite-track.vercel.app/api/rooms`);     
      return res.json();
    } catch (error) {
       console.error('Failed to get rooms', error);
    }
  };
  
const OurRoomPage = async() => {

  
  const { rooms } = await fetchRooms();
 console.log('rooms data', rooms) 

  return (
    <div>
      <h1>Rooms</h1>
      {rooms.map((room) => (
        <div key={room._id}>
          <h2>{room.name}</h2>
          <p>{room.rooms}</p>
          <p>{room.isAvailable}</p>
        </div>
      ))}
      <p>hello</p>
    </div>
  );

}
export default OurRoomPage