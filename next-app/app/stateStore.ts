import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js"; // 暗号化ライブラリのインポート

// 暗号化・復号化に使用する秘密鍵
const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || "fallback-secret-key"; // 環境変数から秘密鍵を取得

// フォームの状態の型定義
interface FormState {
    name: string;
    email: string;
    useCookies: boolean; // Cookieを使うかどうかのフラグ
}

// Cookieから復号して取得
const getDecryptedCookie = (key: string): string => {
    const encrypted = Cookies.get(key);
    if (encrypted) {
        const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
    return "";
};

// 初期状態
const initialState: FormState = {
    name: getDecryptedCookie("name") || "",
    email: getDecryptedCookie("email") || "",
    useCookies: Cookies.get("useCookies") === "true", // Cookieに基づいて初期値を設定
};

// フォームスライスの作成
const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
            if (state.useCookies) {
                const encryptedName = CryptoJS.AES.encrypt(
                    action.payload,
                    secretKey
                ).toString();
                Cookies.set("name", encryptedName, {
                    secure: true,
                    sameSite: "strict",
                });
            }
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
            if (state.useCookies) {
                const encryptedEmail = CryptoJS.AES.encrypt(
                    action.payload,
                    secretKey
                ).toString();
                Cookies.set("email", encryptedEmail, {
                    secure: true,
                    sameSite: "strict",
                });
            }
        },
        setUseCookies: (state, action: PayloadAction<boolean>) => {
            state.useCookies = action.payload;
            Cookies.set("useCookies", String(action.payload), {
                secure: true,
                sameSite: "strict",
            });
            if (!action.payload) {
                // Cookie利用が無効になった場合、Cookieを削除する
                Cookies.remove("name");
                Cookies.remove("email");
                Cookies.remove("useCookies");
            }
        },
        resetForm: (state) => {
            state.name = "";
            state.email = "";
            // Cookieを削除する
            Cookies.remove("name");
            Cookies.remove("email");
        },
        cancelCookies: (state) => {
            state.useCookies = false;
            Cookies.remove("name");
            Cookies.remove("email");
            Cookies.remove("useCookies");
        },
        loadFormFromCookies: (state) => {
            if (state.useCookies) {
                state.name = getDecryptedCookie("name") ?? state.name;
                state.email = getDecryptedCookie("email") ?? state.email;
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
    cancelCookies,
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
