export type ThemeType = {
    name: string;
    dark: boolean;
    variables?: Record<string, string>; // Cải tiến từ `object` để đảm bảo kiểu dữ liệu rõ ràng hơn
    colors: Partial<Record<
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
        | "indigo"
        | "lightPrimary"
        | "lightSecondary"
        | "lightSuccess"
        | "lightError"
        | "lightInfo"
        | "lightWarning"
        | "lightIndigo"
        | "textPrimary"
        | "textSecondary"
        | "borderColor"
        | "hoverColor"
        | "inputBorder"
        | "containerBg"
        | "background"
        | "surface"
        | "grey100"
        | "grey200"
        | "darkBg"
        | "bgLight"
        | "bgDark",
        string
    >>;
};
