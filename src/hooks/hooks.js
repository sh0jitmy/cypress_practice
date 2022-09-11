import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async() => {
  const {data} = await axios.get (
    "http://localhost:3300/data"
  );
  return data;
};      
/*
const useCustomHook = () => {
  const data_base = "test"
  //const [count,SetCount] = useState(0);
  //const increment = useCallback(() = setCount((n) => n + 1),[]);
  //return data_base + increment
  return data_base;
}
*/

const useCustomHook = () => {
  const {data,isLoading} = useQuery('test',fetchData); 
  //return "data"; 
  return data;
}
export default useCustomHook
