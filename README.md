# Room Allocation

## 專案執行說明
1. 在專案的根目錄下輸入 ```npm install ``` 。（環境需求 node.js）
2. 安裝完成後再輸入 ```npm run dev``` 。

## 專案功能說明
### CustomInputNumber
1. 點擊加號使 value 等於 max 時繼續點擊, onChange 將無後續觸發。
2. 點擊減號使 value 等於 min 時繼續點擊, onChange 將無後續觸發。
3. onBlur 將回傳為正確 event.target。
4. onChange 將回傳為正確 event.target。
5. disabled, min, max, step 設定後元件將有相對應的行為。
```
const App = () => {
  const [value, setValue] = React.useState(0);
  return (
      <CustomInputNumber
        value={value}
        max={10}
        min={-10}
        step={3}
        onChange={e => setValue(e.target.value)}
      />
  )
}
```
### RoomAllocation
1. 可調整 guest 跟 room 的數量。
2. 可調整房間分配人數並顯示尚未分配人數。
3. onChange 將收到 result 回傳。
```
<RoomAllocation
    guest={10}
    room={3}
    onChange={result => console.log(result)}
/>
```

