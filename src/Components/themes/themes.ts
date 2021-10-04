interface ITheme {
    bgColor: string;
    textColor: string;
}

const dark: ITheme = {
    bgColor: "black",
    textColor: "white",
}


const light: ITheme = {
    bgColor: "white",
    textColor: "black",
}

export default {
    dark,
    light
}