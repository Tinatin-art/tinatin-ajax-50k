<?php

$_POST = json_decode(file_get_contents('php://input'), true);

// print_r($_POST);
// echo $_POST['query'];
if ($_POST['query'] == "Рубашка") {

  $result = array(
              array(
                "text" => "Рубашка",
                "href" => "https://kg.wildberries.ru/catalog/5315031/otzyvy"
              ),
              array(
                "text" => "Рубашка черная",
                "href" => "https://kg.wildberries.ru/catalog/26431988/detail.aspx?targetUrl=XS"
              ),
              array(
                "text" => "Рубашка фиолетовая",
                "href" => "https://kg.wildberries.ru/catalog/26915473/detail.aspx?targetUrl=XS"
              )
  );


} else if ($_POST['query'] == "Кофта"){

  $result = array(
              array(
                "text" => "Кофта",
                "href" => "https://kg.wildberries.ru/catalog/21683329/detail.aspx?targetUrl=XS"
              ),
              array(
                "text" => "Кофта черная",
                "href" => "https://kg.wildberries.ru/catalog/26367606/detail.aspx?targetUrl=XS"
              ),
              array(
                "text" => "Кофта зеленая",
                "href" => "https://kg.wildberries.ru/catalog/27897985/detail.aspx?targetUrl=XS"
              )
  );
}

echo json_encode($result);

?>