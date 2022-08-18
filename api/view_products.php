<?php
// CORS headers configuration.
if (isset($_SERVER['HTTP_ORIGIN']))
{
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Max-Age: 86400');
    header('Access-Control-Allow-Headers: Content-Type');
}

include ('product.php');

class ViewProduct extends Product
{

    public function ViewProducts()
    {
        $datas = $this->getProducts();

        $output = "";
        if ($datas)
        {
            foreach ($datas as $data)
            {
                if ($output != "")
                {
                    $output .= ",";
                }
                // Formatting the recieved data to be in JSON form.
                $output .= '{"sku":"' . $data["sku"] . '",';
                $output .= '"name":"' . $data["name"] . '",';
                $output .= '"price":"' . $data["price"] . '",';
                $output .= '"size":"' . $data["size"] . '",';
                $output .= '"height":"' . $data["height"] . '",';
                $output .= '"width":"' . $data["width"] . '",';
                $output .= '"length":"' . $data["length"] . '",';
                $output .= '"weight":"' . $data["weight"] . '"}';
            }
        }
        $output = '{"records":[' . $output . ']}';
        echo $output;
    }
}
// Making an instance of the ViewProdut class.
$view = new ViewProduct();

// Calling the ViewProducts method from the ViewProduct class.
$view->ViewProducts();

