import { useAtom } from 'jotai';
import { userAtom, loadingAtom, errorAtom } from '../store/atoms';
import { fetchUsers, fetchUserById, createUser } from '../services/api';


export const useUsers = () => {
  const [users, setUsers] = useAtom(userAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [error, setError] = useAtom(errorAtom);


  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(data);
      // console.log(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };


  const addUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await createUser(userData);
      setUsers([...users, newUser]);
      return newUser;
    } catch (err) {
      setError(err.message || 'Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  return {
    users,
    loading,
    error,
    loadUsers,
    addUser,
  };
};