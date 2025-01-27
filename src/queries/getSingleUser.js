async function getSingleUser(email) {
 
  try {
    const response = await fetch(`/api/users/${email}`);
    
    const {user} = await response.json()

    return user;
  } catch (error) {
    console.error('Error getting user', error);
  }
}

export default getSingleUser;