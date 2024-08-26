import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// フォームの状態の型定義
interface FormState {
    name: string;
    email: string;
    useCookies: boolean; // Cookieを使うかどうかのフラグ
}

// 初期状態
const initialState: FormState = {
    name: "",
    email: "",
    useCookies: Cookies.get("useCookies") === "false", // Cookieに基づいて初期値を設定
};

// フォームスライスの作成
const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
            if (state.useCookies) {
                Cookies.set("name", action.payload);
            }
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
            if (state.useCookies) {
                Cookies.set("email", action.payload);
            }
        },
        setUseCookies: (state, action: PayloadAction<boolean>) => {
            state.useCookies = action.payload;
            Cookies.set("useCookies", String(action.payload));
            if (!action.payload) {
                // Cookie利用が無効になった場合、Cookieを削除する
                Cookies.remove("name");
                Cookies.remove("email");
            }
        },
        resetForm: (state) => {
            state.name = "";
            state.email = "";
            state.useCookies = false;

            if (state.useCookies) {
                // Cookieを使っていた場合の削除処理
                Cookies.remove("name");
                Cookies.remove("email");
                Cookies.remove("useCookies");
            }
        },
        loadFormFromCookies: (state) => {
            if (state.useCookies) {
                state.name = Cookies.get("name") ?? state.name;
                state.email = Cookies.get("email") ?? state.email;
            }
        },
        outForm: (state) => {
            // console.log({
            //     name: state.name,
            //     email: state.email,
            // });
        },
    },
});

// アクションエクスポート
export const {
    setName,
    setEmail,
    setUseCookies,
    resetForm,
    loadFormFromCookies,
    outForm,
} = formSlice.actions;

// ストアの作成
const store = configureStore({
    reducer: {
        form: formSlice.reducer,
    },
});

// 初期ロード時にCookieからデータをロードする
store.dispatch(loadFormFromCookies());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
