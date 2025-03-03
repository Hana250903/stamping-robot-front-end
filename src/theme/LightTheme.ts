import type { ThemeType } from "../types/themeTypes/ThemeType"; // Nếu alias `@` chưa được config trong tsconfig.json, hãy đổi thành đường dẫn tuyệt đối

const BLUE_THEME: ThemeType = {
    name: "BLUE_THEME",
    dark: false,
    variables: {
        "border-color": "#e5eaef",
    },
    colors: {
        primary: "#0085db",
        secondary: "#707a82",
        info: "#46caeb",
        success: "#4bd08b",
        warning: "#f8c076",
        error: "#fb977d",
        indigo: "#8763da",
        lightPrimary: "#e5f3fb",
        lightInfo: "#e1f5fa",
        lightSecondary: "#e7ecf0",
        lightSuccess: "#dffff3",
        lightError: "#ffede9",
        lightWarning: "#fff6ea",
        lightIndigo: "#f1ebff",
        textPrimary: "#2A3547",
        textSecondary: "#2A3547",
        borderColor: "#e5eaef",
        inputBorder: "#DFE5EF",
        containerBg: "#ffffff",
        background: "#f0f5f9",
        hoverColor: "#f6f9fc",
        surface: "#fff",
        grey100: "#707a82",
        grey200: "#111c2d",
        darkBg: "#2a3447",
        bgLight: "#f5f8fb",
        bgDark: "#111c2d",
    },
};

export default BLUE_THEME;
