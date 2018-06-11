<?php

class President {

  private static $instance;

  private function __construct()
  {

  }

  public static function getInstance(): Founder
  {
    if (!self::$instance) {
      self::$instance = new self();
    }

    return self::$instance;
  }
}

$founder1 = President::getInstance();
$founder2 = President::getInstance();

$founder1 === $founder2;
