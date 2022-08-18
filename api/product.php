<?php
include ('db_config.php');

class Product extends DBHost
{
  // Method to fetch data from the database.
    protected function getProducts()
    {
        $sql = "SELECT * FROM products";
        $result = $this->connect()
            ->query($sql);
        $numRows = $result->num_rows;
        if ($numRows > 0)
        {
            while ($row = $result->fetch_assoc())
            {
                $data[] = $row;
            }
            return $data;
        }
    }
}

