<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$sql = "SELECT id,firstname,lastname,email FROM MyGuests";
$result = $conn->query($sql);
var_dump($result->fetch_assoc());

if($result->num_rows > 0){ //有多少行
  // 输出每行数据
  while($row = $result->fetch_assoc()){
    echo "<br> id:" . $row["id"] ." - Name: " . $row["firstname"] . " - LastName: " . $row["lastname"] . " - Email: " . $row["email"];
  }
}else{
  echo "0个结果";
}

$conn->close();

 ?>