import { ReduxStore } from 'app';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
