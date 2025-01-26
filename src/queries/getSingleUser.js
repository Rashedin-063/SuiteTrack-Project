async function getSingleUser(email) {
  const encodedEmail = encodeURIComponent(email);
  try {
    const response = await fetch(`/api/users/${encodedEmail}`);
    const {user} = await response.json()
    return user;
  } catch (error) {
    console.error('Error getting user', error);
  }
}

export default getSingleUser;