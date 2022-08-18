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

class Delete extends Product
{
    public function deleteProduct($db)
    {
        $data = json_decode(file_get_contents("php://input"));

        $sql = "DELETE FROM $db WHERE sku ='" . $data->sku . "'";

        $result = $this->connect()->query($sql);
    }
}

$delete = new Delete();
$delete->deleteProduct("products");
