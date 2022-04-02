import { ReduxDispatch } from 'app';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<ReduxDispatch>();
