import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/slices/MenuSlice';
import { AppDispatch, RootState } from '../../store/store';

export function useHeader() {
    const menuOpen = useSelector((state: RootState) => state.menu.menuOpen);
    const dispatch: AppDispatch = useDispatch();

    const handleMenuClick = () => {
        dispatch(toggleMenu());
    };

    return {menuOpen, handleMenuClick}
}