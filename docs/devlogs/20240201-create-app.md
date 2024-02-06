# ホームページ作成

- ホームページをもう少し便利にオシャレにしたいので，試しに React で作ってみる

## 手順

### Create App

- React Router でルーティングをする予定なので，[公式チュートリアル](https://reactrouter.com/en/main/start/tutorial)に従ってアプリを生成

  ```powershell
  npm create vite@latest name-of-your-project -- --template react
  # follow prompts
  cd <your new project directory>
  npm install react-router-dom localforage match-sorter sort-by
  npm run dev
  ```

- routes.jsx を作成し，ルーティングしてみた → 成功
- components なども作成して，基礎が完成

### Material UI

- UI には，Material UI を使ってみる．最近，チャートが描けるようになったみたい．
- まずは，モジュールインストール

  ```powershell
  npm install @mui/material @emotion/react @emotion/styled  @mui/icons-material
  ```

- Roboto フォントがデフォルトらしいので，一応入れておく

  ```powershell
  npm install @fontsource/roboto
  ```
