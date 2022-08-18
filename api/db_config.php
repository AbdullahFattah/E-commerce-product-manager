<?php
class DBHost
{
    private $host;
    private $username;
    private $password;
    private $dbName;

    protected function connect()
    {
        $this->host = "*****";
        $this->username = "*****";
        $this->password = "*****";
        $this->dbName = "*****";

        $conn = new mysqli(
            $this->host,
            $this->username,
            $this->password,
            $this->dbName
        );
        return $conn;
    }
}
