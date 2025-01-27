import toast from 'react-hot-toast';


async function createUser(userInfo) {

  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (response.status === 201) {
      toast.success('Successfully registered');
    }
  } catch (err) {
    console.error('Error:', err.message);
    toast.error(err.message);
  }
}

export default createUser;
