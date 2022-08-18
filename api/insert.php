<?php
// CORS headers configuration.
if (isset($_SERVER["HTTP_ORIGIN"])) {
    header("Access-Control-Allow-Origin: {$_SERVER["HTTP_ORIGIN"]}");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Max-Age: 86400");
    header("Access-Control-Allow-Headers: Content-Type");
}
include "product.php";

class Insert extends Product
{
    public function insertProduct($db)
    {
        // Reading the data received in the request body.
        $data = json_decode(file_get_contents("php://input"));

        $sku = $data->sku;
        $name = $data->name;
        $price = $data->price;
        $size = $data->size;
        $height = $data->height;
        $width = $data->width;
        $length = $data->length;
        $weight = $data->weight;

        $sql = "INSERT INTO $db(
            sku,
            name,
            price,
            size,
            height,
            width,
            length,
            weight
        )
        values('$sku','$name','$price','$size','$height','$width','$length','$weight')";
        $result = $this->connect()->query($sql);
    }
}
// Making an Insert class instance.
$insert = new Insert();

// Calling the insertProduct method from class Insert
$insert->insertProduct("products");

?>
