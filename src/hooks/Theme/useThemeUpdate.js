import { useContext } from 'react';
import { ThemeUpdateContext } from '../../contexts';

const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext);
};

export default useThemeUpdate;
