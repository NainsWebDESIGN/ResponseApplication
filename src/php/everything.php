<?php
ini_set("display_errors", "on");
error_reporting(E_ALL & ~E_ERROR);
header('Content-Type: application/json; charset=UTF-8'); //設定資料類型為 json，編碼 utf-8

$data = array();
$getWay = $_GET['getWay'];

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $body = $_POST['body'];
    switch ($getWay) {
        case 123:
            $data = "This is 123 getWay php And body is " . $body;
            break;
        case 456:
            $data = "This is 456 getWay php And body is " . $body;
            break;
        case 789:
            $data = "This is 789 getWay php And body is " . $body;
            break;
        default:
            $data = "getWay Error";
            break;
    }

    echo json_encode($data);
} else {
    //回傳 errorMsg json 資料
    $data = array('ret' => '請求無效，只允許 POST 方式訪問！');
    echo json_encode($data);
}
