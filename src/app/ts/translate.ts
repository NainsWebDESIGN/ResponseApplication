/** 取得語言包錯誤時彈出的語系包 */
export const ErrorTranslate = {
    'zh-tw': {
        langError: "轉換語言失敗，請給予正確的語系包名稱做轉換!"
    },
    'en-us': {
        langError: "The language conversion failed, please give the correct language package name to do the conversion!"
    }
}
export const Localhost: boolean = (location.href.substr(0, 21) !== "http://localhost:1491");
/** 所有語系 */
export const Language = [
    {
        lang: '中文',
        value: 'zh-tw'
    },
    {
        lang: '英文',
        value: 'en-us'
    }
]
export const dateArr = [
    "M/d/yy, h:mm a",
    "MMM d, y, h:mm:ss a",
    "MMMM d, y, h:mm:ss a z'",
    "EEEE, MMMM d, y, h:mm:ss a zzzz",
    "M/d/yy",
    "MMM d, y",
    "MMMM d, y",
    "EEEE, MMMM d, y",
    "h:mm a",
    "h:mm:ss a",
    "h:mm:ss a z",
    "h:mm:ss a zzzz"
]
export const dateProperty = [
    {
        type: "時代",
        value: ["G", "GG", "GGG", "GGGG", "GGGGG"]
    },
    {
        type: "年",
        value: ["y", "yy", "yyy", "yyyy"]
    },
    {
        type: "週數年",
        value: ["Y", "YY", "YYY", "YYYY"]
    },
    {
        type: "月",
        value: ["M", "MM", "MMM", "MMMM", "MMMMM"]
    },
    {
        type: "每月獨立",
        value: ["L", "LL", "LLL", "LLLL", "LLLLL"]
    },
    {
        type: "一年中的一周",
        value: ["w", "ww"]
    },
    {
        type: "一個月中的一周",
        value: ["W"]
    },
    {
        type: "每月的第幾天",
        value: ["d", "dd"]
    },
    {
        type: "工作日",
        value: ["E", "EE", "EEE", "EEEE", "EEEEE", "EEEEEE"]
    },
    {
        type: "工作日獨立",
        value: ["c", "cc", "ccc", "cccc", "ccccc", "cccccc"]
    },
    {
        type: "時期",
        value: ["a", "aa", "aaa", "aaaa", "aaaaa"]
    },
    // {
    //     type: "時期*",
    //     value: ["B", "BB", "BBB", "BBBB", "BBBBB"]
    // },
    // {
    //     type: "期間獨立*",
    //     value: ["b", "bb", "bbb", "bbbb", "bbbbb"]
    // },
    {
        type: "1-12 小時",
        value: ["h", "hh"]
    },
    {
        type: "0-23 小時",
        value: ["H", "HH"]
    },
    {
        type: "分鐘",
        value: ["m", "mm"]
    },
    {
        type: "第二",
        value: ["s", "ss"]
    },
    {
        type: "小數秒",
        value: ["S", "SS", "SSS"]
    },
    {
        type: "區",
        value: ["z", "zz", "zzz", "zzzz", "Z", "ZZ", "ZZZ", "ZZZZ", "ZZZZZ", "O", "OO", "OOO", "OOOO"]
    }
]