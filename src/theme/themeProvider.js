/** @format */

import { setTheme } from '@/theme/themeSlice';
import useTheme from '@/theme/useTheme';
import { Global, css } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
function ThemeProvider(props) {
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('theme初始化');
    let theme = localStorage.getItem('theme');
    let state = JSON.parse(theme);
    if (state !== null) {
      dispatch(setTheme(state));
    }
  }, [dispatch]);

  return (
    <>
      <Global
        styles={css`
          :root {
            --weight: ${theme.fontWeight};
            --size: ${theme.fontSize + 'px'};
            --c1: ${theme.color1};
            --c2: ${theme.color2};
            --c3: ${theme.color3};
            --c4: ${theme.color4};
            --c5: ${theme.color5};
          }
        `}
      />
      {props.children}
    </>
  );
}

export { ThemeProvider };
