import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //未完了リストにタスクを追加
  createImcompleteTodo(inputText);
};

// 渡された引数を下に未完了のTODOを作成する関数
const createImcompleteTodo = (todo) => {
  // li要素生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  // button (完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // TODOの内容を取得し、未完了リストに追加
      const todoText = backButton.previousElementSibling.innerText;
      createImcompleteTodo(todoText);
      backButton.closest("li").remove();
    });

    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li"); // 一番近いli親タグ
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //階層構造を作る
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストにタスクを追加
document.getElementById("add-button").addEventListener("click", onClickAdd);
