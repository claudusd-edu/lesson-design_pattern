<?php

class President {

  private static $instance;

  private function __construct()
  {

  }

  public static function getInstance(): President
  {
    if (!self::$instance) {
      self::$instance = new self();
    }

    return self::$instance;
  }
}

$president1 = President::getInstance();
$president2 = President::getInstance();

$president1 === $president2;
