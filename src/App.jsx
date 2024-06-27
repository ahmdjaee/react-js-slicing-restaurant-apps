import { RouterProvider } from "react-router-dom";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { router } from './routes/routes';
import ContextProvider from "./context/ContextProvider";

const baseTheme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    solidColor: '#ffffff',
                    solidBg: '#f97316', // orange bg-500
                    solidHoverBg: '#f97316', // orange bg-600
                    solidDisabledBg: 'var(--disabled)',
                    solidActiveBg: '#f97316', // orange bg-600
                    outlinedColor: '#f97316', // orange bg-600
                    outlinedBorder: '#f97316', // orange bg-500
                    outlinedHoverBorder: undefined,
                    outlinedHoverBg: '#fffffff', // orange bg-100
                    outlinedActiveBg: '#fffffff', // orange bg-200
                },
                warning: {
                    solidBg: '#eab308', // yellow bg-500
                    solidHoverBg: '#ca8a04', // yellow bg-600
                    solidActiveBg: '#ca8a04', // yellow bg-600
                    outlinedColor: '#ca8a04', // yellow bg-600
                    outlinedBorder: '#eab308', // yellow bg-500
                    outlinedHoverBorder: undefined,
                    outlinedHoverBg: '#fef3c7',  // yellow bg-100
                    outlinedActiveBg: '#fef08a', // yellow bg-200
                },
                dark: {
                    solidColor: '#ffffff',
                    solidBg: 'var(--dark)',
                    solidHoverBg: 'var(--dark-hover)',
                    solidActiveBg: 'var(--dark-hover)',
                    solidDisabledBg: 'var(--disabled)',
                },
                focusVisible: 'rgba(66, 153, 225, 0.6)',
            },
        },
    },
});

export default function App() {
    return (
        <CssVarsProvider theme={baseTheme}>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
        </CssVarsProvider>
    );
}