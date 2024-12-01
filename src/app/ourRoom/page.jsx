
const OurRoomPage = async() => {
  const fetchRooms = async () => {
    const res = await fetch('http://localhost:3000/api/rooms');
    const roomData = await res.json();
    return roomData
  }
  
  const rooms = await fetchRooms();
  

  return (
    <div>
      <h1>Rooms</h1>
      {rooms.map(room => 
        <div key="room._id">
          <h2>{room.name}</h2>
          <p>{room.rooms}</p>
          <p>{room.isAvailable}</p>
        </div>
      )}
      <p>hello</p>
   </div>
  )

}
export default OurRoomPage