// Todo コンポーネントを作成する
// リストに表示単体を作成 -> cardComponent 作成 -> リストコンポーネント作成 -> リストを表示する

import React from "react";
import List from "@/components/step2/list";

const sample_cards = ["task1", "task2", "task3"];

export default function Todo() {
    return (
        <>
            <List cards={sample_cards} />
        </>
    );
}
