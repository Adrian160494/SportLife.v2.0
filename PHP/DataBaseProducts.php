<?php

class DataBaseProducts{

    public $host, $user, $password, $db_name, $db_connection;

    function __construct($host,$user,$password,$db_name)
    {
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
        $this->db_name = $db_name;
        $this->db_connection = new mysqli($this->host,$this->user,$this->password,$this->db_name);
    }

    function getProtein(){
        $sql = "SELECT * FROM protein";
        $proteins =array();
        $result = $this->db_connection->query($sql);
        while ($row = $result->fetch_assoc()){
            array_push($proteins,$row);
        }
        return $proteins;
    }
    function getCarbon(){
        $sql2 = "SELECT * FROM carbon";
        $carbon = array();
        $result = $this->db_connection->query($sql2);
        while ($row = $result->fetch_assoc()){
            array_push($carbon,$row);
        }
        return $carbon;
    }
    function getFat(){
        $sql3 = "SELECT * FROM fat";
        $fat = array();
        $result = $this->db_connection->query($sql3);
        while ($row = $result->fetch_assoc()){
           array_push($fat,$row);
        }
        return $fat;
    }
}

?>